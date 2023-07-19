# Criando os arquivos para o novo servidor web com Hugo e NGINX
Para este novo exemplo, vamos criar um servidor web novamente, porém haverá uma etapa de pré-processamento. Para esta etapa, vamos utilizar uma ferramenta chamada **Hugo**, que nos permite criar páginas web a partir de templates.

*Não se preocupe, você não vai precisar instalar nada extra em seu computador, pois tudo será feito durante o comando docker build*😲.

O objetivo da ferramenta **Hugo** é facilitar a criação de páginas, de modo que as pessoas possam focar mais em escrever o conteúdo do que se preocupar com **tags HTML** das páginas.

Vamos começar criando três arquivos, sendo eles:

- **config.toml**: será um arquivo de configuração para o Hugo;
- **index.html**: será o template HTML que o Hugo utilizará para gerar páginas;
- **_index.md**: será o arquivo com o conteúdo de fato.

▶️ Para o arquivo **config.toml**```**, use o seguinte código-fonte:

```name = "Meu site em Hugo"```

▶️ Para o arquivo **index.html**, use o seguinte código-fonte:

```
<!DOCTYPE html>**
   <html>
      <head>
      <title>{{ .Title }}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>{{ .Title }}</h1>
      {{ .Content }}
   </body>
</html>
```
▶️ Para o arquivo **_index.md**, use o seguinte código-fonte:

```
---
title: Meu site em Hugo
---

Meu conteúdo super interessante!
```
▶️ Por fim, para o nosso arquivo **Dockerfile**, use o seguinte código-fonte:

```

FROM nginx:1.21.3-alpine AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc
RUN mv /site/public/* /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]

```
*Você já deve ter percebido algumas palavras reservadas novas neste Dockerfile, não é mesmo?* 🧐

Vamos falar sobre cada uma delas:

- ```FROM nginx:1.21.3-alpine AS primeiro-estagio```
  - O ```FROM``` já é nosso velho conhecido, mas agora temos um prefixo: ```AS```;
  - Considere que durante o build podemos estar em estágios diferentes, e neste caso nós acabamos de nomear o estágio atual para ```primeiro-estagio```;
  - Dar nome aos estágios será útil para nós mais adiante, porém neste caso não tem efeito algum.
- ```WORKDIR /site```
  - A palavra reservada ```WORKDIR``` indica para o Docker qual é a pasta atual de trabalho dentro da imagem;
  - Ou seja, nas próximas ações deste build e também quando essa imagem for executada como um container, estaremos no caminho especificado pelo ```WORKDIR```.
- Três linhas com ```COPY```
  - Aqui copiamos os três arquivos no formato de pastas que o Hugo espera que estes arquivos estejam;
  - Não temos nenhuma novidade no uso do ```COPY``` aqui.
Três linhas com ```RUN```
  - A palavra reservada ```RUN``` indica que o comando à frente deve ser executado imediatamente, durante o processo de build. Logo:
    - A primeira linha com ```RUN``` instala o ferramenta Hugo na nossa imagem Docker;
    - A segunda linha executa o comando **hugo –minify –gc** para gerar as páginas finais em HTML, baseados nos arquivos de templates (index.html) e conteúdos **(_index.md)**;
    - A terceira linha executa o comando mv para mover as páginas resultantes do Hugo para o caminho onde o nginx espera que tenha páginas HTML para serem servidas.
- ```ENTRYPOINT ["nginx", "-g", "daemon off;"]```
  - A palavra reservada ```ENTRYPOINT``` indica para o Docker qual comando deve ser executado ao iniciar o container.

⚠️Importante: você pode ter percebido que a função do ```ENTRYPOINT``` parece ser a mesma que o ```CMD``` que estávamos usando anteriormente 🤔. Essa dúvida é comum e em breve vamos explicar a diferença de uso entre a função do ```ENTRYPOINT``` e o ```CMD```.

# Construindo a nossa nova imagem
Com os arquivos criados acima, vamos executar o comando ```docker build -t site-hugo .```. Veja a saída dos comandos a seguir:

```
pessoa@trybe:~$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
pessoa@trybe:~$ docker build -t site-hugo .
Sending build context to Docker daemon   5.12kB
[...]
Successfully tagged site-hugo:latest
pessoa@trybe:~$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
site-hugo    latest    de745ce033ff   7 seconds ago   78.7MB
```
Primeiro, validamos que não havia nenhuma imagem Docker em nosso computador. Depois disso, executamos o comando de construção da imagem e vimos como resultado **duas** imagens:

- A imagem **nginx**, que usamos como imagem base;
- A nossa imagem **site-hugo**.

> Perceba a diferença entre os tamanhos das imagens, dado que na imagem site-hugo nós precisamos instalar a ferramenta Hugo, fazendo a imagem ocupar mais espaço de armazenamento.

# Executando um novo container com nossa imagem
Agora, vamos executar um novo container utilizando nossa imagem recém criada. Lembre-se que vamos utilizar a flag ```-p``` para mapear uma porta entre nosso computador e a porta do container. Para isso, utilize o seguinte comando:

```
docker run -p 1234:80 -d --name meu-container site-hugo
```

> Agora, abra seu navegador web e acesse o endereço http://localhost:1234, verifique se consegue visualizar a página HTML:

# Construção em múltiplos estágios
Agora chegou a hora do seu Dockerfile brilhar! 🌟

Vamos aprender um dos conceitos mais importantes na hora de construirmos nossas imagens Docker: **Construção em múltiplos estágios**. Mas, o que é isso? 🤔

Considere o Dockerfile abaixo, que é o mesmo utilizado no exemplo anterior.

- Na linha 8, nós instalamos a ferramenta Hugo, que foi útil apenas durante a execução do comando ```RUN hugo --minify --gc```, na linha 9.
- Após isso, a gente não precisou mais dessa ferramenta, porém ela ainda ficou instalada em nossa imagem Docker, ocupando espaço.
```
FROM nginx:1.21.3-alpine AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc
RUN mv /site/public/* /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

▶️ Nosso objetivo agora é continuar utilizando o ```docker build``` para fazer tudo o que for necessário para construir uma imagem Docker funcional, ou seja, não queremos instalar nada extra em nosso computador. Precisamos encontrar uma maneira de:

1. Instalar a ferramenta Hugo;
2. Executar o comando ```hugo --minify --gc```;
3. Obter as páginas HTML resultantes;
4. Criar uma nova imagem limpa baseada no nginx;
5. Copiar apenas as páginas HTML geradas pelo Hugo para esta nova imagem;
> Após tudo isso, vamos ter uma imagem Docker apenas com o nginx e as páginas geradas pelo Hugo.

**Será que isso é possível**? A resposta é **sim**! 🤩

>🥇 Podemos criar imagens intermediárias com apenas um arquivo Dockerfile! Imagine agora o poder que nós temos em mãos!

Veja a seguir o mesmo exemplo de Dockerfile que utilizamos anteriormente, porém adaptado para fazer a construção em múltiplos estágios, e assim, usar imagens intermediárias:

```
# Primeiro Estágio
FROM alpine:3.14 AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21.3-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

Você já deve ter percebido que este Dockerfile é muito parecido com o anterior, mas existem dois detalhes importantes:

- Temos duas linhas de ```FROM```:

  - Cada linha de ```FROM``` significa o início de um **novo estágio**;
  - Você pode considerar cada estágio como uma imagem Docker intermediária;
  - A última referência de ```FROM``` no Dockerfile sempre será a **imagem final**.
- No segundo estágio, a linha ```COPY``` possui uma flag extra ```--from=primeiro-estagio```:
  - Esse é o segredo principal de construção de múltiplos estágios;
  - O ```COPY``` possui a capacidade de copiar arquivos **entre os estágios**;
  - A flag ```--from``` indica que devemos copiar o seguinte arquivo ou pasta de um estágio para o estágio atual;
  - Neste caso acima, estamos copiando as páginas HTML resultantes do **Hugo** diretamente para uma imagem Docker limpa de **nginx**!
  
No primeiro estágio, não precisamos do nginx, pois vamos apenas executar a ferramenta Hugo. Logo, a imagem base escolhida foi a ```alpine:3.14```. Ao copiar os arquivos necessários e executar o comando, conseguimos nossas páginas HTML prontas e presentes no caminho ```/site/public/```.

Após isso, iniciamos um novo estágio, agora com a imagem base ```nginx:1.21.3-alpine```. Nesse caso, as únicas ações foram copiar as páginas HTML prontas do estágio anterior e deixá-las no caminho que o nginx espera que estejam presentes: ```/usr/share/nginx/html```.

Vamos construir essa nova imagem Docker e compará-la com a imagem anterior? 🧐

*Veja a saída dos comandos abaixo:*

```
pessoa@trybe:~$ docker build -t multi-stage-site-hugo .
Sending build context to Docker daemon  6.144kB
[......]
Successfully tagged multi-stage-site-hugo:latest
pessoa@trybe:~$ docker images
REPOSITORY              TAG           IMAGE ID       CREATED          SIZE
<none>                  <none>        49f9fac0ad9a   3 seconds ago    65.7MB
multi-stage-site-hugo   latest        c5f6e09557ff   3 seconds ago    23.4MB
site-hugo               latest        51dc918e901d   41 minutes ago   78.8MB
nginx                   1.21.3-alpine   51696c87e77e   3 weeks ago      23.4MB
alpine                  3.14          e04c818066af   3 weeks ago      5.59MB
pessoa@trybe:~$
```
> Veja a diferença de tamanho das imagens! A imagem site-hugo, de apenas um estágio, possui 78.8MB de tamanho, enquanto a nossa nova imagem usando múltiplos estágios, multi-stage-site-hugo, possui apenas 23.4MB.

E aí, gostou dessa funcionalidade do Docker? Agora nossas imagens Docker estão cada vez mais robustas 🐋.
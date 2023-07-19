# Criando nosso primeiro servidor Web
Que tal começarmos a criar imagens Docker mais robustas?

Chegou o momento de dockerizar um servidor web! Vamos criar alguns arquivos HTML e entregá-los através de um servidor bem conhecido, o Apache. Vamos também utilizar uma imagem Docker no Docker Hub, que possui todas as dependências e o programa httpd já instalados 😎.
# Limpando tudo antes de começar!
Use o comando abaixo para remover todos os containers e imagens Docker que estejam em seu computador, para que assim você possa acompanhar os exemplos:

```
docker system prune -af
```
# Construção da imagem
Vamos começar a construir nossa imagem com um arquivo chamado ```index.html```, que será a página inicial do nosso servidor web. Copie o conteúdo abaixo e crie este arquivo no seu computador:

```
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito legal!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker.</h1>
      <p>Esta página estava dentro de uma imagem, que agora foi executada como um container.</p>
   </body>
</html>
```
Pronto! Com este arquivo HTML finalizado, podemos começar a escrever nosso Dockerfile e entender duas novas palavras reservadas: o ```COPY``` e o ```EXPOSE```! Veja o arquivo completo abaixo:

```
FROM httpd:2.4.54
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]
```
Vamos entender linha por linha o que este Dockerfile vai fazer:

- ```FROM httpd:2.4.54```
- Vamos começar a construção desta imagem se baseando na imagem já existente, chamada ```httpd```, com a tag ```2.4.54```
- ```COPY index.html /usr/local/apache2/htdocs/```
- Temos uma nova palavra reservada: ```COPY```
- Esta linha vai copiar um arquivo no computador local e colocá-lo dentro da imagem, no caminho especificado à frente.
- Ou seja, a linha vai copiar o arquivo ```index.html```, que está na pasta atual da execução do comando ```docker build```, e vai copiá-lo para o caminho ```/usr/local/apache2/htdocs/```, dentro da imagem!
- Este caminho específico é onde o httpd vai procurar por arquivos HTML a serem servidos.
Alternativamente pode-se utilizar o comando ```ADD index.html /usr/local/apache2/htdocs```. Nesse caso, não mudaria nada, mas o comando ```ADD``` tem duas funcionalidades interessantes, tais como:
  - Fazer o download do conteúdo de uma URL ```\<src> na pasta de destino \<dest>```
  - Descompactar automaticamente arquivos compactados de formatos reconhecidos (.tar, .gzip, .bzip2, etc)
- ```EXPOSE 80```
- Temos uma nova palavra reservada: ```EXPOSE```
- Esta linha indica que a imagem poderá receber conexões pelo número da porta que for informado;
- Neste caso, indica que a imagem poderá receber conexões na porta ```80```, que é a porta padrão utilizada pelo ```httpd```.
```CMD ["httpd-foreground"]```
- Estamos especificando que o programa httpd-foreground seja executado ao iniciar essa imagem como um container.
- Este programa já veio junto com a imagem base, portanto não precisamos nos preocupar.

Vamos construir nossa imagem e verificar se deu tudo certo?
- Vamos chamar esta nova imagem Docker de meu-servidor-web. Para isso, siga os comandos abaixo:
```
pessoa@trybe:~$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
pessoa@trybe:~$ docker build -t meu-servidor-web .
Sending build context to Docker daemon  4.608kB
Step 1/4 : FROM httpd:2.4.54
2.4: Pulling from library/httpd
1fe172e4850f: Pull complete
e2fa1fe9b1ec: Pull complete
60dd7398e74e: Pull complete
ea2ca81c6d4c: Pull complete
f646c69a26ec: Pull complete
Digest: sha256:e02a2ef36151905c790efb0a8472f690010150f062639bd8c0760e7b1e884c07
Status: Downloaded newer image for httpd:2.4.54
 ---> c30a46771695
Step 2/4 : COPY index.html /usr/local/apache2/htdocs/
 ---> 7d0383790929
Step 3/4 : EXPOSE 80
 ---> Running in b1ff2675de2c
Removing intermediate container b1ff2675de2c
 ---> 6b36d46af133
Step 4/4 : CMD ["httpd-foreground"]
 ---> Running in 4ccc22554fbf
Removing intermediate container 4ccc22554fbf
 ---> 5c1536911684
Successfully built 5c1536911684
Successfully tagged meu-servidor-web:latest
pessoa@trybe:~$
```
Vamos acompanhar passo a passo do que aconteceu acima:
- Nós executamos o comando ```docker images``` para mostrar que não temos nenhuma imagem Docker atualmente em nosso computador;
- Executamos o comando ```docker build -t meu-servidor-web```.
  - Lembrando que o comando precisa ser executado na mesma pasta onde o arquivo ```Dockerfile``` e o arquivo ```index.html``` estão presentes!
  - Como não tínhamos a imagem ```httpd:2.4.54``` localmente, o Docker baixou esta imagem do Docker Hub.
- Após a execução de todos os Steps da construção da imagem, o Docker imprime na tela: ```Successfully tagged meu-servidor-web:latest```

Agora, podemos executar nossa imagem como um novo container e acessar este servidor web através do nosso navegador! Vamos testar?

## Executando um novo container com nossa imagem
Vamos executar um servidor web em nosso computador a partir da nossa nova imagem Docker. Ao subir essa imagem como um novo container, poderemos acessar este servidor através do nosso navegador!

Vamos começar?

```
pessoa@trybe:~$ docker images
REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
meu-servidor-web   latest    891789cf6dd5   12 minutes ago   139MB
httpd              2.4.54    6c064f9f5f14   2 weeks ago      139MB
pessoa@trybe:~$ docker run -d -p 1234:80 --name meu-container meu-servidor-web
e93c74aa767dff092caa42413d8982c4fd823376233812a28c4b76dbdf4f4b6f
pessoa@trybe:~$
```
Agora acessamos o endereço ```http://localhost:1234``` em nosso navegador web e vemos o seguinte:
> abra o localhost

Deu certo! Conseguimos acessar o servidor através do nosso navegador web! Provavelmente você pode ter percebido os seguintes pontos neste exemplo:
- Ao usar o comando ```docker run```, uma nova flag foi utilizada: ```-p 1234:80``` 🤔
- Ao acessar a página no navegador não utilizamos a porta 80 como exposto no Dockerfile, e sim a porta 1234 🤔, mas por quê?

Você se lembra que no começo do conteúdo explicamos que um container Docker é um processo totalmente isolado do computador principal? Logo, mesmo declarando ```EXPOSE``` no arquivo Dockerfile, ainda não é o suficiente para expor a porta do container para o nosso computador.

É pra isso que serve a flag ```-p``` que utilizamos durante o ```docker run```. Com o uso dessa flag, estamos solicitando ao Docker que abra uma exceção neste isolamento, fazendo um mapeamento da porta 1234 do nosso computador para a porta 80, dentro da rede do container.

Logo, ao fazer uma conexão na porta 1234 do nosso computador, estamos na verdade fazendo uma conexão na porta 80 dentro do container.

> 📝 Anote aí: a palavra principal sobre o Docker é isolamento!

Por fim, execute o comando abaixo para remover o container que acabamos de criar:

```docker rm -f meu-container```
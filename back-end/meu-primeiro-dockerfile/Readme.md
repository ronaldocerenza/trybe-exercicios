# Passo 1 - Criando o arquivo Dockerfile
Crie um diretório para usarmos como base e entre nele:

```
mkdir meu-primeiro-dockerfile
cd meu-primeiro-dockerfile
```

Agora vamos criar uma imagem Docker que, quando executada como um container, vai imprimir na tela a seguinte mensagem: Eu sou uma pessoa estudante da Trybe!, e terminar sua execução.

Para isso, vamos criar um arquivo Dockerfile na pasta que estamos programando com o conteúdo abaixo para a construção dessa imagem.

```
touch Dockerfile
```
> Atenção: O arquivo Dockerfile deve ser criado na raiz do seu projeto e não tem nenhuma extensão. Ele ficará assim no seu VS Code:

```
.
└── meu-primeiro-dockerfile/
    └── Dockerfile
```
Dentro do arquivo Dockerfile, adicione o conteúdo a seguir:

```
# meu-primeiro-dockerfile/Dockerfile
FROM alpine:3.14
CMD ["echo", "Eu sou uma pessoa estudante da Trybe!"]
```
Você deve estar se perguntando: somente essas duas linhas já são suficientes para criarmos nossa primeira imagem Docker? 🤔

A resposta é sim! Vamos entender o significado de cada linha acima:

- ```FROM alpine:3.14```

  - Essa linha não parece ser tão estranha pra gente, pois já utilizamos a imagem ```alpine:3.14``` anteriormente;
  - Logo, a sua explicação é bem nítida: a palavra reservada ```FROM``` significa que vamos começar a construção desta imagem a partir da imagem Docker já existente!
- ```CMD ["echo", "Eu sou uma pessoa estudante da Trybe!"]```

  - A palavra reservada ```CMD``` mostra qual comando deve ser utilizado ao iniciar a imagem como um container;
  - Neste caso, o ```CMD``` aceita uma lista de parâmetros (como o exemplo acima) ou apenas os comandos, sem declarar como lista, por exemplo:
  - ```CMD echo "olá mundo"```

🥳 Eba! Acabamos de criar nosso primeiro arquivo Dockerfile! Mas e agora, como vamos construir de fato nossa primeira imagem Docker?

#Passo 2 - Construindo a imagem Docker
Para isso, vamos utilizar o comando docker build ```<flags> -t <nome-da-imagem> <contexto>```!

O comando espera:

- Uma flag -t, que indicará qual será o nome da imagem, e também a tag, se utilizar o formato <nome>:<tag>;
- Um contexto, ou seja, em qual caminho de pasta o Docker deve se basear para processar o arquivo Dockerfile.
  - Normalmente utilizamos apenas . (ponto final), que indica a pasta atual.
No terminal, rode os comandos abaixo dentro da pasta meu-primeiro-dockerfile para construir a imagem:

```
docker images
docker build -t primeira-imagem .
docker images
```
A saída dos comandos será similar a seguir:

```
$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

$ docker build -t primeira-imagem .
Sending build context to Docker daemon  3.584kB
Step 1/2 : FROM alpine:3.14
3.14: Pulling from library/alpine
8663204ce13b: Pull complete
Digest: sha256:06b5d462c92fc39303e6363c65e074559f8d6b1363250027ed5053557e3398c5
Status: Downloaded newer image for alpine:3.14
 ---> e04c818066af
Step 2/2 : CMD ["echo", "Eu sou pessoa estudante da Trybe!"]
 ---> Running in e199bcd809d5
Removing intermediate container e199bcd809d5
 ---> 222b0b148f0b
Successfully built 222b0b148f0b
Successfully tagged primeira-imagem:latest

$ docker images
REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
primeira-imagem   latest    222b0b148f0b   3 seconds ago   5.59MB
alpine            3.14      e04c818066af   3 weeks ago     5.59MB
```
Vamos acompanhar passo a passo do que aconteceu acima:

1. Nós executamos o comando ```docker images``` para mostrar que não temos nenhuma imagem Docker atualmente em nosso computador;
  - Se você tiver algumas imagens nessa lista, é importante removê-las para seguir com os exemplos 😄
2. Executamos o comando ```docker build -t primeira-imagem```.
  - Step 1/2: Como o Docker não possui a imagem ```alpine:3.14``` localmente, ele executou o mesmo processo do ```docker pull``` de maneira interna, obtendo a imagem do Docker Hub;
  - Step 2/2: O Docker configura que, ao executar essa imagem como container, o comando a ser executado é o ```echo Eu sou pessoa estudante da Trybe!```;
  - Successfully tagged primeira-imagem:latest: A imagem recebe a tag ```latest``` por padrão caso a gente não declare uma tag específica na flag ```-t```.
  - Pronto! O Docker já construiu a nossa primeira imagem!
3. Confirmamos que a imagem foi construída corretamente executando o comando docker images novamente;
  - E podemos ver que agora temos duas imagens em nosso computador:
    - A imagem ```alpine:3.14``` é a que o Docker obteve do Docker Hub, precisamos dela como base na nossa imagem;
    - A imagem ```primeira-imagem:latest```, que é a imagem Docker que acabamos de criar!

# Executando um novo container com nossa imagem
Vamos executar o comando ```docker run --rm primeira-imagem``` e verificar se realmente a mensagem que colocamos é impressa na tela.
Veja a saída abaixo:

```
pessoa@trybe:~$ docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
primeira-imagem   latest    222b0b148f0b   15 minutes ago   5.59MB
alpine            3.14      e04c818066af   3 weeks ago      5.59MB
pessoa@trybe:~$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
pessoa@trybe:~$ docker run --rm primeira-imagem
Eu sou pessoa estudante da Trybe!
pessoa@trybe:~$
```
Olha que legal! Vimos que nossa imagem está presente em nosso computador utilizando o comando ```docker images```. Depois validamos que não tínhamos nenhum container em execução ou parado utilizando o comando ```docker ps -a``` e finalmente utilizamos o comando ```docker run``` para executar nossa imagem como um container!

Vamos conhecer mais palavras reservadas do Dockerfile e criar imagens Docker mais complexas? Agora o céu é o limite pra gente com o Docker! 🐋
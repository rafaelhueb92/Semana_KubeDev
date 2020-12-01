## Roda uma imagem de ubuntu como root - Modo interativo

docker container run -it ubuntu /bin/bash

## Lista todos os containers 

docker container ls -a

## Remove o container pelo ID 

docker container rm <CONTAINER ID>

## Parar e excluir todos os containers 

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

## Rodar NGINX liberando o cursor após a execução (modo daemon)
docker container run -d nginx

## Executar Curl do container
docker container exec -it <CONTAINER ID> /bin/bash

<p><i>-f para forçar o remover o container</i></p>

## Rodar o nginx como daemon fazendo bind com a porta 80
docker container run -d -p 8080:80 nginx

# API em NodeJs de temperaturas conteinizada


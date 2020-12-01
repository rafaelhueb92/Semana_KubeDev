## Roda uma imagem de ubuntu como root

docker container run -it ubuntu /bin/bash

## Lista todos os containers 

docker container ls -a

## Remove o container pelo ID 

docker container rm <CONTAINER ID>

## Parar e excluir todos os containers 

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

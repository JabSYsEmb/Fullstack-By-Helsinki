docker run -d --name mongodb -p 27017:27017 -v $PWD/config:/etc/mongo -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=root mongo

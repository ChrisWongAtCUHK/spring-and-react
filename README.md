# README
## Reference
- [Webapp with Create React App and Spring Boot](https://github.com/kantega/react-and-spring)
- [Deploying Spring Boot RestAPI using Docker, Maven, Heroku and accessing it using your custom domain name. Part 1 of 2](https://medium.com/@urbanswati/deploying-spring-boot-restapi-using-docker-maven-heroku-and-accessing-it-using-your-custom-aa04798c0112)

## Build ReactJS
In frontend/ folder
```
npm run build
```

## How to run
```
mvn clean install
java -jar target/spring-and-react-0.0.1-SNAPSHOT.jar
```

## Dev
```
mvn spring-boot:run
```
In frontend/ folder
```
npm run start
```

## Docker
```
docker build -t springbootapp.
docker run -p 8080:8080 -t springbootapp
```

## Heroku
application.properties
```
server.port=${PORT}
```
```
heroku container:login
heroku create 
heroku container:push web
heroku container:release web
```
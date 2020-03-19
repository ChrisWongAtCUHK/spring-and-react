# README
## Reference
- [Webapp with Create React App and Spring Boot](https://github.com/kantega/react-and-spring)
- [Deploying Spring Boot RestAPI using Docker, Maven, Heroku and accessing it using your custom domain name. Part 1 of 2](https://medium.com/@urbanswati/deploying-spring-boot-restapi-using-docker-maven-heroku-and-accessing-it-using-your-custom-aa04798c0112)

## Build
```
mvn clean install
ls target/spring-and-react-0.0.1-SNAPSHOT.jar
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

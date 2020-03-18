FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/spring-and-react-0.0.1-SNAPSHOT.jar spring-and-react-0.0.1-SNAPSHOT.jar
CMD ["java","-jar","/spring-and-react-0.0.1-SNAPSHOT.jar"]

# README
## Reference
https://github.com/kantega/react-and-spring

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

## H2 Database
http://localhost:8080/h2-console/
```
insert into book values(1, 'The Tartar Steppe');
insert into book values(2, 'Poem Strip');
insert into book values(3, 'Restless Nights: Selected Stories of Dino Buzzati');
SELECT * FROM BOOK ;
```
```
curl localhost:8080/api/books
```

## Test the api
```
curl localhost:8080/api/getAllCustomers
curl -X POST localhost:8080/api/addCustomer -d '{"customerName": "Foo", "email": "bar"}'
curl -X POST -H "Content-type: application/json" localhost:8080/api/addCustomer -d '{"customerName": "Foo", "email": "bar"}'
curl localhost:8080/api/getAllCustomers
curl -X PUT -H "Content-type: application/json" localhost:8080/api/addCustomer -d '{"id":1, "customerName": "Hello", "email": "bar"}'
curl -X DELETE -H "Content-type: application/json" localhost:8080/api/deleteCustomer -d '{"id":1}'
curl -X DELETE -H "Content-type: application/json" localhost:8080/api/deleteCustomer/1
```
# TodoAppAppliation
This is  an example of a Full Stack Application using java with Spring Boot 2 for the back-end, and angular 10  

This application had two components the Back-End and the Front-End.    

## Prerequisites and Technologies 
For the development environment I use:
* Intellij Idea, Windows 10 Home
* [Spring Initialzr](https://start.spring.io/) 
* H2 as databases
* Java 8, Spring Boot 2, Maven, Spring Core, Spring Data, Spring Security, Hibernate and JPA
* [JSON Web Tokens](https://jwt.io/)
* Angular 10 with TypeScript

### Architecture
![Alt text](img/High%20Level%20Architecture.png?raw=true "Solution")

A basic overview of the architecture
Basically are two components the front-end and the back-end, the back end are RestfullServices that are comsumed in the front-end.  
The application consists in a basic todo app with CRUD functionality, using angular, spring boot 2, using spring security with jwt for the autentication and using Hibernate with JPA in a H2 database.

#### Components
For the Back-End check the folder **todos-res-api** and for the Front-End check **frontend**, for more details.

A Todo Management Application  
Components:  

ng new todo  
ng g c welcome  
ng g c login  
ng g c error  
ng g c listTodos  
ng g c menu  
ng g s service/customAuthentication  
ng g c logout  
ng g s service/routeGuard  
ng g s service/data/welcomeData  
ng g s service/data/TodoData  
ng g c todo  
ng g s service/http/HttpInterceptAuth  

ng serve  
ng lint   || check validation  
ng build  
ng test || run unit tests for angula in karma and jasmin  
ng e2e  


Angular components  
HTML : .component.html  
Style: .component.css  
Code:  .component.ts  

Event  and Data Binding  
----  

Rest URL´S:  
/users/{username}/todos   get  
/users/{username/getTodoById/{id} get  
/users/{username}/todo/{id}  delete  
/users/{username}/updateTodoById/{id} put  
/users/{username}/createTodo post  

URL FOR JWT  
/basicAuth  get  
/authenticate post { username: user, password: password}   -> token value  
/refresh Header-Authorization:"Bearer JWT_TOKEN"    -> token  response  
http://localhost:8080/users/Brahian/getTodoById/1  


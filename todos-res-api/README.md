
# Todo REst API

This project was developed with Spring Boot 2 with Spring Data, Spring Core with jwt and spring security for the authentication.  

Rest URL´S:   
/users/{username}/todos   get  
/users/{username/getTodoById/{id} get  
/users/{username}/todo/{id}  delete  
/users/{username}/updateTodoById/{id} put  
/users/{username}/createTodo post  

URL FOR JWT  
/basicAuth  get  
/authenticate post { username: user, password: password}   ->  get the "token_value"  
/refresh Header-Authorization:"Bearer JWT_TOKEN"    ->  refresh the session  and get "token_response"  


You can test this demo with the account user: 21minutes, password: dummy, when you login in the Angular application, because the jwt is in memory we neeed to harcoded the user, and 
the password in the clase called "JwtInMemoryUserDetailsService",  in a future release I will store the token implementaion for the authentication in the database.

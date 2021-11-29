# LoremIpsum-Server API end points

User table

| Table | Method | Endpoint  | Data format to  be sent                                      | Received data                                        | Comments                                              |
| ----- | ------ | --------- | ------------------------------------------------------------ | ---------------------------------------------------- | ----------------------------------------------------- |
| User  | GET    | /user/:id | user_id                                                      | {user_id,username,  email,password,session}          | This will be adapted  to the email once login created |
| User  | POST   | /user     | {username,email,password} Session will be generated at the backend | {user_id,username,  email,password,session}          |                                                       |
| User  | PUT    | /user/:id | {email,password} to be updated - :id is the user_id to update | updated:  {user_id,username, email,password,session} |                                                       |
| User  | DELETE | /user     | user_id                                                      | N/A                                                  |                                                       |

Certificates table

| Table        | Method | Endpoint             | Data format to  be sent | Received data                    | Comments                                 |
| ------------ | ------ | -------------------- | ----------------------- | -------------------------------- | ---------------------------------------- |
| Certificates | GET    | /certificate/:userId | user_id                 | [{id,name,  description}]        | gets all certificates  of the given user |
| Certificates | POST   | /certificate         | {name, description}     | {id,  name, description}         |                                          |
| Certificates | PUT    | /certificate/:id     | {name, description}     | updated  {id, name, description} |                                          |
| Certificates | DELETE | /certificate/:id     | skill id                | N/A                              |                                          |

Skills table

| Table  | Method | Endpoint        | Data format to be  sent | Received data                    | Comments                           |
| ------ | ------ | --------------- | ----------------------- | -------------------------------- | ---------------------------------- |
| Skills | GET    | /skills/:userId | user_id                 | [{id,name,  description}]        | gets all skills of  the given user |
| Skills | POST   | /skills         | {name, description}     | {id,  name, description}         |                                    |
| Skills | PUT    | /skills/:id     | {name, description}     | updated  {id, name, description} |                                    |
| Skills | DELETE | /skills/:id     | skill id                | N/A                              |                                    |

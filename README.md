# task-manager-api

task-manger is an api made with **nodejs** which allow to Create user with (name,email,password,age,profile picture) and Read,Update,Delete user data and also log user out 
and logoutAll from separate devices,api sends email to the user email with welcome or cancelation messages when user created or deleted.
each user has the **authentication** to create tasks with (description and status of the task) and update,delete its own tasks also Read tasks with sorting by createdTime
and filtering with the completed tasks and apply limitations of the tasks number that should show.

all data is stored in a **MongoDB** product database.

This api is deployed to heroku [Heroku_URL](https://aboujaib-task-manager.herokuapp.com/).

const express = require('express');
const { PORT, JWT_KEY } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();
// const UserRepository = require('./repository/user-repository');

// const user_service = require('./services/user-service');

const prepareAndStartServer = async () => {

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use('/api', apiRoutes); 
    
    app.listen(PORT, async () => {
        // console.log(PORT);
        console.log(`Server Started on Port: ${PORT}`);
        // const userRepository = new UserRepository();
        // const user = await userRepository.getById(1);
        // console.log(`${user.email}   ${user.id}`);
        // const uuser = {
        //     email: user.email,
        //     id: user.id
        // }
        // const userService = new user_service();
        // const response = userService.createToken(uuser);
        // console.log(`response is ${response}`);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXNoYW50dmFzaGlzdGgzNDdAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTczODg0ODY3NCwiZXhwIjoxNzM4ODUyMjc0fQ.AT-rmVQBXMhb5Sjny-5DmKwd6grBPVxmj0L90RcNmIo';
        // const response = userService.verifyToken(token,JWT_KEY);
        // console.log(response);
    });
    
}

prepareAndStartServer();
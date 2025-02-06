const express = require('express');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();
// const UserRepository = require('./repository/user-repository');

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
    });
    
}

prepareAndStartServer();
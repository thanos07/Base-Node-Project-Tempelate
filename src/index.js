const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();
app.use('/api', apiRoutes); // Add leading slash
app.listen(ServerConfig.PORT, () => {
    console.log(`Server successfully running on Port : ${ServerConfig.PORT}`);
});
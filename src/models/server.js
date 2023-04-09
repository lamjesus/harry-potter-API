require('dotenv').config();
const express = require('express');




class Server {
    constructor(port) {
        this.port = process.env.PORT || port;
        this.app = express();
        this.userPath = '/api';
    }

    routes() {
        this.app.use(this.userPath, require('../routes/Router'));
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

module.exports = Server;
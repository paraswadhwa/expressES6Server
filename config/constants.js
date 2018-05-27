const config = {
    all: {
        serverPort: process.env.serverPort || 3000,
        serverIp: 'localhost',
        mongo: {
            uri: process.env.MONGODB_URI || 'mongodb://localhost/dbName',
            //uri: process.env.MONGODB_URI || 'mongodb://dbUserName:password@ip:port/dbName?authSource=admin',
            options: {
                debug: false
            }
        },
        jwtConfig: {
            secret: 'thisismysecret',
            expireTime: 1200 // expires in 20 min i.e. 1200 sec
        }
    }
}

module.exports = config.all;
export default config.all
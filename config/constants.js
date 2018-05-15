const config = {
    all: {
        serverPort: process.env.serverPort || 3000,
        serverIp: 'localhost',
        mongo: {
            uri: process.env.MONGODB_URI || 'mongodb://localhost/policy_renewals_test',
            //uri: process.env.MONGODB_URI || 'mongodb://dbUserName:password@ip:port/dbName?authSource=admin',
            options: {
                debug: false
            }
        }
    }
}

module.exports = config.all;
export default config.all
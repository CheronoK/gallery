var config = {}

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;


// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://cherono:chero123@kcluster.2jkdkri.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://cherono:chero123@kcluster.2jkdkri.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://cherono:chero123@kcluster.2jkdkri.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;

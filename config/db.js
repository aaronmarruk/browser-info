const dbConfig = {
  url: 'mongodb://127.0.0.1:27017/browser-info',
};

if (process.env.NODE_ENV === 'production') {
  dbConfig.url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds051833.mlab.com:51833/heroku_695qkfgd`;
}

exports.dbConfig = dbConfig;
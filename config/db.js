const dbConfig = {
  url: 'mongodb://127.0.0.1:27017/browser-info',
};

if (process.env.NODE_ENV === 'production') {
  dbConfig.url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds123971.mlab.com:23971/heroku_9cp7hrlt`;
}

exports.dbConfig = dbConfig;
export default {
    mongoUrl:
      process.env.MONGO_URL ||
      'mongodb://localhost:27017/resultado-db',
    port: process.env.PORT || 5002
  }
  
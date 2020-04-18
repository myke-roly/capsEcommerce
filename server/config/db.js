const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
    });
    console.log('Data base connect!!');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;

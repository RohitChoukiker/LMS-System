const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connectifon error:', error);
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

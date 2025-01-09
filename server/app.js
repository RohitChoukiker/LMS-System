const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('LMS API is running');
});

const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

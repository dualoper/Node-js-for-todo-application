
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
dotenv.config ({path: './config.env'});
const PORT = process.env.PORT;

require('./db/conn');

app.use(cors());
app.use(express.json());
app.use(require('./routes/create'));
app.use(require('./routes/read'));
app.use(require('./routes/delete'));
app.use(require('./routes/update'));
app.use(require('./routes/search'));

app.listen(PORT, ()=>{
  console.log(`Server is running at Port ${PORT}`);
});
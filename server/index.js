const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./database');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', require('./database').router);

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

sequelize.db
    .authenticate()
    .then(() => {
        console.log('Database connected');
        sequelize.db.sync().then(() => console.log('Database synchronized'));
    })
    .catch(err => console.log(err));

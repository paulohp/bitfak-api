const app = require('express')();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use('/', routes);


app.listen(3000, () => {
  console.log('App listening on port 3000');
});
const app = require('express')();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use('/', routes);


app.listen(process.env.PORT || 4000, () => {
  console.log('App listening on port', process.env.PORT || 4000);
});
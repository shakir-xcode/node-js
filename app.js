const express = require('express');
const path = require('path');
const shopRoutes = require('./templating-engine/routes/shop');
const adminRoutes = require('./templating-engine/routes/admin');
const errorController = require('./controllers/404');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));      //serving static files


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(4000);


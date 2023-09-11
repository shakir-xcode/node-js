const express = require('express');
const path = require('path');
const shopRoutes = require('./routes/shop');
const adminData = require('./routes/admin');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
    // res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
    res.status(404).render("404", { docTitle: "Not Found", path: '404' });
})

app.listen(4000);


const express = require('express');
const genraRoutes = require('./routes/genra');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/genra', genraRoutes);


const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log('server running on port' + PORT);
})

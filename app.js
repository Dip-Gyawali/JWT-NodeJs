require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/notFound');
const mainRouter = require('./routes/main')

//middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1',mainRouter);

app.use(errorHandler);
app.use(notFound);

app.get('/',(req,res)=>{
    res.status(200).json({message:"Home Page"})
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
});


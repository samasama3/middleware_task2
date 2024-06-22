const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/productsAPI', productRouter);
app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});

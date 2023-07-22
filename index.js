const express = require('express');
const cors = require('cors');

const userRouter = require('./routers/user.router');
const categoryRouter = require('./routers/category.router');
const paymentRouter = require('./routers/payment.router');
const inventoryRouter = require('./routers/inventory.router');
const transactionRouter = require('./routers/transaction.router');
const orderRouter = require('./routers/order.router');
const predictionRouter = require('./routers/prediction.router');

const PORT = process.env.PORT || 3002;

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://ifore.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Akses dari domain ini tidak diizinkan.'));
    }
  }
}));

app.use(userRouter);
app.use(categoryRouter);
app.use(paymentRouter);
app.use(inventoryRouter);
app.use(transactionRouter);
app.use(orderRouter);
app.use(predictionRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

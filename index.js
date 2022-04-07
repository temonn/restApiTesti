const express = require("express");
const app = express();
const port = 3000;
const bankapiRouter = require("./routes/bankapi");
const bankapiRouterCards = require("./routes/bankapiCARDS");
const bankapiRouterAccounts = require("./routes/bankapiACCOUNTS");
const bankapiRouterTransactions = require("./routes/bankapiTRANSACTIONS");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/clients", bankapiRouter);
app.get("/cards", bankapiRouterCards);
app.get("/accounts", bankapiRouterAccounts);
app.get("/transactions", bankapiRouterTransactions);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

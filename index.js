const app = require("./app");

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) {
    console.log("There is an error in starting server");
    console.log(error);
  }
  console.log(`Connected to port ${port}`);
});

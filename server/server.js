const exp = require("express")

const app = exp()



app.listen(8080, (err) => err ? console.log(err) : console.log("server online on http://localhost:8080"))

app.get("/", (req, res, next) => {
  try {
    throw new Error("Something went wrong");
  } catch (err) {
    res.status(500).json({error:err.message})
  }
});

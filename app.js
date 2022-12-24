const express = require("express");
const { exec } = require("child_process");

const app = express();
app.listen(3000, () => {});

app.use(express.json());

app.get("/", (req, res) => {
  updateCounter((err, out) => {
    res.status(200).json({
      message: err ? "error accessing python" : "api accesses python",
    });
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({ message: "hi user" });
});

function updateCounter(callback) {
  try {
    exec(`python3 counter.py`, {}, (err, out) => {
      if (err) {
        //some err occurred
        console.error(err);
        throw err;
      } else {
        callback(null, out);
      }
    });
  } catch (err) {
    callback("error");
  }
}

module.exports = app;

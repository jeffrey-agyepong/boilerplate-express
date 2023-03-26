let express = require('express');
let app = express();




app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
}
)

app.use("/public/style.css", express.static(__dirname + "/public/style.css"));

app.get("/json", (req, res) => {
    res.json({
        message: 'Hello json'
    });
})


var response = "Hello World".toUpperCase();

if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
} else {
    response = "Hello World"
}





























module.exports = app;

var express = require("express");
var path = require("path");
var app = express();

var publicPath = path.join(__dirname, "public");
var indexPath = path.join(__dirname, "index.html");

app.set("port", (process.env.PORT || 5000));
app.use("/public", express.static(publicPath));

app.get("/", function(request, response) {
    response.sendFile(indexPath);
});

app.listen(app.get("port"), function() {
    console.log("Node app is running at localhost:", app.get("port"));
});

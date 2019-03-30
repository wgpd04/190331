// 以 Express 建立 Web伺服器
var express = require("express");
var app = express();

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );


// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', './public/');

// 一切就緒，開始接受用戶端連線
app.listen(process.env.PORT);
console.log("Server is running... Press 'Stop' button to exit.");

app.get("/", function (request, response) {
    response.render(
        "index.ejs",
        {
            request: request,
            response: response
        }
    );
});


app.get("/:run.ejs", function (request, response) {
    response.render(
        request.params.run + ".ejs",
        {
            request: request,
            response: response
        }
    );
});

app.post("/:run.ejs", function (request, response) {
    response.render(
        request.params.run + ".ejs",
        {
            request: request,
            response: response
        }
    );
});

// Web伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public", { index: 'index.ejs' } ) );



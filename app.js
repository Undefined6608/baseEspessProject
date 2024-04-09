/* app.js */
/******************导入依赖***********************/
// 导入express
const express = require('express');
// 导入cors
const cors = require('cors');
const {resultType, SUCCESS} = require("./utils/response");
const {occupySQL} = require("./model");
/*****************创建配置信息**********************/
// 创建express对象
const app = express();
// 创建PORT变量，判断是否存在运行时指定的端口号，如果存在则使用，否则，则使用默认的3000 端口
const PORT = process.env.PORT || 3000;
// 配置和挂载解析body请求体方法
app.use(express.json());
app.use(express.urlencoded());
// 挂载cors用于跨域
app.use(cors());

// 测试
app.get('/', async (req, res) => {
    const sqlStatus = await occupySQL("1");
    if (sqlStatus){
        res.send(resultType(SUCCESS, "hello Post"));
    }
});

app.post('/p', (req, res) => {
    res.send(resultType(SUCCESS, "hello Post"));
});

/***************开启项目端口监听**********************/
app.listen(PORT, () => {
    console.log("listening on port："+PORT);
});

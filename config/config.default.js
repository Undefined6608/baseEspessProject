// 配置数据库
const db = () => {
    return {
        host: '127.0.0.1', // 连接地址
        user: 'root', // 数据库用户名
        password: '555555', // 数据库密码
        database: 'todos' // 数据库名称
    }
}

module.exports = {
    db
}

// 导入依赖
// 导入 mysql 驱动
const mysql = require('mysql2/promise');
// 导入数据库配置
const {db} = require('../config/config.default');

// 创建数据库连接池
const pool = mysql.createPool(db());

// 定义 SQl 方法
/**
 * 验证表中字段是否重复
 * @param tag
 * @returns {Promise<boolean>}
 */
const occupySQL = async tag => {
    // 调用 SQL 语句进行查重
    const [query, _] = await pool.execute(`SELECT uid from sys_user WHERE ${tag}=?`, [value]);
    // 如果能查出来，则为重复
    return query.length !== 0;
}

module.exports = {
    occupySQL
}

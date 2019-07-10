const mongoose = require('mongoose');
const config = require('../config');

const DBURL = `mongodb://${config.mongodb.username}:${config.mongodb.pwd}@${config.mongodb.address}/${config.mongodb.db}`;
mongoose.Promise = global.Promise;

mongoose.connect(DBURL, err => {
    if (err) {
        console.log("数据库连接失败！" + err);
    } else {
        console.log("数据库连接成功！");
    }
});

module.exports = mongoose;
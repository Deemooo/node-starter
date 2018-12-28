const mongoose = require('mongoose');
const goods = require('../../db/products');

// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://127.0.0.1:27017'); // 地址跟第一步的地址对应。

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

/************** 定义模式loginSchema **************/
const Schema = mongoose.Schema;
const goodInfoSchema = new Schema({
  isActive: Boolean,
  price: Number,
  picture: String,
  name: String,
  description: String,
  tags: Array
});

/************** 定义模型Model **************/
const goodsInfoModel = mongoose.model('goodsInfoModel', goodInfoSchema);
goods.forEach((item) => {
  const goodsInfo = new goodsInfoModel(item);
  goodsInfo.save(function (err) {
    if (err) {
      console.log('save error:' + err);
    }
    console.log('save sucess');
  });
});

module.exports = goodsInfoModel;

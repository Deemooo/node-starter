'use strict';

const goodsInfoModel = require('../mongodb/db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 根据获取全部商品信息
router.get('/api/getGoodsInfo', (req, res) => {
  const {type} = req.query;
  let condition = {$gt:0};
  if (type === 'explosive') {
    condition = {$lte:30};
  } else if (type === 'latest') {
    condition = {$gt:30};
  } else if (type === 'recommend') {
    condition = {$gt: 50};
  }
  goodsInfoModel.find({"price":condition}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;

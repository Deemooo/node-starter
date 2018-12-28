# 接口文档
## 目录：

[1、根据类型获取商品信息](#2根据类型获取商品信息)<br/>

## 接口列表：

### 1、根据类型获取商品信息

#### 请求URL：
```
https://localhost/getGoodsInfo?type=:type
```

#### 示例：
[https://localhost/getGoodsInfo?type=all](https://localhost/getGoodsInfo?type=all)

#### 请求方式:
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type|Y|string|type：商品类型或全部|

#### 返回示例：

```javascript
{
  "_id": "5bbdb9e4f927b987787cb2c7",
  "isActive": true,
  "price": "49.88",
  "picture": "http://placehold.it/32x32",
  "name": "FURNAFIX",
  "description": "Veniam ipsum minim mollit laboris sunt reprehenderit dolor amet dolor aute aute amet irure eu. Laborum in sit nulla quis incididunt eu nisi non pariatur. Commodo deserunt dolore exercitation proident sint est fugiat Lorem est irure ex ut ad. Id officia quis non mollit esse velit nisi est et culpa commodo anim irure. Dolor adipisicing magna occaecat veniam occaecat aliqua culpa labore ipsum eu excepteur dolore nulla nulla. Et exercitation est consequat eiusmod quis adipisicing nisi. Ad nulla cillum magna commodo pariatur duis reprehenderit nulla incididunt voluptate et deserunt amet et.",
  "tags": [
    "voluptate",
    "cupidatat",
    "labore",
    "cupidatat",
    "qui"
  ]
}
```

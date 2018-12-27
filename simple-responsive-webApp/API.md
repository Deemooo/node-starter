# 接口文档
## 目录：

[1、获取所有商品信息](#1获取所有商品信息)<br/>
[2、根据类型获取商品信息](#2根据类型获取商品信息)<br/>

## 接口列表：

### 1、获取所有商品信息

#### 请求URL:
```
https://elm.cangdu.org/v1/cities
```

#### 示例：
 [https://elm.cangdu.org/v1/cities?type=guess](https://elm.cangdu.org/v1/cities?type=guess)

#### 请求方式:
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      |Y       |string  |guess：定位城市，  hot：热门城市， group：所有城市 |

#### 返回示例：

```javascript
{
  id: 1,
  name: "上海",
  abbr: "SH",
  area_code: "021",
  sort: 1,
  latitude: 31.23037,
  longitude: 121.473701,
  is_map: true,
  pinyin: "shanghai"
}
```

### 2、根据类型获取商品信息

#### 请求URL：
```
https://elm.cangdu.org/v1/cities/:id
```

#### 示例：
[https://elm.cangdu.org/v1/cities/1](https://elm.cangdu.org/v1/cities/1)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |Y       |int   |城市id |

#### 返回示例：
```javascript
{
  id: 1,
  name: "上海",
  abbr: "SH",
  area_code: "021",
  sort: 1,
  latitude: 31.23037,
  longitude: 121.473701,
  is_map: true,
  pinyin: "shanghai"
}
```

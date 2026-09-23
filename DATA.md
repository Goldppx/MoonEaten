# 店铺数据

编辑 `data/places.json` 并提交到 `main` 分支，MoonEaten 会读取新数据。每个店铺使用以下格式：

```json
{
  "id": "hangzhou-noodles-001",
  "name": "店名",
  "city": "杭州",
  "cuisine": "面食",
  "address": "地址",
  "lat": 30.2741,
  "lng": 120.1551,
  "coordinateSystem": "wgs84",
  "price": 38,
  "scores": {"taste": 9, "value": 8.5, "environment": 8, "service": 8.5},
  "visitedAt": "2026-09-22",
  "review": "简短评价",
  "image": "",
  "dishes": [
    {"name": "菜名", "price": 28, "score": 9.2, "spicy": 1, "sweet": 0, "rich": 2, "ingredients": ["食材"], "note": "菜品评价"}
  ]
}
```

多个店铺放进一个数组。评分范围为 0–10；辣度、甜度、浓郁度范围为 0–4。坐标来自手机 GPS 时填写 `wgs84`，来自高德地图时填写 `gcj02`。

文件中保留了一条 `isExample: true` 的完整模板，页面解析时会自动排除它。复制这条对象，删除 `isExample`，修改内容后再加入数组。

## 照片与浏览

店铺的 `image` 用作卡片封面与详情大图。每道菜也支持独立的 `image` 字段，用于菜品详情照片；留空时保留文字信息。推荐横向 JPG/WebP，每张约 300 KB。

上传照片到本仓库的 `images/` 文件夹后，填写完整的 HTTPS 原图地址，例如：
`https://raw.githubusercontent.com/Goldppx/MoonEaten/main/images/my-dish.webp`
请使用原图地址；GitHub 的 blob 文件预览链接返回的是网页。

城市、菜系、人均筛选由店铺的 city、cuisine、price 自动生成。随机推荐遵循当前筛选及口味设置；设置位置后显示距离。卡片“地图”按钮会打开独立地图页并定位、放大对应标点。

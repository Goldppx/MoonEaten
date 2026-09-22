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

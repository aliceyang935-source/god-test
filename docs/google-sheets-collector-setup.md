# 统计表接入步骤

这个网站是 GitHub Pages 静态网站，不能直接写入仓库里的 Excel 文件。当前方案是：用 Google Sheets 做在线表格，网站把数据提交到 Google Apps Script，表格可以随时下载成 Excel。

## 1. 建表

1. 新建一个 Google Sheet。
2. 打开 `扩展程序 -> Apps Script`。
3. 把项目里的 `google-sheets-collector.gs` 内容粘进去。
4. 保存。

## 2. 部署 Web App

1. 点右上角 `Deploy -> New deployment`。
2. 类型选择 `Web app`。
3. `Execute as` 选择你自己。
4. `Who has access` 选择 `Anyone`。
5. 点 `Deploy`。
6. 复制生成的 Web App URL。

## 3. 接入网站

打开 `app.js`，把顶部的：

```js
const COLLECTION_ENDPOINT = "";
```

改成：

```js
const COLLECTION_ENDPOINT = "你的 Web App URL";
```

重新上传 GitHub Pages 文件。

## 4. 表格字段

表格会写入这些列：

- `submittedAt`
- `userId`
- `birthDate`
- `birthHour`
- `usefulGod`
- `harmfulGod`
- `usefulGroup`
- `harmfulGroup`
- `testVersion`

出生小时可以为空。

# 十神通道测试

一个纯静态的十神测试网站，可直接通过 GitHub Pages 发布。

## 发布文件

- `index.html`
- `styles.css`
- `app.js`
- `.nojekyll`

## 表格收集

如果要把结果写入 Google Sheet：

1. 打开 `docs/google-sheets-collector-setup.md`。
2. 把 `google-sheets-collector.gs` 粘贴到 Google Sheet 的 Apps Script。
3. 部署 Web App。
4. 把 Web App URL 填入 `app.js` 顶部的 `COLLECTION_ENDPOINT`。

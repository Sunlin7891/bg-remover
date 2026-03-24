# 🎨 一键抠图 (BgRemover)

轻量级在线图像背景移除工具，基于 Cloudflare Workers 和 remove.bg API。

## ✨ 特性

- 🚀 **零门槛** - 无需注册，打开即用
- ⚡ **快速** - 3-5 秒完成处理
- 💰 **免费** - 基础功能完全免费
- 🔒 **隐私** - 图片不落盘，内存处理

## 🛠️ 技术栈

- **前端**: HTML + CSS + 原生 JavaScript
- **后端**: Cloudflare Workers
- **API**: remove.bg
- **部署**: Cloudflare Pages/Workers

## 📦 项目结构

```
bg-remover/
├── wrangler.toml      # Workers 配置
├── worker.js          # 后端逻辑
├── index.html         # 前端页面
└── README.md          # 项目说明
```

## 🚀 快速开始

### 1. 部署到 Cloudflare Workers

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 设置 remove.bg API Key
wrangler secret put REMOVE_BG_API_KEY

# 部署
wrangler deploy
```

### 2. 配置前端

修改 `index.html` 中的 Workers 地址：
```javascript
const response = await fetch('https://bg-remover.YOUR_USERNAME.workers.dev', {
  method: 'POST',
  body: formData,
});
```

### 3. 访问使用

部署完成后，直接在浏览器打开 `index.html` 即可使用。

## 📝 配置说明

### remove.bg API Key

1. 访问 https://www.remove.bg/api
2. 注册账号
3. 获取 API Key
4. 免费额度：50 张/月

### Cloudflare Workers

- 免费额度：10 万请求/天
- 全球边缘节点加速
- 无需服务器运维

## 💰 成本估算

| 项目 | 免费额度 | 付费方案 |
|-----|---------|---------|
| Cloudflare Workers | 10 万请求/天 | $5/月起 |
| remove.bg API | 50 张/月 | $9/月 (500 张) |

## 📄 License

MIT

## 🙏 致谢

- [remove.bg](https://www.remove.bg/) - 背景移除 API
- [Cloudflare Workers](https://workers.cloudflare.com/) - 边缘计算平台

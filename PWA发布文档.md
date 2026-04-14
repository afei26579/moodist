# Moodist PWA 发布文档（Vercel）

本文档覆盖从本地构建、电脑测试、手机测试到 Vercel 线上发布与回滚的完整流程。

---

## 1. 发布前准备

- 已安装 Node.js（建议 LTS 版本）
- 项目可正常安装依赖并本地运行
- GitHub 仓库已连接到 Vercel 项目
- PWA 图标与 manifest 配置已完成（本项目已配置）

建议每次发布前先做：

1. 拉取最新代码
2. 安装依赖
3. 本地构建
4. 本地预览验证
5. 提交并推送到 GitHub
6. 确认 Vercel 自动部署成功

---

## 2. 本地构建与预览（发布前必做）

在项目根目录执行：

```bash
npm install
npm run build
npm run preview
```

打开：`http://localhost:4321/`

### 2.1 检查 Manifest

Chrome/Edge 打开开发者工具：

- `Application` → `Manifest`
- 确认 `icons` 包含：
  - `192x192`（any）
  - `512x512`（any）
  - `512x512`（maskable）

### 2.2 检查 Service Worker

开发者工具：

- `Application` → `Service Workers`
- 确认 `sw.js` 处于 `running`/`activated` 状态

### 2.3 本地缓存更新验证（重要）

如果看不到最新图标或资源：

1. `Application` → `Service Workers` 勾选：
   - `Update on reload`
   - `Bypass for network`（临时）
2. `Application` → `Storage` → `Clear site data`
3. 强制刷新页面（Ctrl+F5）

---

## 3. 电脑端 PWA 安装测试

在桌面浏览器（Chrome/Edge）中：

1. 打开预览地址或线上地址
2. 地址栏右侧点击“安装应用”（Install）
3. 安装后检查：
   - 应用图标是否正确
   - 启动画面和窗口模式是否正确
   - 离线情况下是否能打开已缓存页面（可选）

---

## 4. 手机端 PWA 测试

## 4.1 Android（Chrome）

1. 访问线上地址（建议先用 Vercel 域名）
2. 菜单中选择“添加到主屏幕”
3. 回到桌面启动应用，检查：
   - 桌面图标是否清晰
   - 图标裁切是否正常（maskable 是否生效）
   - 打开后是否为独立应用窗口（非普通浏览器标签）

如图标不更新：

- 删除主屏幕旧应用
- Chrome 设置里清除该站点数据
- 重新访问并添加到主屏幕

## 4.2 iOS（Safari）

1. 打开线上地址
2. 分享菜单 → “添加到主屏幕”
3. 检查桌面图标与启动效果

说明：iOS 对 PWA 支持与 Android 有差异，manifest 字段支持不完全一致，属正常现象。

---

## 5. GitHub + Vercel 同步发布流程

## 5.1 自动同步机制

如果 Vercel 项目已绑定 GitHub 仓库：

- 每次 `git push` 到绑定分支（通常 `main`）
- Vercel 会自动触发新部署
- 部署成功后，线上站点自动更新

也就是说：**你更新 GitHub，Vercel 会自动更新（默认配置下）**。

## 5.2 推荐发布步骤

```bash
git pull
npm install
npm run build
npm run preview
# 本地验证通过后：
git add .
git commit -m "feat: xxx"
git push
```

然后在 Vercel Dashboard：

1. 打开项目
2. 查看最新 Deployment 状态（Building → Ready）
3. 点击线上链接验证

## 5.3 未自动触发时排查

如果推送后 Vercel 没部署：

1. 检查仓库是否仍然正确绑定到该 Vercel 项目
2. 检查是否推送到了 Vercel 监听的分支（Production Branch）
3. 在 Vercel 点击 `Redeploy`
4. 查看 Deploy Logs 定位错误

---

## 6. 发布后验收清单（Checklist）

- [ ] Vercel 最新部署状态为 `Ready`
- [ ] 线上页面可访问
- [ ] Manifest 可读取且图标路径返回 200
- [ ] Service Worker 正常注册
- [ ] 桌面端可安装、图标正确
- [ ] 安卓添加主屏后图标与裁切正确
- [ ] 关键页面和主要交互可用

---

## 7. 回滚方案（出现问题时）

在 Vercel 中：

1. 打开 `Deployments`
2. 选择上一个稳定版本
3. 点击 `Promote to Production`（或将该版本设为生产）

这比紧急改代码更快，适合先恢复可用性。

---

## 8. 常见问题

### Q1：我本地停了 dev server，为什么 `localhost:4321` 还能访问？
因为可能还有 `preview` 或其他本地进程在占用该端口。结束对应进程即可。

### Q2：图标改了但手机没变？
通常是 PWA 缓存导致。删除主屏应用 + 清站点数据 + 重新安装，一般可解决。

### Q3：Vercel 会不会自动同步 GitHub 更新？
会。前提是仓库已绑定且推送到监听分支。

---

## 9. 本项目当前图标约定

当前 manifest 图标建议为：

- `/assets/pwa/192.png`（`192x192`, `purpose: any`）
- `/assets/pwa/512x512.png`（`512x512`, `purpose: any`）
- `/assets/pwa/manifest-512x512.png`（`512x512`, `purpose: maskable`）

如后续调整图标命名，请同步修改 `astro.config.mjs` 中的 `manifest.icons`。

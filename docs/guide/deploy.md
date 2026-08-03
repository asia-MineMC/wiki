# 部署到 GitHub Pages

本项目通过 GitHub Actions 自动部署。`main` 分支上的任意推送都会触发构建并发布到 GitHub Pages。

## 工作流程

1. 推送代码到 `main` 分支
2. GitHub Actions 执行 `npm ci` 与 `npm run docs:build`
3. 构建产物上传为 Pages artifact
4. `deploy-pages` 动作将站点发布到 Pages

## 手动触发

进入仓库的 **Actions** 页面，选择 **Deploy VitePress site to Pages** 工作流，点击 **Run workflow** 即可手动触发一次部署。

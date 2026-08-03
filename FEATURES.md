# al-folio 可用功能清单

> 个人网站功能备忘录，完善网站时参考。
> ✅ 已启用 | ⚙️ 需配置 | 💤 暂未启用

---

## 学术核心

| 功能                                                | 状态 | 说明                                                                     |
| --------------------------------------------------- | ---- | ------------------------------------------------------------------------ |
| 论文页（BibTeX 自动渲染）                           | ✅   | 编辑 `_bibliography/papers.bib`                                          |
| 论文徽章（Altmetric / Dimensions / Google Scholar） | ✅   | 论文发表后在 bib 条目里加 `altmetric`、`dimensions`、`google_scholar_id` |
| 论文附件（PDF / 代码 / 视频 / Slides / 海报）       | ⚙️   | bib 条目里加 `pdf`、`code`、`video`、`slides`、`poster` 字段             |
| 论文搜索                                            | ✅   | `bib_search: true` 已开启                                                |
| CV 页面                                             | ✅   | 编辑 `_data/cv.yml`                                                      |
| Google Scholar 主页链接                             | 💤   | 有账号后在 `_data/socials.yml` 加 `scholar_userid`                       |
| ORCID 链接                                          | ✅   | 已配置                                                                   |

---

## 博客 / 写作

| 功能                       | 状态 | 说明                                                                          |
| -------------------------- | ---- | ----------------------------------------------------------------------------- |
| 普通 Markdown 博客文章     | ⚙️   | 在 `_posts/` 新建 `YYYY-MM-DD-title.md`                                       |
| 数学公式（MathJax）        | ✅   | 行内 `$...$`，块级 `$$...$$`                                                  |
| 代码高亮                   | ✅   | 用标准 Markdown 代码块即可                                                    |
| 代码 diff 对比视图         | 💤   | 文章中使用 diff2html                                                          |
| Jupyter Notebook 直接发布  | 💤   | 把 `.ipynb` 放到 `_posts/`，Jekyll 自动渲染                                   |
| Mermaid 流程图 / 时序图    | 💤   | 文章中用 `mermaid` 代码块                                                     |
| TikZ 数学图                | 💤   | 文章中用 `tikzjax` 代码块                                                     |
| 伪代码块（pseudocode）     | 💤   | 文章中使用 pseudocode.js                                                      |
| 侧边栏目录 / 页内目录      | 💤   | front matter 加 `toc: true`                                                   |
| Tabs 标签页布局            | 💤   | 文章中使用 `{% tabs %}` liquid 标签                                           |
| 自定义 blockquote 样式     | 💤   | 支持 tip / warning / danger 等样式块                                          |
| 文章评论（Giscus）         | ⚙️   | 需在 `_config.yml` 填写 `giscus.repo_id` 和 `category_id`，去 giscus.app 生成 |
| 文章标签 / 分类 / 年份归档 | ✅   | front matter 写 `tags` 和 `categories`                                        |
| 相关文章推荐               | ✅   | `related_blog_posts.enabled: true` 已开启                                     |

---

## 数据可视化（文章 / 项目页中使用）

| 功能                         | 状态 | 说明                             |
| ---------------------------- | ---- | -------------------------------- |
| Chart.js 交互图表            | 💤   | 适合折线图、柱状图等基础图表     |
| ECharts 交互图表             | 💤   | 比 Chart.js 更丰富，支持大数据量 |
| Plotly 交互图表              | 💤   | 科研常用，支持 3D 图             |
| Vega-Lite 声明式图表         | 💤   | 适合统计可视化                   |
| GeoJSON 地图（Leaflet）      | 💤   | 地理数据可视化                   |
| 图片对比滑块（before/after） | 💤   | 适合展示模型效果对比             |

---

## 页面 / 导航

| 功能                  | 状态 | 说明                                        |
| --------------------- | ---- | ------------------------------------------- |
| 首页 About            | ✅   | `_pages/about.md`                           |
| 论文页 Publications   | ✅   | `_pages/publications.md`                    |
| 项目页 Projects       | ✅   | `_pages/projects.md`，编辑 `_projects/`     |
| CV 页                 | ✅   | `_pages/cv.md`                              |
| 博客页 Blog           | ✅   | `_pages/blog.md`                            |
| 仓库页 Repositories   | ✅   | `_data/repositories.yml` 已配置             |
| Teaching 教学页       | 💤   | 有助教经历后在 `_teaching/` 添加            |
| Profiles 成员页       | 💤   | 可展示实验室成员，编辑 `_pages/profiles.md` |
| Books 读书页          | 💤   | 在 `_books/` 添加书目                       |
| Dropdown 下拉导航菜单 | 💤   | `_pages/dropdown.md` 已有示例               |
| News 动态板块         | ✅   | `_news/` 文件夹，已有入学动态               |

---

## 外观 / 体验

| 功能                            | 状态 | 说明                                   |
| ------------------------------- | ---- | -------------------------------------- |
| 深色 / 浅色模式切换             | ✅   | 右上角切换                             |
| 全站搜索                        | ✅   | 右上角搜索框                           |
| 滚动进度条                      | ✅   | 页面顶部                               |
| 图片懒加载                      | ✅   | 自动                                   |
| 图片自动转 WebP                 | ✅   | 需本地安装 ImageMagick                 |
| 图片点击放大（Medium Zoom）     | ✅   | 文章 / 项目页图片点击可放大            |
| Masonry 瀑布流项目卡片          | ✅   | Projects 页已启用                      |
| 回到顶部按钮                    | ✅   | 右下角                                 |
| Open Graph 预览（社交分享卡片） | 💤   | `_config.yml` 设 `serve_og_meta: true` |

---

## 分析 / 运营

| 功能                        | 状态 | 说明                                        |
| --------------------------- | ---- | ------------------------------------------- |
| Google Analytics            | 💤   | `_config.yml` 填 `google_analytics` ID      |
| Google Search Console 验证  | 💤   | `_config.yml` 填 `google_site_verification` |
| Newsletter 订阅（Loops.so） | 💤   | `_config.yml` 填 `newsletter.endpoint`      |
| RSS 订阅                    | 💤   | `_data/socials.yml` 加 `rss_icon: true`     |
| SEO 优化                    | ⚙️   | 参考根目录 `SEO.md`                         |

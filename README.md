## z2-blog-web 个人网站
[![version](https://img.shields.io/badge/-v1.0-f15642)](https://github.com/z2devil/z2-blog-web/) [![AUR](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/z2devil/z2-blog-web/blob/main/LICENSE)
</br>个人博客前端项目，主要包含无感用户登录注册、文字图片内容社区、Markdown 编辑器、OSS 文件上传等功能。

## Demo
[我的个人网站](https://z2devil.cn?_blank)

## 技术栈
vue3、webpack、axios、ali-oss、vuedraggable、gsap、md-editor、mapbox、sass、svg

## 功能

### 时间线
1. 写动态
    * 自定义表情
    * 上传图片
2. 点赞动态
3. 评论动态、回复评论
4. 删除动态
5. 查看动态图片大图
6. 左侧时间轴，统计不同时间尺度发表的动态数量。点击时间点可以跳转到目标时间点的动态

### 文章
1. 写文章
    * 采用 markdown 编辑器
    * 上传文件、文件分类、上传进度、拖拽调整文件顺序以及删除文件、查看图片文件的大图
    * 文章摘要和封图
    * 自定义标签
2. 点赞文章
3. 评论文章、回复评论
4. 预览文章详情、文章详情（gsap timeline 打开文章详情动画效果）
5. 编辑文章
6. 删除文章
7. 按照标签筛选和搜索文章

### 关于我
1. gsap timeline 和 generator 函数实现对话剧本
2. 可滚动、可查看详情、以 json 数据为内容的 “光荣历史” 时间线

### 公共组件
1. z-button 按钮
    支持以下自定义功能：
    * type 按钮类型（normal（默认）、primary、dashed、link）
    * disabled 失活
    * circle 圆形按钮
    * round 圆角按钮
    * ghost 透明风格按钮
    * loading 加载状态
2. message 弹框
    两种图标+消息展示
3. confirm 弹框
    标题、内容、确认和取消文本、确认和取消事件
4. popupLayout 弹出层
    * 自定义弹出层内容（子组件）
    * 栈结构历史记录
    * 子组件：用户信息、编辑用户信息、评论框、图片大图浏览、确认发表文章
5. emptyInfo 空数据展示
6. 图片展示九宫格

### webpack
1. CDN 引入依赖
2. Gzip 压缩
3. js、css 压缩
4. 依赖分析

### 其他
1. 全局请求和相应封装，针对权限错误码弹出登录窗口，针对 HTTP 请求错误弹出请求失败提示
2. 路由守卫
    * 全局前置守卫：权限检查、页面 404 检查
    * 全局后置守卫：页面回退按钮类型判断
3. OSS 前端直传
4. 全局页面触底加载（IntersectionObserver）
5. 函数节流
6. 人性化时间展示、文件大小展示
7. 图片压缩

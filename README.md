### 本系列教程的初衷

目前Github和技术社区中有不少功能强大，界面美观的Vue3+ElementPlus通用后台管理系统，但这些系统对初学者都不太友好，导致大家学习路径比较陡峭。于是自己写了这个系列，手把手从头开发一个通用后台管理系统的雏形。从零开始完成这样一个后台系统，可以令新手对于整个系统有个全局的把握，同时掌握系统中大量隐藏的细节。学完该系列教程后，即可去深入学习Github和技术社区中那些功能强大，界面美观的开源系统了。有些同学可能觉得系统长得比较丑，但这是笔者有意而为之，项目中只在整体布局时使用了少量的CSS样式，让读者将注意力放在Vue3和ElementPlus的用法上。

[本系列教程地址](https://juejin.cn/column/7375504338759286822)

### 完整源码

[完整源码](https://mbd.pub/o/bread/ZpeTmZts)

### 项目功能

本项目没有对应后端项目，也不使用Mock数据，而是选择RealWorld项目的开放接口。

本项目最终演示效果如下：

[管理后台在线演示](http://175.178.73.222:3001/)


项目使用当前公司中最常用，最流行的Vue3+TypeScript+ElementPlus快速开发框架，基于RealWorld项目的开放接口，从零开始一步一步实现一个用户注册，登录，文章管理，评论管理，个人信息管理等模块的通用后台管理系统雏形。

项目包含了在Web开发中会遇到的绝大多数基础业务：

- 通用布局
- 通用头部
- 左侧菜单
- 注册，登录
- 用户鉴权
- Axios请求拦截器携带接口访问Token
- 路由导航守卫控制未登录用户页面访问
- 通用表格数据展示，查询，通用分页
- 通用表单实现数据增删改查

学习完该项目后，再去学习Github和技术社区中那些功能强大，界面美观的开源系统就不会一头雾水了。

### RealWorld项目简介

RealWorld项目是一个开源的多用户社区系统，用户可以注册、发布文章、评论，点赞，关注，收藏以及对自己的账户进行管理。 由于其包含了在 web 开发中会遇到的绝大多数基础业务，例如列表、增删改查、鉴权、登录等等，所以是很好的一个Web学习项目。

[项目地址](https://github.com/gothinkster/realworld)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b55731cfcd8c4c0b8606704d2e29c739~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=654\&h=112\&s=511505\&e=gif\&f=351\&b=fefdfd)

RealWorld项目提供了统一API规范：每个实现都按照统一API规范进行开发，确保了每种前端与后端之间具备良好模块化能力。目前RealWorld有超过100个基于各种编程语言、库和框架创建而成的实现版本。

RealWorld接口文档如下：

<https://main--realworld-docs.netlify.app/docs/specs/backend-specs/endpoints>

<https://main--realworld-docs.netlify.app/docs/specs/frontend-specs/swagger>


### 项目截图

#### 注册


![1717637452196.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3db598c4dcca463982d20f3bf1deff58~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=665&h=424&s=17814&e=png&b=ffffff)

#### 登录


![1717637411732.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00693b26a15c45a28cc07a49b4e54242~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=655&h=375&s=13683&e=png&b=ffffff)

#### 文章列表，搜索


![1717637562134.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a5b0ee76a0e495d9c0945ccde3d7fbc~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1750&h=692&s=91447&e=png&b=ffffff)

#### 文章增删改查


![1717637709972.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fa4af1ad3f84f8cadc69a8fb74cd927~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1756&h=675&s=49951&e=png&b=7a7b7c)

#### 评论管理


![1717637797191.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c53dd6b7dac24e0abf9a5d19583f42ce~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1741&h=671&s=37869&e=png&b=f5f7f9)

#### 个人信息管理


![1717637883630.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8973c121fdbc47e39edb1639bab5106f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1017&h=669&s=36186&e=png&b=f4f6f8)

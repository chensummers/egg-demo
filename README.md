# egg-demo

### 技术栈
- eggjs + egg-mysql

### 主要功能
>- 用户注册模块
>- 用户登录模块
>- 用户模块
>-- 创建
>-- 列表查询
>-- 更新
>-- 查询
>-- 删除
>- 日记模块
>-- 列表查询
>-- 创建
>-- 查询
>-- 删除(admin)

### 其他功能
>- 路由鉴权 egg-jwt
>- 管理员与其他用户
```
privileges
--- 1 admin
--- 0 norma
```
>- 前端模板编译 egg-ejs



### 路由
>- 登录注册
```
router.post('/register', 'login.register');
router.post('/login', 'login.login');
router.post('/loginout', 'login.loginOut');
```
>- user
```
router.post('/user/list', 'user.list');
router.get('/user/get', middleware.checkToken(), 'user.getUserInfo');
router.get('/user/:id', 'user.getUserById'); //通配路由写在后面
router.put('/user/:id', 'user.update');
router.delete('/user/:id', 'user.delete');
```
>- diary
```
router.get('/diary/list', middleware.checkToken(), 'diary.list');
router.post('/diary/add', middleware.checkToken(), controller.diary.add);
router.post('/diary/update', middleware.checkToken(), controller.diary.update);
router.get('/diary/detail/:id', middleware.checkToken(), controller.diary.getDiaryById);
router.delete('/diary/delete/:id', middleware.checkToken(), controller.diary.delete);
```


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


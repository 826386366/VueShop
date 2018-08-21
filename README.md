# 前言
为了面试，自己做了一个小米有品的商城，也就形似吧，用了大概八九天的时间，都是晚上敲个通宵。</br>
之前在中石油旗下的软件公司工作，那公司还没前后端分离，用着十年前的技术做着五年前的项目，所以...</br>
现在出来想找一份正经的工作，无奈手里没有正经的项目，所以就自己写了这个项目。</br>
## 技术栈
vue2 + vuex + vue-router + webpack + ES6 + node express + mongodb</br>
后台的话用的node Express + MongoDB，本来想用PHP + MySql的，一看大连的前端岗也不稀罕这些老东西，索性跟了一下潮流。</br>
前端用的Vue全家桶，然后webpack打了个包</br>
## 项目运行

``` bash
# 启用一下Express（我用的nodemo，太方便啦！）默认3000端口
nodemon ./server/bin/www

# 如果没部署的话就用下面这条，默认8080端口
npm run dev / npm start


# 数据库我没发出来，你敲完上面的命令也跑不起来.....（小声BB）
```
## 简单介绍&&遇到的坑
总体分为商城主界面，购物车，地址选定，结算，订单生成</br>
主界面拆分成头导航，商品列表，和footer三个组件，采用vue-lazyload进行图片懒加载处理，整个列表用vue-infinite-scroll做了滚动懒加载，每次向后台请求8条数据（两排），还做了价格筛选和排序，用三个字段按需请求。</br>
VueX用在了用户名和购物车数量角标上，访问主页时先请求后台并定义全局state，在之后切换页面及修改购物车时减少了对后台接口的请求。</br>
在前端和后台均采用了权限管理，未登录的状态下对页面和接口的访问均受限。</br>
当然，这项目的后台逻辑参考了很多大神的帖子，前端也copy了好多同行的css</br>
</br>
开发过程中遇到了挺多大坑，vue-lazyload数据更新之后图片地址不重新渲染，前端8080端口和后台3000端口的cookie不共享，才知道原来cookie也有跨域这一说</br>
MongoDB查询不到字段返回的是null而不是错或者是0；v-for要把:key也带上，这样可以节省DOM</br>
MongoDB第一次用，误删了好几次的表，每次都手敲回来。最严重的是上周还把Git给清了，远程仓也没能幸免，搞得我毕设和一堆demo都没了。
</br></br>
# 另外
你要是诚心面试的话我会带着本子去

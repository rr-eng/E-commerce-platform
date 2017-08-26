# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

App.vue: 实现首页的header和footer,content部分采用vue-router方式进行切换。为首页的logo标志添加路由，在任一路由中点击logo都可跳转到首页。
         同时首页中存在登录，注册，关于，这三个功能的实现采用类似modal模态框的功能来实现。
headerComponents/dialog.vue:  可复用的dialog弹出框组件，首先会存在一个遮罩层来模拟modal效果，同时弹出框出现和消失时会有动画效果。该弹出框
                              通过props获得父组件的数据，来控制弹出框的显示和消失。当想要关闭弹出框时，通过this.$emit()来触发父组件事件，在
                              父组件中进行弹出框的关闭。 (因为一般不推荐在子组件中改变通过props获取到的父组件数据。)
headerComponents/LogForm.vue:  登录组件。实现比较简单，要求用户输入用户名和密码，并通过正则对用户名和密码进行验证，(注意一点：验证的提示信息通过
                               计算属性computed来实现)，关闭登录框时，通过this.$emit()触发父组件事件，改变App.vue中的登录等数据。
headerComponents/RegForm.vue:  注册组件。实现比较简单，要求用户输入手机号，并获取验证码，验证码的倒计时效果已经实现，但未与后台交互，所以获取不到                                真正的验证码，对于手机号的验证与登录组件类似。
                               用户的注册信息会使用localStorage进行本地存储。
headerComponents/AboutInfo.vue:  关于我们组件。直接调用了dialog弹出框组件，还未添加任何实际的功能。(后续更新中.....)
pages/Index.vue:  App.vue中的content内容，左侧的产品内容及最新消息内容都是以数据的形式渲染出来；右侧中的轮播调用slideShow轮播组件，四个产品以
                  数据的形式进行渲染。每个产品中，点击立即购买按钮会跳转到相应的路由。
pages/slideShow.vue:  可复用的轮播幻灯片组件。由图片和图片说明信息两部分组成。轮播图片数据通过props从父组件中获取，获取到的是一个存放图片信息的数                         组，为<a></a>标签绑定图片信息，将所有图片渲染出来。
pages/detail.vue:  算是四个产品详情页信息的控制者吧。采用vue-router路由切换方式展示四个产品的详细信息。为左侧的图片绑定路由映射(这一部分稍微有点难                    度)，根据不同的的路由显示所对应的不同图片。
pages/orderList.vue:  显示用户的订单信息。
detailComponents/product1.vue:  第一个产品详情页。 产品选择调用了radioChoose.vue单选框组件，Selection.vue下拉框组件，Count.vue数量组件，                                      立即购买时，调用了bankChoose。vue银行选择组件，checkDialog.vue支付状态选择框组件。
detailComponents/product2.vue:  第二个产品详情页。 产品选择调用了radioChoose.vue单选框组件，Selection.vue下拉框组件，Count.vue数量组件。                                      立即购买时，调用了bankChoose。vue银行选择组件，checkDialog.vue支付状态选择框组件。
detailComponents/product3.vue:  第三个产品详情页。 产品选择调用了checkboxChoose.vue多选框组件，Count.vue数量组件。                                                           立即购买时，调用了bankChoose。vue银行选择组件，checkDialog.vue支付状态选择框组件。
detailComponents/product4.vue:  第四个产品详情页。 产品选择调用了radioChoose.vue单选框组件，Count.vue数量组件。                                                                立即购买时，调用了bankChoose。vue银行选择组件，checkDialog.vue支付状态选择框组件。
detailSelectionComponents/radioChoose.vue:  可复用的单选框组件，通过props从父组件中的获取选择内容。每点击时，通过this.$emit()向父组件触发事件，
                                           获得当前的点击内容。
detailSelectionComponents/Selectione.vue:  可复用的下拉框框组件，通过props从父组件中的获取选择内容。每点击时，通过this.$emit()向父组件触发事件，
                                           获得当前的点击内容。
detailSelectionComponents/checkboxChoose.vue:  可复用的多选框组件，通过props从父组件中的获取选择内容。每点击时，通过this.$emit()向父组件触发事                                              件，获得当前的点击内容。
detailSelectionComponents/bankChooseChoose.vue:  银行选择组件。
detailSelectionComponents/chcekDialog.vue:  银行选择组件。

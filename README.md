# Vue Test Utils 文档
https://vue-test-utils.vuejs.org/zh/api/wrapper/#text

# Vue 组件的单元测试 文档
https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html

# 不错的掘金博客 vue单元测试介绍
https://juejin.cn/post/6856730547969622024

# Jest 文档
https://www.jestjs.cn/docs/using-matchers

# 开发过程中遇到的问题
## 报错：
```
SecurityError: localStorage is not available for opaque origins
```

## 报错：
    [vue-test-utils]: window is undefined, vue-test-utils needs to be run in a browser environment.
    You can run the tests in node using jsdom
    See https://vue-test-utils.vuejs.org/guides/#browser-environment for more details.

## 解决方案
```
testEnvironment:'jsdom',
verbose: true,
testURL: "http://localhost/",
```
参考资料：
https://blog.csdn.net/haodawang/article/details/81290184


# vue-jest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

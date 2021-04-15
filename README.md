# README

创建项目：

```bash
npx create-react-app override-cra --use-yarn
```

安装依赖：

```bash
cd override-cra
# 注意 less-loader 版本，请看下面的 Q & A
yarn add antd
yarn add customize-cra react-app-rewired babel-plugin-import less less-loader -D
```

package.json 同级目录下新建 `config-overrides.ts` 文件

```js
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // antd 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, // true: 使用 Less, 默认值：css
  }),
  // 配置 less-loader, modifyVars: 自定义 antd 主题
  addLessLoader({
    // 高版本 less-loader 需加上 lessOptions
    // lessOptions: {
    javascriptEnabled: true,
    modifyVars: {
      // '@primary-color': '#1DA57A'
    },
    // },
  })
);
```

修改 package.json 脚本 scripts：(react-scripts -> react-app-rewired)

```js
"scripts": {
  // "start": "react-scripts start",
  "start": "react-app-rewired start",
  // "build": "react-scripts build",
  "build": "react-app-rewired build",
  // "test": "react-scripts test",
  "test": "react-app-rewired test",
},
```

Q&A：

```text
报错: ./node_modules/antd/es/button/style/index.less (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-8-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-8-3!./node_modules/less-loader/dist/cjs.js??ref--5-oneOf-8-4!./node_modules/antd/es/button/style/index.less)
TypeError: this.getOptions is not a function

原因：
  less-loader 安装的版本过高
解决：
  yarn remove less-loader
  yarn add less-loader@5.0.0
```

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

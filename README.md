# react-typescript-demo
react-typescript-demo

## 创建项目
```bash
npx create-react-app react-typescript-demo --template typescript 

# or

yarn create react-app react-typescript-demo --template typescript
```

## 集成react-app-rewired customize-cra，用于重写cra的webpack配置
1. 安装react-app-rewired customize-cra
```
yarn add react-app-rewired customize-cra
```
2. 修改package.json中scripts
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
}
```



## 集成react-router和redux
1. 安装react-router redux
```
yarn add react-router redux
```
2. todo

## tsconfig配置
1. tsconfig配置说明：http://json.schemastore.org/tsconfig
2. tsconfig.json项目配置：
```
{
  "compilerOptions": { // 编译选择
    "target": "es5", // 指定ECMAScript目标版本。允许的值为“es3”、“es5”、“es6”、“es2015”、“es2016”、“es2017”、“es2018”或“esnext”。
    "lib": [ // 指定要包含在编译中的库文件。
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true, // 允许编译javascript文件。
    "skipLibCheck": true, // 跳过声明文件的类型检查
    "esModuleInterop": true, // 为运行时babel生态系统兼容性提供“……importstar”和“……importdefault”帮助，并为类型系统兼容性启用“——allowSyntheticDefaultImports”。
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块进行默认导入。这并不影响代码发出，只影响类型查询。
    "strict": true, // 启用所有严格的类型检查选项。
    "forceConsistentCasingInFileNames": true, // 不允许对同一文件使用不一致大小写的引用。
    "module": "esnext", // 指定模块代码生成:“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”或“esnext”。
    "moduleResolution": "node", // 指定模块解析策略:“node”(node)或“classic”
    "resolveJsonModule": true, // 包含导入的模块。json的扩展。
    "isolatedModules": true, // 无条件地为未解决的文件发出导入。
    "noEmit": true, // 不要发出输出。
    "jsx": "preserve" // 指定JSX代码生成:'preserve'、'react'或' reactive -native'。
  },
  "include": [ // 包含目录
    "src"
  ]
}
```
## 设置别名alias
https://blog.csdn.net/chrislincp/article/details/97312235

## 参考资料
https://ts.xcatliu.com/
https://github.com/facebook/create-react-app/issues/5645
https://blog.csdn.net/chrislincp/article/details/97312235
https://ant.design/docs/react/use-in-typescript-cn

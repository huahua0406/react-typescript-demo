import Mock from 'mockjs' // 引入mockjs
import { mockData, mockData1, HomeData } from './data' // 引入mock数据的文件
// 设置响应延时
Mock.setup({
	timeout: '200-600' //可以是整数，也可以是‘-’字符串
})

Mock.mock('/mock/test', 'post', mockData) // 根据数据模板生成模拟数据
Mock.mock('/mock/test1', 'get', mockData1)
Mock.mock('/mock/index2', 'post', (req) => {
	return {
		data: JSON.parse(req.body)
	}
})

// home users
Mock.mock('/mock/home/users', 'get', HomeData)

// https://www.jianshu.com/p/ad6d03510b9c
// https://blog.csdn.net/weixin_45232840/article/details/105918908

import request from '@/utils/request'

// 登录
export function login(data) {
	return request({
		url: `https://fastmock.site/mock/d451d648bf7d24e6bcfcd03fd9bfe605/react-tutorials/api/login`,
		method: 'post',
		data
	})
}

export function logout() {
    // todo
}

export function getUserList(params) {
	return request({
		url: `https://jsonplaceholder.typicode.com/users`,
		method: 'get',
		params
	})
}

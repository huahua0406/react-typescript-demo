import request from '@/utils/request'

// 登录
export function login(data) {
	return request({
		url: `/test`,
		method: 'get',
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

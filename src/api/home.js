import request from '@/utils/request'

export function getUserList(params) {
	return request({
		url: `/home/users`,
		method: 'get',
		params
	})
}
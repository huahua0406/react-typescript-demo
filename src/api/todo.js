import request from '@/utils/request'

export function getTodoList() {
    return request({
		url: `/get-todo-list`,
		method: 'get'
	})
}
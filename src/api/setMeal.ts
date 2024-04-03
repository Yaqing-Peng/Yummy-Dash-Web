import request from '@/utils/request'
/**
 *
 * setmeal management
 *
 **/

//page query
export const getSetmealPage = (params: any) => {
    return request({
        url: '/setmeal/page',
        method: 'GET',
        params: params
    })
}

//enable and disable setmeal
export const enableOrDisableSetmeal = (params: any) => {
    return request({
        url: `/setmeal/status/${params.status}`,
        method: 'POST',
        params: {id: params.id}
    })
}

//delete setmeal
export const deleteSetmeal = (ids: string) => {//1,2,3
    return request({
        url: '/setmeal',
        method: 'DELETE',
        params: {ids: ids}
    })
}


  
// 修改数据接口
export const editSetmeal = (params: any) => {
    return request({
        url: '/setmeal',
        method: 'put',
        data: { ...params }
    })
}

// 新增数据接口
export const addSetmeal = (params: any) => {
    return request({
        url: '/setmeal',
        method: 'post',
        data: { ...params }
    })
}

// 查询详情接口
export const querySetmealById = (id: string | (string | null)[]) => {
    return request({
        url: `/setmeal/${id}`,
        method: 'get'
    })
}



import request from '@/utils/request'
/**
 *
 * Employee management
 *
 **/
// Log in
export const login = (data: any) =>
  request({
    'url': '/employee/login',
    'method': 'post',
    data: data
  })

  //Log out
 export const userLogout = (params: any) =>
 request({
   'url': `/employee/logout`,
   'method': 'post',
   params
 })

 //Get Employee List/page query
 export const getEmployeeList = (params: any) =>
 request({
   'url': `/employee/page`,
   'method': 'get',
   'params': params
 })

 // enable/disable employee status: path variable
export const enableOrDisableEmployee = (params: any) =>
request({
  'url': `/employee/status/${params.status}`,
  'method': 'POST',
  'params': {id: params.id}
})

// add emp
export const addEmployee = (params: any) =>
request({
  'url': '/employee',
  'method': 'POST',
  'data': params
})

// get emp by id: path variable
export const queryEmployeeById = (id: number) =>
request({
  'url': `/employee/${id}`,
  'method': 'GET'
})

// update emp
export const updateEmployee = (params: any) =>
request({
  'url': '/employee',
  'method': 'PUT',
  'data': params
})
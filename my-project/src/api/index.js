import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT1 = 'baseinfo'
// POST请求方式
api.register = params => request.globalRequest(`${PORT1}/mobile/signUp`, 'POST', params, 1)
// GET请求方式
api.register2 = params => request.globalRequest(`${PORT1}/mobile/signUp${formatGetUri(params)}`, 'GET',{}, 1)
export default api
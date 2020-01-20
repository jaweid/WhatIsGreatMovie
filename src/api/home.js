import request from '@/services/http-request-service'

export default {
    topList(){
        return request({
            url:`top-list/list`,
            method:'post'
        })
    },
}
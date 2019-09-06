import axios from 'axios'

// 超时设定
axios.defaults.timeout = 15000
//跨域是否带  cookie
axios.defaults.withCredentials = false

//请求的拦截器
axios.interceptors.request.use(config => {
    //请求前做什么
    return config;
}, err => {
    //请求错误做什么
    Message.error('Request Timeout');
    return Promise.resolve(err);
});

//响应的拦截器
axios.interceptors.response.use(response => {
    const data = response.data;
    //响应后的数据做什么
    
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
        case 401:
            // 未登录 清除已登录状态
            Cookies.set('userInfo', '');
            setStore('accessToken', '');
            router.push('/login');
            break;
        case 403:
            // 没有权限
            if (data.message !== null) {
                if (data.message == 'You are not logged in') {
                    Message.error('Time out');
                } else {
                    Message.error(data.message);
                }
            } else {
                Message.error("Unkown Error");
            }
            break;
        case 500:
            // 错误
            if (data.message !== null) {
                if (data.message == 'You are not logged in') {
                    Message.error('Time out');
                } else {
                    Message.error(data.message);
                }
            } else {
                Message.error("Unkown Error");
            }
            break;
        default:
            return data;
    }

    return data;
}, err => {
    //响应错误做什么
    Message.error('Request Timeout');
    return Promise.resolve(err);
});


export const getRequest=(url,params) =>{
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': window.localStorage.getItem('accessToken')
        }
    });
};

export const postAjaxRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'application/json',
            'accessToken': window.localStorage.getItem('accessToken')
        }
    });
};

export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': window.localStorage.getItem('accessToken')
        }
    });
};
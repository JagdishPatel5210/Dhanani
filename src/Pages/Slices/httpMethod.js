import axios from "axios"
import { errorPopup } from "./common";


export const BaseUrl = 'http://192.168.29.3:8585' 
// export const BaseUrl = 'https://localhost:44328'  //Swagger Ma Check Karva Mate
// export const BaseUrl = 'http://43.254.31.133:9393'  //Maruti Online
let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJVc2VyIjoiVVBQNUViR040OGZGTFordzAwK3UyQT09IiwianRpIjoiNTBlYjdlMDItNDg1MC00ZDM3LThkZDUtY2JmYzM1NDk3OGQ1IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibXVrZXNoYmh1dmFAaG90bWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIxIiwiUm9sZUdyb3VwIjoiQWRtaW4iLCJleHAiOjE3MTQyODA4NjIsImlzcyI6ImlEaW1UcmFkZSIsImF1ZCI6ImlEaW1UcmFkZSJ9.UQNNA1y_eTsJ3kNLAPpRxQIEXNktUcnSsTQlWuGv-WE'
// let loginUserDetail = getCookie('loginUserDetail') ? JSON.parse(getCookie('loginUserDetail')) : null;
let loginUserDetail = '';

if(localStorage?.getItem('loginUserDetail')){
    loginUserDetail = JSON.parse(localStorage?.getItem('loginUserDetail'))
}
export let headerObj = {
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded', // or 'application/json' depending on server expectations
        'Content-Type': 'application/json', // or 'application/json' depending on server expectations
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',

        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',

        'Authorization': 'Bearer ' + (loginUserDetail ? loginUserDetail.AccessToken : ''),
    }
}
export const HttpMethod = {
         
    get: async (url) => {
        try { 
            // const token = await GetAccessTokenNew();  
            // if (token===undefined)
            // {
            //     <Link to='/login'></Link>
            //     errorPopup("Invalid Token Pleaes Login Again")
            //     return
            // }

            const res = await axios.get(BaseUrl + url, headerObj);
            return res; // Including both response object and data
        } catch (error) {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        }
    },

    getWithPara1: async (url, obj) => {
        try { 
            const res = await axios.get(BaseUrl + url, obj, headerObj);
            return res; // Including both response object and data
        } catch (error) {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        }
    },

    delete: async (url) => { 
        // const token = await GetAccessToken();

        return await axios.delete(BaseUrl + url, headerObj).then((res) => {
            return res;
        }).catch((error) => {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.request) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        });
    },
    post: async (url, obj) => {
        // const token = await GetAccessToken();

        return axios.post(BaseUrl + url, obj, headerObj).then((res) => { 
            return res;
        }).catch((error) => {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        });
    },

    getWithPara2: async (url, obj) => {
        // const token = await GetAccessToken();

        return axios.get(BaseUrl + url, obj, headerObj).then((res) => { 
            return res;
        }).catch((error) => {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        });
    },
    postWithformData: async (url, data) => {
        // const token = await GetAccessToken();

        return axios.post(BaseUrl + url, data, headerObj).then((res) => {
            return res.data;
        }).catch((error) => {
        })
    },

    getWithPara: async (url, obj) => {
        return axios.get(BaseUrl + url, obj, headerObj).then((res) => {
            return res;
        }).catch((error) => {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.request) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        })
    },

    Register: async (url, obj) => {
        return axios.post(BaseUrl + url, obj, headerObj).then((res) => {
            return res;
        }).catch((error) => {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.request) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        })
    },
    
    login: async (url, obj) => {
        debugger
        return axios.post(BaseUrl + url, obj, headerObj).then((res) => {
            return res;
        }).catch((error) => {
            if (error.response) {
                errorPopup(error.response.data)
                return error.response
            } else if (error.request) {
                errorPopup(error.response.data)
                return error.response
            } else {
                errorPopup(error)
                return error
            }
        });
    },
}


export const sendError_notify = (res) => {
    if (res === undefined) {
        errorPopup("some thing went wrong")
    }
    else if (res.status == 400) {
        errorPopup(res.data)
    }
    else if (res.status === 404) {
        errorPopup('Api not Found')
    }
    else if (res) {
        errorPopup(res)
    }
}

export const GetColumnconfig = async (viewname) => {
    let GetDet = await HttpMethod.get(`/SystemConfig/ColumnConfig/Get?MenuCode=` + viewname) 
    return GetDet.data.ColumnConfig
}

export const GetDropDownList = async (obj) => {
    let ObjParam = {
        "Master": "",
        "Text": "",
        "IsActive": true,
        "RoleId": 0,
        "UserId": 0,
        ...obj // Overwrite keys if provided
    };
    
    let GetDet = await HttpMethod.post(`/Common/DropDown/GetDropDown`, ObjParam)  
    return GetDet.data.DropDown
}

export const GetMenuMasterList = async (obj) => {
    let ObjParam = {
        "Master": "",
        "Text": "",
        "IsActive": true,
        "RoleId": 0,
        "UserId": 0,
        ...obj // Overwrite keys if provided
    };

    let GetDet = await HttpMethod.post(`/Common/DropDown/MenuMaster`, ObjParam)

    return GetDet.data
}
// const GetAccessTokenNew = async () => {
//     const cookies = new Cookies();
//     const expireToken = cookies.get('APIToken');
//     if (expireToken < Date.now() || expireToken === undefined) {
//         <Link to='/login'></Link>
//     } else {
//         return cookies.get('APIToken');
//     }
// };







// const ExampleComponent = () => {
//     const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

//     // Function to set the userToken cookie
//     const setUserTokenCookie = (token) => {
//         setCookie('userToken', token, { path: '/' }); // Set userToken cookie with path '/'
//     };

//     // Function to remove the userToken cookie
//     const removeUserTokenCookie = () => {
//         removeCookie('userToken'); // Remove userToken cookie
//     };
// };
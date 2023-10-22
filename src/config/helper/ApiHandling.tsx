import axios from "axios";


export const apiHandle = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers:{
    //     Authorization : `Bearer`
    // }
})

export const Get = (endPoint: string, id?: string | number) => {
    return (apiHandle.get(`${endPoint}/${id ? id : ''}
    `))
}

export const Put = (endPoint: string, id?: string | number) => {
    return (apiHandle.put(`${endPoint} 
    `))
}

export const Del = (endPoint: string, id?: string | number) => {
    return (apiHandle.delete(`${endPoint}/${id}    
    `))
}



export const post = () => { }
export const put = () => { }
export const Delete = () => { }
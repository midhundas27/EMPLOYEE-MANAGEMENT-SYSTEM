import axios from 'axios';

const baseURL = "https://fuzzy-raincoat-eel.cyclic.app/"

export const axiosGet = (url) =>{
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPost = (url, data) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosDelete = (url) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPut = (url, data) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}

// Create an Axios instance with a custom configuration
export const createAxiosWithToken = () => {
    const token = localStorage.getItem('token');
    
    return axios.create({
      baseURL: `${baseURL}`, // Your server's URL
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
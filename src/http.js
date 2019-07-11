import axios from 'axios';
import router from './router'

axios.interceptors.request.use(config => {
    
    if (localStorage.wxToken) {//
        config.headers.Authorization = localStorage.wxToken ;
    }
    return config;//
}, error => {
     
        return Promise.reject(error);
})



axios.interceptors.response.use(
  response => {
 
    return response;
  },

  error => {
    
      const { status } = error.response;
      if (status == 401) {
           
          alert('page expired.');
        
          localStorage.removeItem('wxtoken');
        
          router.push('/login')
      } else {
          alert(error.response.data)
        }
    return Promise.reject(error);
  }
);
export default axios;
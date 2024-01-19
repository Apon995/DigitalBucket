import axios from 'axios'
import { useEffect } from 'react';
import useAuth from '../CustomHooks/useAuth';
import { useNavigate } from 'react-router-dom';


const axiosFetch = axios.create({
  // http://localhost:5000
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
})

function useFetch() {
  const auth = useAuth()



  useEffect(() => {
    const interceptor = axiosFetch.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      
          auth && auth.LogOut();
         
        }
        return Promise.reject(error);
      }
    );

    return () => {
      
      axiosFetch.interceptors.response.eject(interceptor);
    };
  }, [auth]);

  return axiosFetch;
}

export default useFetch
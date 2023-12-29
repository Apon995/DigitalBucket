import axios from 'axios'
import React from 'react'


const axiosFetch = axios.create({
  // http://localhost:5000
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
})

function useFetch() {

  return axiosFetch;
}

export default useFetch
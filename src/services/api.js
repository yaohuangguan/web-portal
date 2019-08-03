import axios from 'axios'


export default axios.create({
    baseURL: `http://ec2-18-188-145-28.us-east-2.compute.amazonaws.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }

  })

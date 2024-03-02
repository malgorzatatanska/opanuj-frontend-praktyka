import axios from 'axios';


let time = 0;

const calculateDuration = (startTime) => {
  const endTime = new Date().getTime();;
  return endTime - startTime;
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  startTime: null,
  getDuration() {
    return calculateDuration(this.startTime);
  },
})


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  time = new Date().getTime();
  config.startTime = time;
  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Do something with response data
  console.log("Response time first solution:", new Date().getTime() - time, 'ms');
  console.log("Response time: - axios config solution ", response.config.getDuration(), 'ms');
  return response;
});

const {
  data: { articles },
} = await axiosInstance.get('/api/data/articles?timeout=3000', {
  
});

document.querySelector('#data').innerHTML = articles[0].content;

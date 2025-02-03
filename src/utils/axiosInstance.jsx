 import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'https://testpatience.onrender.com/api/v1', // Replace with your API URL
   baseURL: import.meta.mode === "development" ? "https://patient.ng:8081/api/v1" : "https://patient.ng:8081/api/v1",
   //baseURL: import.meta.mode === "development" ? "http://77.37.124.96:8081/api/v1" : "http://77.37.124.96:8081/api/v1",
  withCredentials: true,
  //timeout: 1000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance; 

/* import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://77.37.124.96:8081/api/v1',
  //withCredentials: true,  // Include cookies (for refresh tokens)
});

// Function to get access token from storage
const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

// Set Authorization header before each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Refresh token function
let isRefreshing = false;
let refreshSubscribers = [];

// Broadcast new token to all subscribers
const onRefreshed = (token) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

// Axios response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      // Avoid retry loop
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Request a new token using the refresh token
        const refresh = localStorage.getItem('refreshToken');
        const response = await axios.post('http://77.37.124.96:8081/api/v1/get-access-token', {refreshToken: refresh}, {
          withCredentials: true,
        });
        console.log("NEW ACCESS TOKEN", response.data.result)
        const newAccessToken = response.data.result;
        localStorage.setItem('accessToken', newAccessToken);
        
        // Retry the original request with the new token
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        onRefreshed(newAccessToken);
        return axiosInstance(originalRequest);
      } catch (err) {
        // Logout if refresh fails
        console.error('Refresh token failed', err);
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
 */
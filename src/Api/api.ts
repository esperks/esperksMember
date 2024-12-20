// apiService.js
import axios from "axios";
const baseURL = "http://api.esperks.com"; // replace with your API base URLhttp://api.esperks.com/

const apiService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers if needed
  },
});

const ApiService = {
  // Function to get user's coordinates
  getUserCoordinates: () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { coords, timestamp } = position;
          const LocationInfoData = {
            timestamp: timestamp,
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
          };
          resolve(LocationInfoData);
          return LocationInfoData;
        },
        (error) => {
          console.log(error, "Error from geolocation API");
          reject(error);
          return error;
        }
      );
    });
  },
  setToken: (token: string) => {
    // Set the Authorization header for all requests
    // apiService.defaults.headers.common["token"] = `${token}`;
    apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  // Function to make a GET request with query parameters
  get: async (endpoint: any, params = {}) => {
    const userCoordinates: any = await ApiService.getUserCoordinates();
    apiService.defaults.headers.common["lat"] = userCoordinates.latitude;
    apiService.defaults.headers.common["lng"] = userCoordinates.longitude;
    try {
      const response = await apiService.get(endpoint, { params });
      console.log(response);
      return response;
    } catch (error) {
      let response = error;
      return response;
    }
  },

  // Function to make a POST request with query parameters
  post: async (endpoint: any, data: any, params = {}) => {
    const userCoordinates: any = await ApiService.getUserCoordinates();
    apiService.defaults.headers.common["lat"] = userCoordinates.latitude;
    apiService.defaults.headers.common["lng"] = userCoordinates.longitude;
    try {
      console.log(endpoint, data, params);
      const response = await apiService.post(endpoint, data, { params });
      return response;
    } catch (error) {
      let response = error;
      return response;
    }
  },

  // Function to make a PUT request with query parameters
  put: async (endpoint: any, data: any, params = {}) => {
    const userCoordinates: any = await ApiService.getUserCoordinates();
    apiService.defaults.headers.common["lat"] = userCoordinates.latitude;
    apiService.defaults.headers.common["lng"] = userCoordinates.longitude;
    try {
      const response = await apiService.put(endpoint, data, { params });
      return response;
    } catch (error) {
      let response = error;
      return response;
    }
  },

  // Function to make a PUT request with query parameters
  patch: async (endpoint: any, data: any, params = {}) => {
    const userCoordinates: any = await ApiService.getUserCoordinates();
    apiService.defaults.headers.common["lat"] = userCoordinates.latitude;
    apiService.defaults.headers.common["lng"] = userCoordinates.longitude;
    try {
      const response = await apiService.patch(endpoint, data, { params });
      return response;
    } catch (error) {
      let response = error;
      return response;
    }
  },

  // Function to make a DELETE request with query parameters
  delete: async (endpoint: any, params = {}) => {
    const userCoordinates: any = await ApiService.getUserCoordinates();
    apiService.defaults.headers.common["lat"] = userCoordinates.latitude;
    apiService.defaults.headers.common["lng"] = userCoordinates.longitude;
    try {
      const response = await apiService.delete(endpoint, { params });
      return response;
    } catch (error) {
      let response = error;
      return response;
    }
  },
};

export default ApiService;

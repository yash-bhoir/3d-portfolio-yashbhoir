import axios from 'axios';
import type { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = API_BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add interceptors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
      }
    );
  }

  /**
   * GET request
   */
  async get<T>(url: string) {
    try {
      const response = await this.axiosInstance.get<T>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * POST request
   */
  async post<T>(url: string, data: any) {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * PUT request
   */
  async put<T>(url: string, data: any) {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string) {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();

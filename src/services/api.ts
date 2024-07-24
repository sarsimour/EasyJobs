import Taro from '@tarojs/taro';
import { FilterConfig } from '../types/filter';
import { getFilters as getFakeFilters } from './fake';

export const getFilters = async (): Promise<FilterConfig[]> => {
  try {
    const data = await getFakeFilters();
    return data.filters;
    // const response = await Taro.request({
    //   url: 'YOUR_API_ENDPOINT/filter-config',
    //   method: 'GET',
    // });
    // return response.data;
  } catch (error) {
    console.error('Error fetching filter config:', error);
    throw error;
  }
};

export const startJobApplication = async (filters: Record<string, any>): Promise<void> => {
  try {
    await Taro.request({
      url: 'YOUR_API_ENDPOINT/start-application',
      method: 'POST',
      data: filters,
    });
  } catch (error) {
    console.error('Error starting job application:', error);
    throw error;
  }
};

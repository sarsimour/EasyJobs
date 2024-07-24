import Taro from '@tarojs/taro';
import { SavedFilter } from '../types/filter';

const SAVED_FILTERS_KEY = 'savedFilters';

export const saveFilter = async (filter: SavedFilter): Promise<void> => {
  try {
    const savedFilters = await getSavedFilters();
    savedFilters.push(filter);
    await Taro.setStorage({ key: SAVED_FILTERS_KEY, data: savedFilters });
  } catch (error) {
    console.error('Error saving filter:', error);
  }
};

export const getSavedFilters = async (): Promise<SavedFilter[]> => {
  try {
    const { data } = await Taro.getStorage({ key: SAVED_FILTERS_KEY });
    return data || [];
  } catch (error) {
    console.error('Error getting saved filters:', error);
    return [];
  }
};

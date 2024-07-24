import { create } from 'zustand';
import { FilterState, SavedFilter } from '../types/filter';
import { saveFilter, getSavedFilters } from '../utils/storage';

interface FilterStore {
  filterState: FilterState;
  savedFilters: SavedFilter[];
  setFilterState: (state: FilterState) => void;
  saveCurrentFilter: (name: string) => void;
  loadSavedFilters: () => Promise<void>;
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  filterState: {},
  savedFilters: [],
  setFilterState: (state) => set({ filterState: state }),
  saveCurrentFilter: (name) => {
    const { filterState } = get();
    const newSavedFilter = { name, state: filterState };
    saveFilter(newSavedFilter);
    set((state) => ({ savedFilters: [...state.savedFilters, newSavedFilter] }));
  },
  loadSavedFilters: async () => {
    const savedFilters = await getSavedFilters();
    set({ savedFilters });
  },
}));

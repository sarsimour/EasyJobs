import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtButton, AtInput } from 'taro-ui';
import { useFilterStore } from '../../store/filterStore';
import { fetchFilterConfig, startJobApplication } from '../../services/api';
import { FilterConfig } from '../../types/filter';
import FilterItem from './FilterItem';

const JobFilter: React.FC = () => {
  const [filterConfig, setFilterConfig] = useState<FilterConfig[]>([]);
  const [saveName, setSaveName] = useState('');
  const { filterState, setFilterState, saveCurrentFilter, loadSavedFilters } = useFilterStore();

  useEffect(() => {
    fetchFilterConfig().then(setFilterConfig);
    loadSavedFilters();
  }, []);

  const handleFilterChange = (name: string, value: string | string[]) => {
    setFilterState({ ...filterState, [name]: value });
  };

  const handleSaveFilter = () => {
    if (saveName) {
      saveCurrentFilter(saveName);
      setSaveName('');
    }
  };

  const handleStartApplication = () => {
    startJobApplication(filterState);
  };

  return (
    <View>
      {filterConfig.map((config) => (
        <FilterItem
          key={config.name}
          config={config}
          value={filterState[config.name] || (config.type === 'checkbox' ? [] : '')}
          onChange={handleFilterChange}
        />
      ))}
      <AtInput
        name="saveName"
        title="保存方案名称"
        type="text"
        placeholder="输入方案名称"
        value={saveName}
        onChange={(v) => setSaveName(v as string)}
      />
      <AtButton onClick={handleSaveFilter}>保存筛选方案</AtButton>
      <AtButton onClick={handleStartApplication} type="primary">开始申请</AtButton>
    </View>
  );
};

export default JobFilter;

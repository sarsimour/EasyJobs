// FilterPage.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import { AtList, AtListItem, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { getFilters } from '../services/api';
import { Filter } from '../types/filter';
import { FilterModal } from './FilterModal';

const FilterPage: React.FC = () => {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const fetchFilters = async () => {
      const data = await getFilters();
      setFilters(data.filters);
    };
    fetchFilters();
  }, []);

  const handleFilterClick = (filter: Filter) => {
    setSelectedFilter(filter);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFilter(null);
  };

  const handleModalConfirm = (filterName: string, selected: string[]) => {
    setSelectedOptions(prev => ({ ...prev, [filterName]: selected }));
    handleModalClose();
  };

  const getSelectedCount = (filter: Filter) => {
    return selectedOptions[filter.name]?.length || 0;
  };

  const getSelectedText = (filter: Filter) => {
    const selected = selectedOptions[filter.name] || [];
    if (selected.length === 0) return '未选择';
    if (selected.length <= 2) return selected.join(', ');
    return `${selected[0]}, ${selected[1]}...（共${selected.length}项）`;
  };

  return (
    <View className='filter-page'>
      <View className='filter-header'>
        <Text>筛选方案设置</Text>
        <Button>导入方案</Button>
        <Button>新建方案</Button>
      </View>

      <AtList>
        {filters.map((filter) => (
          <AtListItem
            key={filter.name}
            title={filter.name}
            extraText={`已选择: ${getSelectedCount(filter)}`}
            note={getSelectedText(filter)}
            arrow='right'
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </AtList>

      <Button className='apply-button'>开始申请</Button>

      {selectedFilter && (
        <FilterModal
          isOpen={isModalOpen}
          filter={selectedFilter}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
          initialSelected={selectedOptions[selectedFilter.name] || []}
        />
      )}
    </View>
  );
};

export default FilterPage;

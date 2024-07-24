import React, { useState } from 'react';
import { View, Text, Checkbox, Button } from '@tarojs/components';
import { AtDrawer, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton } from 'taro-ui';
import { FilterConfig } from '../../types/filter';
import './index.scss';

interface FilterBarProps {
  filters: FilterConfig[];
  onApplyFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onApplyFilters }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterConfig | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [currentOptions, setCurrentOptions] = useState<any[]>([]);
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const handleFilterClick = (filter: FilterConfig) => {
    setSelectedFilter(filter);
    setCurrentOptions(Object.keys(filter.options));
    setBreadcrumb([filter.name]);
    setModalVisible(true);
  };

  const handleOptionClick = (option: string) => {
    if (selectedFilter) {
      const newBreadcrumb = [...breadcrumb, option];
      setBreadcrumb(newBreadcrumb);
      const newOptions = selectedFilter.options;
      newBreadcrumb.slice(1).forEach((key) => {
        if (newOptions[key]) {
          newOptions = newOptions[key];
        }
      });
      setCurrentOptions(newOptions);
    }
  };

  const handleOptionChange = (filterName: string, optionValue: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [filterName]: optionValue,
    });
  };

  const renderFilterOptions = (options: any) => {
    if (Array.isArray(options)) {
      return options.map((option: any) => (
        <Checkbox
          key={option.value}
          value={option.value}
          checked={selectedOptions[selectedFilter!.name] === option.value}
          onClick={() => handleOptionChange(selectedFilter!.name, option.value)}
        >
          {option.label}
        </Checkbox>
      ));
    } else {
      return Object.keys(options).map((option) => (
        <AtListItem
          key={option}
          title={option}
          arrow="right"
          onClick={() => handleOptionClick(option)}
        />
      ));
    }
  };

  return (
    <View className="filter-bar">
      <View className="filter-categories">
        {filters.map(filter => (
          <AtButton key={filter.name} onClick={() => handleFilterClick(filter)}>
            {filter.name}
          </AtButton>
        ))}
      </View>
      <AtModal isOpened={modalVisible} onClose={() => setModalVisible(false)}>
        <AtModalHeader>{breadcrumb.join(' / ')}</AtModalHeader>
        <AtModalContent>
          {selectedFilter && renderFilterOptions(currentOptions)}
        </AtModalContent>
        <AtModalAction>
          <AtButton onClick={() => setModalVisible(false)}>关闭</AtButton>
        </AtModalAction>
      </AtModal>
      <View className="filter-actions">
        <AtButton type="primary" onClick={onApplyFilters}>保存方案</AtButton>
        <AtButton type="secondary" onClick={() => setDrawerVisible(true)}>开始找工作</AtButton>
      </View>
    </View>
  );
};

export default FilterBar;

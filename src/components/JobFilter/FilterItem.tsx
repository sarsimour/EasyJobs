import React from 'react';
import { View } from '@tarojs/components';
import { AtCheckbox, AtRadio } from 'taro-ui';
import { FilterConfig, FilterState } from '../../types/filter';

interface FilterItemProps {
  config: FilterConfig;
  value: string | string[];
  onChange: (name: string, value: string | string[]) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ config, value, onChange }) => {
  switch (config.type) {
    case 'checkbox':
      return (
        <AtCheckbox
          options={config.options as any}
          selectedList={value as string[]}
          onChange={(v) => onChange(config.name, v)}
        />
      );
    case 'radio':
      return (
        <AtRadio
          options={config.options as any}
          value={value as string}
          onClick={(v) => onChange(config.name, v)}
        />
      );
    // Implement nested-checkbox if needed
    default:
      return null;
  }
};

export default FilterItem;

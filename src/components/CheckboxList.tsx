import React from 'react';
import { View } from '@tarojs/components';
import { AtCheckbox } from 'taro-ui';
import { FilterOption } from '../types/filter';

interface CheckboxListProps {
  options: FilterOption[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  options,
  selected,
  onSelectionChange,
}) => {
  return (
    <AtCheckbox
      options={options}
      selectedList={selected}
      onChange={onSelectionChange}
    />
  );
};

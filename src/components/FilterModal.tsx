// FilterModal.tsx
import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { Filter, NestedOptions } from '../types/filter';
import { flattenOptions } from './utils/util';
import { CheckboxList } from './CheckboxList';
import { NestedCheckboxList } from './NestedCheckboxList';
import { MultiNestedCheckboxList } from './MultiNestedCheckboxList';

interface FilterModalProps {
  isOpen: boolean;
  filter: Filter;
  onClose: () => void;
  onConfirm: (filterName: string, selected: string[]) => void;
  initialSelected: string[];
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  filter,
  onClose,
  onConfirm,
  initialSelected,
}) => {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const handleConfirm = () => {
    onConfirm(filter.name, selected);
  };

  const renderContent = () => {
    switch (filter.type) {
      case 'checkbox':
        return (
          <CheckboxList
            options={filter.options as FilterOption[]}
            selected={selected}
            onSelectionChange={setSelected}
          />
        );
      case 'nested-checkbox':
        return (
          <NestedCheckboxList
            options={filter.options as NestedOptions}
            selected={selected}
            onSelectionChange={setSelected}
          />
        );
      case 'multi-nested-checkbox':
        return (
          <MultiNestedCheckboxList
            options={filter.options as NestedOptions}
            selected={selected}
            onSelectionChange={setSelected}
          />
        );
      default:
        return <Text>未知的筛选类型</Text>;
    }
  };

  return (
    <AtModal isOpened={isOpen} onClose={onClose}>
      <AtModalHeader>{filter.name}</AtModalHeader>
      <AtModalContent>{renderContent()}</AtModalContent>
      <AtModalAction>
        <Button onClick={onClose}>取消</Button>
        <Button onClick={handleConfirm}>确定</Button>
      </AtModalAction>
    </AtModal>
  );
};

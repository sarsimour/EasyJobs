import React from 'react';
import { View, Text } from '@tarojs/components';
import BottomNav from '../../components/BottomNavigation';

const WorkPage: React.FC = () => {
  return (
    <View className="work-page">
      <Text>工作页面</Text>
      <BottomNav />
    </View>
  );
};

export default WorkPage;

import React from 'react';
import { View, Text } from '@tarojs/components';
import BottomNav from '../../components/BottomNavigation';

const WorkPage: React.FC = () => {
  return (
    <View className="resources-page">
      <Text>资源页面</Text>
      <BottomNav />
    </View>
  );
};

export default WorkPage;

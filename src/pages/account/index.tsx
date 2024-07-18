import React from 'react';
import { View, Text } from '@tarojs/components';
import BottomNav from '../../components/BottomNavigation';

const WorkPage: React.FC = () => {
  return (
    <View className="account-page">
      <Text>账号页面</Text>
      <BottomNav />
    </View>
  );
};

export default WorkPage;

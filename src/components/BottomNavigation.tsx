import React, { useState, useEffect } from 'react';
import Taro, { useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';

const BottomNav: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const path = router.path;
    if (path.includes('/pages/work/')) {
      setCurrent(0);
    } else if (path.includes('/pages/account/')) {
      setCurrent(1);
    } else if (path.includes('/pages/resources/')) {
      setCurrent(2);
    }
  }, [router.path]);

  const handleClick = (value: number) => {
    setCurrent(value);
    let url = '';
    switch(value) {
      case 0:
        url = '/pages/work/index';
        break;
      case 1:
        url = '/pages/account/index';
        break;
      case 2:
        url = '/pages/resources/index';
        break;
    }
    Taro.redirectTo({ url });
  };

  return (
    <View className='custom-tab-bar'>
      <AtTabBar
        fixed
        tabList={[
          { title: '工作', iconType: 'bullet-list' },
          { title: '账号', iconType: 'user' },
          { title: '资源', iconType: 'folder' }
        ]}
        onClick={handleClick}
        current={current}
      />
    </View>
  );
};

export default BottomNav;

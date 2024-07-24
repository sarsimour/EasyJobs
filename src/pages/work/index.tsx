import React from 'react'
import { View } from '@tarojs/components'
import FilterPage from '../../components/FilterPage'

import './index.scss'

const Work: React.FC = () => {
  return (
    <View className='work'>
      <FilterPage />
    </View>
  )
}

export default Work

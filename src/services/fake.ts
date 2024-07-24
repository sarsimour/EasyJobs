export const getFilters = async () => {
  return {
    filters: [
      {
        name: '城市和区域',
        type: 'nested-checkbox',
        options: {
          全国: [],
          北京: ['海淀区', '朝阳区', '西城区', '东城区'],
          上海: ['黄浦区', '浦东新区', '静安区'],
          // 其他城市和区域
        },
      },
      {
        name: '公司行业',
        type: 'nested-checkbox',
        options: {
          IT: ['电子/通信/半导体', '互联网/电商', '软件开发'],
          服务业: ['餐饮服务', '教育培训', '医疗健康'],
          制造业: ['机械制造', '汽车制造', '化工/能源'],
          // 其他公司行业
        },
      },
      {
        name: '职位类型',
        type: 'multi-nested-checkbox',
        options: {
          IT: {
            '软件开发': [
              { value: 'frontend', label: '前端开发' },
              { value: 'backend', label: '后端开发' },
              { value: 'fullstack', label: '全栈开发' },
            ],
            '硬件开发': [
              { value: 'hardware', label: '硬件工程师' },
              { value: 'embedded', label: '嵌入式开发' },
            ],
          },
          服务业: {
            '餐饮服务': [
              { value: 'chef', label: '厨师' },
              { value: 'waiter', label: '服务员' },
            ],
            '教育培训': [
              { value: 'teacher', label: '教师' },
              { value: 'trainer', label: '培训师' },
            ],
          },
          // 其他职位类型
        },
      },
      {
        name: '薪资待遇',
        type: 'checkbox',
        options: [
          { value: '3K以下', label: '3K以下' },
          { value: '3-5K', label: '3-5K' },
          { value: '5-10K', label: '5-10K' },
          { value: '10-20K', label: '10-20K' },
          { value: '20-50K', label: '20-50K' },
          { value: '50K以上', label: '50K以上' },
        ],
      },
      {
        name: '融资阶段',
        type: 'checkbox',
        options: [
          { value: '不限', label: '不限' },
          { value: '未融资', label: '未融资' },
          { value: '天使轮', label: '天使轮' },
          { value: 'A轮', label: 'A轮' },
          { value: 'B轮', label: 'B轮' },
          { value: 'C轮', label: 'C轮' },
          { value: 'D轮及以上', label: 'D轮及以上' },
          { value: '已上市', label: '已上市' },
          { value: '不需要融资', label: '不需要融资' },
        ],
      },
      {
        name: '公司规模',
        type: 'checkbox',
        options: [
          { value: '不限', label: '不限' },
          { value: '0-20人', label: '0-20人' },
          { value: '20-99人', label: '20-99人' },
          { value: '100-499人', label: '100-499人' },
          { value: '500-999人', label: '500-999人' },
          { value: '1000-9999人', label: '1000-9999人' },
          { value: '10000人以上', label: '10000人以上' },
        ],
      },
      {
        name: '学历要求',
        type: 'checkbox',
        options: [
          { value: '不限', label: '不限' },
          { value: '初中及以下', label: '初中及以下' },
          { value: '高中', label: '高中' },
          { value: '中专/中技', label: '中专/中技' },
          { value: '大专', label: '大专' },
          { value: '本科', label: '本科' },
          { value: '硕士', label: '硕士' },
          { value: '博士', label: '博士' },
        ],
      },
      {
        name: '工作经验',
        type: 'checkbox',
        options: [
          { value: '不限', label: '不限' },
          { value: '应届毕业生', label: '应届毕业生' },
          { value: '1年以下', label: '1年以下' },
          { value: '1-3年', label: '1-3年' },
          { value: '3-5年', label: '3-5年' },
          { value: '5-10年', label: '5-10年' },
          { value: '10年以上', label: '10年以上' },
        ],
      },
    ],
  };
};

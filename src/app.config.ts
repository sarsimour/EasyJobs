export default {
  pages: [
    'pages/work/index',
    'pages/account/index',
    'pages/resources/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/work/index',
        text: '工作'
      },
      {
        pagePath: 'pages/account/index',
        text: '账号'
      },
      {
        pagePath: 'pages/resources/index',
        text: '资源'
      }
    ]
  }
};

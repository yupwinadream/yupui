/*
 * @Author: Qiao YuPei
 * @Date: 2022-03-08 13:45:04
 * @LastEditors: Qiao YuPei
 * @LastEditTime: 2022-03-09 15:07:55
 * @Description: file content
 */
module.exports = {
  title: 'YupUI',
  description: '慕课网学习',
  base: "/yupui/",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/yupwinadream/yupui', target: '_blank' },
      { text: 'Npm', link: 'https://www.npmjs.com/package/yup-ui', target: '_blank' },
    ],
    sidebar: [
      '/',
      '/componentDocs/card'
    ]
  }
}
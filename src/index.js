import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import React from 'react';
import { ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
moment.locale('zh-cn');

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
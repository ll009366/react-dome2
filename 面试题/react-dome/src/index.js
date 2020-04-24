import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import routes from './router/index.js';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
//注入redux
import { Provider } from 'react-redux';
import store from './store/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

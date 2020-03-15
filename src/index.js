import React from 'react';
import {render} from 'react-dom';
//import {Provider} from 'react-redux';



import Auth from './components/shared/Auth'
import App from './components/App';
//import {store} from './store';

render(
//    <Provider store={store}>
      <Auth>
        {App}
      </Auth>,
//    </Provider>,
    document.getElementById('root')
)
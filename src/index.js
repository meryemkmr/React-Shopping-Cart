
import React from 'react';
import ReactDOM from 'react-dom';

//Import redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer'
import './App.css';
import GoogleFontLoader from 'react-google-font-loader';
import 'mdbreact/dist/css/mdb.css';

//router 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Home from './components/Home';
import Cart from './components/Cart';




let store = createStore(cartReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <BaseLayout>
        {/* <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400,'400i'],}]}/> */}
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
         
        </Switch>
      </BaseLayout>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);



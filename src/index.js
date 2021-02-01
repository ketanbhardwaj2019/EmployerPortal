import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import App from './containers/App';
import { fetchConfig } from './redux/actions/configActions';
//import 'web-ui-components/lib/app.vm.css';

class AppForm extends Component {
  componentDidMount() {
    store.dispatch(fetchConfig());
  }

  render() {
    const { config } = this.props;
    return (
      <Provider store={store}>
        <div> 
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default AppForm;

ReactDOM.render(<AppForm />, document.getElementById("root"));
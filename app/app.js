import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Provider, connect} from 'react-redux'
import store from './store'
import App from './modules/app'

class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <App.SplashScreen></App.SplashScreen>
            </Provider>
        );
    }
}


// export default connect()(App)
export default Main
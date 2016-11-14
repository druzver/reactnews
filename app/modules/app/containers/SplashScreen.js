import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {View, Text, Button} from 'react-native'
import * as actions from './../actions'


class SplashScreen extends Component {

    render() {
        console.log('p', this.props)
        return (
            <View>
                <Text> SPLASH </Text>
                <Button onPress={ this.props.doSometing } title="DO"></Button>
            </View>
        )
    }
}

const actionsMap = (dispatch) => {
    return {
        doSometing: () => {
            let v = actions.doSometing();
            console.log({v});
            dispatch(v);
        }

    }

}

const propsMap = (state) => {
    return {
        app: state.app.text
    }
    console.log({state});
    return state;
}

export default connect(propsMap, actionsMap)(SplashScreen)
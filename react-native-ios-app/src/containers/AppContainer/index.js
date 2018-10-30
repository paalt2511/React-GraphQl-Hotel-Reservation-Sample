
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    NetInfo,
    View,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Linking,
    BackHandler,
    Image,
    Platform,
    TouchableWithoutFeedback,
    AppState
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import {bindActionCreators} from 'redux';
import RootNavigation from '../../navigator';
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";
import * as hotelActionCreator from '../../common/actions/hotels';




class AppContainer extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.addListener = createReduxBoundAddListener('root');
    }

     componentDidMount() {
        // this.props.hotelAction.getHotelsList()
    }


    componentWillUnmount() {
    }


    render() {
        return (
            <View
                style={{
                    flex: 1,
                    opacity: 1
                }}>
                <RootNavigation
                    navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav, addListener: this.addListener})}/>
                {this.props.loading
                    ? <View style={style.maskBox}>
                         <ActivityIndicator size="large"/>
                    </View>
                    : <View/>
                }
            </View>
        )
    }
}

const style = StyleSheet.create({
    maskBox: {
        position: 'absolute',
        width: Dimensions
            .get('window')
            .width,
        height: Dimensions
            .get('window')
            .height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
});

const mapStateToProps = state => ({
    nav: state.nav,
    loading: state.hotel.loading,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(hotelActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

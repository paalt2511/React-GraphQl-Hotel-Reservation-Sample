
import React, {Component} from 'react';
import ResrvationListComponent from '../../components/ResrvationListComponent'
import {connect} from "react-redux";
import {Text, Image, Alert, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import * as hotelActionCreator from '../../common/actions/hotels';

import back from '../../common/images/backArrow.png'


type Props = {};
class ReservationListContainer extends Component<Props> {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18, fontWeight:'bold'}}>Reservation List</Text>
        ),

        headerLeft:(
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={back} style={{height:30, width:30}} resizeMode={'contain'} >

                </Image>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: 'rgba(91,151,167,1)',
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
        headerTitleStyle: { alignSelf: 'center' },
    });


    constructor(props) {
        super(props);
        this.state= {
        }

        this.onItemPress = this.onItemPress.bind(this);
    }

    componentDidMount() {
        this.props.hotelAction.getReservations()
    }


    onItemPress(item, index) {
    }



    render() {
        return (
            <ResrvationListComponent onItemPress={this.onItemPress} reservationList={this.props.reservationList}>
            </ResrvationListComponent>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    reservationList: state.hotel.reservationList

});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(hotelActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationListContainer);
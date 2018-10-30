

import React, {Component} from 'react';
import DashboardComponent from '../../components/DashboardComponent'
import {connect} from "react-redux";
import {Text, Image, Alert, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import * as hotelActionCreator from '../../common/actions/hotels';

import list from '../../common/images/list.png'


type Props = {};
class DashboardContainer extends Component<Props> {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18,fontWeight:'bold'}}>Hotels</Text>
        ),

        headerRight:(
            <TouchableOpacity onPress={()=>navigation.navigate('ReservationList')}>
                <Image source={list} style={{height:30, width:30, marginRight:16}} resizeMode={'contain'} >

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
            hotelList:[
                {key: 'Hampton Inn Artesia', charge:'$1099', availableRooms: 10, city:'New Mexico'},
                {key: 'Hilton Garden', charge:'$106', availableRooms: 0, city:'Texas'},
                {key: 'Capital Hilton', charge:'$223', availableRooms: 4, city:'Washington'},
                {key: 'THE HILTON CLUB', charge:'$423', availableRooms: 17, city:'New York'}
                ]
        }

       this.onItemPress = this.onItemPress.bind(this);
    }

    componentDidMount() {
        this.props.hotelAction.getHotelsList()
    }


    onItemPress(item, index, roomCount) {

        if(roomCount> 0) {
            this.props.navigation.navigate('Reservation', {selectedItem : item, selectedIndex : index})
        }


    }



    render() {
        return (
            <DashboardComponent onItemPress={this.onItemPress} hotelList={this.props.hotelList}>
            </DashboardComponent>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    hotelList: state.hotel.hotelList

});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(hotelActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
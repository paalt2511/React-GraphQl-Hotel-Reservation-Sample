
import React, {Component} from 'react';
import {Text, Image, Alert, View,TouchableOpacity } from 'react-native';
import ReservationComponent from '../../components/ReservationComponent'
import {connect} from "react-redux";
import * as hotelActionCreator from "../../common/actions/hotels";
import back from '../../common/images/backArrow.png';
import {bindActionCreators} from 'redux';

type Props = {};
class ReservationContainer extends Component<Props> {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18, fontWeight:'bold'}}>Take Me to the Hilton</Text>
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
            name:'',
            rooms:1,
            traveler:1,
            isDateTimePickerVisible: false,
            checkecdInDate: null,
            checkedOutDate: null

        }

        this.datePickerOpenFor = null;

        this.onRoomsPlusClick = this.onRoomsPlusClick.bind(this);
        this.onTravelerPlusClick = this.onTravelerPlusClick.bind(this);
        this.onRoomsMinusClick = this.onRoomsMinusClick.bind(this);
        this.onTravelerMinusClick = this.onTravelerMinusClick.bind(this);
        this.onEmailIdChange = this.onEmailIdChange.bind(this);
        this.onCheckInDateClick = this.onCheckInDateClick.bind(this);
        this.onCheckOutDateClick = this.onCheckOutDateClick .bind(this);
        this._handleDatePicked = this._handleDatePicked.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onBookHotels = this.onBookHotels.bind(this);
    }



    componentWillReceiveProps(nextProps) {
        // if(nextProps.reservationCreated) {
        //     this.props.navigation.navigate('ReservationList')
        // }
    }




    onRoomsPlusClick() {
       const rooms = this.state.rooms+1
       this.setState({
           rooms
       });
    }

    onTravelerPlusClick() {
        const traveler = this.state.traveler+1
        this.setState({
            traveler
        });
    }

    onRoomsMinusClick() {
        if(this.state.rooms >1) {
            const rooms = this.state.rooms - 1
            this.setState({
                rooms
            });
        }

    }

    onTravelerMinusClick() {
        if(this.state.traveler >1) {
            const traveler = this.state.traveler - 1
            this.setState({
                traveler
            });
        }
    }

    onEmailIdChange(text) {

        console.log("Text :::", text)
    }


    onCheckInDateClick() {
        this.datePickerOpenFor = 1
        const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
        this.setState({
            isDateTimePickerVisible
        })
    }

    onCheckOutDateClick() {
        if(this.state.checkecdInDate) {
            this.datePickerOpenFor = 2
            const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
            this.setState({
                isDateTimePickerVisible
            })
        } else {
            Alert.alert('Error', 'Please select check in date')
        }


    }

    _handleDatePicked(date) {
        if(this.datePickerOpenFor == 1) {
            this.setState({
                checkecdInDate: date
            })
        } else {
            if(date>this.state.checkecdInDate) {
                this.setState({
                    checkedOutDate: date
                })
            } else {
                Alert.alert('Error', 'Check out date should be greater than check in date')
                return
            }
        }

        this.datePickerOpenFor =null
        const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
        this.setState({
            isDateTimePickerVisible
        })

    }

    onCancel() {
        this.datePickerOpenFor =null
        const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
        this.setState({
            isDateTimePickerVisible
        })
    }


    onBookHotels() {
console.log("Selected Item :: ", JSON.stringify(this.props.navigation.state.params.selectedItem))

        if(!this.state.checkecdInDate) {
            Alert.alert('Error', 'Please select checked In date')
            return
        }

        if(!this.state.checkedOutDate) {
            Alert.alert('Error', 'Please select checked Out date')
            return
        }

        //name, hotelId, arrivalDate, departureDate
        const hotelId =this.props.navigation.state.params.selectedItem.id
        const name =this.props.navigation.state.params.selectedItem.name
        const arrivalDate = this.state.checkecdInDate.toString()
        const departureDate = this.state.checkedOutDate.toString()
        this.props.hotelAction.createReservation(name,hotelId,arrivalDate,departureDate)
    }



    render() {
        return (
            <ReservationComponent
                onRoomsPlusClick={this.onRoomsPlusClick}
                onTravelerPlusClick={this.onTravelerPlusClick}
                onRoomsMinusClick={this.onRoomsMinusClick}
                onTravelerMinusClick={this.onTravelerMinusClick}
                onEmailIdChange={this.onEmailIdChange}
                onCheckInDateClick={this.onCheckInDateClick}
                onCheckOutDateClick={this.onCheckOutDateClick}
                rooms={this.state.rooms}
                traveller={this.state.traveler}
                hotelName = {this.props.navigation.state.params.selectedItem.name}
                isDateTimePickerVisible={this.state.isDateTimePickerVisible}
                _handleDatePicked={this._handleDatePicked}
                _hideDateTimePicker={this.onCancel}
                checkedOutDate ={this.state.checkedOutDate}
                checkecdInDate ={this.state.checkecdInDate}
                onBookHotels={this.onBookHotels}
            >
            </ReservationComponent>
        );
    }
}


const mapStateToProps = state => ({
    nav: state.nav,
    reservationCreated: state.hotel.reservationCreated
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(hotelActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationContainer);
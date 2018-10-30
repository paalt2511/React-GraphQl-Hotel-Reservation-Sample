
import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import backImage from '../../common/images/splash2.jpg'
import nameImage from '../../common/images/name_1.png'
import hotelIcon from '../../common/images/hotel_icon.jpg'
import emailIcon from '../../common/images/email.png'
import checkInIcon from '../../common/images/check_in.png'
import checkOutIcon from '../../common/images/check_out.png'
import roomIcon from '../../common/images/rooms.png'
import travllerIcon from '../../common/images/travller.png'
import add from '../../common/images/add.png'
import minus from '../../common/images/substract.png'

import styles from './style';
import config from "../../common/config";

const ReservationComponent = props => {
    const renderItem = (item, index) => (
        <View style={styles.listItemParent}>
        </View>
    );

    return(
        <View style={styles.boxContainerStyle}>
            <View style={styles.subContainer}>
                <View  style={styles.smallBoxStyle}>
                    <Image source={hotelIcon} style={styles.subHaderIconStyle} resizeMode={'contain'}/>
                    <Text style={styles.hotelNamestyle}>{props.hotelName}</Text>
                </View>

                <View  style={styles.horizantalDivider}>

                </View>

                <View  style={styles.smallBoxStyle}>
                    <Image source={emailIcon} style={styles.subHaderIconStyle} resizeMode={'contain'}/>
                    <TextInput
                        style={{fontSize:16, marginLeft:10, height:45, width:'100%'}}
                        placeholder={'emailaddress@mail.com'}   onChangeText={props.onEmailIdChange}/>
                </View>



                <View  style={styles.horizantalDivider}>

                </View>

                <View style={styles.dateBoxContainerStyle}>
                    <TouchableOpacity  style={styles.boxContainerStyle} onPress={props.onCheckInDateClick}>
                        <View style={styles.iconTextParentStyle}>
                            <Image source={checkInIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                            <Text style={styles.chekinCheckoutTextStyle}>CHECK IN</Text>
                        </View>

                        {props.checkecdInDate ?
                        <View style={{flexDirection:'row', alignItems:'center'}}>



                            <Text style={styles.dateTextStyle}>{props.checkecdInDate.getDate()}</Text>
                            <View style={{marginLeft:10}}>
                                <Text style={styles.mothYearTextStyle}>{config.MONTH_NAME_WITH_ABBRIVATION[props.checkecdInDate.getMonth()]}</Text>
                                <Text style={ [styles.mothYearTextStyle, {marginTop:2}]}>{props.checkecdInDate.getFullYear()}</Text>
                            </View>

                        </View> : <View style={styles.emptyDateStyle}>
                                <Text style={styles.dateTextStyle}>--:--</Text>
                            </View>}

                    </TouchableOpacity>


                    <View  style={styles.verticalDivider}>
                    </View>

                    <TouchableOpacity  style={styles.boxContainerStyle} onPress={props.onCheckOutDateClick}>

                        <View style={styles.checkoutContainerStyle}>
                            <Image source={checkOutIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                            <Text style={styles.chekinCheckoutTextStyle}>CHECK OUT</Text>
                        </View>


                        {props.checkedOutDate ?
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.dateTextStyle}>{props.checkedOutDate.getDate()}</Text>
                            <View style={{marginLeft:10}}>
                                <Text style={styles.mothYearTextStyle}>{config.MONTH_NAME_WITH_ABBRIVATION[props.checkedOutDate.getMonth()]}</Text>
                                <Text style={[styles.mothYearTextStyle, {marginTop:2}]}>{props.checkedOutDate.getFullYear()}</Text>
                            </View>

                        </View> :<View style={styles.emptyDateStyle}>
                                <Text style={styles.dateTextStyle}>--:--</Text>
                            </View>}

                    </TouchableOpacity>

                </View>

                <View  style={styles.horizantalDivider}>

                </View>


                <View style={styles.dateBoxContainerStyle}>

                    <TouchableOpacity  style={styles.boxContainerStyle}>

                        <View style={styles.iconTextParentStyle}>
                            <Image source={roomIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                            <Text style={styles.chekinCheckoutTextStyle}>ROOMS</Text>
                        </View>


                        <View style={{flexDirection:'row', marginTop:10}}>
                            <TouchableOpacity style={styles.plusMinusButtonStyle} onPress={props.onRoomsMinusClick}>
                                <Image source={minus} style={styles.plusMinusImageStyle} resizeMode={'contain'}  >
                                </Image>
                            </TouchableOpacity>
                            <View style={styles.countBoxStyle}>
                                <Text style={styles.counterTextStyle}>{props.rooms}</Text>
                            </View>
                            <TouchableOpacity style={styles.plusMinusButtonStyle} onPress={props.onRoomsPlusClick}>
                                <Image source={add} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                </Image>
                            </TouchableOpacity>
                        </View>


                    </TouchableOpacity>
                    <View  style={styles.verticalDivider}>

                    </View>

                    <TouchableOpacity  style={styles.boxContainerStyle}>


                        <View style={styles.iconTextParentStyle}>
                            <Image source={travllerIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                            <Text style={styles.chekinCheckoutTextStyle}>TRAVELLER</Text>
                        </View>



                        <View style={{flexDirection:'row', marginTop:10}}>
                            <TouchableOpacity style={styles.plusMinusButtonStyle} onPress={props.onTravelerMinusClick}>
                                <Image source={minus} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                </Image>
                            </TouchableOpacity>

                            <View style={styles.countBoxStyle}>
                                <Text style={styles.counterTextStyle}>{props.traveller}</Text>
                            </View>

                            <TouchableOpacity style={styles.plusMinusButtonStyle} onPress={props.onTravelerPlusClick}>
                                <Image source={add} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>


                </View>

                <View  style={styles.horizantalDivider}>

                </View>


                <View  style={styles.buttonParentStyle}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={props.onBookHotels}>
                        <Text style={{color:'white'}}>Book My Hotel</Text>
                    </TouchableOpacity>
                </View>


            </View>




            <DateTimePicker
                isVisible={props.isDateTimePickerVisible}
                onConfirm={props._handleDatePicked}
                onCancel={props._hideDateTimePicker}
            />


        </View>
    )
};


export default ReservationComponent;
import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import hotel_1 from '../../common/images/hotel_111.jpeg'
import hotel_2 from '../../common/images/hotel_222.jpeg'
import hotel_3 from '../../common/images/hotel_333.jpg'
import hotel_4 from '../../common/images/hotel_444.jpg'
import selected from '../../common/images/selectedStar.png'
import unselected from '../../common/images/unselectedstar.png'

import styles from './style';
import config from "../../common/config";


const hotelImageList =[hotel_1,hotel_2,hotel_3, hotel_4]

const ReservationListComponent = props => {

    const getDate =(date)=> {
        const dateObj = new Date(date)
        return dateObj.getDate() + " " + config.MONTH_NAME_WITH_ABBRIVATION[dateObj.getMonth()]+" "+dateObj.getFullYear()
    }

    const renderItem = (item, index) => (
        <TouchableOpacity style={styles.listItemParent} onPress={()=> props.onItemPress(item, index)}>

            <View style={{height: 89.5}}>
            <Text style={styles.hotelName}>{item.hotelName}</Text>

            <View style={{flexDirection:'row', marginLeft:16, marginTop:5}}>

                <View style={{flex:1}}>
                    <Text>Check In</Text>
                    <Text style={{color:'grey'}}>{getDate(item.arrivalDate)} </Text>
                </View>

                <View style={{flex:1}}>
                    <Text>Check Out</Text>
                    <Text style={{color:'grey'}}>{getDate(item.departureDate)} </Text>
                </View>

            </View>


            </View>

            <View style={{height:0.5, backgroundColor:'grey'}}></View>
        </TouchableOpacity>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={props.reservationList}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    )
};


export default ReservationListComponent;
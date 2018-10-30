
import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import hotel_1 from '../../common/images/hotel_111.jpeg'
import hotel_2 from '../../common/images/hotel_222.jpeg'
import hotel_3 from '../../common/images/hotel_333.jpg'
import hotel_4 from '../../common/images/hotel_444.jpg'
import selected from '../../common/images/selectedStar.png'
import unselected from '../../common/images/unselectedstar.png'

import styles from './style';


const hotelImageList =[hotel_1,hotel_2,hotel_3, hotel_4]

const priseList =['$105','$505','$705', '$815', '$999', '$2,872']
const roomList =[6, 3, 0, 9, 9, 7]


const DashboardComponent = props => {

    const getRatingStar = (rate) => {
        let React_Native_Rating_Bar = [];
        for (var i = 1; i <= 5; i++) {
            React_Native_Rating_Bar.push(
                    <Image
                        resizeMode={'contain'}
                        style={[styles.ratingBarImageStyle, {marginLeft: i==1? 10:0 , tintColor:(i <= rate) ? 'rgba(237,177,63,1)':'grey'}]}
                        source={(i <= rate) ? selected: unselected}/>
            );
        }

        return React_Native_Rating_Bar
    }


    const renderItem = (item, index) => (
        <TouchableOpacity style={styles.listItemParent} onPress={()=> props.onItemPress(item, index, roomList[index])}>
             <View style={styles.listItemParentStyle} >
            <View style={styles.listItemImageParentStyle}>
            <Image style={styles.listItemImageStyle}
                   source={{uri: item.cover}}
                   resizeMode={'cover'}/>

            </View>
                 <View style={styles.listSubItemParentStyle}>
                 <View style={styles.listSubContainer}>
                    <View  style={{ flexDirection:'row'}}>
                        <Text style={styles.nameText} numberOfLines={2}>{item.name}</Text>
                        {getRatingStar(index+1)}
                    </View>
                         <Text style={styles.cityTxtStyle}>{item.city}</Text>

                     <Text style={[styles.availableRoomTextStyle, {color:roomList[index] > 0 ? 'green': 'red', marginRight: 16 }]}>{roomList[index]  > 0 ? "Available:"+ roomList[index]  +" Rooms   " : 'Not Available'}

                         <Text style={[styles.availableRoomTextStyle, styles.bookNowTextStyle]} >{roomList[index]  > 0 ? ' Book Now ': ''}</Text>
                     </Text>
                     </View>
                     <View style={styles.prizeContainerLayoutStyle}>
                         <Text style={styles.perNightTextStyle}>Per Night</Text>
                         <Text style={styles.perNightChargeTextStyle}>{priseList[index]}</Text>
                     </View>
                 </View>
             </View>
        </TouchableOpacity>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={props.hotelList}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
 )
};


export default DashboardComponent;
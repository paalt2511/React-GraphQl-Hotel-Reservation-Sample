import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
    },
    listItemParent:{
        width:'100%',
        height: 90,
        backgroundColor:'white'
    },
    listItemImageStyle:{
        width:'100%',
        height: 170,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    nameText: {
        fontSize: 16,
        color:'black',
        marginLeft:10,
        maxWidth:'70%',
        fontWeight:'600',
        alignSelf:'flex-end'
    },
    listItemParentStyle: {height: '100%', width:'100%', backgroundColor:'white',   shadowColor: "#000000",  borderRadius:8,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }},
    listItemImageParentStyle: {
        width:'100%',
        height: 170,
        borderTopLeftRadius:8,
        borderTopRightRadius:8, overflow:'hidden',
    },
    prizeContainerLayoutStyle:{
        flex: 0.4, alignItems:'flex-end', paddingRight:10, justifyContent:'center'
    },
    perNightTextStyle:{
        color:'black', fontSize:10, fontWeight:'bold'
    },
    perNightChargeTextStyle:{
        color:'black', fontSize:18, fontWeight:'bold'
    },
    listSubItemParentStyle:{
        backgroundColor:'white',
        height: 80,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        flexDirection:'row'
    },
    cityTxtStyle:{
        fontSize:14, color:'grey',  marginLeft:10,
    },



    hotelName: {
        marginLeft: 16, marginTop:10, fontSize: 16, fontWeight:'bold'
    }

});
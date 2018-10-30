
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    subContainer:{
        width:'85%',
        backgroundColor:'white',
        flex:0, borderRadius:5,
        marginTop:100,
        shadowColor: "#000000",
        borderRadius:5,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0.5
        }},
    smallBoxStyle:{
        width:'100%', height:50, flexDirection:'row', alignItems:'center', paddingLeft:10
    },

    subHaderIconStyle:{
        height : 30,
        width: 30
    },
    listItemParent:{
      width:'100%',
      height: 270,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:20,
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

    backImageStyle:{
        position:'absolute',
    },
    nameImageStyle:{
        height: 100,
        width: 250,
        marginTop:60
    },
    iconStyle:{
        height : 20,
        width: 20,
        tintColor:'rgba(91,151,167,1)',
        marginLeft:10
    },

    plusMinusButtonStyle :{
        height:40,
        width:40,
        borderWidth:0.5,
        borderColor:'rgba(91,151,167,1)',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(91,151,167,1)'
    },
    plusMinusImageStyle :{
        height:20,
        width:20,
        tintColor: 'white'
    },
    countBoxStyle:{height:40, width:40,backgroundColor:'white',
        borderBottomColor:'rgba(91,151,167,1)',
        borderTopColor:'rgba(91,151,167,1)', alignItems:'center', justifyContent:'center',
        borderWidth:0.5, borderLeftColor:'rgba(0,0,0,0)', borderRightColor:'rgba(0,0,0,0)'
    },
    dateTextStyle :{
        fontWeight:'600', fontSize:55, color:'#666666'
    },
    horizantalDivider:{
        width:'100%', height:0.8, backgroundColor:'grey'
    },
    verticalDivider: {
        width:0.5, height:'100%', backgroundColor:'grey'
    },
    mothYearTextStyle:{
        color:'grey', fontWeight:'500'
    },
    counterTextStyle:{
        fontWeight:'500', fontSize:18
    },
    buttonStyle:{
        backgroundColor:'rgba(91,151,167,1)',
        height:45, width:'80%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonParentStyle:{
        width:'100%',
        height:70,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        justifyContent:'center'
    },
    iconTextParentStyle:{
        flexDirection:'row', marginLeft:16, marginTop:10, width:'100%'
    },
    checkoutContainerStyle:{
        flexDirection:'row', marginLeft:16, marginTop:10, alignItems:'center',  width:'100%'
    },
    chekinCheckoutTextStyle :{
        color:'grey', marginLeft : 12, fontWeight:'500'
    },
    emptyDateStyle:{
        height:'60%', width:'100%', alignItems:'center', justifyContent:'center'
    },
    dateBoxContainerStyle:{
        flexDirection:'row', height:100, width:'100%'
    },
    boxContainerStyle:{
        flex:1, alignItems:'center'
    },
    hotelNamestyle:{
        fontSize:16, fontWeight:'600', marginLeft:10
    }


});
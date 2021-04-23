import { StyleSheet ,Dimensions} from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width,
        height:height,
        backgroundColor:'#000'
    },
    content:{
        flex:1,
        padding:20,
        backgroundColor:"#ffddcc"
    },
    list:{
        flex:1,
        marginTop:20,
        backgroundColor:"#fadaca",
        borderRadius:20,
        padding:10
    },
    Hcontainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DC381F',
        shadowColor: "#8169ee",
        shadowOffset: {
            width: 100,
            height: 100,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10.32,
        elevation: 100,
        width:'100%',
        height:60,
    },
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    },
    touchContainer:{
        borderWidth: 0.5,
        borderStyle: 'dotted',
        borderRadius:10,
        shadowColor:'#340303',
        shadowOffset:{width:0,height:20},
        shadowOpacity:1,
        shadowRadius:10,
        elevation: 1,
        backgroundColor:'rgba(193,193,244,0.15)',
        padding:10,
        marginBottom:10,
        width:'100%',
        marginRight:20,
        flex:1,
        flexDirection:'row'

    },
    contentText:{
        fontSize:20,
        fontWeight:'900',
        fontFamily:'Times new roman',
        borderStyle:'dashed',
        borderColor:'#DC381F',
        borderWidth:0.8,
        padding:16,
        borderRadius:10,
        marginBottom:10,
        backgroundColor:'#bbb'

    },
    input:{
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderRadius:10,
        fontSize:24,
        padding:10,
        marginBottom:5,
    },
    button:{
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        fontSize:18,
        color :'white',

    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color :'black'
       
        
    },
    buttonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
        
    },
    buttonContainer:{
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'coral',
        borderRadius:20,
        padding:5,
    },
    sandContainer:{
        paddingTop:40,
        backgroundColor:'#ddd',
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start'
    },
   
    iconElement:{
         flex :1,
         alignItems:'flex-start'  
    }
});

export default styles;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../StyleSheet/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';



const TodoItem = ({item, pressHandler}) => {
  return (

    
      <TouchableOpacity
            style={styles.touchContainer}
            >
       <Animatable.View 
       
            animation="fadeInUpBig"
            duration={1000}
            style={[styles.footer, {
                flex:1,
                flexDirection:'row'
                
            }]}
        >
          {/* <View style={{flex:1, flexDirection:'row'}}> */}
           <View style={styles.iconElement}>
                <Icon name={"backspace-outline"}
                      color='#dC381F'
                      size={30}
                      onPress={() => pressHandler(item.key)}/>
              </View>
              <Text style={styles.text}>{item.text}</Text>
          {/* </View> */}
           
        </Animatable.View>
             

        </TouchableOpacity>
        


  );
};
export default TodoItem;

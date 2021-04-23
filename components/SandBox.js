import React from "react";
import {View,Text} from 'react-native';
import styles from '../StyleSheet/Styles'

export default function SandBox(){

  return(
      <View style={styles.sandContainer}>
        <Text style={styles.boxOne}>one</Text>
        <Text style={styles.boxTwo}>two</Text>
        <Text style={styles.boxThree}>Three</Text>
        <Text style={styles.boxFour}>Four</Text>
      </View>
  );


}

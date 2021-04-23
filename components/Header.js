import React, {useState} from 'react';
import {View,Text } from 'react-native';
import styles from '../StyleSheet/Styles';
import * as Animatable from 'react-native-animatable';
const Header=() => {
    
    return (
        <View style={styles.Hcontainer}>
            <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate" style={{fontSize: 24 || 10}}>
            <Text style={styles.headerText}>My Todos</Text>
            </Animatable.Text>
            
        </View>
    );
  };
  export default Header;

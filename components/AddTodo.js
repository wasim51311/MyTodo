import React, {useState} from 'react';
import {View,Text,TextInput,Button,Pressable } from 'react-native';
import styles from '../StyleSheet/Styles';
import * as Animatable from 'react-native-animatable';


const AddTodo=({submitHandler}) => {
  const [text, setText] = useState('');
  const changeHandler = (val) =>{
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder='new todo....'
        onChangeText={changeHandler}
        style={styles.input}
      />
      
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => submitHandler(text)}>
          <Text style={[styles.buttonText]}>Add Todos</Text>
        </Pressable>
        
      </View>

    </View>
  );
};
export default AddTodo;

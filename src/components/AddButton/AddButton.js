import React from 'react';
import {Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const AddButton = () => {
  return (
    <Pressable style={styles.button}>
      <Entypo name="plus" size={25} />
    </Pressable>
  );
};

export default AddButton;

import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const CategoryItems = ({item}) => {
  const {name, icon, noteCount, backgroundColor} = item;

  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <View style={styles.box}>
        <View>
          <Image source={{uri: icon}} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.name}>{name} </Text>
        </View>
        <View>
          <Text style={styles.noteCount}>{noteCount} Notes</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryItems;

import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ListItems = ({item}) => {
  const {name, label, description, time, backgroundColor} = item;

  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <View>
        <Text style={styles.label} numberOfLines={2}>
          {label}
        </Text>
      </View>
      <View>
        <Text numberOfLines={4} style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.name}>{name} | Wireframe</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default ListItems;

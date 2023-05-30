import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ListItems = ({item}) => {
  const {name, label, description, time} = item;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View>
        <Text style={styles.label} numberOfLines={2}>
          {label}
        </Text>
      </View>
      <View>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ListItems;

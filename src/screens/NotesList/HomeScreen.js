import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import list from '../../../assets/data/list';
import AddButton from '../../components/AddButton/AddButton';
import ListItems from '../../components/ListItems/ListItems';
import styles from './styles';

const HomeScreen = () => {
  return (
    <>
      {/* Search */}
      <View style={styles.body}>
        {/* List */}
        <View style={styles.listHeaderContainer}>
          <Text style={styles.listHeader}>List Notes</Text>
        </View>
        <Pressable>
          <Text>All Notes</Text>
        </Pressable>
      </View>
      <View style={{...styles.list, height: '86%'}}>
        <FlatList
          key={list.map(item => item.id)}
          // columnWrapperStyle={styles.row}
          // numColumns={2}
          data={list}
          renderItem={({item}) => <ListItems item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
      <AddButton />
    </>
  );
};

export default HomeScreen;

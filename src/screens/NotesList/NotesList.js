import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import list from '../../../assets/data/list';
import ListItems from '../../components/ListItems/ListItems';
import styles from './styles';

const NotesList = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notes App</Text>
      </View>

      {/* Search */}
      <View style={styles.body}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchField}
            onChange={setSearchValue}
            value={searchValue}
            name={'search'}
            placeholder="Search for notes..."
          />
        </View>
        {/* List */}
        <View style={styles.list}>
          <FlatList
            key={list.map(item => item.id)}
            // contentContainerStyle={styles.listContainer}
            columnWrapperStyle={styles.row}
            numColumns={2}
            data={list}
            renderItem={({item}) => <ListItems item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default NotesList;

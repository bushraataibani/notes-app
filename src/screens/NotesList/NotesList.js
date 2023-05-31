import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import list from '../../../assets/data/list';
import ListItems from '../../components/ListItems/ListItems';
import styles from './styles';

const NotesList = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.conatiner}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Notes</Text>
        </View>
        <Pressable style={styles.search} onPress={() => setShowTextField(true)}>
          {showTextField ? (
            <TextInput
              style={styles.searchField}
              onChange={setSearchValue}
              value={searchValue}
              name={'search'}
              placeholder="Search for notes..."
            />
          ) : (
            <Feather name="search" size={20} style={styles.searchIcons} />
          )}
        </Pressable>
      </View>
      {/* Search */}
      <View style={styles.body}>
        {/* List */}
        <View style={styles.listHeaderContainer}>
          <Text style={styles.listHeader}>List Notes</Text>
        </View>
        <Pressable onPress={() => setShowTextField(false)}>
          <Text>Back</Text>
        </Pressable>
      </View>

      <View style={{...styles.list, height: showTextField ? '85%' : '88%'}}>
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

      {/* <AddButton /> */}
    </View>
  );
};

export default NotesList;

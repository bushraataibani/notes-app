import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const NotesList = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.container}>
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
          <Text>List</Text>
        </View>
      </View>
    </View>
  );
};

export default NotesList;

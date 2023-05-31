import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const AddNote = () => {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [dropdown, setDropdown] = useState(null);

  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Pressable>
          <Entypo name="cross" size={25} />
        </Pressable>

        <Text style={styles.headerText}>Add Note</Text>

        <Pressable>
          <Entypo name="check" size={25} />
        </Pressable>
      </View>
      {/* DropDown Name */}
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.shadow}
          data={data}
          search
          searchPlaceholder="Search"
          labelField="label"
          valueField="value"
          label="Dropdown"
          placeholder="Select item"
          value={dropdown}
          onChange={item => {
            setDropdown(item.value);
            console.log('selected', item);
          }}
          renderItem={item => _renderItem(item)}
          textError="Error"
        />
      </View>
      {/* InputText label */}
      {/* TextArea description */}
    </View>
  );
};

export default AddNote;

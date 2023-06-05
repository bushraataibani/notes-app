import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './HomeScreen';
import styles from './styles';

// const Tab = createMaterialTopTabNavigator();

const NotesList = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.paper}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => setShowTextField(false)}>
            <Text style={styles.headerText}>Notes</Text>
          </Pressable>
          <Pressable
            style={styles.search}
            onPress={() => setShowTextField(true)}>
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
        <HomeScreen />
      </View>

      {/* <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#999',
          tabBarIndicatorContainerStyle: {
            marginVertical: 5,
          },
          tabBarIndicatorStyle: {
            // marginVertical: 5,
          },
          tabBarItemStyle: {
            // height: '90%',
            marginVertical: 10,
            borderRadius: 0,
            backgroundColor: '#000',
          },
          tabBarStyle: {
            backgroundColor: '#cbcbcb',
            borderRadius: 15,
            marginHorizontal: 10,
            paddingHorizontal: 10,
          },
        }}>
        <Tab.Screen name={'notes'} component={HomeScreen} />
        <Tab.Screen name={'favorite notes'} component={SettingsScreen} />
      </Tab.Navigator> */}
    </View>
  );
};

export default NotesList;

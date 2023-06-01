import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import categoryList from '../../../assets/data/categoryList';
import CategoryItems from './components/CategoryItems/CategoryItems';
import styles from './styles';

const Category = () => {
  return (
    <View style={styles.paper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text> </Text>
          <Text style={styles.headerText}>Categories</Text>
          <Feather name="plus-circle" size={25} style={styles.plusIcons} />
        </View>

        <View style={styles.body}>
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>List Categories</Text>
          </View>
        </View>

        <View style={{...styles.list}}>
          <FlatList
            key={categoryList.map(item => item.id)}
            columnWrapperStyle={styles.row}
            numColumns={2}
            data={categoryList}
            renderItem={({item}) => <CategoryItems item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainer}
          />
          <View>
            <Text style={styles.totalCat}>You have 4 Categories</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Category;

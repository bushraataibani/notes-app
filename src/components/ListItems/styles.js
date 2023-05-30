import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const itemWidth = (width - 40) / 2;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    minWidth: itemWidth,
    maxWidth: itemWidth,
    height: 130,
    margin: 5,
    backgroundColor: '#edc99d',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    fontWeight: 'bold',
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
  },
});

export default styles;

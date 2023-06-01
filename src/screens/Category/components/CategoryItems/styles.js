import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const itemWidth = (width - 40) / 2;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    minWidth: itemWidth,
    maxWidth: itemWidth,
    height: 200,
    margin: 5,
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#383838',
  },
  noteCount: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paper: {
    height: '100%',
    backgroundColor: '#fff',
  },
  container: {
    paddingVertical: 20,
    marginHorizontal: 10,
  },
  header: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderBottomColor: '#dddddd9c',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#383838',
  },
  plusIcons: {
    fontWeight: 'bold',
    color: '#383838',
  },
  listHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  listHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#383838',
  },
  totalCat: {
    textAlign: 'center',
    paddingTop: 55,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;

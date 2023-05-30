import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
  header: {
    paddingVertical: 10,
    borderBottomWidth: 0.2,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  search: {
    marginBottom: 15,
  },
  searchField: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    fontWeight: 'medium',
    borderColor: '#8a8888',
  },
  list: {
    width: '100%',
    height: '100%',
  },
  row: {
    // flex: 1,
    alignItems: 'center',
  },
});

export default styles;

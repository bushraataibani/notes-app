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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#383838',
  },
  searchIcons: {
    fontWeight: 'bold',
    color: '#383838',
  },
  searchField: {
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    fontSize: 14,
    fontWeight: 'medium',
    borderColor: '#ddd',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  list: {
    width: '100%',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {marginBottom: 10},
});

export default styles;

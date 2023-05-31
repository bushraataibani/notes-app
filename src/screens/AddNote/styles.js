import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    borderBottomWidth: 0.2,
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
  },
  dropdown: {
    backgroundColor: 'white',
    marginVertical: 20,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default styles;

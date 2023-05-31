import React from 'react';
import {StatusBar} from 'react-native';
import NotesList from './src/screens/NotesList/NotesList';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <NotesList />
      {/* <AddNote /> */}
    </>
  );
};

export default App;

import * as React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = ({navigation, previous}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
      <Appbar.Content title="Crown Flag" subtitle="Subtitle or replace this with a icon"/>
    </Appbar.Header>
  );
};

export default AppBar;

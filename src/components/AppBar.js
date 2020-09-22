import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  const _handleSearch = () => console.log('Searching');

  return (
    <Appbar.Header>
      <Appbar.Content title="Crown Flag" subtitle="Subtitle or replace this with a icon" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default AppBar;

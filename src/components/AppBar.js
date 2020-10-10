import * as React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const AppBar = ({navigation, previous}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://crownflag.com/wp-content/uploads/2020/09/Crown-LOGO-2020.jpg',
          }}
        />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 300,
    height: 50,
    resizeMode: 'contain'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default AppBar;

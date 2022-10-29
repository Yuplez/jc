import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <View style={styles.home}>
      <Text>Login</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
	home: {
    flex: 1,
    alignItems: 'center',
	justifyContent: 'center',
    backgroundColor: 'white',
	}
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RegisterScreen = () => {
  return (
    <View style={styles.home}>
      <Text>Home</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

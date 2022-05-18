import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './components/MyButton';

function onPress() {
  alert('props ' + this.title);
}

export default function App() {
  const name = 'chaeyk';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Button Component</Text>
      <MyButton title='Button' onPress={onPress}/>
      <MyButton title='Button' onPress={() => alert('title')}>Children Props</MyButton>
      <MyButton onPress={() => alert('default')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});

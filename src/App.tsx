import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import MyButton from './components/MyButton';

export default function App() {
  const name = 'chaeyk';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Button Component</Text>
      <MyButton title='Button' onPress={() => alert('title')}/>
      <MyButton title='Button' onPress={() => alert('children')}>Children Props</MyButton>
      <MyButton onPress={() => alert('default')}/>
      <StatusBar style="auto" />
      {/* <Counter /> */}
      <EventButton />
      <EventInput />
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

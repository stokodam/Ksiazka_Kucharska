import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
  <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Książka kucharska</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.authors}>Authors:</Text>
      <Text style={styles.authors}>Katarzyna Skrobisz</Text>
      <Text style={styles.authors}>Jakub Pawlik</Text>
      <Text style={styles.authors}>Daniel Stokowiec</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  authors: {
      fontSize: 20,
      bottom: 0,
      fontWeight: 'bold',
      justifyContent: 'center',
    },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

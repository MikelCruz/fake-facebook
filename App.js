import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { ScrollView } from 'react-native-gesture-handler';


const App = () => {
  return (
    <>
    <StatusBar
      backgroundColor="#FFFFFF"
      barStyle="dark-content"
    />
    <ScrollView></ScrollView>
    </>
  );
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

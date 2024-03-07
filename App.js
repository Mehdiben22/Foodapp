
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native';
import Stacknavigator from './Stacknavigator';
import Homescreen from './screens/Homescreen';
import { Provider } from 'react-redux';
import store from './store';

export default function app() {
  return (
      <View style={styles.container}>
        <Provider store={store}>
          <StatusBar/>
           <Stacknavigator/>
        </Provider>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',  
  },
});

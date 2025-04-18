import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import XeMayScreen from './redux/XeMayScreen';
import store from './redux/store';
import AddXe from './redux/addScreen';
import editSP from './redux/editScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="xeMayScreen" component={XeMayScreen}></Stack.Screen>
          <Stack.Screen name="add" component={AddXe}></Stack.Screen>
          <Stack.Screen name="edit" component={editSP}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

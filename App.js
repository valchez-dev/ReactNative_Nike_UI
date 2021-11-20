import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName={'Home'}>

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "NIKE WORLD",
          headerTitleAlign:'center',
          headerTintColor:'#b2aeae',
          headerLeft: ({onPressMenu}) => (
            <TouchableOpacity
            style={{marginLeft: 7}}
            onPress={onPressMenu}
            >
              <Image 
              source={require("./src/assets/icons/ic_menu.png")} 
              resizeMode="contain"
              style={{
                width:25,
                height:25,
              }}
              />
            </TouchableOpacity>
          ),
          headerRight: ({onPressSearch}) => (
            <TouchableOpacity
            style={{marginRight: 7}}
            onPress={onPressSearch}
            >
              <Image 
              source={require("./src/assets/icons/ic_search.png")} 
              resizeMode="contain"
              style={{
                width:25,
                height:25,
              }}
              />
            </TouchableOpacity>
          ),
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

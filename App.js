import React, { useState, useContext, createContext } from 'react';
import { Image, Text, View } from 'react-native';
import Login from './src/components/app/user/screens/Login';
import SignUp from './src/components/app/user/screens/SignUp';
import Home from './src/components/app/news/screens/Home';
import Detail from './src/components/app/news/screens/Detail';
import Add from './src/components/app/news/screens/Add';
import UpdateProfile from './src/components/app/news/screens/UpdateProfile';
import Profile from './src/components/app/news/screens/Profile';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  CONTEXT
import { UserProvider } from './src/components/app/user/utilities/UserContext';
import { NewsProvider} from './src/components/app/news/utilities/NewsContext';
import AppNavigation from './src/components/app/appNavigation/AppNavigation';

import Bookmark from './src/components/demo/Bookmark';
import Explore from './src/components/demo/Explore';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const App = () => {

 
  return (
       //STACKNAVIGATION
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Bookmark" component={Bookmark} />
    //     <Stack.Screen name="Explore" component={Explore} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //    CONTEXT
    <UserProvider>
      <NewsProvider>
        <AppNavigation></AppNavigation>
      </NewsProvider>
    </UserProvider>

    //<Home></Home>
    //<Detail></Detail>
    //<Add></Add>
    //<UpdateProfile></UpdateProfile>
    //<Profile></Profile>
    // <UserProvider>
    // <Login/>
    // </UserProvider>
  );
};

export default App;

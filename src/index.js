import React, {useEffect, useState} from 'react';

import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Loading from './components/Loading';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: 'Products',
      }}
    />
  </RootStack.Navigator>
);
export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setToken(null);
    }, 500);
  }, []);
  return (
    <NavigationContainer>
      {/* {isLoading ? (
        <Loading loading={true} />
      ) :  */}
      {token ? <RootStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

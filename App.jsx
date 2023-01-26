import React from 'react'
import { View,Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'

import { Home,ItemDetail} from './screens/index'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ItemDetails' component={ItemDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
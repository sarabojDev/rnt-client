import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../pages/Home'
import Register from '../../pages/auth/Register'
import Login from '../../pages/auth/Login'
import { AuthContext } from '../../context/AuthContext'
import HeaderMendu from './HeaderMendu'
import Post from '../../pages/Post'
import About from '../../pages/About'
import Account from '../../pages/Account'


const Stack = createNativeStackNavigator()

const ScreenMenu = () => {
  const [state, setState] = useContext(AuthContext);

  const authenticate = state?.user && state?.token

  return (

    <Stack.Navigator
      initialRouteName="Login"
    >

      {
        authenticate ? (<>
          <Stack.Screen name='Home' component={Home}
            options={{
              title: "Full Stack App",
              headerRight: () => <HeaderMendu />
            }}
          />
          <Stack.Screen name='Post' component={Post}
            options={{
              title: "Full Stack App",
              headerRight: () => <HeaderMendu />
            }}
          />
          <Stack.Screen name='About' component={About}
            options={{
              title: "Back",
              headerRight: () => <HeaderMendu />
            }}
          />

          <Stack.Screen name='Account' component={Account}
            options={{
              title: "Back",
              headerRight: () => <HeaderMendu />
            }}
          />

        </>) : (<>
          <Stack.Screen name='Register' component={Register} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Login' component={Login}
            options={{
              headerShown: false
            }}
          />
        </>)
      }


    </Stack.Navigator>

  )
}

export default ScreenMenu
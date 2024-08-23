import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import FooterMenu from '../components/menus/FooterMenu'


const Home = () => {
  const [state, setState] = useContext(AuthContext);
 
  return (
    <View style={styles.homeContainer}>
      <Text>Home</Text>
      <Text>
        {
          JSON.stringify(state, null, 4)
        }
      </Text>
      <FooterMenu />
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent:"space-between",
    marginTop:40,
    margin:10,
     
  }
})

export default Home
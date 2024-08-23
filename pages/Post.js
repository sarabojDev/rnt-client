import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
 
import FooterMenu from '../components/menus/FooterMenu'
const Post = () => {
  return (
    <View style={styles.homeContainer}>
     
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

export default Post
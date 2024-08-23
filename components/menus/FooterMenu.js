import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native'
const FooterMenu = () => {
    const navigation = useNavigation()
    const router = useRoute()
    console.log(router)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <FontAwesome5 name="home" style={styles.iconStyle}
                 color={
                    router.name === "Home" && "blue"
                 }
                
                />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Post")}>
                <FontAwesome5 name="plus-square" style={styles.iconStyle}
                
                color={
                    router.name === "Post" && "blue"
                 }
                 />
                <Text>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("About")} 
                
                
                >
                <FontAwesome5 name="info-circle" style={styles.iconStyle} color={
                    router.name === "About" && "blue"
                 } />
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
                <FontAwesome5 name="user" style={styles.iconStyle} 
                color={
                    router.name === "Account" && "blue"
                 } />
                <Text>Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between"
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 25
    }
})

export default FooterMenu
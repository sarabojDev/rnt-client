import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HeaderMendu = () => {
    const [state, setState] = useContext(AuthContext);
    const logoutHandler = async () => {
        setState({
            token: "",
            user: null
        });

        await AsyncStorage.removeItem("@auth")
        Alert.alert("Logout successfully")
    }
    return (
        <View>
            <TouchableOpacity onPress={logoutHandler}>
                <FontAwesome5 name="sign-out-alt"
                    color="red"
                    style={styles.iconStyle} />
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

export default HeaderMendu
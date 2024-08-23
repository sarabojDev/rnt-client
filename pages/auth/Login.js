import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState,useContext,useEffect } from 'react'
import InputBox from '../../components/form/InputBox'
import SubmitButton from '../../components/form/SubmitButton'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../context/AuthContext'

const Login = ({ navigation }) => {
     const [state,setState] = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const submitFunc = async () => {
        try {
            if (!email || !password || !email) {
                return Alert.alert("Invalid", "Please fill all fields!")
            }
            const { data, status } = await axios.post('/login', { email, password })
            await AsyncStorage.setItem('@auth',JSON.stringify(data));
            setState(data)
            navigation.navigate("Home")
            console.log(password, email, data, status)
        } catch (error) {
            console.log(error.message)
        }
    }

    
 
    // useEffect(()=>{
    //     if(state) {
    //         navigation.navigate("Home")
    //     }
    //  },[])

    return (
        <View style={styles.registerContainer}>
            <Text style={styles.registerText}>LogIn</Text>
            <View>
                <InputBox label={"Email"} value={email} handler={setEmail} />
                <InputBox label={"Password"} value={password} handler={setPassword} secureTextEntry={true} />
            </View>
            <SubmitButton submitHandler={submitFunc} loading={loading} />
            <Text style={styles.underText}>
                No have an account ?  <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Register</Text>
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#615EFC",
        paddingHorizontal: 30
    },
    registerText: {
        fontSize: 39,
        textAlign: "center",
        color: "#ffffff"
    },
    underText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 17,
        fontStyle: "italic"
    },
    link: {
        color: "#F2DF3A",
        fontStyle: "normal"
    }
})


export default Login
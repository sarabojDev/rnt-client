import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/form/InputBox'
import SubmitButton from '../../components/form/SubmitButton'
import axios from 'axios'

const Register = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const submitFunc = async () => {
        try {
            if (!username || !password || !email) {
                return Alert.alert("Invalid", "Please fill all fields!")
            }
            const { data,status } = await axios.post('/register', { name: username, email, password })
            console.log(username, password, email, data,status)
            navigation.navigate("Login")
        } catch (error) {
            console.log('DD', error.stack)
        }
    }



    return (
        <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Register</Text>
            <View>
                <InputBox label={"Username"} value={username} handler={setUsername} />
                <InputBox label={"Email"} value={email} handler={setEmail} />
                <InputBox label={"Password"} value={password} handler={setPassword} secureTextEntry={true} />
            </View>
            <SubmitButton submitHandler={submitFunc} loading={loading} />
            <Text style={styles.underText}>
                Aleady registered ?  <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Login</Text>
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

export default Register
import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({ label, secureTextEntry, value, handler }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLable} >{label}</Text>
            <TextInput style={styles.input} placeholder={label + "..."}
                value={value}
                onChangeText={(text)=>handler(text)}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20
    },
    inputLable: {
        fontSize: 20,
        color: "white"
    },
    input: {
        backgroundColor: "#ffffff",
        height: 40,
        borderRadius: 30,
        marginTop: 10,
        paddingHorizontal: 20
    }
})

export default InputBox
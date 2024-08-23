import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({submitHandler,loading}) => {
    return (
        <TouchableOpacity style={styles.submitBtn} onPress={submitHandler}>
            <Text style={styles.btnText}>
                {
                    loading?"Loading...":"Register"
                }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: "#0D1282",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20,
        marginTop:20
    },
    btnText:{
        fontSize:18,
        color:"#ffffff"
    }
})

export default SubmitButton
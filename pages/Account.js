import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import FooterMenu from '../components/menus/FooterMenu'

const Account = () => {
    const [state, setState] = useContext(AuthContext);

    return (
        <View style={styles.homeContainer}>
            <Text>
               NAME: {state?.user.name}
            </Text>
            <Text>
               NAME: {state?.user.email}
            </Text>
            <Text>
               ROLE: {state?.user.role}
            </Text>
            <Text>
               NAME: {state?.user.email}
            </Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterMenu />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 40,
        margin: 10,

    }
})

export default Account
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemeView from '../../components/ThemeView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useUser'
import ThemeButton from '../../components/ThemeButton'

const Profile = () => {

  const {logout, user} = useUser()

  return (
    <ThemeView style={styles.container} safe={true} >
      <ThemeText title={true} style={styles.heading}>
        {user.email}
      </ThemeText>
      <Spacer />

      <ThemeText>Time to start reading some book...</ThemeText>
      <Spacer />

      <ThemeButton onPress={logout}>
        <Text style={{color: "#f2f2f2"}}>
          Logout
        </Text>
      </ThemeButton>

    </ThemeView>

  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})
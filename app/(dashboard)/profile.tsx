import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemeView from '../../components/ThemeView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <ThemeView style={styles.container} safe={true} >
      <ThemeText title={true} style={styles.heading}>
        Your Email
      </ThemeText>
      <Spacer />

      <ThemeText>Time to start reading some book...</ThemeText>
      <Spacer />
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
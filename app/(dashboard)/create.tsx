import { StyleSheet } from 'react-native'
import React from 'react'
import ThemeView from '../../components/ThemeView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'

const Create = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemeText title={true} style={styles.heading}>
        Add a new Book
      </ThemeText>
      <Spacer />
    </ThemeView>
  )
}

export default Create

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
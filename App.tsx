import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView  style={styles.Main}>
        <ScrollView style={styles.MainView}>
            <Text style={styles.Title}>My ToDo</Text>
        </ScrollView>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main : {
        flex : 1,
    },
    MainView : {
        paddingTop : 20,
        paddingHorizontal : 30,


    },
    Title : {
        fontSize : 27,
        color : '#000',
        textAlign : 'center',
        fontWeight : 'bold'



    },
})
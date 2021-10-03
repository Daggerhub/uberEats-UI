import React from 'react'
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
  <SafeAreaView style={styles.AndroidSafeArea} >
    <HeaderTabs/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

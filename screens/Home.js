import React from 'react'
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
export default function Home() {
  return (
  <SafeAreaView style={styles.AndroidSafeArea} >
    <View style={{backgroundColor: "white", padding: 15}}>
    <HeaderTabs/>
    <SearchBar/>
    </View>
    <Category/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#eee",
    flex: 1
  }
});

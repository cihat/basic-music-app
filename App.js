import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Search from './components/Search'
import MusicList from './components/MusicList'

const App = () => {
  const [data, setData] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <Search style={styles.search} artist_data={setData} />
      <MusicList artist_data={data} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
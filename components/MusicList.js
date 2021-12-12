import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import MusicCard from './MusicCard'

const MusicList = (props) => {
  const { artist_data } = props

  const renderItem = ({ item }) => (
    <MusicCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {
        artist_data.length <= 0 &&
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No data found ❌</Text>
        </View>
      }
      <FlatList
        data={artist_data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#999',
  },

});

export default MusicList;
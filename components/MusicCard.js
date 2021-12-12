import React from 'react'
import { View, StyleSheet, Text, Image, Linking } from 'react-native'

const MusicCard = (props) => {
  const { item } = props

  return (
    <View style={styles.container}>
      <View style={styles.image_wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: item.album.cover_big,
          }}
        />
      </View>
      <View style={styles.content_wrapper}>
        <Text style={styles.song_title} onPress={() => Linking.openURL(item.link)}>{item.title}</Text>
        <Text style={styles.artist_name} onPress={() => Linking.openURL(item.artist.link)}>
          {item.artist.name}
        </Text>
        <Text style={styles.album_title}>{item.album.title}</Text>
        <Text style={styles.preview} onPress={() => Linking.openURL(item.preview)}>Preview</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    marginVertical: 8,
    marginHorizontal: 16,
    height: "auto",
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  title: {
    fontSize: 14,
    color: "white",
  },
  image_wrapper: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  content_wrapper: {
    flex: 1,
  },
  song_title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
  },
  artist_name: {
    color: '#000',
    marginBottom: 1,
  },
  album_title: {
    color: '#000',
    marginBottom: 1,
  }

})

export default MusicCard

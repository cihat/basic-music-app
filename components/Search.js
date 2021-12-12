import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button, TouchableHighlight } from "react-native";

const Search = (props) => {
  const { artist_data } = props
  const [artist, setArtist] = useState("")

  const handleSubmit = async (artist) => {
    setArtist(artist)
    const artists_data = await fetch(`https://api.deezer.com/search?q=${artist}&index=0&limit=100`)
      .then(res => res.json())

    artist_data(artists_data.data)
  }

  return (
    <View style={styles.search_container}>
      <TextInput
        style={styles.input}
        onChangeText={setArtist}
        value={String}
        placeholder="Please enter a artist"
        keyboardType="default"
      />
      <TouchableHighlight
        style={styles.button_wrapper}>
        <Button
          onPress={() => handleSubmit(artist)}
          title="Search"
          color="#000"
          accessibilityLabel="Learn more about this button"
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#2196F3",
    fontSize: 16,
    color: "#841584",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  button_wrapper: {
    flex: 1,
    height: 40,
    width: "20%",
    borderRadius: 5,
    backgroundColor: "#2196F3",
  }
});

export default Search;
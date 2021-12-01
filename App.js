import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, ScrollView, Modal } from 'react-native';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Of Thrones</Text>
      <ScrollView>
        <Modal>
          <FlatList horizontal={true} data={characters} renderItem={Character} />
        </Modal>
      </ScrollView>
    </View>
  );
}

const Character = ({ item }) => {
  return (
    <View style={styles.character}>
      <Text style={styles.name}>{item.fullName}</Text>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 90,
    padding: 40,
  },
  image: {
    height: 250,
    width: 250,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  character: {
    padding: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

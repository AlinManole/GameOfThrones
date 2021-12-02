import React from 'react'

import { Pressable, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  characterContainer: {
    marginBottom: 20
  }, 
  image: {
    width: 150,
    height: 150
  }
})

const Character = ({ character, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.characterContainer}>
      <Image
        style={styles.image}
        source={{
          uri: character.imageUrl
        }}
      />
      <Text>{character.fullName}</Text>
    </Pressable>
  )
}

export default Character
import React from "react"

import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: "grey",
    margin: 2
  }
})

const Separator = () => {
  return (
    <View style={styles.separator} />
  )
}

export default Separator
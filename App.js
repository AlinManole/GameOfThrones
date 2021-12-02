import React, { useEffect, useState } from 'react'

import { Text, FlatList } from 'react-native'
import { Modal, Provider } from '@ant-design/react-native'
import Character from './components/Character'
import Separator from './components/Separator'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [])

  return (
    <Provider>
      {character &&
        <Modal
          title="Title"
          transparent
          onClose={() => setCharacter(null)}
          visible
          closable
        >
          <Text>{character.fullName}</Text>
          <Text>{character.title}</Text>
          <Text>{character.family}</Text>
        </Modal>
      }
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <Character
            character={item}
            onPress={() => setCharacter(item) }
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </Provider>
  )
}

export default App
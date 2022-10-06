import React, { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native'
import { FriendList } from '../Components/FriendList'

export function Home() {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState([])

  async function handSearch () {
    const response = await fetch(`http://192.168.0.101:3333/friends?q=${name}`)
    const data = await response.json()
    setFriends(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        placeholder={'Nome do amigo'}
        onChangeText={setName}
        style={styles.input}
      />

      <Button
        title={'Buscar'}
        onPress={handSearch}
      />

      <ScrollView style={styles.list}>
        <FriendList data={ friends } />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10
  },
  list: {
    marginTop: 20
  }
} )
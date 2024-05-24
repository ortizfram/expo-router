import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomePage = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
      <Link href="home/repolist">Repo Ratings</Link>
    </View>
  )
}

export default HomePage
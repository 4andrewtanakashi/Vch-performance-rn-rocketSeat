import React, { memo } from 'react'
import { Text } from 'react-native'

interface Props {
  data: {
    id: number
    name: string
    likes: number
  }
}

function FriendComponent ( { data } : Props ) {
  return (
    <Text>
      { data.name } - likes: { data.likes }
    </Text>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
} )
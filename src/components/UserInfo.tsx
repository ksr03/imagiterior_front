import React from 'react'
import { HStack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

interface Props {
  name: string
  image: string
}

function UserInfo ({ name, image }: Props): JSX.Element {
  return (
    <>
      <HStack width='220px'>
        <Image marginLeft='10px' boxSize='65px' rounded='full' src={image} objectFit='cover'/>
        <Text width='140px' textAlign='center' fontSize='20px'>{name}</Text>
      </HStack>
    </>
  )
}

export default UserInfo

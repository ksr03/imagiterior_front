import React, { useState } from 'react'
import { VStack, HStack, Text, WrapItem, Box, Wrap } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'
import RoomInfo from '../components/RoomInfo'
import roomList from '../Data/roomList.json'
import BackButton from '../components/BackButton'
import DeleteModal from '../components/DeleteModal'

interface room_type {
  name: string
  image: string
}

function Delete (): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  /* 削除する部屋の名前を保持する */
  const [roomName, setRoomName] = useState<string>('')
  const AllRooms: JSX.Element[] = roomList.map(({ name, image }: room_type, index: number) => {
    return (
      <>
        <WrapItem key={index} onClick={onOpen}>
          <WrapItem onClick={ () => { setRoomName(name) } }>
            <RoomInfo title={name} image={image} type='red'/>
          </WrapItem>
        </WrapItem>
      </>
    )
  })

  return (
    <>
      <DeleteModal name={roomName} isOpen={isOpen} onClose={onClose}/>
      <VStack marginTop='16px' width='100%' justify='center'>
        <HStack width='50%'>
          <BackButton/>
        </HStack>
        <Text marginBottom='30px' paddingY='30px' width='50%' fontSize='30px' textAlign='center' borderBottom='3px solid #999999'>削除する部屋を選択してください</Text>
        <Box w='60%' marginTop='40px' marginBottom='40px'>
          <Wrap spacing='50px' justify='center'>
            {AllRooms}
          </Wrap>
        </Box>
      </VStack>
    </>
  )
}

export default Delete

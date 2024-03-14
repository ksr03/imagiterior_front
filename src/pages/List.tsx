import React from 'react'
import { VStack, HStack, Spacer, Text, WrapItem, Box, Wrap, Link } from '@chakra-ui/layout'
import RoomInfo from '../components/RoomInfo'
import roomList from '../Data/roomList.json'
import IconButton from '../components/IconButton'

interface room_type {
  name: string
  image: string
}

function List (): JSX.Element {
  const name = '【ここにユーザー名】'
  const AllRooms: JSX.Element[] = roomList.map(({ name, image }: room_type, index: number) => {
    return (
      <WrapItem key={index}>
        <Link href='./design' style={{ textDecoration: 'none' }}>
          <RoomInfo title={name} image={image} type='green'/>
        </Link>
      </WrapItem>
    )
  })

  return (
    <>
      <VStack marginTop='50px' justify='center'>
        <Text paddingY='30px' width='50%' fontSize='30px' textAlign='center' borderBottom='3px solid #999999'>{name}の部屋一覧</Text>
        <HStack width='50%'>
          <Spacer/>
          <Link href='/delete' width='50%'>
            <Text textAlign='right' color='red'>部屋を削除する</Text>
          </Link>
        </HStack>
        <Box w='60%' marginTop='40px' marginBottom='40px'>
          <Wrap spacing='50px' justify='center'>
            {AllRooms}
          </Wrap>
        </Box>
        <Link href='/design'>
          <IconButton type='addRoom' event={() => { }}/>
        </Link>
      </VStack>
    </>
  )
}

export default List

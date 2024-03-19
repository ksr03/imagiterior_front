import React from 'react'
import { Flex, VStack, Center, Accordion, WrapItem } from '@chakra-ui/react'
// import UserInfo from './UserInfo'
import Logo from './Logo'
import FurnitureMenu from './FurnitureMenu'
import furnitures from '../Data/furnitures.json'

interface Props {
  userName: string
  userIcon: string
  addInteriors: (fileName: string, imageSize: number[]) => void
}

function SideBar ({ userName, userIcon, addInteriors }: Props): JSX.Element {
  const AccordionItems: JSX.Element[] = furnitures.map(({ category, items }: any, index: number) => {
    return (
      <WrapItem key={index}>
       <FurnitureMenu title={category} items={items} addInteriors={addInteriors}/>
      </WrapItem>
    )
  })
  return (
    <>
      <Flex h='100%' w='15%' roundedBottomRight='30px' bg='#E4D4D4' boxShadow='xl' zIndex='9000' position='fixed' top='0' left='0'>
        <VStack w='100%' paddingTop='20px' paddingBottom='25px'>
          <Center paddingBottom='15px' marginBottom='10px' width='80%' height='140px' borderBottom='3px solid #FFFFFF'>
            <Logo size={150}/>
          </Center>
          {/* <UserInfo name={userName} image={userIcon}/> */}
          <Accordion allowToggle marginTop='10px' overflowY='scroll' sx={{ '&::-webkit-scrollbar': { display: 'none' } }}>
            {AccordionItems}
          </Accordion>
        </VStack>
      </Flex>
    </>
  )
}

export default SideBar

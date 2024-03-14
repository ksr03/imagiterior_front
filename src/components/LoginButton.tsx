import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'

interface Props {
  message: string
}

function LoginButton ({ message }: Props): JSX.Element {
  return (
    <>
      <Button onClick={() => { }}>
      <Flex align="center">
          <FcGoogle size='30px' />
          <Text ml="2">{message}</Text>
          <MdKeyboardArrowRight size='40px'/>
        </Flex>
      </Button>
    </>
  )
}

export default LoginButton

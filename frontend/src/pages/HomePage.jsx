import React from 'react'
import { Container, Box, Text,  Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
// import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
function HomePage() {

  // const navigate =useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // if(user){
    //   navigate("/chats");
    // }
}, []);
  return (
   <Container maxW = 'xl' centerContent >
    <Box
    d='flex'
    justifyContent='center'
    p={3}
    bg={"white"}
    w='100%'
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"

    >
    <Text fontSize="3xl" fontWeight="600" fontFamily="Work sans" color="black" textAlign="center"> Chatter Box</Text>

    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
   </Container>
  )
}

export default HomePage
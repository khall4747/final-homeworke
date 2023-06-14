
import { useEffect,useState } from "react";
import { Card, CardHeader, CardBody,Heading,Text ,Flex ,Box, Button,Image,CardFooter} from '@chakra-ui/react'
import axios from "axios";
import { Link } from "react-router-dom";
export default function Onephoto() {
    const [Data, setData] = useState([]);
    //const username= localStorage.getItem('username')
    //const email= localStorage.getItem('email')
   // const password= localStorage.getItem('password')
    const id = localStorage.getItem('idp')
    console.log(id);
useEffect(()=>{
  axios.get("https://6486cfe9beba6297278f36b8.mockapi.io/photos").then(res=>{
  const photo= res.data.find(element => element.id === id)
       console.log(photo.avatar);
         setData(photo)
        //console.log(user.username);
   // console.log(res.data);
   
   // console.log(username);
  })


},[])
  return (

   <>
   <Box  paddingTop='100px'  paddingBottom='400px'>
    <Card maxW='md' >
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Box>
          <Heading size='sm'> {Data.text}</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
      
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src= {Data.avatar}
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
   <Text>{Data.photo}</Text>
   <Link to="/allphoto"><Button>back</Button></Link>
  </CardFooter>
</Card>
</Box>
   
   
   </>
  )
}

import { useState,useEffect } from "react"
import { Card, CardHeader, CardBody,Heading,Text ,Stack ,Box,StackDivider, Button, Center} from '@chakra-ui/react'
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Profile() {
    const [Data, setData] = useState([]);
    //const username= localStorage.getItem('username')
    //const email= localStorage.getItem('email')
   // const password= localStorage.getItem('password')
    const id = localStorage.getItem('id')
   // console.log(id);
useEffect(()=>{
  axios.get("https://6486cfe9beba6297278f36b8.mockapi.io/user").then(res=>{
  const user= res.data.find(element => element.id === id)
       console.log(user);
         setData(user)
        //console.log(user.username);
   // console.log(res.data);
   
   // console.log(username);
  })


},[])
  const delete1=(id)=>{
    axios.delete(`https://6486cfe9beba6297278f36b8.mockapi.io/user/${id}`)
    window.location.href = '/profile';
  }
  return (
   <>
   <Center paddingTop='100px'  paddingBottom='400px'>
   <Card >
  <CardHeader>
    <Heading size='md'>Profile</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        {Data.username}
        </Heading>
        <Text pt='2' fontSize='sm'>
        your user name
        </Text>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         {Data.email}
        </Heading>
        <Text pt='2' fontSize='sm'>
          your email
        </Text>
  
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        {Data.password}
        </Heading>
        <Text pt='2' fontSize='sm'>
          your password
        </Text>
       
      </Box>
    </Stack>
  </CardBody>
  <Button onClick={()=>{delete1(Data.id)}} width='300px'>delete user</Button> <br/>
 <Link to="/update" ><Button width='300px' onClick={()=>{id}}>Update</Button></Link> <br/>
 <Link to="/allphoto" ><Button width='300px' onClick={()=>{id}} color="blue">go to Content </Button></Link> 
</Card>
</Center>
   
   
   </>
  )
}

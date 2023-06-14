
import {
    FormControl,
    FormLabel,
    Box,
    FormHelperText,
    Input,
    Center,
    Button
  } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import axios from 'axios';
export default function Signup() {
   const [username, setusername] = useState('');
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
   const [Data, setData] = useState([]);
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
})},[])
    const handleSubmit = async() => {
    
      localStorage.clear()
      await axios.post('https://6486cfe9beba6297278f36b8.mockapi.io/user',{
        username,email,password
      }).then(res=>{
      const id=res.data.id
        localStorage.setItem('username',username)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        localStorage.setItem('id',id)
        console.log(res.data.id);
        window.location.href = '/profile';
      }
    
      )
      
      };
  
  return (
   <>
    <Center>
   <Box boxSize='500px' paddingTop='100px'  paddingBottom='700px'>
   <FormControl>
  <FormLabel>Name</FormLabel>
  <Input type='text' onChange={(e) => setusername(e.target.value )} />
</FormControl>
   <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' onChange={(e) => setemail(e.target.value )}/>
  <FormHelperText>Well never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password'  onChange={(e) => setpassword( e.target.value )}/>
</FormControl>
<Button colorScheme='teal' variant='ghost'  onClick={handleSubmit}  >
    submit
  </Button>
</Box>
</Center>
   </>
  )
}

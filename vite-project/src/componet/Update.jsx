
import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    Box,
    FormHelperText,
    Input,
    Center,
    Button
  } from '@chakra-ui/react'
  import axios from 'axios';
//import { Link } from "react-router-dom";
export default function Update() {
    const navigat = useNavigate()
    const [id , setId]=useState("")
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
        console.log(localStorage.getItem("id"));
        setId(localStorage.getItem("id"))
     
    }, [])
    const ubdateData = async()=>{
        await axios.put(`https://6486cfe9beba6297278f36b8.mockapi.io/user/${id}`,{
            username,email,password
        
        })
        navigat("/profile")
            }
  return (
    <Center>
   <Box boxSize='500px' paddingTop='100px'  paddingBottom='700px' >
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
<Button colorScheme='teal' variant='ghost'  onClick={ubdateData}  >
    submit
  </Button>
</Box>
</Center>
  )
}

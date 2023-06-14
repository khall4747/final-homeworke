import {
    Box,
    Flex,
    HStack,
    Button,
    Text,
   
    Heading,
    IconButton,
    useDisclosure,
    useColorModeValue
  } from '@chakra-ui/react';
  import { useEffect,useState } from 'react';
  // Here we have used react-icons package for the icons
  import { GiHamburgerMenu } from 'react-icons/gi';
  import { AiOutlineClose } from 'react-icons/ai';

  import axios from 'axios';
 
  
  
  
  //const username= localStorage.getItem('username')
  //const email= localStorage.getItem('email')
 // const password= localStorage.getItem('password')
 



  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Data, setData] = useState([]);
    const id = localStorage.getItem('id')
    const [login,setlogin]=useState(true)
  
 // console.log(id);
useEffect(()=>{
axios.get("https://6486cfe9beba6297278f36b8.mockapi.io/user").then(res=>{
const user= res.data.find(element => element.id === id)
     console.log(user);
       setData(user)
       if(id ==null){

        setlogin(false)
    }else{
        setlogin(true)  
    }
      //console.log(user.username);
 // console.log(res.data);

 // console.log(username);
})},[])
const logout =()=>{
    
    localStorage.clear()
    window.location.href = '/'
}
    return (
      <Box px={4} bg={useColorModeValue('white', 'gray.800')}>
        <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
        {login? (
<>
<Text>Hello 🩵{Data.username}</Text> 
</>
  ):(
    <>
   
    </>
  )}

  
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={6} d={{ base: 'none', md: 'flex' }} alignItems="center">
              
              {/* Dropdown Menu */}
             
            </HStack>
          </HStack>
  {login? (
<>
<Button colorScheme="blue" size="md" rounded="md" d={{ base: 'none', md: 'block' }} onClick={logout}>
           logout
          </Button>
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            d={{ base: 'inherit', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
</>
  ):(
    <>
    <Heading colorScheme="blue" size="md" rounded="md" d={{ base: 'none', md: 'block' }} onClick={logout}>
   Wellcome 😁🩵
          </Heading>
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            d={{ base: 'inherit', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
    
    </>
  )}
          
        </Flex>
  
       
            
            
          </Box>
     
     
    );
  }
  
  // NavLink Component
 
  
  
  
  // Dropdown MenuLink Component
 
  
  
 
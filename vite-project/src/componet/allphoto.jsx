import {Heading, Image } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Flex,Box,Grid,CardFooter,Button,Text ,Card,CardBody,CardHeader} from "@chakra-ui/react";
import axios from 'axios';
export default function Allphoto() {
    const [search, setSearch] = useState("")
    const [Data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://6486cfe9beba6297278f36b8.mockapi.io/photos").then(res=>{
       
        
               setData(res.data)
              //console.log(user.username);
        //console.log(Data);
         
         // console.log(username);
        })
        //console.log(Data.avatar);
      
      
      },[])
    
  
  return (
                     <>
                    
                  <Box>
                        <input name='Search' placeholder='Search' id="searchInp" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
               
                <Flex flexDir='column-reverse' id="containerFlex">
 
                    <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard" >
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} id="mygrid">
                            {
                                Data.filter((item) => {
                                    return search.toLowerCase() === '' ? item :
                                        item.text.toLowerCase().includes(search)
                                }).map((item) =>(
                                    <>
                             <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Box>
          <Heading size='sm'> {item.text}</Heading>
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
    src= {item.avatar}
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
    <Button flex='1' variant='ghost' >
      Like
    </Button>
     <Button flex='1' variant='ghost' >
      Comment
    </Button>
    <Link to="/onephoto"> <Button onClick={()=>localStorage.setItem("idp",item.id)} >
      more
    </Button>  </Link>
   
  </CardFooter>
</Card>
                         
                                    </>
                                ))} 
                                </Grid>
                                </Flex>
                                </Flex>
                           



                       </>
       

    )}
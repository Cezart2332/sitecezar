import {useState,useEffect} from 'react'
import {Flex,Text,VStack,HStack,Box,Image,Button,Input,Textarea} from '@chakra-ui/react'

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
import ProgressWithVisibility from "./ProgressWithVisibility";
import { easeQuadInOut } from "d3-ease";
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);





const MainPage = () => {
    const [projects, setProjects] = useState([])
    const [certificates, setCertificates] = useState([])
    const [hoveredSkill , setHoveredSkill] = useState(null)

    const skills = [
        {
            name:"React",
            value:70,
            src:"./src/assets/react.svg",
            description:"A JavaScript library for building user interfaces"
        },
        {
            name:"Mysql",
            value:70,
            src:"./src/assets/mysql.svg",
            description:"A relational database management system"
        },
        {
            name:".Net",
            value:80,
            src:"./src/assets/dotnet.svg",
            description:"A powerful framework for building web applications and services"
        },
]
    const skillsToShow = skills.map((skill) => {
        const values = [];
        for(let i = 0; i <= skill.value; i++) {
            values.push(i);
        }
        return(
            <VStack position="relative" zIndex="999" key={skill.name} alignItems="center" justifyContent="center" onMouseEnter={() => setHoveredSkill(skill.name)} onMouseLeave={() => setHoveredSkill(null)}>
                    <Image
                        src={`${skill.src}`}
                        width="50px"
                        height="50px"
                    >
                    </Image>
                { hoveredSkill === skill.name &&(
                    <MotionFlex
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0,y:50}}
                        transition={{duration:0.5, ease:easeQuadInOut}}
                        position="absolute"
                        height="200px"
                        bottom="-10%"
                        background="blue.500"
                        color="white"
                        p="4"
                        borderRadius="md"
                        boxShadow="md"
                        zIndex="10"

                    >
                        <Text alignText="center" color="black" textStyle="lg">{skill.description}</Text>
                    </MotionFlex>
                )}
                <ProgressWithVisibility values={values} />
            </VStack>
        )
    })

    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch('http://localhost:1337/api/projects?populate=*')
            const data = await response.json()
            setProjects(data.data)
        }
        const getCertificates = async () => {
            const response = await fetch('http://localhost:1337/api/certificates?populate=*')
            const data = await response.json()
            console.table(data.data)
            setCertificates(data.data)
        }
        getProjects()
        getCertificates()
    },[])

    const showProjects = projects.map((project) => {
        const url = `http://localhost:1337${project.Image.url}`
        return(
            <a href={project.Link} target="_blank" rel="noreferrer">
                <VStack _hover={{transform:"scale(1.05)",opacity:"0.7", transition:"all 0.3s ease-in-out"}} key={project.id} width="500px" background="gray.500" p="2" px="2" borderRadius="lg">
                    <Image width="100%" height="300px" src={url}></Image>
                    <Text textStyle="2xl" alignText="center" fontWeight="semibold">{project.Name}</Text>
                    <Text alignText="start" >{project.Description}</Text>
                </VStack>
            </a>
        )
    })
    const showCertificates = certificates.map((certificate) => {
        const url = `http://localhost:1337${certificate.Image.url}`
        return(
            <Image src={url} boxSize="400px">
            </Image>
        )
    })
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key",  "5e124d6e-68fa-4cf2-b9b3-345fc2213bee");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
        <Flex py="5%"  width="100%" alignItems="center" justifyContent="center" minHeight={{ base: "auto", lg: "100vh" }} flexDirection="column">
            <Text color="white" textStyle="5xl" fontWeight="bold">Turliu Cezar-Mihai</Text>
            <Text textStyle="3xl" fontStyle="italic" fontWeight="semibold" color="gray.400">Full Stack Web and Mobile Developer</Text>
            <Button variant="surface" colorPalette="blue" borderRadius="xl" fontWeight="semibold" textStyle="lg" width="30%">Download my CV</Button>
        </Flex>
        <Flex py="5%"  id="skills" width="100%"  alignItems="center" justifyContent="center" minHeight={{ base: "auto", lg: "100vh" }} flexDirection="column">
            <Text textStyle="5xl" fontWeight="bold" color="white">My Skills:</Text>
            <Flex width="80%" alignItems="center" justifyContent="center" flexWrap="wrap" gap="5" >
                {skillsToShow}
            </Flex>
        </Flex>
         <Flex py="5%"  id="projects" width="100%"  position="relative" zIndex="999" alignItems="center" justifyContent="center" minHeight={{ base: "auto", lg: "100vh" }} gap="5" flexDirection="column">
             <Text textStyle="5xl" fontWeight="bold" color="white">My projects:</Text>
             <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap="5">
                 {showProjects}
             </Flex>
         </Flex>
         <Flex py="10%"  id="certificates" width="100%" position="relative" zIndex="999" alignItems="center" justifyContent="center" minHeight={{ base: "auto", lg: "100vh" }}>
             <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap="5">
                {showCertificates}
             </Flex>
         </Flex>
        <Flex py="10%" id="services" width="100%" alignItems="center"  justifyContent="center" minHeight={{ base: "auto", lg: "100vh" }} gap="10" flexDirection="column" flexWrap="wrap">
            <Text textStyle="5xl" fontWeight="bold">Services:</Text>
            <Flex alignItems="center" justifyContent="center" position="relative" zIndex="999"  color="black" borderRadius="lg" p="5" gap="5" flexDirection="row" flexWrap="wrap">
                <VStack _hover={{transform:"scale(0.85)", transition:"all 0.35s ease-in-out"}} cursor="pointer">
                    <Image
                        boxSize="100px"
                        src="./src/assets/frontend.svg"
                    >
                    </Image>
                    <Text textStyle="xl" fontWeight="semibold">Front-End Development</Text>
                </VStack>
                <VStack _hover={{transform:"scale(0.85)", transition:"all 0.35s ease-in-out"}} cursor="pointer">
                    <Image
                        boxSize="100px"
                        src="./src/assets/backend.svg"
                    >
                    </Image>
                    <Text textStyle="xl" fontWeight="semibold">Back-End Development</Text>
                </VStack>
                <VStack _hover={{transform:"scale(0.85)", transition:"all 0.35s ease-in-out"}} cursor="pointer">
                    <Image
                        boxSize="100px"
                        src="./src/assets/mobile.svg"
                    >
                    </Image>
                    <Text textStyle="xl" fontWeight="semibold">Mobile Development</Text>
                </VStack>
            </Flex>
        </Flex>
        <Flex py="10%" id="contact" width="100%" alignItems="center"  justifyContent="space-around" minHeight={{ base: "auto", lg: "100vh" }} gap="10" flexWrap="wrap">
            <Flex flexDirection="column" gap="5">
                <Text textStyle="4xl" fontWeight="bold">You can contact me on:</Text>
                <HStack>
                    <a href="https://www.linkedin.com/in/cezar-mihai-turliu-75a05a263/" target="_blank" rel="noreferrer">
                    <Button _hover={{transform:"scale(1.25)",opacity:0.5,transition:"all 0.35s ease-in-out"}} variant="none">
                        <Image
                            boxSize="50px"
                            src="./src/assets/linkedin.svg"
                        >
                        </Image>
                    </Button>
                    </a>
                    <a href="https://www.instagram.com/turliucezar/" target="_blank" rel="noreferrer">
                        <Button _hover={{transform:"scale(1.25)",opacity:0.5,transition:"all 0.35s ease-in-out"}} variant="none">
                            <Image
                                boxSize="50px"
                                src="./src/assets/instagram.svg"
                            >
                            </Image>
                        </Button>
                    </a>

                </HStack>
            </Flex>
            <form onSubmit={onSubmit}>
                <Text textStyle="4xl" fontWeight="bold">Or complete this form</Text>
                <Input type="text" name="title" mt="2%" size="xl" borderRadius="lg" fontWeight="bolder"  placeholder="Title" textStyle="lg"></Input>
                <Input type="email" name="email" mt="2%" size="xl" borderRadius="lg" fontWeight="bolder"   placeholder="Email" textStyle="lg"></Input>
                <Textarea type="text" name="message" mt="2%" size="xl"  height="300px"  borderRadius="lg" fontWeight="bolder"   placeholder="Your message" textStyle="lg"></Textarea>
                <Button type="submit" width="100%" mt="2%" borderRadius="lg" fontWeight="bolder" variant="outline">Send</Button>
            </form>
        </Flex>
        </>
    )
}

export default MainPage
import { useState } from 'react'
import {Button, Flex, Text, useBreakpointValue} from '@chakra-ui/react'
import { Menu } from 'lucide-react';
import {Link} from  "react-scroll";
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const isDekstop = useBreakpointValue({base:false, md:true})

    return (
        <>
            <Flex flexDirection="row" p="5" justifyContent="space-between" gap="5" alignItems="center">
                <Text textStyle="2xl" color="white" fontWeight="bold">Cezar</Text>
                {isDekstop ?
                    ( <Flex gap="5">
                        <Link to="skills" smooth={true} duration={500}><Button textStyle="lg"  fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Skills</Button></Link>
                        <Link to="projects" smooth={true} duration={500}><Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Projects</Button></Link>
                        <Link to="certificates" smooth={true} duration={500}><Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Certificates</Button></Link>
                        <Link to="contact" smooth={true} duration={500}><Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Services</Button></Link>
                        <Link to="contact" smooth={true} duration={500}><Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Contact</Button></Link>
                     </Flex>
                    )
                    :(
                        isOpen ?
                            (
                                <MotionFlex initial={{opacity: 0, x: 100}} animate={{opacity:1, x:0}} exit={{opacity:0,x:100}} transition={{duration:0.5}} position="fixed" top="0" left="0" zIndex="1000" gap="5" alignItems="center" justifyContent="center" width="100vw" height="100vh" flexDirection="column" background="linear-gradient(180deg,rgba(2, 16, 46, 1) 0%, rgba(0, 82, 224, 1) 100%);">
                                    <Button colorPalette="purple" variant="outline" onClick={() => setIsOpen(!isOpen)}><Menu size={24} /></Button>
                                    <Link to="skills" smooth={true} duration={500}><Button onClick={() => setIsOpen(!isOpen)} textStyle="lg"  fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Skills</Button></Link>
                                    <Link to="projects" smooth={true} duration={500}><Button onClick={() => setIsOpen(!isOpen)} textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Projects</Button></Link>
                                    <Link to="certificates" smooth={true} duration={500}><Button onClick={() => setIsOpen(!isOpen)} textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Certificates</Button></Link>
                                    <Link to="contact" smooth={true} duration={500}><Button onClick={() => setIsOpen(!isOpen)} textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Services</Button></Link>
                                    <Link to="contact" smooth={true} duration={500}><Button onClick={() => setIsOpen(!isOpen)} textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Contact</Button></Link>
                                </MotionFlex>

                            )
                            :(
                                <Button colorPalette="purple" variant="outline" onClick={() => setIsOpen(!isOpen)}><Menu size={24} /></Button>
                             )

                    )
                }

            </Flex>
        </>
    )
}

export default Header

import { useState } from 'react'
import {Button, Flex, Text, useBreakpointValue} from '@chakra-ui/react'
import { Menu } from 'lucide-react';

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const isDekstop = useBreakpointValue({base:false, md:true})

    return (
        <>
            <Flex flexDirection="row" p="5" justifyContent="space-between" gap="5" alignItems="center">
                <Text textStyle="2xl" color="white" fontWeight="bold">Cezar</Text>
                {isDekstop ?
                    ( <Flex gap="5">
                        <Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Projects</Button>
                        <Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Contact</Button>
                        <Button textStyle="lg" fontWeight="semibold" borderRadius="full" colorPalette="purple" color="white" variant="ghost">Services</Button>
                    </Flex>)
                    :(
                        <Button colorPalette="purple" onClick={() => setIsOpen(!isOpen)}><Menu size={24} /></Button>
                    )
                }

            </Flex>
        </>
    )
}

export default Header

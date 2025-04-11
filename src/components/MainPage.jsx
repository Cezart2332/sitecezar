import {useState,useEffect} from 'react'
import {Flex,Text,VStack,HStack,Image} from '@chakra-ui/react'

const [projects, setProjects] = useState([])

useEffect(() => {
    const getProjects = async () => {
        const response = await fetch('http://localhost:1337/api/projects')

    }
})



const MainPage = () => {
    return (
        <>
        <Flex mt="10%" alignItems="center" justifyContent="center" height="100vh" flexDirection="column">
            <Text color="white" textStyle="5xl" fontWeight="bold">Turliu Cezar-Mihai</Text>
            <Text textStyle="3xl" fontStyle="italic" fontWeight="semibold" color="gray.400">Full Stack Web and Mobile Developer</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" height="100vh" flexDirection="column">
            <Text textStyle="5xl" fontWeight="bold" color="black">My Expertise:</Text>
            <Flex width="80%" alignItems="center" justifyContent="center" flexDirection={{base:"column", md:"row"}} gap="5" >
                <VStack>
                    <HStack>
                        <Image
                            src="/src/assets/react.svg"
                            alt="React"
                            width="50px"
                            height="50px"
                        >
                        </Image>
                        <Text textStyle="2xl" fontWeight="bold">React</Text>
                    </HStack>
                    <Text textStyle="lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consequatur consequuntur cupiditate est laborum non pariatur qui ratione repellat, sapiente ut vitae voluptatem? Adipisci doloremque laborum magni mollitia quod?
                    </Text>
                </VStack>
                <VStack>
                    <HStack>
                        <Image
                            src="/src/assets/dotnet.svg"
                            alt="React"
                            width="50px"
                            height="50px"
                        >
                        </Image>
                        <Text textStyle="2xl" fontWeight="bold">.Net</Text>
                    </HStack>
                    <Text textStyle="lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consequatur consequuntur cupiditate est laborum non pariatur qui ratione repellat, sapiente ut vitae voluptatem? Adipisci doloremque laborum magni mollitia quod?
                    </Text>
                </VStack>
                <VStack>
                    <HStack>
                        <Image
                            src="/src/assets/mysql.svg"
                            alt="React"
                            width="50px"
                            height="50px"
                        >
                        </Image>
                        <Text textStyle="2xl" fontWeight="bold">Mysql</Text>
                    </HStack>
                    <Text textStyle="lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consequatur consequuntur cupiditate est laborum non pariatur qui ratione repellat, sapiente ut vitae voluptatem? Adipisci doloremque laborum magni mollitia quod?
                    </Text>
                </VStack>
            </Flex>
        </Flex>
        </>
    )
}

export default MainPage
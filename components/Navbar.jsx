import Link from 'next/link'
import {Menu, MenuButton, MenuList, MenuItem,IconButton,Flex, Box, Spacer} from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'


const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">Realtor</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <MenuItem icon={<FcHome />}>
                        <Link href="/" passHref>Home</Link>
                    </MenuItem>
                    <MenuItem icon={<BsSearch />}>
                     <Link href="/search" passHref>Search</Link>
                    </MenuItem>
                    <MenuItem icon={<FcAbout />}>
                        <Link href="/search?purpose=for-sale" passHref>Buy Property</Link>
                    </MenuItem>
                    <MenuItem icon={<FiKey />}>
                        <Link href="/search?purpose=for-rent" passHref> Rent Property </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar;
import { Avatar, Box, Button, Flex, Link, Tooltip , Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {IoHeartOutline, IoHomeOutline, IoLogOut, IoLogOutOutline, IoSearchOutline} from "react-icons/io5"
import {FiPlusSquare} from "react-icons/fi"

const Sidebar = () => {
	// const { handleLogout, isLoggingOut } = useLogout();
  const sideBarItems =[
    {
      title: "Home",
      icon : <IoHomeOutline size={25}/>,
      path:"/"
    },
    {
      title: "Search",
      icon : <IoSearchOutline size={25}/>,
    },
    {
      title: "Notifications",
      icon : <IoHeartOutline size={25}/>,
    },
    {
      title: "create",
      icon : <FiPlusSquare size={25}/>,
      path:"/"
    },
    {
      title: "profil",
      icon : <Avatar size={'xs'} name='Oumaima' src='images/avatar.jpg'/>,
      path:"/oumaima_codes"
    },

  ];
	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					<Image src="images/instagram.png" w={100} />
				</Link>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "block", md: "none" }} cursor='pointer'>
					<Image src="images/instagram-logo.png" w={80} />
				</Link>
				
				<Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sideBarItems.map((item , index) =>{
            return (
            <Tooltip
              hasArrow
              label={item.title}
              placement='right'
              key={index}
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.path}
                key={index}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.title}</Box>
              </Link>
            </Tooltip>);

          })}
				</Flex>

				{/* LOGOUT */}
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Link
            display={"flex"}
            to={'/auth'}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            mt={'auto'}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <IoLogOutOutline size={25}/>
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
            </Link>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;
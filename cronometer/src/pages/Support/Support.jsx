import { ChatIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SupNav } from "./Comp/SupNav";

export const Support = () => {
  return (
    <Box>
      <SupNav />
      <Flex
        mb="40px"
        justify="center"
        align="center"
        h={400}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url("https://theme.zdassets.com/theme_assets/197219/baaad44a0afe757ffa490034f9f3b731b9b6b121.jpg")`}
      >
        <InputGroup m="auto" w="50%" bg="#fff" borderRadius="110px">
          <InputLeftElement w={30}>
            <Search2Icon />
          </InputLeftElement>
          <Input
            focusBorderColor="#ff763f"
            pr="4.5rem"
            type="text"
            placeholder="Search"
          />
        </InputGroup>
      </Flex>
      <Box>
        <Grid
          m=" 50px auto"
          w="80%"
          h="200px"
          templateRows={{
            base: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          templateColumns="repeat(6, 1fr)"
          gap={4}
          color="#ff763f"
          fontWeight={500}
          fontSize="18px"
        >
          <GridItem
            justify="center"
            align="center"
            p={2}
            colSpan={{ base: 6, md: 3, lg: 2 }}
            border={"1px solid #ff763f"}
            _hover={{
              bg: "#ff763f",
              color: "#fff",
            }}
          >
            <Text>Web Version</Text>
            <Text>User Manual for Cronometer on web</Text>
          </GridItem>
          <GridItem
            justify="center"
            align="center"
            p={2}
            colSpan={{ base: 6, md: 3, lg: 2 }}
            border={"1px solid #ff763f"}
            _hover={{
              bg: "#ff763f",
              color: "#fff",
            }}
          >
            <Text>Web Version</Text>
            <Text>User Manual for Cronometer on web</Text>
          </GridItem>
          <GridItem
            justify="center"
            align="center"
            p={2}
            colSpan={{ base: 6, md: 3, lg: 2 }}
            border={"1px solid #ff763f"}
            _hover={{
              bg: "#ff763f",
              color: "#fff",
            }}
          >
            <Text>Web Version</Text>
            <Text>User Manual for Cronometer on web</Text>
          </GridItem>
          <GridItem
            justify="center"
            align="center"
            p={2}
            colSpan={{ base: 6, md: 3, lg: 6 }}
            border={"1px solid #ff763f"}
            _hover={{
              bg: "#ff763f",
              color: "#fff",
            }}
          >
            <Text>Web Version</Text>
            <Text>User Manual for Cronometer on web</Text>
          </GridItem>
        </Grid>
      </Box>

      <Divider
        w={"80%"}
        margin={{ base: "130px auto", md: "30px auto", lg: "30px auto" }}
        border={"2px solid"}
      />
      <Box justify={"center"} align="center" p={2} w="80%" margin={"30px auto"}>
        <Text fontSize={25} color="gray.700">
          Recent activity
        </Text>
        <Flex direction="column" justify="center" align="center" p={4}>
          <Flex
            w={"90%"}
            p="10px 20px"
            justify="space-between"
            m="10px 0px"
            borderBottom={"1px solid gray"}
          >
            <Flex direction="column" textAlign={"left"}>
              <Text>Pro Account Setting</Text>
              <Text fontSize={12} color="#ff763f">
                Pro-HIPPA
              </Text>
            </Flex>
            <HStack>
              <Text>Artical Created 2 days ago</Text>
              <ChatIcon color="#ff763f" />
            </HStack>
          </Flex>

          <Flex
            w={"90%"}
            p="10px 20px"
            justify="space-between"
            m="10px 0px"
            borderBottom={"1px solid gray"}
          >
            <Flex direction="column" textAlign={"left"}>
              <Text>Clients</Text>
              <Text fontSize={12} color="#ff763f">
                Pro-messaging
              </Text>
            </Flex>
            <HStack>
              <Text>Artical Created 7 months ago</Text>
              <ChatIcon color="#ff763f" />
            </HStack>
          </Flex>

          <Flex
            w={"90%"}
            p="10px 20px"
            justify="space-between"
            m="10px 0px"
            borderBottom={"1px solid gray"}
          >
            <Flex direction="column" textAlign={"left"}>
              <Text>Widgets</Text>
              <Text fontSize={12} color="#ff763f">
                Android Home Screen Widgets
              </Text>
            </Flex>
            <HStack>
              <Text>Artical Created 7 months ago</Text>
              <ChatIcon color="#ff763f" />
            </HStack>
          </Flex>

          <Flex
            w={"90%"}
            p="10px 20px"
            justify="space-between"
            m="10px 0px"
            borderBottom={"1px solid gray"}
          >
            <Flex direction="column" textAlign={"left"}>
              <Text>Foods Tabs</Text>
              <Text fontSize={12} color="#ff763f">
                Food
              </Text>
            </Flex>
            <HStack>
              <Text>Artical Created 9 months ago</Text>
              <ChatIcon color="#ff763f" />
            </HStack>
          </Flex>

          <Flex
            w={"90%"}
            p="10px 10px"
            justify="space-between"
            m="10px 0px"
            borderBottom={"1px solid gray"}
          >
            <Flex direction="column" textAlign={"left"}>
              <Text>Settings</Text>
              <Text fontSize={12} color="#ff763f">
                Target Scheduler
              </Text>
            </Flex>
            <HStack>
              <Text>Artical Created 10 months ago</Text>
              <ChatIcon color="#ff763f" />
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

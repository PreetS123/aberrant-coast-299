import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const SupNav = () => {
  return (
    <>
      <Box bg={"#fff"} w={"100%"} h="60px" p={2} mb={4}>
        <HStack spacing={'50%'} justify={'space-between'} color="#ff763f" w={"85%"} margin="auto">
            {" "}
            <RouterLink to='/' 
            // style={{width:'15%'}}
            >
            <Image
              w={"100%"}
              h="50px"
              src="https://theme.zdassets.com/theme_assets/197219/111fe6921e8b22116b39eaa745ea08e38a718e0d.png"
            />
            </RouterLink>
          <RouterLink to="#"  
          // style={{border:'1px solid red'}}
          >
            <Text fontSize={{base:8,md:14,lg:18}}>
            Submit & Review
            </Text>
            </RouterLink>
        </HStack>
      </Box>
    </>
  );
};

import React, { useState } from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import UpdateProfile from "./UpdateProfile";
import People from "./People";
import ConnectPeople from "./ConnectPeople";
import Footer from "../Shared/Footer/Footer";
import FooterMain from "../Shared/Footer/FooterMain";
import MyPost from "./MyPost";
const MyProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="lg:px-16 px-8 lg:grid grid-cols-10 gap-x-5 mt-6 ">
        <div py={6} className="lg:col-span-7">
          <Box
            maxW={"800px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"180px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"start"} mt={-16}>
              <Avatar
                className="ml-12"
                size={"2xl"}
                src={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>
            <div className="grid grid-cols-5">
              <Box className="col-span-3 lg;px-6 px-2">
                <Stack spacing={0} mt={2} align={"start"} mb={1}>
                  <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
                    John Doe
                  </Heading>
                  <Text color={"gray.500"}>Frontend Developer</Text>
                </Stack>
                <Stack spacing={0} mt={2} align={"start"} mb={1}>
                  <Heading fontSize={"xs"} fontWeight={400} fontFamily={"body"}>
                    Contact Info
                  </Heading>
                  <Text color={"gray.500"}>Dhaka, Bangladesh</Text>
                  <Text className="hover:underline cursor-pointer text-blue-600">
                    https://mahediimun.me/
                  </Text>
                </Stack>

                <Stack direction={"row"} justify={"start"} spacing={6}>
                  <Flex spacing={0} align={"center"}>
                    <Text fontWeight={600}>23k</Text>
                    <Text ml={2} fontSize={"sm"} color={"gray.500"}>
                      Followers
                    </Text>
                  </Flex>
                  <Flex spacing={0} align={"center"}>
                    <Text fontWeight={600}>500+</Text>
                    <Text ml={2} fontSize={"sm"} color={"gray.500"}>
                      Connection
                    </Text>
                  </Flex>
                </Stack>
                <Flex className=" lg:space-x-3 space-x-1 my-3">
                  <button className="btn  btn-secondary rounded-full lg:btn-sm btn-xs">
                    Open to
                  </button>
                  <label
                    htmlFor="profile-update-modal"
                    className="btn btn-outline btn-primary rounded-full lg:btn-sm btn-xs"
                  >
                    update profile
                  </label>
                  <button className="btn btn-outline btn-ghost rounded-full lg:btn-sm btn-xs">
                    Resume Build
                  </button>
                </Flex>
              </Box>
              <Box className="col-span-2 lg:block hidden">
                <Box px={6}>
                  <Flex className="" spacing={0} mt={2} align={"start"} mb={1}>
                    <div className="w-12 rounded ">
                      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" />
                    </div>
                    <Heading
                      className="hover:underline mt-3 cursor-pointer"
                      fontSize={"xs"}
                      fontWeight={700}
                    >
                      Brain Station
                    </Heading>
                  </Flex>
                  <Flex className="" spacing={0} mt={2} align={"start"} mb={1}>
                    <div className="w-8 rounded ">
                      <img src="https://upload.wikimedia.org/wikipedia/en/c/cb/Dhaka_University_logo.svg" />
                    </div>
                    <Heading
                      className="hover:underline mt-3 cursor-pointer"
                      fontSize={"xs"}
                      fontWeight={700}
                    >
                      Dhaka Collage
                    </Heading>
                  </Flex>
                </Box>
              </Box>
            </div>
                  </Box>
                  <MyPost></MyPost>
        </div>
        <div className=" lg:col-span-3">
          <Box
            className="bg-accent"
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            <Box>
              <Heading className=" px-4 pt-4" size="md">
                People Your Know
              </Heading>
              <Text mt="4">
                {isExpanded ? (
                  <>
                    <People></People>
                    <People></People>
                    <People></People>
                    <People></People>
                    <People></People>
                    <People></People>
                  </>
                ) : (
                  <>
                    <People></People>
                    <People></People>
                    <People></People>
                  </>
                )}
              </Text>
              <div
                onClick={handleExpand}
                className=" border-t-2 text-primary  text-center p-3 hover:bg-gray-300"
              >
                <button className="font-bold">
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </Box>
          </Box>
          <Box
            className="bg-accent my-6"
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            <Box className="">
              <Heading className=" px-4 pt-4" size="md">
                People you may know
              </Heading>
              <Text mt="4">
                {isExpanded ? (
                  <>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                  </>
                ) : (
                  <>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                    <ConnectPeople></ConnectPeople>
                  </>
                )}
              </Text>
              <div
                onClick={handleExpand}
                className=" border-t-2 text-primary  text-center p-3 hover:bg-gray-300"
              >
                <button className="font-bold">
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </Box>
          </Box>
        </div>
        {/* update user modal */}
        <UpdateProfile></UpdateProfile>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default MyProfile;

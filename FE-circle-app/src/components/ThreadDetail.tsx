import { Avatar, Box, Flex, Text, WrapItem } from "@chakra-ui/react"
import { BsChatDots } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa"
import { IoArrowBack } from "react-icons/io5"
import { Link } from "react-router-dom"
import InputThread from "./InputThread"
import Reply from "./Reply"
import useThreadDetail from "../hooks/useThreadDetail"

const ThreadDetail = () => {
  const { detailThread } = useThreadDetail()
  console.log(detailThread)

  return (
    <Box className="border-x mt-4 p-4">
      <Box _hover={{ textDecoration: "underline" }}>
        <Link to={"/"}>
          <Flex alignItems={"center"}>
            <IoArrowBack />
            <Text
              transitionDuration={"300ms"}
              cursor={"pointer"}
              className="font-semibold"
            >
              Back
            </Text>
          </Flex>
        </Link>
      </Box>

      <Box borderBottom={"1px solid gray"} pb={4}>
        <Flex alignItems={"center"} mt={10}>
          <WrapItem>
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </WrapItem>

          <Box marginLeft={5} display={"inline-block"}>
            <Text fontSize={"md"}>{detailThread?.user.fullname}</Text>
            <Text fontSize={"sm"} color={"gray"}>
              @{detailThread?.user.username}
            </Text>
          </Box>
        </Flex>
        <img
          src={detailThread?.image}
          // alt={detailThread?.user.fullname}
          className="rounded-md my-3"
        />
        <Text mt={5} fontSize={15}>
          {detailThread?.content}
        </Text>

        <Text mt={3} fontSize={13} color={"gray"} marginTop={4}>
          {detailThread?.createdAt}
        </Text>

        <Box display={"flex"} justifyContent={"start"} mt={5}>
          <Box display={"flex"} alignItems={"center"}>
            <FaRegHeart />
            <Text fontSize={12} ml={2}>
              {detailThread?.like} like
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} ml={8}>
            <BsChatDots />
            <Text fontSize={12} ml={2}>
              {detailThread?.comment} comment
            </Text>
          </Box>
        </Box>
      </Box>

      <InputThread placeholderText={"Type your reply!"} buttonText={"Reply"} />

      <Reply />
    </Box>
  )
}

export default ThreadDetail

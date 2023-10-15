import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"3xl"} id="about" mt="40">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {/* {profile.about} */}
              Welcome to PROJJEXX, your trusted software solutions partner in the UK. At PROJJEXX, we are passionate about leveraging technology to drive innovation and solve complex problems. With a team of highly skilled software engineers, developers, and designers, we specialize in delivering cutting-edge software solutions tailored to meet the unique needs of businesses and organizations. Our mission is to empower businesses with the tools and technologies they need to thrive in the digital age. Whether you're looking for custom software development, web and mobile app development, or IT consulting services, we have the expertise to deliver results that exceed your expectations. With a commitment to quality, innovation, and client satisfaction, PROJJEXX is your partner for success in the ever-evolving world of technology. We look forward to collaborating with you and turning your vision into reality
            </Text>
          </Stack>
        </Container>
      </>
    );
}


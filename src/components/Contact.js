import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              {profile.email}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}



// import React, { useState } from "react";
// import {
//   Divider,
//   Stack,
//   Text,
//   Container,
//   Box,
//   HStack,
//   Heading,
//   Center,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
// } from "@chakra-ui/react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import ProfileArray from "./ProfileArray";

// export default function Contact({ color }) {
//   const profile = ProfileArray();
//   const linkedin = () => {
//     window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
//   };
//   const github = () => {
//     window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
//   };
//   const openEmail = () => {
//     window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
//   };

//   // State variables to store form input values
//   const [name, setName] = useState("");
//   const [inputEmail, setInputEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the form data to the company's email (alyymalick8061@gmail.com)
//     const formData = {
//       name,
//       email: inputEmail,
//       subject,
//       message,
//     };
//     console.log(formData); // You can replace this with sending an email

//     // Clear the form fields
//     setName("");
//     setInputEmail("");
//     setSubject("");
//     setMessage("");
//   };

//   return (
//     <>
//       <Container maxW={"3xl"} id="contact">
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <Stack align="center" direction="row" p={4}>
//             <HStack mx={4}>
//               <Text color={`${color}.400`} fontWeight={800}>
//                 04
//               </Text>
//               <Text fontWeight={800}>Contact</Text>
//             </HStack>
//             <Divider orientation="horizontal" />
//           </Stack>

//           {/* Form section */}
//           <Stack
//             spacing={4}
//             as={Container}
//             maxW={"3xl"}
//             textAlign={"center"}
//           >
//             <form onSubmit={handleSubmit}>

//               {/* Form fields */}
//               <FormControl id="name" isRequired>
//                 <FormLabel>Your Name</FormLabel>
//                 <Input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </FormControl>

//               <FormControl id="email" isRequired>
//                 <FormLabel>Your Email</FormLabel>
//                 <Input
//                   type="email"
//                   value={inputEmail}
//                   onChange={(e) => setInputEmail(e.target.value)}
//                 />
//               </FormControl>

//               <FormControl id="subject" isRequired>
//                 <FormLabel>Subject</FormLabel>
//                 <Input
//                   type="text"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                 />
//               </FormControl>

//               <FormControl id="message" isRequired>
//                 <FormLabel>Your Message</FormLabel>
//                 <Textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </FormControl>

//               {/* Submit button */}
//               <Button type="submit" colorScheme={color} mt={7}>
//                 Send
//               </Button>
//             </form>
              
//               <Heading fontSize={"3xl"} >Let's stay in touch!</Heading>
//               <Text color={"gray.600"} fontSize={"xl"} px={4}>
//                 {profile.contact}
//               </Text>
//           </Stack>

//           {/* Social links */}
//           <Center>
//             <HStack pt={4} spacing={4}>
//               <FaLinkedin onClick={linkedin} size={28} />
//               <FaGithub onClick={github} size={28} />
//               <FaEnvelope onClick={openEmail} size={28} />
//             </HStack>
//           </Center>
//         </Stack>
//       </Container>
//     </>
//   );
// }










// import React, { useState } from "react";
// import {
//   Divider,
//   Stack,
//   Text,
//   Container,
//   Box,
//   HStack,
//   Heading,
//   Center,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   VStack, // Added VStack to create a rectangle shape
// } from "@chakra-ui/react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import ProfileArray from "./ProfileArray";

// export default function Contact({ color }) {
//   const profile = ProfileArray();
//   const linkedin = () => {
//     window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
//   };
//   const github = () => {
//     window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
//   };
//   const openEmail = () => {
//     window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
//   };

//   // State variables to store form input values
//   const [name, setName] = useState("");
//   const [inputEmail, setInputEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the form data to the company's email (alyymalick8061@gmail.com)
//     const formData = {
//       name,
//       email: inputEmail,
//       subject,
//       message,
//     };
//     console.log(formData); // You can replace this with sending an email

//     // Clear the form fields
//     setName("");
//     setInputEmail("");
//     setSubject("");
//     setMessage("");
//   };

//   return (
//     <>
//       <Container maxW={"3xl"} id="contact">
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <Stack align="center" direction="row" p={4}>
//             <HStack mx={4}>
//               <Text color={`${color}.400`} fontWeight={800}>
//                 04
//               </Text>
//               <Text fontWeight={800}>Contact</Text>
//             </HStack>
//             <Divider orientation="horizontal" />
//           </Stack>

//           {/* Form section */}
//           <VStack // Use VStack to create a rectangle shape
//             spacing={4}
//             as={Container}
//             maxW={"3xl"}
//             textAlign={"center"}
//             p={8} // Added padding for spacing
//             boxShadow="md" // Added boxShadow for a light rectangle shape
//             bg="gray.700" // Added background color
//             borderRadius="md" // Added borderRadius for rounded corners
//           >
//             <form onSubmit={handleSubmit}>

//               {/* Form fields */}
//               <FormControl id="name" isRequired>
//                 <FormLabel>Your Name</FormLabel>
//                 <Input
//                   type="text"
//                   value={name}
//                   width="100%"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </FormControl>

//               <FormControl id="email" isRequired>
//                 <FormLabel>Your Email</FormLabel>
//                 <Input
//                   type="email"
//                   value={inputEmail}
//                   onChange={(e) => setInputEmail(e.target.value)}
//                 />
//               </FormControl>

//               <FormControl id="subject" isRequired>
//                 <FormLabel>Subject</FormLabel>
//                 <Input
//                   type="text"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                 />
//               </FormControl>

//               <FormControl id="message" isRequired>
//                 <FormLabel>Your Message</FormLabel>
//                 <Textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </FormControl>

//               {/* Submit button */}
//               <Button type="submit" colorScheme={color} mt={7}>
//                 Send
//               </Button>
//             </form>
              
//           </VStack>
//             <Heading fontSize={"3xl"} >Let's stay in touch!</Heading>
//             <Text color={"gray.600"} fontSize={"xl"} px={4}>
//               {profile.contact}
//             </Text>

//           {/* Social links */}
//           <Center>
//             <HStack pt={4} spacing={4}>
//               <FaLinkedin onClick={linkedin} size={28} />
//               <FaGithub onClick={github} size={28} />
//               <FaEnvelope onClick={openEmail} size={28} />
//             </HStack>
//           </Center>
//         </Stack>
//       </Container>
//     </>
//   );
// }



// import React, { useState } from "react";
// import {
//   Divider,
//   Stack,
//   Text,
//   Container,
//   Box,
//   HStack,
//   Heading,
//   Center,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   useColorMode,
// } from "@chakra-ui/react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import ProfileArray from "./ProfileArray";

// export default function Contact({ color }) {
//   const profile = ProfileArray();
//   const linkedin = () => {
//     window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
//   };
//   const github = () => {
//     window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
//   };
//   const openEmail = () => {
//     window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
//   };

//   // State variables to store form input values
//   const [name, setName] = useState("");
//   const [inputEmail, setInputEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the form data to the company's email (alyymalick8061@gmail.com)
//     const formData = {
//       name,
//       email: inputEmail,
//       subject,
//       message,
//     };
//     console.log(formData); // You can replace this with sending an email

//     // Clear the form fields
//     setName("");
//     setInputEmail("");
//     setSubject("");
//     setMessage("");
//   };

//   // Get the current color mode
//   const { colorMode } = useColorMode();

//   // Define background color based on color mode
//   const bgColor = colorMode === "light" ? "gray.100" : "gray.700";

//   // Define border style
//   const inputBorderStyle = {
//     borderWidth: "2px", // Increase border width
//     borderColor: "gray.300", // Border color
//   };

//   return (
//     <>
//       <Container maxW={"3xl"} id="contact">
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <Stack align="center" direction="row" p={4}>
//             <HStack mx={4}>
//               <Text color={`${color}.400`} fontWeight={800}>
//                 04
//               </Text>
//               <Text fontWeight={800}>Contact</Text>
//             </HStack>
//             <Divider orientation="horizontal" />
//           </Stack>

//           {/* Form section */}
//           <Stack
//             spacing={4}
//             as={Container}
//             maxW={"3xl"}
//             textAlign={"center"}
//             bg={bgColor}
//             p={8}
//             borderRadius="md"
//             boxShadow="lg"
//           >
//             <form onSubmit={handleSubmit}>
//               {/* Form fields */}
//               <FormControl id="name" isRequired>
//                 <FormLabel>Your Name</FormLabel>
//                 <Input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   size="lg"
//                   style={inputBorderStyle} // Apply border style
//                 />
//               </FormControl>

//               <FormControl id="email" isRequired>
//                 <FormLabel>Your Email</FormLabel>
//                 <Input
//                   type="email"
//                   value={inputEmail}
//                   onChange={(e) => setInputEmail(e.target.value)}
//                   size="lg"
//                   style={inputBorderStyle} // Apply border style
//                 />
//               </FormControl>

//               <FormControl id="subject" isRequired>
//                 <FormLabel>Subject</FormLabel>
//                 <Input
//                   type="text"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   size="lg"
//                   style={inputBorderStyle} // Apply border style
//                 />
//               </FormControl>

//               <FormControl id="message" isRequired>
//                 <FormLabel>Your Message</FormLabel>
//                 <Textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   size="lg"
//                   style={inputBorderStyle} // Apply border style
//                 />
//               </FormControl>

//               {/* Submit button */}
//               <Button type="submit" colorScheme={color} mt={6} size="lg">
//                 Send
//               </Button>
//             </form>

//             <Text color={"gray.600"} fontSize={"xl"} px={4}>
//               {profile.contact}
//             </Text>
//           </Stack>

//             <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
//           {/* Social links */}
//           <Center>
//             <HStack pt={4} spacing={4}>
//               <FaLinkedin onClick={linkedin} size={28} />
//               <FaGithub onClick={github} size={28} />
//               <FaEnvelope onClick={openEmail} size={28} />
//             </HStack>
//           </Center>
//         </Stack>
//       </Container>
//     </>
//   );
// }

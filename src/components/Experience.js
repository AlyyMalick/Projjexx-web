// import {
//   Divider,
//   Stack,
//   Text,
//   Container,
//   Box,
//   HStack,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Flex,
//   Badge,
//   Image,
//   List,
//   ListItem,
//   ListIcon,
//   Button,
//   ButtonGroup,
//   Center,
// } from "@chakra-ui/react";
// import { ChevronRightIcon } from "@chakra-ui/icons";
// import { Fade } from "react-reveal";
// import { useState, useEffect } from "react";
// import ExperienceArray from "./ExperienceArray";
// import TagsArray from "./TagsArray";

// export default function Experience({ color }) {
//   const experience = ExperienceArray();
//   const options = TagsArray("ExperienceTags");
//   const [selected, setSelected] = useState("");

//   useEffect(() => {
//     if (options.length > 0) {
//       setSelected(options[0].value);
//     }
//   }, [options]);
  
//   const handleSelected = (value) => {
//     setSelected(value);
//   };

//   return (
//     <>
//       <Container maxW={"3xl"} id="experience">
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <Stack align="center" direction="row" px={4}>
//             <HStack mx={4}>
//               <Text color={`${color}.400`} fontWeight={800}>
//                 02
//               </Text>
//               <Text fontWeight={800}>Services</Text>
//             </HStack>
//             <Divider orientation="horizontal" />
//           </Stack>
//           <Center px={4}>
//             <ButtonGroup variant="outline">
//               {options.map((option) => (
//                 <Button
//                   colorScheme={selected === option.value ? `${color}` : "gray"}
//                   onClick={() => handleSelected(option.value)}
//                 >
//                   {option.value}
//                 </Button>
//               ))}
//             </ButtonGroup>
//           </Center>
//           <Stack px={4} spacing={4}>
//             {experience
//               .filter((exp) => exp.tags.includes(selected))
//               .map((exp) => (
//                 <Fade bottom>
//                   <Card key={exp.company} size="sm">
//                     <CardHeader>
//                       <Flex justifyContent="space-between">
//                         <HStack>
//                           <Image src={exp.image} h={50} />
//                           <Box px={2} align="left">
//                             <Text fontWeight={600}>{exp.company}</Text>
//                             <Text>{exp.position}</Text>
//                           </Box>
//                         </HStack>
//                         <Text px={2} fontWeight={300}>
//                           {exp.duration}
//                         </Text>
//                       </Flex>
//                     </CardHeader>
//                     <CardBody>
//                       <Flex>
//                         <List align="left" spacing={3}>
//                           {exp.listItems.map((item, index) => (
//                             <ListItem key={index}>
//                               <ListIcon
//                                 boxSize={6}
//                                 as={ChevronRightIcon}
//                                 color={`${color}.500`}
//                               />
//                               {item}
//                             </ListItem>
//                           ))}
//                         </List>
//                       </Flex>
//                     </CardBody>
//                     <CardFooter>
//                       <HStack spacing={2}>
//                         {exp.badges.map((badge) => (
//                           <Badge
//                             key={badge.name}
//                             colorScheme={badge.colorScheme}
//                           >
//                             {badge.name}
//                           </Badge>
//                         ))}
//                       </HStack>
//                     </CardFooter>
//                   </Card>
//                 </Fade>
//               ))}
//           </Stack>
//         </Stack>
//       </Container>
//     </>
//   );
// }

import {
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";

export default function Experience({ color }) {
  const experienceData = [
    {
      company: "Web Development",
      position: "Position A",
      duration: "Jan 2020 - Dec 2020",
      image: "/assets/web.jpg",
    },
    {
      company: "App Development",
      position: "Position B",
      duration: "Jan 2021 - Dec 2021",
      image: "/assets/app.jpg",
    },
    {
      company: "Database Management",
      position: "Position C",
      duration: "Jan 2022 - Dec 2022",
      image: "/assets/db.jpg",
    },
  ];                    

  const experience = experienceData.slice(0, 3); // Limit to the first 3 experiences

  return (
    <>
      <Container  id="experience" maxW={'100%'} mb={10} width="100%" 
      height="100vh">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Services</Text>
            </HStack>
          </Stack>
          <HStack px={4} spacing={4} justifyContent="space-between">
            {experience.map((exp, index) => (
              <div key={index}>
                <Box
                  textAlign="center"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Image src={exp.image} w={450} h={550} mx="auto" mb={2} borderRadius="8" />
                  <Text fontWeight={600}>{exp.company}</Text>
                  <Text>{exp.position}</Text>
                  <Text fontWeight={300}>{exp.duration}</Text>
                </Box>
              </div>
            ))}
          </HStack>
        </Stack>
      </Container>
    </>
  );
}

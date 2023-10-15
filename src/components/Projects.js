// import {
//   Divider,
//   Stack,
//   Text,
//   Container,
//   Box,
//   HStack,
//   Button,
//   ButtonGroup,
//   Card,
//   CardBody,
//   Image,
//   Heading,
//   SimpleGrid,
//   Badge,
//   Link,
//   Center,
// } from "@chakra-ui/react";
// import { Fade } from "react-reveal";
// import { useState } from "react";
// import ProjectsArray from "./ProjectsArray";
// import OtherProjectsArray from "./OtherProjectsArray";
// import TagsArray from "./TagsArray";

// export default function Projects({ color }) {
//     const projects = ProjectsArray();
//     const others = OtherProjectsArray();
//     const options = TagsArray("ProjectsTags");
    
//     const [selected, setSelected] = useState("All");

//     const handleSelected = (value) => {
//       setSelected(value);
//     };
    
//   return (
//     <>
//       <Container maxW={"3xl"} id="projects">
//         <Stack
//           as={Box}
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <Stack align="center" direction="row" p={4}>
//             <HStack mx={4}>
//               <Text color={`${color}.400`} fontWeight={800}>
//                 03
//               </Text>
//               <Text fontWeight={800}>Projects</Text>
//             </HStack>
//             <Divider orientation="horizontal" />
//           </Stack>
//           <Stack px={4} spacing={4}>
//             {projects.map((project) => (
//               <Fade bottom>
//                 {/* <Card
//                   key={project.name}
//                   direction={{
//                     base: "column",
//                   }}
//                   overflow="hidden"
//                 >
//                   <Image objectFit="cover" src={project.image} />

//                   <Stack>
//                     <CardBody align="left">
//                       <Heading size="md">{project.name}</Heading>

//                       <Text py={2}>{project.description}</Text>

//                       <HStack py={2}>
//                         {project.buttons.map((button) => (
//                           <a key={button.text} href={button.href}>
//                             <Button color={`${color}.400`}>
//                               {button.text}
//                             </Button>
//                           </a>
//                         ))}
//                       </HStack>
//                       <HStack pt={4} spacing={2}>
//                         {project.badges.map((badge) => (
//                           <Badge
//                             key={badge.text}
//                             colorScheme={badge.colorScheme}
//                           >
//                             {badge.text}
//                           </Badge>
//                         ))}
//                       </HStack>
//                     </CardBody>
//                   </Stack>
//                 </Card> */}
//                 <card
//                 key={project.name}
//                 direction={{ base: "column", md: "row" }} // Adjust the direction based on screen size
//                 overflow="hidden">
//                   <Image objectFit="cover" src={project.image} w={{ base: "100%", md: "40%" }} /> {/* Adjust the width based on screen size */}
//                   <flex 
//                   direction="column"
//                   justify="space-between"
//                   p={{ base: 4, md: 8 }}>
//                     <Heading size="md">{project.name}</Heading>
//                     <Text py={2}>{project.description}</Text>

//                     <HStack py={2}>
//                     {project.buttons.map((button) => (
//                       <a key={button.text} href={button.href}>
//                         <Button color={`${color}.400`}>{button.text}</Button>
//                       </a>
//                     ))}
//                     </HStack>
//                     <HStack pt={4} spacing={2}>
//                     {project.badges.map((badge) => (
//                       <Badge key={badge.text} colorScheme={badge.colorScheme}>
//                         {badge.text}
//                       </Badge>
//                     ))}
//                     </HStack>



//                   </flex>

//                 </card>
//               </Fade>
//             ))}
//           </Stack>
//           <Text color={"gray.600"} fontSize={"xl"} px={4}>
//             Other Projects
//           </Text>
//           <Center px={4}>
//             <ButtonGroup variant="outline">
//               <Button
//                 colorScheme={selected === "All" ? `${color}` : "gray"}
//                 onClick={() => handleSelected("All")}
//               >
//                 All
//               </Button>
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
//           <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
//             {others
//               .filter((other) => {
//                 if (selected === "All") {
//                   return true;
//                 } else {
//                   return other.tags.includes(selected);
//                 }
//               })
//               .map((other) => (
//                 <Fade bottom>
//                   <Card key={other.name}>
//                     <Stack>
//                       <CardBody align="left" h={[null, "40vh"]}>
//                         <Heading size="sm">{other.name}</Heading>

//                         <Text fontSize="sm" py={2}>
//                           {other.description}
//                         </Text>

//                         <HStack spacing={2}>
//                           {other.buttons.map((button) => (
//                             <Link
//                               key={button.text}
//                               href={button.href}
//                               color={`${color}.400`}
//                             >
//                               {button.text}
//                             </Link>
//                           ))}
//                         </HStack>
//                         <HStack flexWrap="wrap" pt={4} spacing={2}>
//                           {other.badges.map((badge) => (
//                             <Badge
//                               my={2}
//                               key={badge.text}
//                               colorScheme={badge.colorScheme}
//                             >
//                               {badge.text}
//                             </Badge>
//                           ))}
//                         </HStack>
//                       </CardBody>
//                     </Stack>
//                   </Card>
//                 </Fade>
//               ))}
//           </SimpleGrid>
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

export default function Projects({ color }) {
  const experienceData = [
    {
      company: "Local transportation ticketing system",
      position: "Position A",
      duration: "Jan 2020 - Dec 2020",
      image: "/assets/ticket.jpg",
    },
    {
      company: "Software piracy protection system",
      position: "Position B",
      duration: "Jan 2021 - Dec 2021",
      image: "/assets/hack.jpg",
    },
    {
      company: "e-Learning platform",
      position: "Position C",
      duration: "Jan 2022 - Dec 2022",
      image: "/assets/learn.jpg",
    },
    // Add more experiences for the first row here...
    {
      company: "Extra 15",
      position: "Position X",
      duration: "Jan 2023 - Dec 2023",
      image: "/assets/logo512.png",
    },
    {
      company: "Extra 2",
      position: "Position Y",
      duration: "Jan 2024 - Dec 2024",
      image: "/assets/extra2.jpg",
    },
    {
      company: "Extra 3",
      position: "Position Z",
      duration: "Jan 2025 - Dec 2025",
      image: "/assets/extra3.jpg",
    },
    // Add more experiences for the extra row here...
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
              <Text id="projects" color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Projects</Text>
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
          
          {/* Add an extra row of 3 sections */}
          <HStack px={4} spacing={4} justifyContent="space-between">
            {/* Add more experiences for the extra row */}
            {/* For example: */}
            <div>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src="/assets/bank.jpg" w={450} h={550} mx="auto" mb={2} borderRadius="8" />
                <Text fontWeight={600}>Mobile Banking App</Text>
                <Text>Position X</Text>
                <Text fontWeight={300}>Jan 2023 - Dec 2023</Text>
              </Box>
            </div>
            <div>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src="/assets/personal.jpg" w={450} h={550} mx="auto" mb={2} borderRadius="8" />
                <Text fontWeight={600}>Personal Services</Text>
                <Text>Position Y</Text>
                <Text fontWeight={300}>Jan 2024 - Dec 2024</Text>
              </Box>
            </div>
            <div>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src="/assets/care.jpg" w={450} h={550} mx="auto" mb={2} borderRadius="8" />
                <Text fontWeight={600}>Healthcare</Text>
                <Text>Position Z</Text>
                <Text fontWeight={300}>Jan 2025 - Dec 2025</Text>
              </Box>
            </div>
          </HStack>
        </Stack>
      </Container>
    </>
  );
}

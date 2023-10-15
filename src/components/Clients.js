// import React from "react";
// import {
//   Box,
//   Container,
//   HStack,
//   Text,
//   Image,
//   SimpleGrid,
// } from "@chakra-ui/react";

// const clientsData = [
//   {
//     name: "Client 1",
//     description: "Description for Client 1",
//     image: "/assets/c1.jpg",
//   },
//   {
//     name: "Client 2",
//     description: "Description for Client 2",
//     image: "/assets/c2.jpg",
//   },
//   {
//     name: "Client 3",
//     description: "Description for Client 3",
//     image: "/assets/c3.jpg",
//   },
//   {
//     name: "Client 4",
//     description: "Description for Client 4",
//     image: "/assets/c4.jpg",
//   },
// ];

// const Clients = ({ color }) => {
//   const clients = clientsData;

//   return (
//     <>
//       <Container maxW={"3xl"} id="clients" mt={800}>
//         <Box
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <HStack mx={4} mb={12}>
//             <Text color={`${color}.400`} fontWeight={800}>
//               04
//             </Text>
//             <Text fontWeight={800}>Clients</Text>
//           </HStack>
//           {/* First Row */}
//           <SimpleGrid columns={[1, 2, 2]} px={4} spacing={4} pb={8}>
//             {clients.slice(0, 2).map((client, index) => (
//               <Box key={index}>
//                 <Image
//                   objectFit="cover"
//                   src={client.image}
//                   alt={client.name}
//                   borderRadius="8"
//                 />
//                 <Text fontSize="xl" fontWeight="semibold" pt={4}>
//                   {client.name}
//                 </Text>
//                 <Text fontSize="md" fontWeight="light">
//                   {client.description}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//           {/* Second Row */}
//           <SimpleGrid columns={[1, 2, 2]} px={4} spacing={4}>
//             {clients.slice(2, 4).map((client, index) => (
//               <Box key={index}>
//                 <Image
//                   objectFit="cover"
//                   src={client.image}
//                   alt={client.name}
//                   borderRadius="8"
//                 />
//                 <Text fontSize="xl" fontWeight="semibold" pt={4}>
//                   {client.name}
//                 </Text>
//                 <Text fontSize="md" fontWeight="light">
//                   {client.description}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Clients;








// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   HStack,
//   Text,
//   Image,
//   Button,
// } from "@chakra-ui/react";

// const clientsData = [
//   {
//     name: "Client 1",
//     description: "Description for Client 1",
//     image: "/assets/c1.jpg",
//   },
//   {
//     name: "Client 2",
//     description: "Description for Client 2",
//     image: "/assets/c2.jpg",
//   },
//   {
//     name: "Client 3",
//     description: "Description for Client 3",
//     image: "/assets/c3.jpg",
//   },
//   {
//     name: "Client 4",
//     description: "Description for Client 4",
//     image: "/assets/c4.jpg",
//   },
// ];

// const Clients = ({ color }) => {
//   const [currentClientIndex, setCurrentClientIndex] = useState(0);
//   const clients = clientsData;

//   const nextClient = () => {
//     setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
//   };

//   const prevClient = () => {
//     setCurrentClientIndex(
//       (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
//     );
//   };

//   const client = clients[currentClientIndex];

//   return (
//     <>
//       <Container maxW={"6xl"} id="clients" mt={800}>
//         <Box
//           textAlign={"center"}
//           spacing={{ base: 8, md: 14 }}
//           pb={{ base: 20, md: 36 }}
//         >
//           <HStack mx={4} mb={12}>
//             <Text color={`${color}.400`} fontWeight={800}>
//               04
//             </Text>
//             <Text fontWeight={800}>Clients</Text>
//           </HStack>

//           <Box display="flex" alignItems="center" justifyContent="center">
//             <Button onClick={prevClient} disabled={currentClientIndex === 0}>
//               Previous
//             </Button>

//             <Image
//               objectFit="cover"
//               src={client.image}
//               alt={client.name}
//               borderRadius="8"
//             />

//             <Button
//               onClick={nextClient}
//               disabled={currentClientIndex === clients.length - 1}
//             >
//               Next
//             </Button>
//           </Box>

//           <Text fontSize="xl" fontWeight="semibold" pt={4}>
//             {client.name}
//           </Text>
//           <Text fontSize="md" fontWeight="light">
//             {client.description}
//           </Text>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Clients;




import React, { useState } from "react";
import {
  Box,
  Container,
  HStack,
  Text,
  Image,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Import icons from a popular icon library like react-icons

const clientsData = [
  {
    name: "Client 1",
    description: "Description for Client 1",
    image: "/assets/c1.jpg",
  },
  {
    name: "Client 2",
    description: "Description for Client 2",
    image: "/assets/c2.jpg",
  },
  {
    name: "Client 3",
    description: "Description for Client 3",
    image: "/assets/c3.jpg",
  },
  {
    name: "Client 4",
    description: "Description for Client 4",
    image: "/assets/c4.jpg",
  },
];

const Clients = ({ color }) => {
  const [currentClient, setCurrentClient] = useState(0);
  const clients = clientsData;

  const nextClient = () => {
    setCurrentClient((currentClient + 1) % clients.length);
  };

  const previousClient = () => {
    setCurrentClient(
      currentClient === 0 ? clients.length - 1 : currentClient - 1
    );
  };

  return (
    <>
      <Container  id="clients" maxW={'100%'} mb={10} width="100%" mt={800}>
        <Box
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          position="relative"
        >
          <HStack mx={4} mb={12}>
            <Text color={`${color}.400`} fontWeight={800}>
              04
            </Text>
            <Text fontWeight={800}>Clients</Text>
          </HStack>

          <SimpleGrid columns={1} px={4} spacing={4} pb={8}>
            <Box key={currentClient} position="relative" margin="0 auto">
              <Image
                objectFit="cover"
                src={clients[currentClient].image}
                alt={clients[currentClient].name}
                borderRadius="8"
                boxSize="300px"
                w="auto"
              />

              <Text fontSize="xl" fontWeight="semibold" pt={4}>
                {clients[currentClient].name}
              </Text>
              <Text fontSize="md" fontWeight="light">
                {clients[currentClient].description}
              </Text>
            </Box>
            <Box position="absolute" top="30%" left="15px">
              <IconButton
                icon={<MdArrowBack />} // Use the arrow icons
                onClick={previousClient}
                variant="ghost"
                colorScheme={color}
                fontSize="3rem"
              />
            </Box>
            <Box position="absolute" top="30%" right="15px">
              <IconButton
                icon={<MdArrowForward />} // Use the arrow icons
                onClick={nextClient}
                variant="ghost"
                colorScheme={color}
                fontSize="3rem"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Clients;

// import React from "react";
// import { Button } from "@chakra-ui/react";

// const ContactButton = () => {
//   // Define CSS styles for the button
//   const buttonStyles = {
//     position: "fixed",
//     bottom: "2rem", // Adjust the distance from the bottom as needed
//     right: "2rem", // Adjust the distance from the right as needed
//     background: "blue", // Button background color
//     color: "white", // Button text color
//     padding: "10px 20px", // Button padding
//     borderRadius: "5px", // Button border radius
//     border: "none", // Remove button border
//     cursor: "pointer", // Show pointer cursor on hover
//   };

//   // Function to handle the button click
//   const handleClick = () => {
//     // Add your logic here for what should happen when the button is clicked
//     // For example, you can scroll to a specific section or open a contact form.
//   };

//   return (
//     <Button onClick={handleClick} style={buttonStyles} colorScheme={colorScheme}>
//       Contact Us
//     </Button>
//   );
// };

// export default ContactButton;



import React from "react";
import { Button, useColorModeValue, useColorMode } from "@chakra-ui/react";

const ContactButton = ({ color }) => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("blue.400", "teal.300"); // Replace with your desired background color
  const textColor = colorMode === "dark" ? "black" : "white"; // Set the text color based on color mode

  const handleClick = () => {
    // Handle click logic here
  };

  const buttonStyles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "999",
    background: bgColor, // Set the background color here
    color: textColor, // Set the text color based on color mode
  };

  return (
    <Button
      onClick={handleClick}
      style={buttonStyles}
    //   colorScheme={color} // Set the colorScheme to match the "Send" button
      size="lg" // Set the size to "lg" to match the "Send" button
      bg={`${color}.400`}
    >
      Contact Us
    </Button>
  );
};

export default ContactButton;

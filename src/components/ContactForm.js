import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ color, handleSubmit }) => {
  const [name, setName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.700";
  const inputBorderStyle = {
    borderWidth: "2px",
    borderColor: "gray.300",
  };

  return (
    <form onSubmit={handleSubmit} id="ContactForm">
      <FormControl id="name" isRequired>
        <FormLabel>Your Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="lg"
          style={inputBorderStyle}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Your Email</FormLabel>
        <Input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          size="lg"
          style={inputBorderStyle}
        />
      </FormControl>

      <FormControl id="subject" isRequired>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          size="lg"
          style={inputBorderStyle}
        />
      </FormControl>

      <FormControl id="message" isRequired>
        <FormLabel>Your Message</FormLabel>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="lg"
          style={inputBorderStyle}
        />
      </FormControl>

      <Button type="submit" colorScheme={color} mt={6} size="lg">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;

import React from "react"
import {
  Box,
  Button, 
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Link,
  Text,
  Textarea,
  useDisclosure, 
} from "@chakra-ui/react"
import { Formik } from "formik"

import Logo from "./Logo"

const MenuItem = ({ children, isLast, to, ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

const Header = (props) => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={7}
      bg={["grey.500", "primary.500", "transparent", "transparent"]}
      color={["grey.800", "grey.100", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["black", "black", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[3, 3, 0, 0]}
        >
         <MenuItem to={"/"}>
           Home
          </MenuItem>
          <MenuItem to={"/gallery"}>
            Gallery
          </MenuItem>
          <MenuItem to={"/journal"}>
            Journal
          </MenuItem>
          <MenuItem isLast>
            <Button
              ref={btnRef}
              onClick={onOpen}
              size="sm"
              rounded="md"
              color={["white", "white", "white", "white"]}
              bg={["cyan.500", "cyan.500", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
              }}
            >
              Get in Touch
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              size='lg'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Send us an email</DrawerHeader>
                <DrawerBody>
                  <Formik
                    initialValues={{
                      body: '',
                      email: '',
                    }}
                    onSubmit={
                      (values, actions) => {
                        fetch("/", {
                          method: "POST",
                          headers: { "Content-Type": "application/x-www-form-urlencoded" },
                          body: encodeURI({ "form-name": "contact", ...values }),
                        })
                        .then(() => {
                          alert('Thanks for your email')
                          actions.resetForm()
                        })
                        .catch(() => {
                          alert('Error')
                        })
                        .finally(() => actions.setSubmitting(false))
                      }
                    }
                    validate={values => {
                      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      const errors = {}
                      if(!values.body) {
                        errors.body = 'Message is required'
                      }
                      if(!values.email || !emailRegex.test(values.email)) {
                        errors.email = 'Valid Email Required'
                      }
                      return errors
                    }}
                  >
                    <form method="post" 
                      netlify-honeypot="bot-field" 
                      data-netlify="true" 
                      name="contact"
                    >
                      <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="contact" />
                      <FormControl isRequired>
                        <FormLabel>Your Message</FormLabel>
                        <Textarea
                          size="lg"
                          rows={15}
                          name="body"
                          id="body"
                          type="text"
                        />
                        <FormErrorMessage name="body" />
                      </FormControl>
                      <FormControl  mb={5} isRequired>
                        <FormLabel>Your Email</FormLabel>
                        {/* <Input 
                          name="email"
                          id="email"
                          type="email"
                        /> */}
                        <Input name="email" />
                        <FormErrorMessage name="email" />
                      </FormControl>
                      <Button 
                        colorScheme='blue'
                        size="lg"
                        type='submit'
                      >
                        Send
                      </Button>
                    </form>
                  </Formik>
                </DrawerBody>
                <DrawerFooter>
                  <Button 
                    variant='outline' 
                    mr={3} 
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
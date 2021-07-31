import React from "react"
// styles
import { Box, Flex} from 'theme-ui'
import MainPage from "./main.js"

// markup
const IndexPage = () => {
  return (
    <main sx={
      {color: "#232129",
      padding: 60,
      fontFamily: "-apple-system, Roboto, sans-serif, serif",}
    }>
      <title>Pesa Cash</title>
      <Flex sx={{flexDirection: 'column'}} p={4} m={2}>
        <Box sx={{ display: 'flex' }}> <MainPage/> </Box>
      </Flex>


    </main>
  )
}

export default IndexPage

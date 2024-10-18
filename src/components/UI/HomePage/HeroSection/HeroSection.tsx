import { Box, Container } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box>
        <Box>
          {/* <Image /> */}
          hello
        </Box>
      </Box>
      <Box>Right</Box>
    </Container>
  );
};

export default HeroSection;

import { Box, Button, Container, Typography } from "@mui/material";
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
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-90px",
            left: "-120",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h3"
          color="primary.main"
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{
            width: "50%",
            my: "20px",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          quibusdam illum quasi minima numquam facilis sapiente ipsam laborum
          suscipit ratione excepturi distinctio, laboriosam, corrupti ea minus
          quis cumque
        </Typography>
        <Button>Make Appoinment</Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "10px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          mt: 0,
          p: 1,
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image
            src={assets.svgs.arrow}
            width={100}
            height={100}
            alt="img"
          ></Image>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="imag3"
            ></Image>
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={380}
              alt="imag3"
            ></Image>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="imag3"
          ></Image>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="imag3"
          ></Image>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;

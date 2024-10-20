import { Box, Button, Container, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 8, md: 16 },
      }}
    >
      {/* Left Content */}
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
            left: "-120px", // Fixed left with units
            zIndex: -1, // Ensure it stays in the background
          }}
        >
          <Image
            src={assets.svgs.grid}
            alt="Decorative grid background"
            width={500}
            height={600}
          />
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
            width: { xs: "100%", md: "50%" },
            my: 2,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          quibusdam illum quasi minima numquam facilis sapiente ipsam laborum
          suscipit ratione excepturi distinctio, laboriosam, corrupti ea minus
          quis cumque
        </Typography>
        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            ml: 2, // Fixed margin between buttons
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* Right Content (Images) */}
      <Box
        sx={{
          position: "relative",
          mt: { xs: 4, md: 0 }, // Adjust top margin for mobile
          p: 1,
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {/* Arrow Image */}
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image
            src={assets.svgs.arrow}
            alt="Arrow graphic"
            width={100}
            height={100}
          />
        </Box>

        {/* Doctor Images (Row) */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" }, // Make doctors stack in column for small screens
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="Doctor 1"
              width={240}
              height={380}
              priority // Preload important images
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="Doctor 2"
              width={240}
              height={380}
              priority
            />
          </Box>
        </Box>

        {/* Third Doctor Image (Absolute Position) */}
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px", // Added px for units
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="Doctor 3"
            width={240}
            height={240}
          />
        </Box>

        {/* Stethoscope Image */}
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            right: 0,
            zIndex: "-1", // Ensure it stays in the background
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="Stethoscope"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;

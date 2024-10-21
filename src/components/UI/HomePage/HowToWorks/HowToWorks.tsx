import { Box, Container, Typography } from "@mui/material";

const HowToWorks = () => {
  return (
    <Container
      sx={{
        my: { xs: 2, md: 4 },
        px: { xs: 2, md: 2 },
      }}
    >
      <Box>
        <Box>
          <Typography
            component="p"
            sx={{
              color: "primary.main",
              fontWeight: 400,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            How it works
          </Typography>
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
            variant="h4"
            component="h2"
            fontWeight={500}
          >
            4 Easy Steps to Get your solution
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "secondary.main",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Access Expert advice and guidance from our team of experienced{" "}
            <br />
            professionals. Our team will work with you to understand your needs
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HowToWorks;

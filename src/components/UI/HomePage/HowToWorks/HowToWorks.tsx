import { Box, Container, Grid, Typography } from "@mui/material";
import assest from "@/assets";
import searchIcon from "@/assets/icons/search-icon.png";
import appoinmentIcon from "@/assets/icons/appointment-icon.png";
import CharityIcon from "@/assets/icons/charity-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import Image from "next/image";

const HowToWorks = () => {
  const stepData = [
    {
      icon: searchIcon,
      title: "Search Doctor",
      description: "Find the best doctor based on your needs and preferences.",
    },
    {
      icon: appoinmentIcon,
      title: "Make Appointment",
      description: "Schedule an appointment with ease online.",
    },
    {
      icon: CharityIcon,
      title: "Consultation",
      description: "Consult with a doctor and get professional advice.",
    },
    {
      icon: doctorIcon,
      title: "Get Treatment",
      description: "Receive the best treatment to solve your problem.",
    },
  ];

  return (
    <Container sx={{ my: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
      {/* Heading Section */}
      <Box mb={6}>
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
        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
          variant="h4"
          component="h2"
          fontWeight={600}
        >
          4 Easy Steps to Get Your Solution
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.2rem" },
            mt: 2,
          }}
        >
          Access expert advice and guidance from our experienced professionals.
          <br />
          We work with you to understand your needs and provide the best
          solution.
        </Typography>
      </Box>

      {/* Steps Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              src={assest.images.doctors}
              width={500}
              height={500}
              alt="doctor"
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
          </Box>
        </Grid>

        {/* Steps */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {stepData.map((step, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "10px",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Image
                    src={step.icon}
                    width={50}
                    height={50}
                    alt={step.title}
                  />
                  <Box ml={3}>
                    <Typography
                      variant="h6"
                      component="h6"
                      fontWeight={600}
                      color="text.primary"
                    >
                      {step.title}
                    </Typography>
                    <Typography component="p" color="text.secondary" mt={1}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowToWorks;

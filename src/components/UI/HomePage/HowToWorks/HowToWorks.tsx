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
      <Box
        sx={{
          my: 4,
          background:
            "linear-gradient(90deg, rgba(0, 123, 255, 1), rgba(0, 82, 212, 1))",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
          p: 2,
        }}
      >
        {/* Stat 1 */}
        <Box
          sx={{
            textAlign: "center",
            mx: { xs: 0, md: 2 },
            my: { xs: 2, md: 0 },
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "5px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            180+
          </Box>
          <Typography
            component="p"
            fontWeight={300}
            sx={{ fontSize: "1.1rem", color: "white" }}
          >
            Expert Doctors
          </Typography>
        </Box>

        {/* Stat 2 */}
        <Box
          sx={{
            textAlign: "center",
            mx: { xs: 0, md: 2 },
            my: { xs: 2, md: 0 },
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "5px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            250+
          </Box>
          <Typography
            component="p"
            fontWeight={300}
            sx={{ fontSize: "1.1rem", color: "white" }}
          >
            Expert Services
          </Typography>
        </Box>

        {/* Stat 3 */}
        <Box
          sx={{
            textAlign: "center",
            mx: { xs: 0, md: 2 },
            my: { xs: 2, md: 0 },
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "5px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            10K+
          </Box>
          <Typography
            component="p"
            fontWeight={300}
            sx={{ fontSize: "1.1rem", color: "white" }}
          >
            Happy Patients
          </Typography>
        </Box>

        {/* Stat 4 */}
        <Box
          sx={{
            textAlign: "center",
            mx: { xs: 0, md: 2 },
            my: { xs: 2, md: 0 },
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "5px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              fontSize: "1.8rem",
              fontWeight: 700,
            }}
          >
            150+
          </Box>
          <Typography
            component="p"
            fontWeight={300}
            sx={{ fontSize: "1.1rem", color: "white" }}
          >
            Best Award Winner
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HowToWorks;

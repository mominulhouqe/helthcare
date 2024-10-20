import { Box, Container, Grid, Typography } from "@mui/material";
import assest from "@/assets";
import Image from "next/image";
import whyChose from "@/assets/choose-us.png";
const servicesData = [
  {
    id: 1,
    imgSrc: assest.svgs.award,
    title: "Award Winning Services",
    description:
      "We have been recognized for our exceptional services and commitment to excellence.",
  },
  {
    id: 2,
    imgSrc: assest.svgs.care,
    title: "Expertise in Healthcare",
    description:
      "Our team of experts has years of experience in providing top-notch healthcare services.",
  },
  {
    id: 3,
    imgSrc: assest.svgs.equipment,
    title: "Advanced Technology",
    description:
      "We utilize the latest technology to ensure accurate diagnoses and effective treatments.",
  },
  {
    id: 4,
    imgSrc: assest.svgs.dna,
    title: "Personalized Care",
    description:
      "We understand that every patient is unique and provide personalized care tailored to their needs.",
  },
];

const WhyChose = () => {
  return (
    <Container>
      <Box sx={{ my: 6 }}>
        <Box
          sx={{
            textAlign: "center",
            p: 4,
            my: 4,
          }}
        >
          <Typography
            component="p"
            sx={{
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h2" fontWeight={700}>
            Why Choose Us?
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "rgba(245,245,245,1)",
                padding: 3,
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imgSrc}
                  width={50}
                  height={50}
                  alt="award"
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h6">
                  {servicesData[0].title}
                </Typography>
                <Typography variant="body2" color="secondary.main">
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "rgba(245,245,245,1)",
                padding: 3,
                borderRadius: "10px 100px 10px 10px",
                my: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[1].imgSrc}
                  width={50}
                  height={50}
                  alt="award"
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h6">
                  {servicesData[1].title}
                </Typography>
                <Typography variant="body2" color="secondary.main">
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "rgba(245,245,245,1)",
                padding: 3,
                borderRadius: "10px 10px 100px 10px",
                my: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imgSrc}
                  width={50}
                  height={50}
                  alt="award"
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h6">
                  {servicesData[2].title}
                </Typography>
                <Typography variant="body2" color="secondary.main">
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "rgba(245,245,245,1)",
                padding: 3,
                borderRadius: "10px 100px 10px 10px",
                my: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imgSrc}
                  width={50}
                  height={50}
                  alt="award"
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h6">
                  {servicesData[3].title}
                </Typography>
                <Typography variant="body2" color="secondary.main">
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              alignItems: "center",
              margin: "auto",
            }}
            md={6}
          >
            <Image src={whyChose} width={470} height={800} alt="whyChose" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChose;

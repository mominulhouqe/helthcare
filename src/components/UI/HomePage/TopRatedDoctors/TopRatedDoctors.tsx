import { theme } from "@/lib/theme/theme";
import { LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const TopRatedDoctors = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor?page=1&limit=3",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: doctors } = await res.json();

  return (
    <>
      <Box
        sx={{
          my: { xs: 5, md: 10 },
          py: { xs: 10, md: 25 },
          backgroundColor: "rgba(20,20,20 ,0.1)",
          clipPath: {
            xs: "0 0",
            md: "polygon(0 0, 100% 25%, 100% 100%,0 75%)",
          },
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" component="h2" fontWeight={700} my={2}>
            Meet Our Top Rated Doctors
          </Typography>
          <Typography component="p" my={2} fontWeight={400}>
            Our team of top-rated doctors is dedicated to providing exceptional
            care and <br /> personalized attention to each patient.
          </Typography>
        </Box>

        <Container
          sx={{
            margin: "20px auto",
            [theme.breakpoints.down("md")]: {
              margin: "20px auto",
            },
          }}
        >
          <Grid container spacing={2}>
            {doctors.map((doctor: any) => (
              <Grid item md={4} sm={6} xs={12} key={doctor.id}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    [theme.breakpoints.down("md")]: {
                      margin: "10px 0",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={doctor.profilePhoto}
                    alt="doctor"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {doctor.qualification},{doctor.designation}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      <LocationOn /> {doctor.address}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      pb: 3,
                      [theme.breakpoints.down("md")]: {
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      },
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Book Now
                    </Button>
                    <Button variant="outlined" color="primary">
                      View Profile
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
            }}
          >
            <Button variant="contained" color="primary">
              View All
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TopRatedDoctors;

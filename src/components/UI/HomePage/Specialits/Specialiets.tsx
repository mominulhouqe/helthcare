import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialiets = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            my: 10,
          }}
        >
          <Box
            sx={{
              textAlign: "start",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Explore Treatments across Specialities
            </Typography>
            <Typography component="p">
              Find Experienced Doctors across all Specialities
            </Typography>
          </Box>
          <Stack direction="row" gap={4} fontSize={18}>
            {specialties.map((specialty: any) => (
              <Box
                key={specialty.id}
                sx={{
                  flex: 1,
                  width: "150px",
                  backgroundColor: "rgba(245,245,245,1)",
                  border: "1px solid rgba(250,250,250,1)",
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "40px 10px",
                  mt: 4,
                  "& img": {
                    width: "50px",
                    height: "50px",
                    margin: "0 auto",
                  },
                  "&:hover": {
                    border: "1px solid  #007bff",
                    padding: "40px 10px",
                    borderRadius: "10px",
                  },
                }}
              >
                {specialty?.icon ? (
                  <Image
                    src={specialty.icon} // Ensure this is a valid URL
                    width={100}
                    height={100}
                    alt={specialty?.title || "Specialty Icon"}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                    }}
                  >
                    <Typography>No Image</Typography>
                  </Box>
                )}
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {specialty?.title}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
            }}
          >
            View All
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Specialiets;

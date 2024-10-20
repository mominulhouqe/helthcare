import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialiets = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  console.log(specialties);

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
              <Box key={specialty.id}>
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
        </Box>
      </Container>
    </>
  );
};

export default Specialiets;

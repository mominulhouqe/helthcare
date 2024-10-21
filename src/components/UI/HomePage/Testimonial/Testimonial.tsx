import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import doctor from "@/assets/doctor-image1.png";

const Testimonial = () => {
  return (
    <Box
      sx={{
        mt: "40px",
        backgroundColor: "rgba(20,20,20 ,0.1)",
        padding: "100px",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          sx={{ mb: 2, color: "primary.main" }} // Heading color
        >
          What Our Customers Say
        </Typography>
        <Typography
          fontWeight={300}
          component="p"
          sx={{
            color: "#666", // Softer text color
            mb: 4,
            fontSize: "1.1rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad
          facere recusandae nihil dolorum beatae. Lorem ipsum dolor sit.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: "15px",
            flexDirection: { xs: "column", md: "row" }, // Responsive layout
          }}
        >
          {/* Testimonial Text */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              padding: "10px 20px",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              fontWeight={700}
              sx={{ mb: 1 }}
            >
              Shopia Martana
            </Typography>
            <Typography
              variant="body2"
              component="p"
              fontWeight={300}
              sx={{ mb: 2, color: "white" }}
            >
              Software Engineer
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: "white",
                mb: 3,
              }}
            >
              “Highly recommended... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi voluptates corporis eligendi saepe
              voluptate sequi consequuntur, doloremque adipisci, perferendis
              nesciunt a, obcaecati optio dolores aperiam. Consectetur dolorum
              deleniti nisi nihil? ”
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={doctor}
                  width={70}
                  height={70}
                  alt="Customer image"
                />
              </Box>
            </Box>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: "center",
            }}
          >
            <Image
              src={doctor}
              alt="Customer testimonial"
              style={{
                width: "100%",
                height: "390px",
                objectFit: "cover",
                borderRadius: "0 10px 10px 0",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;

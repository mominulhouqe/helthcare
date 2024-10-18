import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/images/familyOnBeach.png";
const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)">
      <Container>
        <Stack
          py={5}
          direction="row"
          justifyContent="center"
          gap={4}
          alignItems="center"
        >
          <Typography component={Link} color="#fff" href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} color="#fff" href="/helth-plans">
            Helth Plans
          </Typography>
          <Typography component={Link} color="#fff" href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} color="#fff" href="/digonistics">
            Digonistics
          </Typography>
          <Typography component={Link} color="#fff" href="/ngos">
            NGOs
          </Typography>
        </Stack>

        <Stack
          py={2}
          direction="row"
          justifyContent="center"
          gap={4}
          alignItems="center"
        >
          <Image src={facebook} alt="facebook" width={40} height={40} />
          <Image src={facebook} alt="facebook" width={40} height={40} />
          <Image src={facebook} alt="facebook" width={40} height={40} />
        </Stack>
        <div className="border-dashed  border-b-[1px]"></div>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          gap={2}
          alignItems="center"
        >
          <Typography component="p" color="#fff">
            &copy; 2024 PH Helthcare.All Right Reserve
          </Typography>
          <Typography
            color="#fff"
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            M
            <Box component="span" color="primary.main">
              Y
            </Box>
            {""}
            HelthCare
          </Typography>
          <Typography component="p" color="#fff">
            Privacy Policy
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

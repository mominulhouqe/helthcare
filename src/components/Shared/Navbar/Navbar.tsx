import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          M
          <Box component="span" color="primary.main">
            Y
          </Box>
          {""}
          HelthCare
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={3}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/helth-plans">
            Helth Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/digonistics">
            Digonistics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;

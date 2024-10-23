"use client";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import assest from "@/assets";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IpatientLoginValue {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IpatientLoginValue>();

  const onSubmit: SubmitHandler<IpatientLoginValue> = (data) => {
    console.log(data);
    try {
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container
      sx={{
        padding: { xs: "10px", md: "50px" },
      }}
    >
      <Stack
        sx={{
          maxWidth: 700,
          width: "100%",
          padding: { xs: 2, md: 4 },
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 1,
          mx: "auto",
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Stack
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          mx="auto"
        >
          <Image
            src={assest.svgs.logo}
            width={100}
            height={100}
            alt="logo"
            style={{ borderRadius: "50%" }}
          />
          <Box>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Login HealthCare
            </Typography>
          </Box>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ textAlign: "left", my: 1, mt: 3 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                cursor: "pointer",
              }}
            >
              Forget your password?
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ borderRadius: 2, my: "15px", width: "82%" }}
            type="submit"
          >
            Login
          </Button>
        </form>

        <Typography variant="body1" color="secondary.main" sx={{ mt: 2 }}>
          Are you new here?{" "}
          <Link href="/register" style={{ color: "blue", fontWeight: 550 }}>
            Register
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
};

export default LoginPage;

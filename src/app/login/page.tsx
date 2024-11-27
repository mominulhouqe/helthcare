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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
import CustomForm from "@/components/CustomForm/CustomForm";
import CustomInput from "@/components/CustomForm/CustomInput";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        toast.error(res.message || "Login failed. Please try again.");
      }
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
        <CustomForm onSubmit={handleLogin}>
          <Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} md={6}>
                <CustomInput name="email" label="Email" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  name="password"
                  label="Password"
                  // type={showPassword ? "text" : "password"}
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
            sx={{ borderRadius: 2, my: "15px", width: "100%" }}
            type="submit"
          >
            Login
          </Button>
        </CustomForm>

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

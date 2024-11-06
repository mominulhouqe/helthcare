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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import CustomForm from "@/components/CustomForm/CustomForm";
import CustomInput from "@/components/CustomForm/CustomInput";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.data?.id) {
        toast.success(res?.message);

        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          toast.success(res?.message);
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      } else {
        toast.error(res.message || "Registration failed. Please try again.");
      }
    } catch (error: any) {
      toast.error(error?.message || "An unexpected error occurred.");
      console.log(error.message);
    }
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
              Patient Register
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              Register now to access our services and start your journey to
              better health.
            </Typography>
          </Box>
        </Stack>
        <CustomForm onSubmit={handleRegister}>
          <Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12}>
                <CustomInput
                  label="Name"
                  fullWidth={true}
                  name="patient.name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  type="email"
                  label="Email"
                  fullWidth={true}
                  name="patient.email"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  label="Password"
                  fullWidth={true}
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  label="Contract Number"
                  fullWidth={true}
                  name="patient.contactNumber"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  label="Address"
                  fullWidth={true}
                  name="patient.address"
                />
              </Grid>
            </Grid>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ borderRadius: 2, my: "15px", width: "100%" }}
            type="submit"
          >
            Register Now
          </Button>
        </CustomForm>
        <Typography variant="body1" color="secondary.main" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "blue", fontWeight: 550 }}>
            Login
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
};

export default RegisterPage;

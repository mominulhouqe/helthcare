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
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IpatientInput {
  name: string;
  email: string;
  contactNumber: string;
  address: String;
}

interface IpatientFormValue {
  password: String;
  patient: IpatientInput;
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IpatientFormValue>();

  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<IpatientFormValue> = async (values) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register(`patient.name`)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register(`patient.email`)}
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
              <Grid item xs={12} md={6}>
                <TextField
                  id="contractNumber"
                  label="Contract Number"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register(`patient.contactNumber`)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="Address"
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register(`patient.address`)}
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
        </form>
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

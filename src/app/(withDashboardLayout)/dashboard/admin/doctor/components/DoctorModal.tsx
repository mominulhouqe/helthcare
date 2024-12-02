import { Button, Grid } from "@mui/material";
import { toast } from "sonner";
import FullScreenModal from "@/components/Shared/RModal/FullScreenModal";
import RModal from "@/components/Shared/RModal/RModal";
import CustomInput from "@/components/CustomForm/CustomInput";
import CustomForm from "@/components/CustomForm/CustomForm";
import CustomSelectedForm from "@/components/CustomForm/CustomSelectedForm";
import { Gender } from "@/types";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  const handleSubmit = (values: FieldValues) => {
    // Handle form submission logic here
    console.log(values);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <FullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <CustomForm onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.name"
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="password"
              type="password"
              label="Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.address"
              label="Address"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomSelectedForm
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomInput
              name="doctor.designation"
              label="Designation"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Create</Button>
      </CustomForm>
    </FullScreenModal>
  );
};

export default DoctorModal;

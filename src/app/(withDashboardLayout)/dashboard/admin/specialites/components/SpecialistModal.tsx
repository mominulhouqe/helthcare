import CustomFileUploader from "@/components/CustomForm/CustomFileUploader";
import CustomForm from "@/components/CustomForm/CustomForm";
import CustomInput from "@/components/CustomForm/CustomInput";
import RModal from "@/components/Shared/RModal/RModal";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <RModal open={open} setOpen={setOpen} title="Create a New Specialty">
      <CustomForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <CustomInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <CustomFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{
            mt: 3,
          }}
        >
          Create
        </Button>
      </CustomForm>
    </RModal>
  );
};

export default SpecialistModal;

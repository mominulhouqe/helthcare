import CustomFileUploader from "@/components/CustomForm/CustomFileUploader";
import CustomForm from "@/components/CustomForm/CustomForm";
import CustomInput from "@/components/CustomForm/CustomInput";
import RModal from "@/components/Shared/RModal/RModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully");
        setOpen(false);
      }
      console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
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

import * as React from "react";
import { styled, SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import Input from "@mui/material/Input";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function CustomFileUploader({ name, label, sx }: TProps) {
  const { control } = useFormContext();

  if (!control) {
    console.error(
      "CustomFileUploader must be used within a FormProvider from react-hook-form."
    );
    return null;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ ...sx }}
          aria-label={label || "Upload File"}
        >
          {label || "Upload File"}
          <Input
            {...field}
            type="file"
            onChange={(e) =>
              onChange((e.target as HTMLInputElement).files?.[0] || null)
            }
            inputProps={{ accept: "image/*" }} // Change this based on file type
            style={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
}

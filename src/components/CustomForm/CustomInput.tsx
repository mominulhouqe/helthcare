import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material";

interface CustomInputProps {
  control?: any;
  name: string;
  label: string;
  defaultValue?: string; // Optional default value
  fullWidth?: boolean;
  sx?: SxProps;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  control,
  name,
  label,
  defaultValue = "",
  fullWidth,
  sx,
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue} // Ensure defaultValue is set
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          value={field.value || ""} // Fallback to empty string if value is undefined
          onChange={(e) => field.onChange(e.target.value)}
          fullWidth
        />
      )}
    />
  );
};

export default CustomInput;

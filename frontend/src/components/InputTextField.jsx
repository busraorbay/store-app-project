import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function InputTextField({ name, label, autofocus = false }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name, { required: `${name} zorunlu alan` })}
      label={label}
      size="small"
      fullWidth
      autoFocus={autofocus}
      sx={{ mb: 2 }}
      error={!!errors[name]}
      helperText={errors[name]?.message}
    />
  );
}

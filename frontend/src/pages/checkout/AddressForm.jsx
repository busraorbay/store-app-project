import { Grid2 } from "@mui/material";
import InputTextField from "../../components/InputTextField";

export default function AddressForm() {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="firstname" label="Enter firstname" autofocus />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="lastname" label="Enter lastname" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="phone" label="Enter phone" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="city" label="Enter city" />
      </Grid2>{" "}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="addresline" label="Enter addresline" />
      </Grid2>
    </Grid2>
  );
}

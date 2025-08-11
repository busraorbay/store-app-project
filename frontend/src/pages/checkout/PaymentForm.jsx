import { Grid2 } from "@mui/material";
import InputTextField from "../../components/InputTextField";

export default function PaymentForm() {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="cardname" label="Enter cardname" autofocus />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="cardnumber" label="Enter cardnumber" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="expirydate" label="Enter expirydate" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputTextField name="cvv" label="Enter cvv" />
      </Grid2>
    </Grid2>
  );
}

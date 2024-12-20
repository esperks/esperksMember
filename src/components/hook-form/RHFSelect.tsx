// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  children: React.ReactNode;
};

export default function RHFSelect({ name, children, ...other }: Props) {
  const { control } = useFormContext();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
        maxWidth: 140,
        borderRadius: "8px",
      },
    },
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
          InputLabelProps={{ shrink: true }}
          SelectProps={{
            native: false,
            sx: { textTransform: "capitalize" },
            MenuProps: MenuProps,
          }}
        >
          {children}
        </TextField>
      )}
    />
  );
}

import type { HTMLInputTypeAttribute } from "react";
import { ErrorText, Label, Tag, TextField } from "@/components";

type Props = {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  errors: string[] | undefined;
};

export function FormField({
  label,
  name,
  type,
  required = false,
  errors,
}: Props) {
  return (
    <div className="space-y-2">
      <Label>
        {label}
        <Tag isRequired={required}>{required ? "必須" : "任意"}</Tag>
      </Label>
      <TextField
        name={name}
        type={type}
        required={required}
        isError={!!errors}
      />
      <div>
        {errors?.map((error) => <ErrorText key={error}>{error}</ErrorText>)}
      </div>
    </div>
  );
}

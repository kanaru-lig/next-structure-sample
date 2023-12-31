"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components";

type Props = {
  children: ReactNode;
};

export function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} size="md" variant="primary">
      {children}
    </Button>
  );
}

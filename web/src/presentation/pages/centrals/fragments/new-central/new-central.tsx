"use client";

import { useRouter } from "next/navigation";
import { Button } from "@components/core/button/button";

export const NewCentralButton = () => {
  const router = useRouter();

  const handleCentralRegister = () => {
    router.push("/centrais/cadastrar");
  };

  return (
    <Button onClick={handleCentralRegister}>
      Nova Central
    </Button>
  );
};
import { CentralForm } from "@components/core/central-form/central-form";
import { FC } from "react";

interface EditPageProps {
  params: {
    id: string;
  };
}

export const EditPage: FC<EditPageProps> = ({ params }) => {
  const centralId = params.id;

  return <CentralForm centralId={centralId} />;
};


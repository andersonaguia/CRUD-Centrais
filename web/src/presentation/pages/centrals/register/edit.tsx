import { FC } from "react";
import { CentralForm } from "../fragments/central-form/central-form";

interface EditPageProps {
  params: {
    id: string;
  };
}

export const EditPage: FC<EditPageProps> = ({ params }) => {
  const centralId = params.id;

  return <CentralForm centralId={centralId} />;
};


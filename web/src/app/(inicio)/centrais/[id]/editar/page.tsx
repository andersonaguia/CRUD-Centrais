import { FC } from "react";
import * as s from "@pages/centrals/styles/centrals.css";
import { CentralForm } from "@pages/centrals/fragments/central-form/central-form";

interface EditPageProps {
  params: {
    id: string;
  };
}

const EditPage: FC<EditPageProps> = ({ params }) => {
  const centralId = params.id;

  return (
    <div className={s.containerPage}>
      <CentralForm centralId={centralId} />
    </div>
  );
};

export default EditPage;
import { CentralForm } from "@components/core/central-form/central-form";
import { FC } from "react";
import * as s from "@pages/centrals/styles/centrals.css";

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
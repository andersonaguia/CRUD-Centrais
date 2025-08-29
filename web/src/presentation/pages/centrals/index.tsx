import { Title } from "@components/core/title";

import * as styles from "./styles/centrals.css";

export const CentralsPage = () => {
  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>CENTRAIS</Title.Text>
      </Title.Root>
    </div>
  );
};

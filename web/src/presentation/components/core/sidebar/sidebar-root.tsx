import React, { FC } from 'react';

import { Container } from '@components/core/container';
import { DefenseLogo } from '@components/logos/defense';
import * as styles from './styles/sidebar-root.css';
import { SidebarRootProps } from './types';

export const SidebarRoot: FC<SidebarRootProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Container {...rest} className={styles.sidebarRootStyle}>
      <header className={styles.sideBarHeaderStyle}>
        <DefenseLogo className={styles.sideBarDefenseLogoStyle} />
        <DefenseLogo
          className={styles.sideBarDefenseLogoSmallStyle}
          size="small"
        />

        <p className={styles.sideBarTitleHeaderStyle}>Middlewares e Centrais</p>
      </header>

      <main>{children}</main>
    </Container>
  );
};

import { FC } from 'react';
import { Trigger as PrimitiveTrigger } from '@radix-ui/react-accordion';
import classNames from 'classnames';

import { CaretRightIcon } from '@components/icons/caret-right';
import * as styles from './styles/accordion-list-trigger.css';
import { AccordionListTriggerProps } from './types';

export const AccordionListTrigger: FC<AccordionListTriggerProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(styles.accordionListTriggerStyle, className);

  return (
    <PrimitiveTrigger {...rest} className={classes}>
      <div className={styles.accordionListTriggerContentStyle}>
        <CaretRightIcon
          customSize="1.8rem"
          className={styles.accordionListTriggerIconStyle}
        />
        <div className={styles.accordionListTriggerLabelStyle}>{children}</div>
      </div>
    </PrimitiveTrigger>
  );
};

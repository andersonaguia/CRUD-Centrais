import { checkIsDefault, compareMany, compareUnique } from './helpers';
import { WhenFC } from './types';

export const When: WhenFC = (props) => {
  const { children, value, expect, not, isDefault } = props;

  if (checkIsDefault<typeof value>(value, !!isDefault)) {
    return <>{children}</>;
  }

  if (Array.isArray(expect)) {
    return compareMany(value, expect, not) ? <>{children}</> : <></>;
  }

  if (compareUnique(value, expect, not)) {
    return <>{children}</>;
  }

  return <></>;
};

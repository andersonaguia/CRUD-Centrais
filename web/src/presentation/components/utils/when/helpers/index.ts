import { CheckIsDefault, CompareMany, CompareUnique } from '../types';

export const checkIsDefault: CheckIsDefault = (value, isDefault) => {
  return !!(isDefault && value === undefined);
};

export const compareUnique: CompareUnique = (value, expect, not): boolean => {
  return not ? value !== expect : value === expect;
};

export const compareMany: CompareMany = (value, expect, not) => {
  return not ? !expect.includes(value) : !!expect.includes(value);
};

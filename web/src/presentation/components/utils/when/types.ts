import { JSX, ReactNode } from 'react';

export type WhenProps<Value = any> = {
  value: Value;
  expect: Value | Value[];
  not?: boolean;
  isDefault?: boolean;
  children?: ReactNode;
};

export type WhenFC = <Value extends unknown>(
  props: WhenProps<Value>,
) => JSX.Element;

export type CheckIsDefault = <V = any>(value: V, isDefault: boolean) => boolean;

export type CompareUnique<V = any> = (
  value: V,
  expect: V,
  not?: boolean,
) => boolean;

export type CompareMany<V = any> = (
  value: V,
  expect: V[],
  not?: boolean,
) => boolean;

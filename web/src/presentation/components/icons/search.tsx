import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import { CustomSizesProps, IconProps } from "./types";

export const SearchIcon: FC<IconProps> = (props) => {
  const { customSize, ...rest } = props;

  const customSizes: CustomSizesProps = {
    width: customSize,
    height: customSize,
    fontSize: customSize,
  };

  return (
    <FontAwesomeIcon
      {...rest}
      {...customSizes}
      icon={faMagnifyingGlass}
      id="button-search"
    />
  );
};

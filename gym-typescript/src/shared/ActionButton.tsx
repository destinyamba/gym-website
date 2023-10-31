import AnchorLink from "react-anchor-link-smooth-scroll";
import { SELECTED_PAGE } from "./types";
import React from "react";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SELECTED_PAGE.CONTACTUS)}
      href={`#${SELECTED_PAGE.CONTACTUS}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

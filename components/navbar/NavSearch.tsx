import React from "react";
import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <Input
      type="search"
      placeholder="search product..."
      capture
      className="max-w-xs dark:bg-muted"
    />
  );
};

export default NavSearch;

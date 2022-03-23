import type { NextPage } from "next";
import React from "react";

interface Props {
  id: "search-input";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isTyping: boolean;
}

const Input: NextPage<Props> = ({ id, onChange, isTyping }) => {
  return (
    <div className="flex flex-row p-[2px] border-b border-grey-2 gap-2">
      <div>{isTyping ? "V" : "O"}</div>
      <input
        id={id}
        className="bg-transparent"
        placeholder="Search for an item..."
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

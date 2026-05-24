"use client";

import React from "react";
import { GenericSearch } from "@/components/atoms/GenericSearch";
import GenericDropDown from "@/components/atoms/GenericDropDown";

const Filterbar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3 items-center">
      <GenericSearch
        onSearch={(q: any) => {
          console.log(q);
          return [q];
        }}
        placeholder="Search clients"
      />
      <div className="flex flex-col md:flex-row gap-3 w-full justify-end">
        {" "}
        <GenericDropDown
          options={[]}
          size="md"
          className="w-full "
          placeholder="All status"
        />
        <GenericDropDown
          options={[]}
          size="md"
          className="w-full "
          placeholder="All invoices"
        />
        <GenericDropDown
          options={[]}
          size="md"
          className="w-full "
          placeholder="All"
        />
      </div>
    </div>
  );
};

export default Filterbar;

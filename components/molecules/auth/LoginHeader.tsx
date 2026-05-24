"use client";

import React, { useState } from "react";

const LoginHeader = ({
  role,
}: {
  role: "agent" | "client";
  
}) => {
  return (
    <>
      <h2 className="text-sm uppercase font-bold text-cyan64 tracking-[3px]">
        {role} login
      </h2>
      <p className="text-gray96 text-2xl font-black tracking-[-1px] leading-11 mt-3">
        Sign in to your workspace
      </p>
      <p className="text-base text-cyan65 mt-2 mb-8">
        Enter your {role} credentials to access your professional dashboard.
      </p>
    </>
  );
};

export default LoginHeader;

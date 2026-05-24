import React from "react";
import Container from "../templates/Container";

const navItems = ["Home", "Services", "Contact"];
const AgentFooter = () => {
  return (
    <Container className="flex justify-center items-center gap-4.5 py-4 mt-29">
      <ul className="flex items-center justify-center gap-4.5">
        {navItems.map((item) => (
          <li key={item} className="text-cyan65 text-base leading-[20,8px]">{item}</li>
        ))}
      </ul>
        <span className="text-[#357169] text-sm font-normal ">© 2026 Inherix Ltd.</span>
    </Container>
  );
};

export default AgentFooter;
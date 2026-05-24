import React from "react";
import Filterbar from "../../molecules/agent/clients/Filterbar";
import { clientData } from "@/constants/clientData";
import ClientCard from "../../molecules/agent/clients/ClientCard";

const ClientPage = () => {
  return (
    <div>
      <Filterbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        {clientData?.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientPage;

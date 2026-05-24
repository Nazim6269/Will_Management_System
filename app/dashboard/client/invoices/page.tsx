import SecurePaymentForm from "@/components/organisms/dashboard/client/invoices/SecurePaymentForm";
import Inovices from "@/components/pages/client/Inovices";
import React from "react";

const page = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="lg:col-span-9">
        <Inovices />
      </div>
      <div className="lg:col-span-3">
        <SecurePaymentForm />
      </div>
    </div>
  );
};

export default page;

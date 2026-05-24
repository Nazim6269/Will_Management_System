"use client";

import { useForm } from "react-hook-form";
import { ShieldCheck } from "lucide-react";
import GenericButton from "@/components/atoms/GenericButton";
import { GenericInput } from "@/components/molecules/shared/GenericInput";

interface PaymentFormValues {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

interface SecurePaymentFormProps {
  amount?: string;
  invoiceRef?: string;
  service?: string;
  onPay?: (data: PaymentFormValues) => void;
}

const labelClass =
  "text-blue46 mb-[0.438rem] text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]";

export default function SecurePaymentForm({
  amount = "£149.00",
  invoiceRef = "INV-0025",
  service = "Will Writing - Basic",
  onPay,
}: SecurePaymentFormProps) {
  const { register, handleSubmit } = useForm<PaymentFormValues>();

  return (
    <div className="w-full rounded-[20px] border border-borderColor/18 bg-blue14 p-5 sm:p-6">

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-[18px] font-extrabold text-gray96 mb-1">
          Secure Payment
        </h2>
        <p className="text-[12px] leading-[1.5] text-blue46">
          Powered by Stripe · 256-bit SSL Encryption
        </p>
      </div>

      {/* Amount box */}
      <div className="mb-5 rounded-[12px] border border-borderColor/18 bg-[#635bff]/10 px-4 py-5 text-center">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.2px] text-blue46">
          Amount Due
        </p>
        <p className="mb-1.5 text-[32px] font-black text-blueF0 leading-none">
          {amount}
        </p>
        <p className="text-[12px] text-blue46">
          {invoiceRef} · {service}
        </p>
      </div>

      {/* Cardholder Name */}
      <div className="mb-3.5">
        <GenericInput
          {...register("cardholderName", { required: true })}
          label="Cardholder Name"
          placeholder="Sarah Johnson"
          fullWidth
          size="xsm"
          labelClassName={labelClass}
          inputClassName="text-gray96/80"
        />
      </div>

      {/* Card Number */}
      <div className="mb-3.5">
        <GenericInput
          {...register("cardNumber", { required: true })}
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          fullWidth
          size="xsm"
          labelClassName={labelClass}
          inputClassName="text-gray96/80 tracking-wider"
        />
      </div>

      {/* Expiry + CVC */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <GenericInput
          {...register("expiryDate", { required: true })}
          label="Expiry Date"
          placeholder="MM / YY"
          maxLength={7}
          fullWidth
          size="xsm"
          labelClassName={labelClass}
          inputClassName="text-gray96/80"
        />
        <GenericInput
          {...register("cvc", { required: true })}
          label="CVC"
          placeholder="123"
          type="password"
          maxLength={3}
          fullWidth
          size="xsm"
          labelClassName={labelClass}
          inputClassName="text-gray96/80"
        />
      </div>

      {/* Pay button */}
      <GenericButton
        title={`Pay ${amount} Securely`}
        variant="primary"
        className="button-shadow"
        fullWidth
        onClick={handleSubmit((data) => onPay?.(data))}
      />

      {/* Secure note */}
      <p className="mt-3 text-center text-xs text-blue46">
        Secured by Stripe · Your payment is encrypted
      </p>
    </div>
  );
}
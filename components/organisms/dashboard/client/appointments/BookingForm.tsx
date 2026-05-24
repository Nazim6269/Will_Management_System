import GenericButton from "@/components/atoms/GenericButton";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import React from "react";
import { useForm } from "react-hook-form";
import { GenericInput } from "@/components/molecules/shared/GenericInput";
import {
  APPT_TYPES,
  TIME_OPTIONS,
  FORMAT_OPTIONS,
  labelClass,
} from "@/constants/clientAppointment";

interface BookingFormValues {
  appointmentType: string;
  preferredDate: string;
  preferredTime: string;
  meetingFormat: string;
  notes: string;
}

const BookingForm = () => {
  const { register, handleSubmit } = useForm<BookingFormValues>();

  return (
    <div className="w-full md:w-[300px] flex-shrink-0 border border-borderColor/18 bg-blue10 px-5 py-6 flex flex-col gap-4 rounded-xl">
      <div>
        <h2 className="text-base font-bold text-blueF0 mb-1">
          Book New Appointment
        </h2>
        <p className="text-xs text-blue46">
          Schedule a session with your will writer
        </p>
      </div>

      <div className="flex flex-col">
        <label className="input-label">Appointment Type</label>
        <GenericDropDown
          {...register("appointmentType")}
          options={APPT_TYPES}
          placeholder="Initial Consultation"
        />
      </div>

      <GenericInput
        {...register("preferredDate")}
        label="Preferred Date"
        type="date"
        fullWidth
        size="xsm"
        labelClassName="input-label"
        inputClassName="input-value"
      />

      <div className="flex flex-col">
        <label className="input-label">Preferred Time</label>
        <GenericDropDown
          {...register("preferredTime")}
          options={TIME_OPTIONS}
          placeholder="09:00 AM"
        />
      </div>

      <div className="flex flex-col">
        <label className="input-label">Meeting Format</label>
        <GenericDropDown
          {...register("meetingFormat")}
          options={FORMAT_OPTIONS}
          placeholder="Zoom Video Call"
        />
      </div>

      <div className="flex flex-col">
        <GenericInput
          {...register("notes")}
          label="Notes (Optional)"
          type="textarea"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
          placeholder="What would you like to discuss?"
        />
      </div>

      <div>
        <GenericButton
          title="Request Appointment"
          variant="primary"
          className="button-shadow"
          fullWidth
          onClick={handleSubmit(console.log)}
        />
        <p className="mt-2 text-center text-xs text-blue46">
          Your will writer will confirm within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default BookingForm;

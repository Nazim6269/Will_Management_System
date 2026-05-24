"use client";

import GenericButton from "@/components/atoms/GenericButton";

interface NeedChangesCardProps {
  onBookAppointment?: () => void;
  onWillRevision?: () => void;
}

export default function NeedChangesCard({
  onBookAppointment,
  onWillRevision,
}: NeedChangesCardProps) {
  return (
    <div className="w-full gradient-border-top rounded-2xl border border-borderColor/18 bg-blue14 p-5">
      {/* Header */}
      <h2 className="mb-4 text-base font-bold leading-6 text-blueF0">
        Need Changes?
      </h2>

      {/* Description */}
      <p className="mb-5 text-xs leading-[1.6] text-blue46">
        If you need to update your will, please contact your will writer
        directly or book an appointment.
      </p>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <GenericButton
          title="Book Appointment"
          variant="outline"
          fullWidth
          onClick={onBookAppointment}
        />
        <GenericButton
          title="Will Revision"
          variant="outline"
          fullWidth
          onClick={onWillRevision}
        />
      </div>
    </div>
  );
}

import {UploadIcon} from "@/components/atoms/icons";
import { useRef, useState } from "react";

export default function PhotoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  };

  // Drag handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue46 text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]">
          Item Photo
        </span>
        <span className="text-[10px] font-medium text-blue46 bg-blue46/10 rounded-md px-4 py-0.5">
          Optional
        </span>
      </div>

      {/* Drop zone */}
      <div
        onClick={handleUpload}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 py-8 px-4 cursor-pointer transition-all duration-150
          ${
            file
              ? "border-green-500 bg-green-500/10"
              : isDragging
                ? "border-blue-500 bg-blue-500/10"
                : "border-yellow-600/50 bg-yellow-900/10 hover:bg-yellow-900/20"
          }
        `}
      >
        <UploadIcon />

        <p className="text-blue70 text-sm font-normal">
          {file ? "Photo uploaded" : "Upload a photo"}
        </p>

        <p className="text-blue46 text-xs text-center leading-[18px]">
          JPG, PNG, WEBP · Max 5MB
          <br />
          Drag & drop or click to browse
        </p>

        {/* ✅ File name display */}
        {file && (
          <p className="text-green-500 text-xs mt-1 font-medium">{file.name}</p>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* Helper text */}
      <p className="text-blue46 text-xs leading-[18px] mt-3 border border-borderColor/18 px-3 py-2.5 rounded-xl">
        Recommended for jewellery, artwork, antiques, or any item not easily
        identified by description alone. The photo will be included in the
        executor's copy.
      </p>
    </div>
  );
}

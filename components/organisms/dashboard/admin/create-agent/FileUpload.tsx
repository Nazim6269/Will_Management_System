import { useRef, useState } from "react";

export default function FileUpload() {
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
    <div className="mb-2">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue46 text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]">
         Upload Certificate / Qualification 
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
                : "border-[#6559B4] bg-[#18172D] hover:bg-[#18172D]/80"
          }
        `}
      >
        <p className="text-4xl">📎</p>

        <p className="text-blue70 text-sm font-normal">
          {file ? "Photo uploaded" : "Click to upload your certification document"}
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
     
    </div>
  );
}

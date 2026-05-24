export function renderFormattedText(text: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-gray96">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

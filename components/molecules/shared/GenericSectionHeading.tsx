import React from "react";

const GenericSectionHeading = ({
  text,
  title,
  initialTextCenter,
}: {
  text: string;
  title: string;
  initialTextCenter?: boolean;
}) => {
  return (
    <div>
      <p
        className={`secton-heading-small-text ${initialTextCenter ? "text-center" : "text-center md:text-left"}`}
      >
        {text}
      </p>
      <h2
        className={`section-heading-text max-w-lg ${initialTextCenter ? "text-center mx-auto" : "text-center md:text-left mx-0"}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default GenericSectionHeading;

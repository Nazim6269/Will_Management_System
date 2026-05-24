import React from "react";

const ContactCard = ({ item }: { item: any }) => {
  return (
    <div className="flex justify-start items-center gap-x-4.5 ">
      <div className="bg-borderColor/15 border border-borderColor/18 rounded-[0.875rem] p-2">
        {item?.icon && <item.icon />}
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-gray96 text-[0.938rem] leading-[160%] font-bold font-libreBaskerville">
          {item.title}
        </h3>
        <div>
          {" "}
          {item?.items?.map((value: any, index: number) => (
            <p
              key={index}
              className="text-blue70 text-xs sm:text-base leading-[140%] font-normal"
            >
              {value?.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

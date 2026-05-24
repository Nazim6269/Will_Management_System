import Image from "next/image";
import CardBadge from "../../shared/CardBadge";

interface EstatePlanCardProps {
  title: string;
  desc: string;
  step: string;
  badge: string;
  imgUrl: string;
}

const EstatePlanCard = ({
  title,
  desc,
  step,
  badge,
  imgUrl,
}: EstatePlanCardProps) => {
  return (
    <div className="bg-[#130F26] p-4 sm:p-9 ">
      <div className="flex items-center flex-row sm:flex-col  sm:items-start gap-2.5 justify-between md:justify-start mb-[27px]">
        <span className="text-lg leading-[150%] text-violet85/60 font-monoton">
          {step}
        </span>
        <Image src={imgUrl} alt="will" height={46} width={46} />
      </div>
      <h2 className="text-gray96 leading-[160%] text-[18px] tracking-[-0.031rem] font-bold mt-5.5">
        {title}
      </h2>
      <p className="text-blue70 text-sm font-normal leading-[170%] mt-[9px]">
        {desc}
      </p>
      <CardBadge text={badge} />
    </div>
  );
};

export default EstatePlanCard;

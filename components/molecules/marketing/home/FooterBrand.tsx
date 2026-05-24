// FooterBrand.tsx
type Props = {
  name: string;
  description: string;
};

const FooterBrand = ({ name, description }: Props) => {
  return (
    <div className="space-y-4 max-w-[256px]">
      <span className="gradient-text-one text-xl sm:text-2xl font-extrabold">
        {name}
      </span>

      <p className="text-sm text-blue70 leading-6">{description}</p>
    </div>
  );
};

export default FooterBrand;

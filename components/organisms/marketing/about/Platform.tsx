import Container from "@/components/templates/Container";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
const data = [
  { amount: "5k+", title: "Wills created" },
  { amount: "98%", title: "Client satisfaction" },
  { amount: "200+", title: "Certified  writes" },
  { amount: "2026", title: "Founded" },
];

const Platform = () => {
  return (
    <Container className="flex flex-col lg:flex-row lg:items-center gap-12 py-10 sm:py-20">
      <div className="flex flex-col space-y-[1.065rem]">
        <GenericSectionHeading
          text="Who we are"
          title="A platform built on
trust, transparency and
technology"
        />

        <div className="flex flex-col gap-y-4 mt-5">
          <p className="text-textBlue max-w-118 text-start">
            Inherix is a professional will writing and estate planning platform
            that connects clients with certified will writers — making the
            process of creating and managing a will simple, digital, and secure.
          </p>
          <p className="text-textBlue max-w-118 text-start ">
            We believe everyone deserves access to professional estate planning,
            regardless of complexity. Our platform streamlines the entire
            journey — from first consultation to final document storage — so
            nothing falls through the cracks.
          </p>
          <p className="text-textBlue max-w-118 text-start">
            Founded in 2024, Inherix has already helped thousands of individuals
            and families protect what matters most to them.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 border border-borderColor/18 rounded-[28px] bg-blue16 p-4 sm:p-12 flex-1 gap-4">
        {data?.map((d, i) => (
          <div
            key={i}
            className="flex items-center justify-center md:justify-start p-3 sm:p-6 rounded-2xl bg-blue10 border border-borderColor/18"
          >
            <div>
              <h3 className="gradient-text-one text-4xl font-plusJakartaSans font-extrabold leading-[160%] tracking-[-1.5px]">
                {d.amount}
              </h3>
              <p className="text-blue46 text-[13px] font-medium font-plusJakartaSans leading-5">
                {d.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Platform;

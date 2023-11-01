import Logo from "@/assets/Logo.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="bg-primary-100 md:flex gap-8 items-start justify-center">
      <div className="py-10  mx-16 md:w-1/4">
        <img alt="logo" src={Logo} />
        <p className="text-sm w-4/5">
          To stay on top of your fitness goals, you need to be self-motivated,
          and for those times self-motivation doesn't work
        </p>
        <p className="text-sm py-4 md:w-2/5">
          &copy; Evogym All Rights Reserved.
        </p>
      </div>
      <div className="mx-16 md:mt-10 md:mx-0">
        <h4 className="font-bold">Links</h4>
        <div className="text-sm">
          <p>Get Fit Today</p>
          <p>Become A Trainer</p>
          <p>Join A Class</p>
        </div>
      </div>
      <div className="mx-16 py-10">
        <h4 className="font-bold">Contact Us </h4>
        <div className="text-sm">
          <p>evogym@gmail.com</p>
          <p>(353)123-6826</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

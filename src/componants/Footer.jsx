import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="Notmxauto text-center md:text-start  md:flex-row md:justify-center md:gap-[150px] md:flex-wrap text-footerText flex flex-col gap-5 items-center md:items-start bg-footerBackground py-10 rounded-tr-[100px]">
      <img className="mb-10" src={logo} alt="" />
      <div>
        <p>Product</p>
        <div>
          <p> Overview</p>
          <p>Pricing</p>
          <p>Marketplace</p>
          <p>Features</p>
          <p>Integrations</p>
        </div>
      </div>
      <div>
        <p>Company</p>
        <div>
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div>
        <p>Connect</p>
        <div>
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

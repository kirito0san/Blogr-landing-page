import laptopmobile from "../assets/images/illustration-laptop-mobile.svg";
import laptopdesktop from "../assets/images/illustration-laptop-desktop.svg";
const FreeOpenSimple = () => {
  return (
    <div className="text-center md:text-start flex flex-col md:flex-row pb-10">
      <div className="!w-full md:h-[805px] relative  md:!w-1/2 ">
        <img
          className="md:absolute md:left-0 md:w-[830px] md:max-w-none md:top-1/2 md:-translate-y-1/2 md:translate-x-[-245px]"
          src={window.innerWidth < 500 ? laptopmobile : laptopdesktop}
          alt=""
        />
      </div>
      <div className="w-5/6 md:!w-1/2 mx-auto flex flex-col md:justify-center gap-5">
        <div>
          <p className="heading"> Free, open, simple</p>
          <p className="md:w-[70%]">
            Blogr is a free and open source application backed by a large community of helpful
            developers. It supports features such as code syntax highlighting, RSS feeds, social
            media integration, third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to learn.
          </p>
        </div>
        <div>
          <p className="heading"> Powerful tooling</p>
          <p className="md:w-[70%]">
            Batteries included. We built a simple and straightforward CLI tool that makes
            customization and deployment a breeze, but capable of producing even the most
            complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeOpenSimple;

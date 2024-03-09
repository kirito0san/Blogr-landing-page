import phones from "../assets/images/illustration-phones.svg";
import circles from "../assets/images/bg-pattern-circles.svg";
const Infrastructure = () => {
  return (
    <div className="Notmxauto ">
      <div className="flex md:flex-row flex-col gap-5 bg bg-body pb-[80px] pt-[200px] md:py-0 mt-[230px] relative md:text-start  text-center text-white  rounded-tr-[100px] rounded-bl-[100px]">
        <div className="w-1/2 max-h-[380px] z-10">
          <img
            className=" absolute w-[400px] md:w-auto  md:static translate-y-[-378px] md:-right-1/2 md:translate-x-[5%]  md:translate-y-[-100px]  z-10 "
            src={phones}
            alt=""
          />
        </div>
        <div className="rounded-tr-[100px] rounded-bl-[100px] absolute bg-[url('./assets/images/bg-pattern-circles.svg')] bg-no-repeat  bg-[50%_-195px] md:bg-[left_-250px_top_90%] bg-cover md:bg-auto w-full h-full top-0 left-0"></div>
        <div className="flex flex-col md:justify-center gap-5 md:w-1/2 ">
          <p className="text-3xl w-5/6 mx-auto  font-semibold relative z-10">
            {" "}
            State of the Art Infrastructure
          </p>
          <p className="relative w-5/6 md:pr-16 mx-auto z-10">
            With reliability and speed in mind, worldwide data centers provide the backbone for
            ultra-fast connectivity. This ensures your site will load instantly, no matter where
            your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;

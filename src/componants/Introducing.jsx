import editormobile from "../assets/images/illustration-editor-mobile.svg";
import editordesktop from "../assets/images/illustration-editor-desktop.svg";
const Introducing = () => {
  return (
    <div className="flex  md:mx-auto md:w-5/6 md:py-10 pb-[100px]  md:flex-row flex-col">
      <div className=" md:order-1  md:relative md:w-1/2">
        <img
          className="  md:absolute md:top-1/2 md:-translate-y-1/2 md:-right-[376px] md:w-[700px] lg:w-[827px] md:max-w-none"
          src={window.innerWidth < 500 ? editormobile : editordesktop}
          alt=""
        />
      </div>
      <div className="text-center md:text-start  mx-auto w-5/6 py-5">
        <p className="heading ">Introducing an extensible editor</p>
        <p>
          {" "}
          Blogr features an exceedingly intuitive interface which lets you focus on one thing:
          creating content. The editor supports management of multiple blogs and allows easy
          manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
          and themes provide easy ways to add functionality or change the looks of a blog.
        </p>
        <p className="heading mt-5">Robust content management</p>
        <p>
          Flexible content management enables users to easily move through posts. Increase the
          usability of your blog by adding customized categories, sections, format, or flow. With
          this functionality, you’re in full control.
        </p>
      </div>
    </div>
  );
};

export default Introducing;

const Modern = () => {
  return (
    <div className="grow z-10 flex flex-col justify-center gap-8 text-center">
      <p className=" text-4xl md:text-5xl md:font-semibold"> A modern publishing platform</p>
      <p> Grow your audience and build your online brand</p>
      <div className="startLearn gap-3 flex md:justify-center justify-between">
        <button className="bg-white border-none text-CTAtext hover:text-white hover:bg-CTAhoverbackground">
          {" "}
          Start for Free
        </button>
        <button className=" hover:bg-white hover:text-CTAtext"> Learn More</button>
      </div>
    </div>
  );
};

export default Modern;

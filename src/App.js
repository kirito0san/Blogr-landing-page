import Header from "./componants/Header";
import Introducing from "./componants/Introducing";
import Infrastructure from "./componants/Infrastructure";
import FreeOpenSimple from "./componants/FreeOpenSimple";
import Footer from "./componants/Footer";
import Modern from "./componants/Modern";
function App() {
  return (
    <div className="App font-Overpass md:overflow-hidden">
      <div className=" py-10 h-screen md:h-[60vh] text-white  flex flex-col    relative">
        <div className="bg-introMoblie rounded-bl-[100px] overflow-hidden absolute top-0 left-0 !w-full h-full ">
          <div className=" scale-[1.2] absolute max-w-none bg-[length:1463px] md:bg-[length:2063px] bg-no-repeat  bg-[-430px_-245px] md:bg-[4px_-805px] bg-[url('./assets/images/bg-pattern-intro-mobile.svg')] md:bg-[url('./assets/images/bg-pattern-intro-desktop.svg')] !w-full h-full bottom-0 ">
          </div>
        </div>
        <Header />
        <Modern />
      </div>
      <div>
        <p className=" text-heading text-center font-semibold text-2xl md:pb-10 md:mt-[100px] md:text-5xl">Designed for the future</p>
      </div>
      <Introducing />
      <Infrastructure />
      <FreeOpenSimple />
      <Footer />
    </div>
  );
}

export default App;

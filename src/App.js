import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "./components/Image";
import Info from "./components/Info";
import Course from "./components/Course";

function App() {
  return (
    <>
      <div className="bg-[#053e56] p-1">
        <Header />
        <Hero />
        <Image />
      </div>

      <div className="bg-white">
        <Info />

        <Course />
      </div>
    </>
  );
}

export default App;

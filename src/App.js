import Header from "./components/Header";
import Image from "./components/Image";
import Info from "./components/Info";
import Course from "./components/Course";

function App() {
  return (
    <>
      <div
        className="w-screen bg-gradient-to-b from-[#053e56] to-[#193669] p-1
      flex flex-col md:flex-row"
      >
        <Header className="" />
        <Image />
      </div>

      <div className="bg-white flex flex-col md:flex-row items-center justify-center">
        <Info />

        <Course />
      </div>
    </>
  );
}

export default App;

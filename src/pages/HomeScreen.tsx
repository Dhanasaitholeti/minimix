import Canvas from "../components/canvas/Canvas";
import ToolBar from "../components/common/ToolBar";

const HomeScreen: React.FC = () => {
  return (
    <>
      <div className="flex-grow grid grid-cols-20">
        <aside className="col-span-4 flex flex-col px-2">
          <ToolBar />
        </aside>
        <div className="col-start-5 col-span-full ">
          <Canvas />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

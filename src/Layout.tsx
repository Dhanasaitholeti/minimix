import Navbar from "./components/shared/Navbar";
import ToolBar from "./components/shared/ToolBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-10 min-h-screen bg-backgroundPrimary text-textPrimary font-sans">
        <Navbar />
        <div className="flex-grow grid grid-cols-20">
          <aside className="col-span-4 flex flex-col px-2">
            <ToolBar />
          </aside>
          <main className="col-start-5 col-span-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;

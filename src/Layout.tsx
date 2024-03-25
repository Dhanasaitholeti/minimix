import Navbar from "./components/common/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-10 min-h-screen bg-backgroundPrimary text-textPrimary font-sans">
        <Navbar />
        <main className="flex flex-grow w-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;

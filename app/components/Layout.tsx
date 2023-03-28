import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header className="font-montserrat" />
      <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

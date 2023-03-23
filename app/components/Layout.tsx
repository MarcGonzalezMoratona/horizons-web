import Footer from "./Footer";
import Header from "./Header";

type IProps = {
  children: React.ReactNode;
};

const Layout = (props: IProps) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center dark:text-neutral-100 dark:bg-neutral-900 text-neutral-900">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

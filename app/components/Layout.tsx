import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header className="font-montserrat" />
      <main className="flex flex-col min-h-screen font-montserrat items-center justify-center text-neutral-800 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-900">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

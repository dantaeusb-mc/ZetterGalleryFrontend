import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Footer from "@components/footer";
import Header from "@components/header";

function SidebarLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <>
      <Header />
      <aside>

      </aside>
      <main>
        { props.children }
      </main>
      <NavBar />
      <Footer />
    </>
  );
}

export default SidebarLayout;

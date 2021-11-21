import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Footer from "@components/footer";
import Header from "@components/header";
import LayoutWrapper from "@components/layout/LayoutWrapper.component";

function SidebarLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <aside>

      </aside>
      <main>
        { props.children }
      </main>
      <NavBar />
      <Footer />
    </LayoutWrapper>
  );
}

export default SidebarLayout;

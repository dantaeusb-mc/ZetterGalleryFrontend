import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Header from "@components/header";
import Footer from "@components/footer";
import LayoutWrapper from "@components/layout/LayoutWrapper.component";

function CleanLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer />
    </LayoutWrapper>
  );
}

export default CleanLayout;

import React, {PropsWithChildren} from 'react';
import NavBar from '@components/navbar'
import Header from "@components/header";
import Footer from "@components/footer";

function CleanLayout(props: PropsWithChildren<any>): JSX.Element {
  return (
    <>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer />
    </>
  );
}

export default CleanLayout;

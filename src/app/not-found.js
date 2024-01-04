'use client';

import Error404 from "@/components/Error404/Error404";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const NotFound = ({ error, reset }) => {
  return (
    <>
      <Header />
      <Error404 />
      <Footer />
    </>

  )
};

export default NotFound;
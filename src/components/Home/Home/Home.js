import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contract from "../Contract/Contract";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <ChooseUs />
      <PrivacyPolicy />
      <Review />
      <Contract />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../Banner/Banner";
import ContactSection from "../ContactSection/ContactSection";
import Exceptional from "../Exceptional/Exceptional";

import InfoCards from "../InfoCard/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;

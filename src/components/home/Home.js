import React from "react";
import HomeNavHeader from "./HomeNavHeader";
import HomeContact from "./HomeContact";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <>
      <HomeNavHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <AboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
}

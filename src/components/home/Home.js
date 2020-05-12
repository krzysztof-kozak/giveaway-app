import React from "react";
import HomeNavHeader from "./HomeNavHeader";
import HomeContact from "./HomeContact";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export default function Home() {
  return (
    <>
      <HomeNavHeader />
      <HomeContact />
      <HomeSimpleSteps />
      <HomeThreeColumns />
      <HomeWhoWeHelp />
    </>
  );
}

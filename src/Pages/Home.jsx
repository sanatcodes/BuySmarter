// import React from "react";
import NavBar from "../components/NavBar";
import { dummyProperty } from "../data/properties";
import PropertyDetailComponent from "./Marketplace/PropertyDetailComponent";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <PropertyDetailComponent property={dummyProperty} />;
    </>
  );
}

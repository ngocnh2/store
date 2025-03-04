import LoadingContainer from "@/components/global/LoadingContainer";
import FeatureProducts from "@/components/home/FeatureProducts";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />} />
      <FeatureProducts />
    </>
  );
};

export default HomePage;

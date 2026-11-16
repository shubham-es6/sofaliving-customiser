"use client";

import { useState, useMemo, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSofas from "@/components/FeaturedSofas";
import SofaCustomiser from "@/components/SofaCustomiser";
import About from "@/components/About";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { DEFAULT_CONFIG } from "@/data/sofas";
import { getConfigSummary, getValidColour } from "@/lib/pricing";

export default function Home() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const summary = useMemo(() => getConfigSummary(config), [config]);

  const setOption = useCallback((key, value) => {
    setConfig((c) => ({ ...c, [key]: value }));
  }, []);

  // Changing model resets an invalid colour to a valid one.
  const setModel = useCallback((modelId) => {
    setConfig((c) => ({ ...c, modelId, colourId: getValidColour(modelId, c.colourId) }));
  }, []);

  const customise = useCallback((modelId) => {
    setModel(modelId);
    document.getElementById("customiser")?.scrollIntoView({ behavior: "smooth" });
  }, [setModel]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedSofas onCustomise={customise} />
        <SofaCustomiser config={config} summary={summary} setModel={setModel} setOption={setOption} />
        <About />
        <EnquiryForm summary={summary} />
      </main>
      <Footer />
    </>
  );
}

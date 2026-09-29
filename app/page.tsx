import Credibilidade from "@/components/Credibilidade";
import FAQ from "@/components/FAQ";
import ComoFunciona from "@/components/HowItWorks";
import Informativos from "@/components/Informativos";
import NewHero from "@/components/NewHero";
import ServicosCTA from "@/components/servicos/ServicosCTA";

import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <NewHero />
      <Credibilidade />
      <ComoFunciona />
      <Informativos />
      <ServicosCTA />
    </>
  );
}

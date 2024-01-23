// components
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";

import About from "@/components/About";
import Transformation from "@/components/Transformation";
import Questions from "@/components/Questions";
import Contact from "@/components/Contact";
import SocialIcons from "@/components/SocialIcons";
import Option from "@/components/Option";

export default function Home() {
  const cards = [
    {
      title: "INDIVIDIUALNI TRENING",
      description:
        "Doživite personalizovani pristup i postignite \nfitnes ciljeve brže uz moje \nspecijalizovane individualne treninge \n prilagožene vašem tempu i potrebama.",
		
    },
    {
      title: "ONLINE TRENING",
      description:
        "Uz moj online trening, uživajte u \n fleksibilnosti i profesionalnom voženju gde \ngod se nalazili, sve što vam je potrebno je \ninternet konekcija.",
    },
    {
      title: "PLAN ISHRANE",
      description:
        "Optimizujte svoje rezultate kroz \nprialgođene planove ishrane koji će \nvam pomoći da ostvarite balansiranu \ndijetu i postignete zdraviji način života.",
    },
  ];
  return (
    <main>
      <div className="backImage">
        <div>
          <Hero />
          <Introduction />
        </div>

        <div className="options">
          {cards.map((card) => {
            return <Option title={card.title} description={card.description} />;
          })}
        </div>
      </div>
     
      <Transformation />
      <Questions />
	  <div className="footerImage">
		<div>
	  <About />
      <Contact />
      <SocialIcons />
	  </div>
	  </div>
    </main>
  );
}

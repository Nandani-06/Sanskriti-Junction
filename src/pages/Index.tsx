import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import ProgramsDetailed from "@/components/ProgramsDetailed";
// import CommunityPrograms from "@/components/CommunityPrograms";
import AgeCarePrograms from "@/components/AgeCarePrograms";
import SchoolPrograms from "@/components/SchoolPrograms";
// import ArtDesign from "@/components/ArtDesign";
import FounderTimeline from "@/components/FounderTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <ProgramsDetailed />
        {/* <ArtDesign />
        <CommunityPrograms />*/}
        <AgeCarePrograms /> 
        <SchoolPrograms />
        <FounderTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

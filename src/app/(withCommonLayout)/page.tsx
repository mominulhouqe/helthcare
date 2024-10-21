import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowToWorks from "@/components/UI/HomePage/HowToWorks/HowToWorks";
import Specialiets from "@/components/UI/HomePage/Specialits/Specialiets";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyChose from "@/components/UI/HomePage/WhyChoose/WhyChose";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialiets />
      <TopRatedDoctors />
      <WhyChose />
      <HowToWorks />
    </>
  );
};

export default HomePage;

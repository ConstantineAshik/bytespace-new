import Hero from "@/components/home/hero";
import PartnerLogos from "@/components/home/partner-logos";
import FeaturedCourses from "@/components/home/featured-courses";
import CategorySection from "@/components/home/category-section";
import GrowthAndCreator from "@/components/home/growth-and-creator";
import CreatorCTA from "@/components/home/creator-cta";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <PartnerLogos />
        <FeaturedCourses />
        <CategorySection />
        <div className="growth-viewport" id="creators">
          <GrowthAndCreator />
        </div>
        <div className="cta-viewport">
          <CreatorCTA />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

import HomePage from "@components/HomePage"
import AboutPage from "@components/AboutPage"
import StoryPage from "@components/StoryPage"
import QuickLink from "@components/QuickLink"
import ContactPage from "@components/ContactPage"
import ServicePage from "@components/ServicePage"
import Testimonials from "@components/Testimonials"


const Home = () => {
  return (
    <section>
      <HomePage />
      <ServicePage />
      <AboutPage />
      <Testimonials />
      <StoryPage />
      <ContactPage />
      <QuickLink />
    </section>
  )
}

export default Home
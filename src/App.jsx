import About from "./components/about";
import Header from "./components/header";
import NavigationBar from "./components/navigation-bar";
import QualificationAwards from "./components/qualification-awards";
import SensitivePerson from "./components/sensitive-person";
import SuccessStory from "./components/success-story";
import Testimonial from "./components/testimonial";
import WorkHistory from "./components/work-history";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <About />
      <WorkHistory />
      <Testimonial />
      <QualificationAwards />
      {/* <SensitivePerson /> */}
      <SuccessStory />
    </>
  );
};

export default App;

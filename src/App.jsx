import About from "./components/about";
import Header from "./components/header";
import NavigationBar from "./components/navigation-bar";
import QualificationAwards from "./components/qualification-awards";
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
    </>
  );
};

export default App;

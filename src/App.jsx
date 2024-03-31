import About from "./components/about";
import Header from "./components/header";
import NavigationBar from "./components/navigation-bar";
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
    </>
  );
};

export default App;

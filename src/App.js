// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/pages/About';
import Navbar from './component/Navbar';
import Personaldetail from './component/Personaldetail';
import Navigation from './component/Navigation';
import Resume from './component/pages/Resume';
import Works from './component/pages/Works';

function App() {
  return (
    <>
      <Router>
        <div className="h-full bg-gradient-to-tr from-[#001429] to-[#eb4293] lg:px-[15%] px-[5%] py-[4%]">
          <Navbar />
          <div className="grid grid-cols-1  lg:grid-cols-12 gap-10 justify-between mt-[300px]">
            <div className="lg:col-span-4">
              <Personaldetail />
            </div>
            <div className="lg:col-span-8">
              <div className="flex justify-end">
                <div className=" w-[30rem]">
                  <Navigation />
                </div>
              </div>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Works" element={<Works />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

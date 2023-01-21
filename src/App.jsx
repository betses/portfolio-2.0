// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/pages/About';
import Personaldetail from './component/Personaldetail';
import Navigation from './component/Navigation';
import Resume from './component/pages/Resume';
import Works from './component/pages/Works';

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gradient-to-tr from-[#001429] to-[#eb4293] px-[8%] pt-1">
          <div className="grid grid-cols-1  lg:grid-cols-12 gap-10 justify-between mt-[200px]">
            <div className="lg:col-span-4">
              <Personaldetail />
            </div>
            <div className="lg:col-span-8 mb-10">
              <div className="flex justify-end">
                <div className=" w-[25rem]">
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

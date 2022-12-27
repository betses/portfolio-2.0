import Navbar from './component/Navbar';
import Personaldetail from './component/Personaldetail';

function App() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-[#f0cded] via-[#dce5ee] to-[#def5eb] px-[10%] py-[4%]">
        <Navbar />
        <div className="grid grid-cols-12 gap-20 justify-between mt-[300px]">
          <div className="lg:col-span-4">
            <Personaldetail />
          </div>
          <div className="lg:col-span-8">hello</div>
        </div>
      </div>
    </>
  );
}

export default App;

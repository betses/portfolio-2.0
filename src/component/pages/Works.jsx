import { useState } from 'react';
import Modal from './Modal';

const Dota = new URL('../../assets/dota.JPG', import.meta.url).href;
const Budget = new URL('../../assets/Capture.JPG', import.meta.url).href;

export default function Works() {
  const data = [
    {
      id: '0',
      name: 'Nikita',
      catagory: 'Ui/Ux',
      language: 'html, css',
      preview: 'www.freepik.com',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
      image: Dota,
      background: 'bg-[#fcf1ed]',
    },
    {
      id: '1',
      name: 'Nikita',
      catagory: 'Web Design',
      language: 'html, css',
      preview: 'www.freepik.com',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
      image: Budget,
      background: 'bg-[#e9faff]',
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [midalData, setModalData] = useState('');

  const clickHandler = (id) => {
    setOpenModal(true);
    setModalData(id);
  };
  return (
    <>
      <div className="bg-white p-8 rounded-lg">
        <div className="flex gap-8 items-center pt-5 pb-20">
          <h2 className="text-4xl font-bold">Portfolio</h2>
          <div className="hidden lg:block">
            <div className="h-[2px] w-64 bg-red-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {data.map((element) => (
            <div key={element.id} className={`${element.background} bg-white p-6 rounded-lg h-min`}>
              <img
                src={element.image}
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg"
                alt=""
              />
              <div className="flex items-center justify-between py-6">
                <p className=" text-2xl font-semibold">{element.name}</p>
                <p className=" text-gray-400">{element.catagory}</p>
              </div>
              <div className="w-full flex justify-end">
                <button type="button" className="py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg" onClick={() => clickHandler(element.id)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        {openModal && <Modal closeModal={setOpenModal} data={data[midalData]} />}
      </div>
    </>
  );
}

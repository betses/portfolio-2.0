import React from 'react';

export default function Works() {
  const data = [
    {
      id: '1',
      name: 'Nikita',
      catagory: 'Ui/Ux',
      language: 'html, css',
      preview: 'www.freepik.com',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
      image: 'https://bostamireact.ibthemespro.com/static/media/3.36ac81ad2889773da36a.jpg',
      background: 'bg-[#fcf1ed]',
    },
    {
      id: '2',
      name: 'Nikita',
      catagory: 'Web Design',
      language: 'html, css',
      preview: 'www.freepik.com',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
      image: 'https://bostamireact.ibthemespro.com/static/media/2.0c58299993eba3cb8d6d.jpg',
      background: 'bg-[#e9faff]',
    },
  ];
  return (
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
            <p className="pt-5 text-gray-400">{element.catagory}</p>
            <p className=" text-lg font-semibold">{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

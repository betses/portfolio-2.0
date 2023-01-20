import React from 'react';

export default function About() {
  return (
    <div className="bg-white p-8 rounded-lg text-black">
      <div className="hidden lg:block p-5">
        <div className="flex gap-8 items-center">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div>
            <div className="h-[2px] w-64 bg-red-500" />
          </div>
        </div>
        <p className="text-gray-600 leading-7 text-lg pr-14 pl-2 py-5">
          I&apos;m Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-gray-600 leading-7 text-lg pr-14 pl-2">
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.
        </p>
      </div>
      <h2 className="text-3xl font-semibold px-3 py-5">What I do!</h2>
      <div className=" grid gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="about-box flex gap-4 bg-[#f3faff] py-6 px-5 rounded-2xl">
          <img
            className="w-10 h-10 object-contain  block"
            src="https://bostamireact.ibthemespro.com/static/media/icon-6.7a458dd3dce6df96d462489320d4a456.svg"
            alt=""
          />
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className=" leading-8 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
        <div className="about-box flex gap-4 bg-[#fff4f4] py-6 px-5 rounded-2xl">
          <img
            className="w-10 h-10 object-contain  block"
            src="https://bostamireact.ibthemespro.com/static/media/icon-5.b7ce008f06241f1d51b48260af8b73f4.svg"
            alt=""
          />
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold">Managment</h3>
            <p className=" leading-8 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

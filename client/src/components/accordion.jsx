import React, { useState } from 'react';
import arrow_up from './../assets/Divisi/arrow-up.svg';
import arrow_down from './../assets/Divisi/arrow-down.svg';

function Accordion ({ proker_divisi }) {
  const [selected, setSelected] = useState(null);

  const toggleClick = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="relative z-10 flex flex-col items-center pb-24 w-full">
      <div className="bg-white border-2 border-black rounded-lg  w-[16rem] md:w-[40rem] xl:w-[66rem]">
        {proker_divisi.map((proker, i) => (
          <div key={i} className="border-b-2 border-black">
            <div
              className={`flex justify-between items-center px-6 py-5 cursor-pointer ${
                selected === i ? 'bg-[#E49800]' : ''
              }`}
              onClick={() => toggleClick(i)}
            >
              <h2 className="text-lg font-medium">{proker.title}</h2>
              <img
                src={selected === i ? arrow_up : arrow_down}
                alt="arrow"
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-100 ${
                selected === i ? 'max-h-[999px] py-5 px-6' : 'max-h-0'
              }`}
            >
              <p className="text-base font-medium text-left">{proker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

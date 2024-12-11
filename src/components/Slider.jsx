import React, { useEffect, useRef, useState } from 'react';
import { dataSlider } from '../../assets/dataSlider.js';

export const Slider = () => {
  const listRef = useRef(); // Referencia al contenedor de la lista
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false); // Nueva bandera

  // Controla el scroll automático al cambiar de imagen
  useEffect(() => {
    if (isUserInteracting) return; // Evita el scroll automático si el usuario está interactuando

    const listNode = listRef.current;
    if (listNode) {
      const imgNode = listNode.querySelectorAll('li > img')[currentIndex];
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex, isUserInteracting]);

  // Activa el cambio automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((curr) => (curr === dataSlider.length - 1 ? 0 : curr + 1));
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const scrollToImage = (direction) => {
    setIsUserInteracting(true); // Marca que el usuario está interactuando
    if (direction === 'prev') {
      setCurrentIndex((curr) => (curr === 0 ? 0 : curr - 1));
    } else {
      setCurrentIndex((curr) => (curr === dataSlider.length - 1 ? curr : curr + 1));
    }
  };

  const goToSlide = (slideIndex) => {
    setIsUserInteracting(true); // Marca que el usuario está interactuando
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[300px] m-auto md:h-[350px] lg:h-[400px] p-2">
      <div className="relative h-full flex-col">
        <div
          className="absolute top-[50%] left-0 pl-3 text-[50px] font-bold text-black z-[1] cursor-pointer"
          onClick={() => scrollToImage('prev')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div
          className="absolute top-[50%] right-0 pr-3 text-[50px] font-bold text-black z-[1] cursor-pointer"
          onClick={() => scrollToImage('next')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        <div className="w-full h-full rounded-[20px] border border-[#eee] overflow-hidden">
          <ul ref={listRef} className="list-none whitespace-nowrap transition-transform duration-500 ease-in-out">
            {dataSlider.map((item) => (
              <li key={item.id} className="inline-block w-full h-full">
                <img
                  className="w-full h-275px aspect-[16/11] object-fill sm:h-[285px] sm:aspect-square md:h-[335px] lg:h-[385px]"
                  src={item.image}
                  alt={`Slide ${item.id}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center p-2">
          {dataSlider.map((_, idx) => (
            <div
              key={idx}
              className={`mt-[8px] mr-[3px] cursor-pointer text-[12px] text-center ${
                idx === currentIndex ? 'bg-[#ccc] w-4 h-4 rounded-[50%]' : ''
              }`}
              onClick={() => goToSlide(idx)}
            >
              &#9865;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

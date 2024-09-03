import React, { useEffect, useRef, useState } from "react";
import { dataSlider } from "../../assets/dataSlider.js";
import { products } from "../../assets/products.js";
import CardProduct from "./CardProduct.astro";

export const SliderProducts = () => {
    const listRef = useRef(); //para que quiere usa useref en esta funcion?
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
            behavior: "smooth",
            });
        }
    }, [currentIndex]);

    /* useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex(curr => (curr === dataSlider.length - 1 ? 0 : curr + 1));
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []); */

    const scrollToImage = (direction) => {
        if (direction === "prev") {
        setCurrentIndex((curr) => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr - 1;
        });
        } else {
        const isLastSlide = currentIndex === products.length - 1;
        if (!isLastSlide) {
            setCurrentIndex((curr) => curr + 1);
        }
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="w-full h-[300px] m-auto md:h-[350px] lg:h-[400px] p-2">
        {" "}
        {/* main-container */}
        <div className=" relative h-full flex-col">
            {/* slider-container */}

            <div
            className="absolute top-[50%] left-0 pl-3 text-[50px] font-bold text-black z-[1] cursor-pointer"
            onClick={() => scrollToImage("prev")}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
                />
            </svg>
            </div>
            <div
            className="absolute top-[50%] right-0 pr-3 text-[50px] font-bold text-black z-[1] cursor-pointer"
            onClick={() => scrollToImage("next")}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
            </svg>
            </div>

            <div className="w-full h-full rounded-[20px] border border-[#eee] overflow-hidden">
            <ul
                ref={listRef}
                className="list-none whitespace-nowrap transition-transform duration-500 ease-in-out"
            >
                {products.map((prod) => {
                    return (
                        <div class="w-full h-full p-3 border rounded-xl bg-gradient-to-r from-[#62a56d] to-[#bdddbf]">

                            <div class="w-full h-[270px] aspect-square p-4 ">
                                <img class=" object-scale-down w-full h-full rounded-md" src={prod.prodImg3 || null} alt=""/>
                            </div>

                            <div class="p-2 border-t-2 border-[#62a56d]">
                                <h3 class=" font-bold flex justify-center text-lg">
                                    {prod.prodName}
                                </h3>
                                <p class="flex justify-center text-base items-center">
                                    {prod.prodDescription}
                                </p>
                                <p class="flex justify-center text-base font-extrabold text-[#41884f] items-center"> 
                                    Valor = {prod.prodPrecio}
                                </p>
                            </div>

                            <div class=" flex justify-center w-full items-center">
                                <a class="border border-[#41884f] rounded-lg text-[#41884f] w-24 h-8 flex justify-center items-center hover:bg-[#265632] hover:text-white" href=''>Mas Info</a>
                            </div>

                        </div>
                    );
                })}
            </ul>
            </div>

            <div className="flex justify-center p-2">
            {/* dots-container */}
            {products.map((_, idx) => (
                <div
                key={idx}
                className={`mt-[8px] mr-[3px] cursor-pointer text-[12px] text-center ${
                    idx === currentIndex ? "bg-[#ccc] w-4 h-4 rounded-[50%]" : ""
                }`} /* dot-container-item / active*/
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

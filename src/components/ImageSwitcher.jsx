import React, { useState } from 'react';

const ImageSwitcher = ({ prod }) => {
    const defaultImage = '/img/camara-fotografica.png'; // Imagen predeterminada

    // Función para obtener una imagen válida
    const getValidImage = (...images) => {
        return images.find(image => image && image !== defaultImage) || defaultImage;
    };

    // Verificar y agregar propiedades faltantes con un valor predeterminado
    const updatedProd = {
        ...prod,
        prodImg1: prod?.prodImg1 || defaultImage,
        prodImg2: prod?.prodImg2 || defaultImage,
        prodImg3: prod?.prodImg3 || defaultImage,
        prodImg4: prod?.prodImg4 || defaultImage,
    };

    if (!updatedProd.prodImg2 || updatedProd.prodImg2 === defaultImage) {
        updatedProd.prodImg2 = updatedProd.prodImg1;
    }

    if (!updatedProd.prodImg3 || updatedProd.prodImg3 === defaultImage) {
        if(updatedProd.prodImg1 && updatedProd.prodImg2 === updatedProd.prodImg1){
            updatedProd.prodImg3 = updatedProd.prodImg1;
        }else if(updatedProd.prodImg1 && updatedProd.prodImg2 !== updatedProd.prodImg1 || updatedProd.prodImg3 === defaultImage){
            updatedProd.prodImg3 = updatedProd.prodImg1;
        }        
    }

    if (!updatedProd.prodImg4 || updatedProd.prodImg4 === defaultImage) {
        if(updatedProd.prodImg3 === updatedProd.prodImg1){
            updatedProd.prodImg4 = updatedProd.prodImg2;
        }else if(updatedProd.prodImg2 === updatedProd.prodImg1 && updatedProd.prodImg3 === updatedProd.prodImg1){
            updatedProd.prodImg4 = updatedProd.prodImg1;
        }else if(updatedProd.prodImg2 !== updatedProd.prodImg1 && updatedProd.prodImg3 === updatedProd.prodImg1){
            updatedProd.prodImg4 = updatedProd.prodImg2;
        }else{
            updatedProd.prodImg4 = updatedProd.prodImg1;
        }        
    }

    // Reemplazar las propiedades prodImg que sean iguales a defaultImage
    const finalProd = {
        ...updatedProd,
        prodImg1: getValidImage(updatedProd.prodImg1, updatedProd.prodImg2, updatedProd.prodImg3, updatedProd.prodImg4),
        prodImg2: getValidImage(updatedProd.prodImg2, updatedProd.prodImg3, updatedProd.prodImg4),
        prodImg3: getValidImage(updatedProd.prodImg3, updatedProd.prodImg4),
        prodImg4: getValidImage(updatedProd.prodImg4),
    };

    const [mainImage, setMainImage] = useState(finalProd?.prodImg1 || '/img/camara-fotografica.png');

    const handleImageClick = (src) => {
        setMainImage(src);
    };

    return (
        <picture className=" justify-center md:flex items-center gap-2 w-full h-auto p-2 md:justify-center md:gap-3">
            <div className="hidden md:flex md:flex-col gap-2 p-1">
                <img
                    className="sm:w-[120px] h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white"
                    src={finalProd.prodImg1}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg1)}
                />
                <img
                    className="sm:w-[120px] h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white"
                    src={finalProd.prodImg2}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg2)}
                />
                <img
                    className="sm:w-[120px] h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white"
                    src={finalProd.prodImg3}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg3)}
                />
                <img
                    className="sm:w-[120px] h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white"
                    src={finalProd.prodImg4}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg4)}
                />
            </div>
            <img
                className="w-full h-auto overflow-hidden sm:w-[90%] md:w-[90%] md:h-[500px] md:max-w-[500px] border border-[#40894e] rounded-lg bg-white aspect-square object-contain"
                src={mainImage}
                id="imgPrincipal"
            />
            <div className="flex justify-between gap-2 p-1 w-full md:hidden ">
                <img
                    className="w-[20%] h-[auto] max-h-28 md:w-[120px] md:h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white aspect-square object-contain"
                    src={finalProd.prodImg1}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg1)}
                />
                <img
                    className="w-[20%] h-[auto] max-h-28 md:w-[120px] md:h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white aspect-square object-contain"
                    src={finalProd.prodImg2}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg2)}
                />
                <img
                    className="w-[20%] h-[auto] max-h-28 md:w-[120px] md:h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white aspect-square object-contain"
                    src={finalProd.prodImg3}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg3)}
                />
                <img
                    className="w-[20%] h-[auto] max-h-28 md:w-[120px] md:h-[120px] p-1 cursor-pointer border border-[#40894e] rounded-lg bg-white aspect-square object-contain"
                    src={finalProd.prodImg4}
                    id="imgSecondary"
                    onClick={() => handleImageClick(finalProd.prodImg4)}
                />
            </div>
        </picture>
    );
};

export default ImageSwitcher;
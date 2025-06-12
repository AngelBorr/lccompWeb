import React, { useEffect, useState } from 'react'
import { products } from '../../assets/products'

const PcArmadasList = () => {
  const sortedProducts = products.sort((a, b) => {
    if (a.prodImg1 && !b.prodImg1) {
      return -1
    } else if (!a.prodImg1 && b.prodImg1) {
      return 1
    } else {
      return 0
    }
  })

  const [filteredProducts, setFilteredProducts] = useState(sortedProducts)
  const [selectedBrand, setSelectedBrand] = useState('todos')
  const [selectedType, setSelectedType] = useState('Oficina')

  useEffect(() => {
    handleFilter()
  }, [selectedBrand, selectedType])

  const handleFilter = () => {
    let filtered = products

    if (selectedBrand !== 'todos' && selectedType !== 'todos') {
      filtered = products.filter(
        (prod) => prod.prodMarca === selectedBrand && prod.prodType === selectedType
      )
    } else if (selectedBrand !== 'todos') {
      filtered = products.filter((prod) => prod.prodMarca === selectedBrand)
    } else if (selectedType !== 'todos') {
      filtered = products.filter((prod) => prod.prodCategoria === selectedType)
    }

    filtered.sort((a, b) => {
      if (a.prodImg1 && !b.prodImg1) {
        return -1
      } else if (!a.prodImg1 && b.prodImg1) {
        return 1
      } else {
        return 0
      }
    })

    setFilteredProducts(filtered)
  }

  const handleAllProducts = () => {
    setFilteredProducts(products)
    setSelectedBrand('todos')
    setSelectedType('todos')
  }

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value)
  }

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }

  return (
    <>
      <div className='flex justify-center items-center border-[#62a56d] border-[1px] p-2 rounded-lg w-full h-auto gap-2 text-[#54ad99]'>
        <button
          className='p-2 w-[25%] text-[10px] md:text-sm lg:text-base flex justify-center bg-white border-[1px] border-[#d7f0e9] hover:bg-[#d7f0e9] rounded'
          id='allProduct'
          onClick={handleAllProducts}
        >
          TODOS
        </button>
        <select
          name='marcas'
          className='p-2 w-[25%] text-[10px] md:text-sm lg:text-base flex justify-center bg-white border-[1px] border-[#d7f0e9] hover:bg-[#d7f0e9] rounded'
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value='todos'>MARCAS</option>
          <option value='amd'>AMD</option>
          <option value='intel'>INTEL</option>
          <option value='msi'>MSI</option>
          <option value='hiksemi'>HIKSEMI</option>
          <option value='gigabyte'>GIGABYTE</option>
          <option value='kingstone'>KINGSTONE</option>
          <option value='tp-link'>TP-LINK</option>
          <option value='lg'>LG</option>
          <option value='philips'>PHILIPS</option>
          <option value='viewsonic'>VIEWSONIC</option>
          <option value='dahua'>DAHUA</option>
          <option value='marshall'>MARSHALL</option>
          <option value='genius'>GENIUS</option>
          <option value='logitech'>LOGITECH</option>
        </select>
        <select
          name='type'
          className='p-2 w-[25%] text-[10px] md:text-sm lg:text-base flex justify-center bg-white border-[1px] border-[#d7f0e9] hover:bg-[#d7f0e9] rounded'
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value='todos'>PRODUCTO</option>
          <option value='MicroProcesador'>MICROPROCESADOR</option>
          <option value='Memorias'>MEMORIAS RAM</option>
          <option value='MemoriasNotebook'>MEMORIAS NOTEBOOK</option>
          <option value='Motherboards'>MOTHERBOARDS</option>
          <option value='DiscoSSD'>DISCOSSD</option>
          <option value='DiscoHDD'>DISCOHDD</option>
          <option value='PlacaVideo'>PLACA VIDEO</option>
          <option value='Conectividad'>CONECTIVIDAD</option>
          <option value='Monitores'>MONITORES</option>
          <option value='impresoras'>IMPRESORAS</option>
          <option value='gabinetes'>GABINETES</option>
          <option value='fuentes'>FUENTES</option>
          <option value='seguridad'>SEGURIDAD</option>
          <option value='notebook'>NOTEBOOK</option>
          <option value='teclados'>TECLADOS</option>
          <option value='mouse'>MOUSE</option>
          <option value='sonido'>SONIDO</option>
          <option value='cooler'>COOLER</option>
          <option value='puertos'>PUERTOS</option>
          <option value='adaptadores'>ADAPTADORES</option>
          <option value='estabilizadores'>ESTABILIZADORES</option>
          <option value='accesorios'>ACCESORIOS</option>
        </select>
        <select
          name='type'
          className='p-2 w-[25%] text-[10px] md:text-sm lg:text-base flex justify-center bg-white border-[1px] border-[#d7f0e9] hover:bg-[#d7f0e9] rounded'
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value='todos'>PC ARMADAS</option>
          <option value='Oficina'>PC OFICINA/HOGAR</option>
          <option value='Gamer'>PC GAMER</option>
        </select>
        <a
          className='p-2 w-[25%] text-[9px] md:text-sm lg:text-base truncate flex justify-center bg-white border-[1px] border-[#d7f0e9] hover:bg-[#d7f0e9] rounded cursor-pointer'
          id='viewPdf'
          href='/viewPdf'
          target=''
        >
          LISTA COMPLETA
        </a>
      </div>
      <main className='w-full h-auto gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 xl:grid-cols-5 border-[2px] border-[#78b081] rounded-lg p-2'>
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className='w-full h-full p-3 border rounded-xl bg-gradient-to-r from-[#62a56d] to-[#bdddbf]'
          >
            <div className='w-full h-[270px] aspect-square p-4 bg-[#ddeedd] rounded-lg'>
              <img
                className='object-scale-down w-full h-full rounded-md aspect-square '
                src={prod.prodImg1 || '/img/camara-fotografica.png'}
                alt={prod.prodName}
                loading='lazy'
              />
            </div>
            <div className='p-2 border-t-2 border-[#62a56d]'>
              <h3 className='font-bold flex justify-center text-lg'>{prod.prodName}</h3>
              <p className='flex justify-center text-base items-center'>{prod.prodDescription}</p>
              <p className='flex justify-center text-base font-extrabold text-[#41884f] items-center'>
                Valor = {prod.prodPrecio}
              </p>
            </div>
            <div className='flex justify-center w-full items-center'>
              <a
                className='border border-[#41884f] rounded-lg text-[#41884f] w-24 h-8 flex justify-center items-center hover:bg-[#265632] hover:text-white'
                href={`/${prod.id}.productDetall`}
              >
                Más Info
              </a>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default PcArmadasList

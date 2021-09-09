import React, { Suspense, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {

  //esta mrd no está funcionando para obtener el alto, hay que arreglarlo 
  const [heightWindow, setheightWindow] = useState(720);
  //aquí en lugar de usar el window para obtener el alto de la pantalla podriamos usar las medidas vh de css pero no sé cómo comparar su valor con el minimo necesario
  useEffect(() => {
    var height = window.innerHeight;
    if(height<560){
      setheightWindow(560)
    }else{
      setheightWindow(height);
    }
  }, []);

  return (
    <header id="header" style={{height: heightWindow}} className="header">
      <div className="header-content">

          <div>
            {/*VECTOR FONDO 1 CUADRO */}
            <svg className="vectorFondo1Cuadro" viewBox="0 0 423 423" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="100%" y1="0%" x2="4.48%" y2="0%" id="linearGradient-1">
                        <stop stop-color="#5C54DB" offset="0%"></stop>
                        <stop stop-color="#6A82E7" offset="100%"></stop>
                    </linearGradient>
                    <filter x="-9.3%" y="-6.7%" width="118.7%" height="118.7%" filterUnits="objectBoundingBox" id="filter-3">
                        <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <rect id="path-2" x="63" y="504" width="300" height="300" rx="40"></rect>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity=".9">
                    <g id="Desktop-HD" transform="translate(-39 -531)">
                        <g id="Hero" transform="translate(43 83)">
                            <g id="Rectangle-6" transform="rotate(45 213 654)">
                                <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-2"></use>
                                <use fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>            
          </div>


          <div className="container d-flex justify-content-end">
            <div className=" position-absolute">

              {/*VECTOR FONDO 2 CUADROS */}
              <svg 
                className="vectorFondo2Cuadros"
                viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                        <stop stop-color="#E614F2" offset="0%"></stop>
                        <stop stop-color="#FC3832" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                        <stop stop-color="#657DE9" offset="0%"></stop>
                        <stop stop-color="#1C0FD7" offset="100%"></stop>
                    </linearGradient>
                    <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox" id="a">
                        <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox" id="d">
                        <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <path d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z" id="b"></path>
                    <path d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z" id="e"></path>
                </defs>
                <g fill="none" fill-rule="evenodd" opacity=".9">
                    <g transform="rotate(65 416.452 409.167)">
                        <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
                        <use fill="url(#c)" xlinkHref="#b"></use>
                    </g>
                    <g transform="rotate(29 421.929 414.496)">
                        <use fill="#000" filter="url(#d)" xlinkHref="#e"></use>
                        <use fill="url(#f)" xlinkHref="#e"></use>
                    </g>
                </g>
              </svg>

            </div>
          </div>
         
        <div className="container contElements">
          <div className="row h-100 ourRowStyles">


            <div className="col-lg-6 headerCol1">
              <div className="text-container">
                <h1 className="">
                  Agencia de Marketing Digital
                </h1>
                <p className="p-large">
                  Nos encargamos de digitalizar tu marca llevándola al siguiente
                  nivel, conectándote con tus clientes y acompañándote en el
                  crecimiento de tu empresa.
                </p>
                
                <div className="contBotons">
                  <a className=" text-decoration-none" href="#your-link">
                    <button className="btnPrincipalHeader btnP1">
                      Servicios
                    </button>
                  </a>
                  <a className="" href="#your-link">
                    <button className="btnPrincipalHeader">
                     Contacto
                    </button>
                  </a>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 d-flex headerCol2">
              <div className="image-container">
                <img
                  src="/macbook-mockup.png"
                  alt="alternative"
                  loading="lazy"
                />
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}

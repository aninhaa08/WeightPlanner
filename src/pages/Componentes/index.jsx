import './style.scss'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import arduino from '../../assets/Arduino.png'
import protoboard from '../../assets/protoboard.png'
import modulo from '../../assets/modConv_img.png'
import botao from '../../assets/botao.png'
import balanca from '../../assets/balancaImg.png'
import jumper from '../../assets/jumpers.png'
import img1 from '../../assets/img1Container.png'
import img2 from '../../assets/img2Container.png'
import img3 from '../../assets/img3Container.png'
import img4 from '../../assets/img4Container.png'
import img5 from '../../assets/img5Container.png'
import img6 from '../../assets/img6Container.png'
import Rodape from '../../components/Rodape'

export function Componentes () {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
    })

    
    // const [thumbnailRef] = useKeenSlider(
    // {
    //     initial: 0,
    //     slides: {
    //     perView: 4,
    //     spacing: 10,
    //     },
    // },
    // [ThumbnailPlugin(instanceRef)]
    // )

    return (
        <div className='componentesConteudo'>
            <h1 id='tituloComponentes'>Componentes e valores</h1>

            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <img src={arduino} alt="" />
                        <div className="elementosSlider1">
                            <p id='textoSlider1'>Arduino Leonardo</p>
                            <p className='precoSlider'>R$80</p>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <img src={protoboard} alt="" />
                        <div className="elementosSlider2">
                            <p id="textoSlider2">Protoboard</p>
                            <p className="precoSlider">R$10</p>
                        </div>
                    </div>
                    //////TESTE /////////////////
                    <div className="keen-slider__slide number-slide3">
                        <img src={modulo} alt="" />
                        <div className="elementosSlider3">
                            <p id="textoSlider3">Módulo Conversor Amplificador HX711</p>
                            <p className="precoSlider">R$20</p>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <img src={botao} alt="" />
                        <div className="elementosSlider4">
                            <div className="infos">
                                <p id="textoSlider4">Botões</p>
                                <p id='infoSlider4'>(cada)</p>
                            </div>
                            <p className="precoSlider">R$2</p>
                            
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide5">
                        <img src={balanca} alt="" />
                        <div className="elementosSlider5">
                            <p id="textoSlider5">Balança MDF</p>
                            <p className="precoSlider">R$60</p>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide6">
                        <img src={jumper} alt="" />
                        <div className="elementosSlider6">
                            <p id="textoSlider6">Jumpers</p>
                            <p className="precoSlider">R$20</p>
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                <>
                    <Arrow
                    left
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    />

                    <Arrow
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                    />
                </>
                )}

                
            </div>
            
            {/* <div className="caixaCarrossel">
                <div className="slider1">
                    <img src={arduino} alt="" />
                    <div className="elementosSlider1">
                        <p id='textoSlider1'>Arduino Leonardo</p>
                        <p id='precoSlider1'>R$80</p>
                    </div>
                </div>
                <div className="slider2">
                    <img src={protoboard} alt="" />
                    <div className="elementosSlider2">
                        <p id="textoSlider2">Protoboard</p>
                        <p id="precoSlider2">R$10</p>
                    </div>
                </div>
                <div className="slider3">
                    <img src={modulo} alt="" />
                    <div className="elementosSlider3">
                        <p id="textoSlider3">Módulo Conversor Amplificador HX711</p>
                        <p id="precoSlider3">R$20</p>
                    </div>
                </div>
                <div className="slider4">
                    <img src={botao} alt="" />
                    <div className="elementosSlider4">
                        <p id="textoSlider4">Botões</p>
                        <p id="precoSlider4">R$2</p>
                        <p id='infoSlider4'>cada</p>
                    </div>
                </div>
                <div className="slider5">
                    <img src={balanca} alt="" />
                    <div className="elementosSlider5">
                        <p id="textoSlider5">Balança MDF</p>
                        <p id="precoSlider5">R$60</p>
                    </div>
                </div>
                <div className="slider6">
                    <img src={jumper} alt="" />
                    <div className="elementosSlider6">
                        <p id="textoSlider6">Jumpers</p>
                        <p id="precoSlider6">R$20</p>
                    </div>
                </div>
            </div>  */}

            <div className="caixaElementos">
                <div className="componentesContainer">
                    <img src={img1} alt="" id="img1" />
                    <img src={img2} alt="" id="img2" />
                    <img src={img3} alt="" id="img3" />
                    <img src={img4} alt="" id="img4" />
                    <img src={img5} alt="" id="img5" />
                    <img src={img6} alt="" id="img6" />

                    {/* <div ref={thumbnailRef} className="keen-slider thumbnail">
                        <div className="keen-slider__slide number-slide1">
                            <img src={img1} alt="" id="img1" />
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <img src={img2} alt="" id="img2" />
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <img src={img3} alt="" id="img3" />
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            <img src={img4} alt="" id="img4" />
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            <img src={img5} alt="" id="img5" />
                        </div>
                        <div className="keen-slider__slide number-slide6">
                            <img src={img6} alt="" id="img6" />
                        </div>
                    </div> */}
                </div>
            </div>
            <Rodape />
        </div>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
}

// function ThumbnailPlugin(mainRef) {
//     return (slider) => {
//       function removeActive() {
//         slider.slides.forEach((slide) => {
//           slide.classList.remove("active")
//         })
//       }
//       function addActive(idx) {
//         slider.slides[idx].classList.add("active")
//       }
  
//       function addClickEvents() {
//         slider.slides.forEach((slide, idx) => {
//           slide.addEventListener("click", () => {
//             if (mainRef.current) mainRef.current.moveToIdx(idx)
//           })
//         })
//       }
  
//       slider.on("created", () => {
//         if (!mainRef.current) return
//         addActive(slider.track.details.rel)
//         addClickEvents()
//         mainRef.current.on("animationStarted", (main) => {
//           removeActive()
//           const next = main.animator.targetIdx || 0
//           addActive(main.track.absToRel(next))
//           slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
//         })
//       })
//     }
//   }
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
import protoboard2 from '../../assets/protoboard400.png'
import lcd from '../../assets/lcd.png'
import img1 from '../../assets/img1Container.png'
import img2 from '../../assets/img2Container.png'
import img3 from '../../assets/img3Container.png'
import img4 from '../../assets/img4Container.png'
import img5 from '../../assets/img5Container.png'
import img6 from '../../assets/img6Container.png'
import img7 from '../../assets/img7Container.png'
import img8 from '../../assets/img8Container.png'
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

    const [sliderRef2, instanceRef2] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
    })

    
    const [thumbnailRef] = useKeenSlider(
    {
        initial: 0,
        slides: {
        perView: window.innerWidth >= 1200 ? 5 : 2,
        spacing: 20,
        },
    },
    [ThumbnailPlugin(instanceRef)]
    )

    const [thumbnailRef2] = useKeenSlider(
    {
        initial: 0,
        slides: {
        perView: window.innerWidth >= 1440 ? 5 : 2,
        spacing: 10,
        },
    },
    [ThumbnailPlugin(instanceRef2)]
    )

    return (
        <div className='componentesConteudo'>
            <div className="content">
                <h1 id='tituloComponentes'>Componentes e valores</h1>
                <div className="espaco"></div>
                <div className="carrosselWeb">
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider" style={{ width: '56rem', marginInline: 'auto', border: '1px solid #390E4D', borderRadius: '1.25rem'}}>
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
                                    <p id="textoSlider2">Protoboard 170 pontos</p>
                                    <p className="precoSlider">R$10</p>
                                </div>
                            </div>
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
                                <img src={protoboard2} alt="" />
                                <div className="elementosSlider5">
                                    <p id="textoSlider5">Protoboard 400 pontos</p>
                                    <p className="precoSlider">R$10</p>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide6">
                                <img src={balanca} alt="" />
                                <div className="elementosSlider6">
                                    <p id="textoSlider6">Balança MDF</p>
                                    <p className="precoSlider">R$60</p>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide7">
                                <img src={jumper} alt="" />
                                <div className="elementosSlider7">
                                    <p id="textoSlider7">Jumpers</p>
                                    <p className="precoSlider">R$20</p>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide8">
                                <img src={lcd} alt="" />
                                <div className="elementosSlider8">
                                    <p id="textoSlider8">Display LCD 16x2 com módulo I2C</p>
                                    <p className="precoSlider">R$30</p>
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
                        {loaded && instanceRef.current && (
                            <div className="dots">
                                {[
                                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    ></button>
                                    )
                                })}
                            </div>
                        )}

                    </div>

                    <div className="caixaElementos">
                    <div className="componentesContainer">
                            <div ref={thumbnailRef} className="keen-slider thumbnail">
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
                                <div className="keen-slider__slide number-slide7">
                                    <img src={img7} alt="" id="img7" />
                                </div>
                                <div className="keen-slider__slide number-slide8">
                                    <img src={img8} alt="" id="img8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carrosselMobile">
                    <div className="navigation-wrapper">
                        <div ref={sliderRef2} className="keen-slider">
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
                                    <p id="textoSlider2">Protoboard 170 pontos</p>
                                    <p className="precoSlider">R$10</p>
                                </div>
                            </div>
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
                                <img src={protoboard2} alt="" />
                                <div className="elementosSlider5">
                                    <p id="textoSlider5">Protoboard 400 pontos</p>
                                    <p className="precoSlider">R$10</p>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide6">
                                <img src={balanca} alt="" />
                                <div className="elementosSlider6">
                                    <p id="textoSlider6">Balança MDF</p>
                                    <p className="precoSlider">R$60</p>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide7">
                                <img src={jumper} alt="" />
                                <div className="elementosSlider7">
                                    <p id="textoSlider7">Jumpers</p>
                                    <p className="precoSlider">R$20</p>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide8">
                                <img src={lcd} alt="" />
                                <div className="elementosSlider8">
                                    <p id="textoSlider8">Display LCD 16x2 com módulo I2C</p>
                                    <p className="precoSlider">R$30</p>
                                </div>
                            </div>
                        </div>
                        {loaded && instanceRef2.current && (
                        <>
                            <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef2.current?.prev()
                            }
                            disabled={currentSlide === 0}
                            />

                            <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef2.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef2.current.track.details.slides.length - 1
                            }
                            />
                        </>
                        )}
                        {loaded && instanceRef2.current && (
                            <div className="dots">
                                {[
                                    ...Array(instanceRef2.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                        instanceRef2.current?.moveToIdx(idx)
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    ></button>
                                    )
                                })}
                            </div>
                        )}

                    </div>

                    <div className="caixaElementos">
                    <div className="componentesContainer">
                            <div ref={thumbnailRef2} className="keen-slider thumbnail">
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
                                <div className="keen-slider__slide number-slide7">
                                    <img src={img7} alt="" id="img7" />
                                </div>
                                <div className="keen-slider__slide number-slide8">
                                    <img src={img8} alt="" id="img8" />
                                </div>
                            </div>
                        </div>
                    </div>
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

function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active")
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }
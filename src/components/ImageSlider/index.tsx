import React, { useState, useRef, useEffect, useCallback } from "react";
import "./ImageSlider.scss";

// export interface Slide {
//   title: string;
//   url: string;
// }
interface ImageSliderProps {
  slides: string[];
  parentWidth: number;
}

const ImageSlider = ({ slides, parentWidth }: ImageSliderProps) => {
  const timerRef: React.MutableRefObject<number | null> = useRef(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const goToNext = useCallback((): void => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3000);
    return () => clearTimeout(timerRef.current as number);
  }, [goToNext]);
  if (slides.length === 0) {
    return (
      <div>
        <p>No slides available</p>
      </div>
    );
  }
  const goToPrevious = (): void => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const getSlideStylesWithBackground = (index: number) => ({
    height: "138px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[index]})`,
    width: `${parentWidth}px`,
  });
  const getSlidesStylesContainerWithWidth = () => ({
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });
  const renderSlides = () => {
    return slides.map((_, index: number) => (
      <div key={index} style={getSlideStylesWithBackground(index)} />
    ));
  };
  return (
    <div className="slider">
      <div className="slider-shadow" />
      <span
        tabIndex={0}
        className="left-arrow"
        onClick={goToPrevious}
        onKeyDown={goToPrevious}
      >
        <i className="fa-solid fa-chevron-left fa-md"></i>
      </span>
      <span
        tabIndex={0}
        className="right-arrow"
        onClick={goToNext}
        onKeyDown={goToNext}
      >
        <i className="fa-solid fa-chevron-right fa-md"></i>
      </span>
      <div className="slider-container-overflow">
        <div style={getSlidesStylesContainerWithWidth()}>{renderSlides()}</div>
      </div>
    </div>
  );
};
export default ImageSlider;

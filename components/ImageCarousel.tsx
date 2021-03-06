import styled from "styled-components";
import { theme } from "../config/theme";
import Flickity from "react-flickity-component";
import { ReactNode } from "react";

const CarouselFigcaption = styled.figcaption`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 0.8rem;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0.4rem;
    font-size: 0.8rem;
  }
`;

const CarouselFigure = styled.figure`
  border-radius: 8px;
  overflow: hidden;
  width: ${(props: { customWidth: number }) =>
    props.customWidth ? props.customWidth : "50"}%;
  position: relative;
  margin: 0 2rem;
  height: ${(props: { customWidth: number }) =>
    props.customWidth ? "none" : "500px"};
  display: block;

  @media (max-width: ${theme.breakpoints.desktop}px) {
    width: ${(props: { customWidth: number }) =>
      props.customWidth ? props.customWidth : "70"}%;
    margin: 0 1.2rem;
    height: ${(props: { customWidth: number }) =>
      props.customWidth ? "none" : "400px"};
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: ${(props: { customWidth: number }) =>
      props.customWidth ? props.customWidth : "80"}%;
    margin: 0 0.8rem;
    height: ${(props: { customWidth: number }) =>
      props.customWidth ? "none" : "300px"};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    width: ${(props: { customWidth: number }) =>
      props.customWidth ? props.customWidth : "80"}%;
    margin: 0 0.4rem;
    height: ${(props: { customWidth: number }) =>
      props.customWidth ? "none" : "200px"};
  }
`;

const ImageCarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  color: white;
  display: block;
  padding: 2rem 0rem;

  a {
    color: white;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0;
  }
`;

const flickityOptions = {
  wrapAround: true,
  prevNextButtons: false,
};

interface CarouselImage {
  src: string;
  desc?: ReactNode;
  alt?: string;
}

interface Props {
  imageArr: CarouselImage[];
  width: number;
}

const ImageCarousel = ({ imageArr, width }: Props) => {
  if (imageArr?.length > 0) {
    return (
      <ImageCarouselWrapper>
        <div style={{ width: "100%", margin: "2rem 0" }}>
          <Flickity
            elementType="div"
            options={flickityOptions} // takes flickity options {}
            reloadOnUpdate // default false
            // static
          >
            {imageArr.map((image) => {
              return (
                <CarouselFigure key={image.src} customWidth={width}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {image.desc && (
                    <CarouselFigcaption>{image.desc}</CarouselFigcaption>
                  )}
                </CarouselFigure>
              );
            })}
          </Flickity>
        </div>
      </ImageCarouselWrapper>
    );
  } else {
    return null;
  }
};

export default ImageCarousel;

import * as React from 'react';
import styled from 'styles/styled-components';

const NoImageWrapper = styled.div`
  display: flex;
  /* default image height */
  height: 450px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.text};
  > h4 {
    margin: auto;
    color: ${props => props.theme.text};
  }
`;

const MovieImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const NoImage = () => (
  <NoImageWrapper>
    <h4>No Image Found</h4>
  </NoImageWrapper>
);

interface Props {
  src?: string;
  alt?: string;
}
const MovieImage = ({ src }: Props) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(
    () => src || null,
  );

  const onError = () => {
    setImageSrc(null);
  };

  return imageSrc ? (
    <MovieImg src={imageSrc} onError={onError} alt="Movie poster" />
  ) : (
    <NoImage />
  );
};

export default MovieImage;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import propTypes from 'prop-types';

const LazyLoadImage = ({
  src,
  container,
  loader,
  onLoad,
  ...rest
}) => {
  const [ref, inView] = useInView({ root: container || document, threshold: 0 });
  const [img, setImg] = useState('');

  useEffect(() => { setImg(''); }, [src]);

  useEffect(() => {
    if (src && !img && inView) {
      setImg(src);
    }
  }, [inView, img, src]);

  return !img ? <div ref={ref}>{loader}</div> : <img src={img} alt="" onLoad={onLoad} {...rest} />;
};

LazyLoadImage.propTypes = {
  src: propTypes.string.isRequired,
  container: propTypes.object,
  loader: propTypes.object,
  onLoad: propTypes.func,
};

export default LazyLoadImage;

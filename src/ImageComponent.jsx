import React, { useState } from "react";

class ImageComponentProps {
  src;
  alt = undefined;
}

const ImageComponent = ({ src, alt = "image" }) => {
  const [error, setError] = useState(false);

  return (
    <div>
      {!error ? (
        <img src={src} alt={alt} onError={() => setError(true)} />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
};

export default ImageComponent;

import React from 'react';
import './ThumbnailCard.css'; // CSS dosyasını ekleyin

const ThumbnailCard = ({ thumbnail, onHover, onMouseLeave, dataName }) => {
  return (
    <div
      className="thumbnail-card"
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
      data-name={dataName} // data-name propunu ekleyin
    >
      <img src={thumbnail} alt="Thumbnail" className="thumbnail-image" />
    </div>
  );
};

export default ThumbnailCard;

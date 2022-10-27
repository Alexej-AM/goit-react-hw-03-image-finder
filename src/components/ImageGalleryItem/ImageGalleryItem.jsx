import React from 'react'

export const ImageGalleryItem = ({image, largeImg, name, onClick}) => {
  return (
    <li onClick={() => onClick(largeImg)}>
        <img src={image} alt={name} />
    </li>
  )
}

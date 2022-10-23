import React from 'react'

export const ImageGalleryItem = ({image, largeImg, name}) => {
  return (
    <li>
        <img src={image} alt={name} />
    </li>
  )
}

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'

export const ImageGallery = ({images}) => {
   return (
   <div>
     {images.length > 0 && 
        images.map(({id, webformatURL, largeImageURL, tags }) => {
            return (
                <div>
                       <ImageGalleryItem 
                       key={id}
                       image={webformatURL}
                       largeImg={largeImageURL}
                       name={tags}
                       />
                   </div>
                 )
        })
       
    }
   </div>
   )
}


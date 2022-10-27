import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images, onClick}) => {
   return (
   <div>
     {images.length > 0 && 
        images.map(({id, webformatURL, largeImageURL, tags }) => {
            return (
                
                       <ImageGalleryItem 
                       key={id}
                       image={webformatURL}
                       largeImg={largeImageURL}
                       name={tags}
                       onClick={onClick}
                       > </ImageGalleryItem>
                   
                 )
        })
       
    }
   </div>
   )
}


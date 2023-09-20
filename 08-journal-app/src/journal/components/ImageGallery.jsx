import { ImageList, ImageListItem } from '@mui/material'

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
      {images.map((image, index) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`Image number ${index} of this note`}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

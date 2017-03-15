import React from 'react'
const Artwork=({image,title,optionalImage,size})=><img src={image} alt={title} height={size} width={size} />

Artwork.propTypes={
    image:React.PropTypes.string,
    title:React.PropTypes.string,
    optionalImage:React.PropTypes.string,
    size:React.PropTypes.number
}
export default Artwork
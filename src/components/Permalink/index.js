import React from 'react'
const Permalink=({link,text,title})=><a href={link} title={title}>{text}</a>
Permalink.propTypes={
    link:React.PropTypes.string,
    text:React.PropTypes.string,
    title:React.PropTypes.string
}

export default Permalink;
    
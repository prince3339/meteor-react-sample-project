//Create image detail component
//Import React
import React from 'react';

//Create component
const ImageDetail = (props) => {
    //props.image => this is the image object
    //props.image.title
    return (
        <li>
            <img src={props.image.link} />
            { props.image.title }
        </li>
    );
};

//Export component
export default ImageDetail;
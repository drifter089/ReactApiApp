import { react } from '@babel/types';
import React from 'react';

// const ImageCard=()=>{

// }

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};

        this.imageRef = React.createRef();
    }

    setSpans=()=> {
        const height= this.imageRef.current.clientHeight;
        const spans= Math.ceil(height/20 +1);

        this.setState({spans:spans});   
    };

    componentDidMount(){
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render(){
        const {description, urls}=this.props.image;
        return(
            <div style={{ gridRowEnd:`span ${this.state.spans}` }}>
                <img 
                 ref={this.imageRef}
                 alt={description}
                 src={urls.regular}
                 />
            </div>
        );
    }
}

export default ImageCard;
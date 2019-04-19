/* eslint-disable no-useless-constructor */
import React from 'react'

class Avatar extends React.Component {
    constructor(props) {
        super(props)
    }

    onImgLoad({target:img}) {
        if(img.offsetHeight > img.offsetWidth) img.setAttribute('class', 'portraitImage')
        img.setAttribute('class', 'landscapeImage')
      }

    render() {

        const shape = this.props.shape === "round" ? "50%" : "none"
        const border = this.props.outline ? "1px solid " + this.props.outline : "none"

        const thumbnail = {
            width: this.props.size,
            height: this.props.size,
            borderRadius: shape,
            border: border
        }

        return <div className="thumbnail" style={thumbnail}>
                    <img onLoad={this.onImgLoad} src={this.props.src} alt="" />
                </div>
    }
}

export default Avatar

//  CSS:
//
// .thumbnail {
//     position: relative;
//     overflow: hidden;
//   }
//   .thumbnail img {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     -webkit-transform: translate(-50%,-50%);
//         -ms-transform: translate(-50%,-50%);
//             transform: translate(-50%,-50%);
//   }
//   .thumbnail img.landscapeImage {
//     height: 100%;
//     width: auto;
//   }
//   .thumbnail img.portraitImage {
//     width: 100%;
//     height: auto;
//   }
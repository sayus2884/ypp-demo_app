import React, { Component } from 'react'
import PropTypes from 'prop-types'

const _ = lodash

class ProductCard extends Component {
   render()
   {
      const name = this.props.name
      const description = this.props.description
      const headerImage = this.props.headerImage
      const price = this.props.price
      const handleButton = this.props.handleButton

      return (
         <div className="ibox">
            <div className="ibox-content product-box dark-gray-bg">

               <div className="product-imitation" style={{backgroundImage: this.renderBackgroundImage()}}>
               </div>
               <div className="product-desc fh-150">
                  {this.renderPriceTag()}

                  { _.isString(this.props.handleButton) ? (
                     <a href={handleButton} className="product-name"> {name}</a>
                  ): (
                     <span className="product-name"> {name}</span>
                  )}

                  <div className="small m-t-xs text-light-gray">
                     { description }
                  </div>

                  <div className="small m-t-xs text-light-gray">
                     Serving: { this.renderServing() }
                  </div>

                  <div className="m-t text-righ">

                     { this.renderButton() }
                  </div>
               </div>
            </div>
         </div>
      );
   }

   renderServing(){
      return this.props.serving ? this.props.serving : '1'
   }

   renderBackgroundImage(){
      return this.props.image ? `url(${this.props.image})` : `url("/img/default.png")`
   }

   renderPriceTag()
   {
      const price = this.props.price
      return !price ? '' : (
         <span className="product-price">
            P { price }
         </span>
      )
   }

   renderButton()
   {
      const handleButton = this.props.handleButton
      const buttonName = this.props.buttonName

      if ( _.isString(handleButton) ) {
         return (
            <a href={handleButton} className="btn btn btn-outline btn-primary">{buttonName} <i className="fa fa-angle-right"></i> </a>
         )
      }

      return <button onClick={handleButton} className="btn btn btn-primary">{buttonName} <i className="fa fa-angle-right"></i> </button>
   }
}

ProductCard.propTypes = {
   name: PropTypes.string.isRequired,
   description: PropTypes.string,
   headerImage: PropTypes.string,
   price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   image: PropTypes.string,
   buttonName: PropTypes.string,
   handleButton: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
   ]),
}

export default ProductCard

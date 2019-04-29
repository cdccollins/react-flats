import React, {Component} from 'react'

class Flat extends Component {
  handleClick = () => {
    this.props.getFlat(this.props.flat.lat, this.props.flat.lng)
  }

  render() {
    let imgUrl = this.props.flat.imageUrl

    return (
      <div className="card" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(' + imgUrl +')'}}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;

import React from 'react';

class DrawProduct extends React.PureComponent {
  constructor(props) {
    super(props);

    this.image = React.createRef();

    this.setImage = this.setImage.bind(this);

    this.state = {
      activeImageIndex: 0
    };
  }

  setImage(index) {
    this.setState({activeImageIndex: index})
  }

  render() {
    const { product, stickers } = this.props;

    return (
      <div className="popular-products__item">
        <a href={product.link}
           className="popular-products__image"
           style={{ backgroundImage: 'url("' + product.images[this.state.activeImageIndex] + '")' }}
           ref={this.image}
        >
          <ul className="popular-products__images-list">
            {
              product.images.map((image, index) => {
                const className = (index === this.state.activeImageIndex)? 'is-active': '';
                return (<li key={index} onMouseEnter={()=>this.setImage(index)} className={className}></li>)
              })
            }

          </ul>

          <ul className="popular-products__stickers">
            {stickers.map(sticker => {
              if (product.stickers[sticker.code] !== undefined) {
                return (
                  <li key={sticker.code} className={sticker.code}>{sticker.title}</li>
                )
              }
              return ''
            })}
          </ul>
        </a>

        <a href={product.link} className={'popular-products__name'}>{product.name}</a>

        <div className="popular-products__props">
          <table>
            <tbody>
            {
              product.props.map(item => {
                return (
                  <tr key={item.code}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>

        <div className="popular-products__button">
          <div className="btn btn--secondary-color btn--block">Get product</div>
        </div>
      </div>
    );
  }
}

export default DrawProduct;


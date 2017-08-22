import {h} from 'preact';
import { Link } from 'preact-router';


function ProductThumb(props) {
  let productThumb = null;

  return (
    <div className="ProductThumb relative shadow-1">
      <Link href={props.path} className="link black ProductThumb_container" onMouseEnter={""}>
        <div className="aspect-ratio aspect-ratio--3x4 z-1 overflow-hidden">
          <div ref={(div) => { productThumb = div; }} className="grow aspect-ratio--object cover"
            style={`background:url(${props.imageThumb}) center`}></div>
        </div>
        <div style={Style.productDetails} className="absolute tc bottom-0 bg-white pa2 pa3-l z-3 w-80 center">
          <h4 className="f7 f7-l fw6 mb1 lh-title">{props.title}</h4>
          <span className="f7 ttc primary">lihat details</span>
        </div>
      </Link>
    </div>
  )
}

const Style = {
  productDetails: {
    left: '10%',
  }
}

export default ProductThumb

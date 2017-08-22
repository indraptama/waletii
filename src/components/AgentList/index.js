import {h, Component} from 'preact';
import style from './style';

export default class AgenList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.AgenList}>
        <div className="flex-l items-start ph2 pv2 pv3-l ba b--moon-gray w-100 relative z-2">
          <div className="w-20-l mb3 mb0-l">
            <div className="flex items-center">
              <div className="w2 h2 bg-red br-100 overflow-hidden cover" style={`background:url(${this.props.avatar}) center`}>
                <img src={this.props.avatar} alt="" className="dn"/>
              </div>
              <h4 className="f7 black ttc pl3 truncate">{this.props.name}</h4>
            </div>

          </div>

          <div className="w-40-l f7 ttc pl4-l">
            {this.props.streetAddress}
          </div>
          <div className="w-20-l f7 ttc pl4-l">
            {`${this.props.city} - ${this.props.prov}`}
          </div>
          <div className="w-20-l f7 ttc pl4-l">
            {this.props.contact}
          </div>
          <div className="dn w-10-l f7 ttc pl4-l tr self-center">
            <i className="icon icon-angle-right"></i>
          </div>
        </div>
        <div className="absolute absolute--fill">
          <div className={style.AgenList_bg} />
        </div>
      </div>);
  }
}

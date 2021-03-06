import { h, Component } from 'preact';
import fetch from 'unfetch';
import NewsThumb from '../../components/NewsThumb';
import HeadlineNews from '../../components/HeadlineNews';
import ProductCard from '../../components/ProductCard';
import MessageBox from '../../components/MessageBox';
import OwnerPicture from '../../components/OwnerPicture';
import Carousel from '../../components/Carousel';
import TestiBox from '../../components/TestiBox';
import style from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      about:"",
      news:[],
      headline:{},
      address:"",

    }
  }

  componentWillMount() {
    fetch('assets/data/about.json')
      .then(resp => resp.json())
      .then(respData => {
        this.setState({
          about: respData.about,
          address: respData.office.head,
        })
      })

    fetch('/assets/data/article-s.json')
      .then(resp => resp.json())
      .then(respData => {
        let aView =[]
        const arrayViewer = Object
          .keys(respData)
          .map(key => {
            aView.push(respData[key])
          })
        this.setState({
          news: aView,
          headline: respData["01"],
        })
      })
  }

	render() {
    const LatestNews = this.state.news.slice(0,3).map(key => {
      return (
        <li className="dib fl w-100 mb2 mr3-l">
          <NewsThumb
            title={key.title}
            imageThumb="assets/images/news1-s.jpg"
            postDate={key.date}
            viewer={key.views}
            postLink="post"
           />
        </li>
      )
    })

    const address = this.state.address;

    // PREACT RENDER
		return (
			<div className="{style.HP}">
        <section className="mw8 center pt5 flex">
          <div className="w-two-thirds-l">
            <Carousel Data="assets/data/carousel.json"/>
          </div>
          <div className="w-third-l bg-primary">
          </div>
        </section>


        <section className="pv5 ph3 relative">
          <h2 className="f7 fw6 ttu tc tracked primary mb4 relative z-2">
            <span className="dib pa2 bg-white">Tentang Kami</span>
          </h2>
          <div className="measure-wide center f5 bg-white z-2 relative">
            <p className="serif mb4">{this.state.about}</p>
            <div className="dt">
              <div className="dtc v-mid">
                <img src="assets/images/ava/owner.jpg" alt="" className="w3 br-100"/>
              </div>
              <div className="dtc pl3 v-mid">
                <h4 className="fw6 serif">Drs. Arief Budiman</h4>
              </div>
            </div>
          </div>
          <div className="bl b--primary w1px left-50 absolute top-0 bottom-0 h-100"></div>
        </section>

        <section className="pv5 ph3 bt b--primary relative bg-near-white">
          <h2 className="f7 fw6 ttu tc tracked primary mb4 relative z-2">
            <span className="dib pa2 bg-near-white">Produk Kami</span>
          </h2>
          <div className="mw8 center pv2">
            <div className="overflow-x-scroll overflow-x-visible-l nowrap bg-near-white">
              <div className="dt dt--fixed ml3 ml0-l">
                <div className="dtc w5 w-third-l pb3 pr3">
                  <ProductCard
                    title="Paket Suara Walet Original"
                    path="/produk"
                    image="assets/images/product/suara-1.jpg" />
                </div>
                <div className="dtc w5 w-third-l pb3 pr3">
                  <ProductCard
                    title="Walet Audio System (WAS)"
                    path="/produk"
                    image="assets/images/product/was-3.jpg" />
                </div>
                <div className="dtc w5 w-third-l pb3 pr3">
                  <ProductCard
                    title="Buku Panduan Budidaya Walet"
                    path="/produk"
                    image="assets/images/product/book-solusi.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="bl b--primary w1px left-50 absolute top-0 bottom-0 h-100"></div>
        </section>

        <section className="pv5 ph3 bt b--primary relative">
          <h2 className="f7 fw6 ttu tc tracked primary mb4 relative z-2">
            <span className="dib pa2 bg-white">testimony</span>
          </h2>
          <div className="mw8 center ph3 cf relative z-2">
            <div className="fl dib w-100 w-50-l pa3">
              <TestiBox quote="sangat bermanfaat untuk meningkatkan produksi walet saya." user="Melinda Guess" city="bandung" prov="jawa barat"/>
            </div>
            <div className="fl dib w-100 w-50-l pa3">
              <TestiBox quote="Saya sangat puas dengan pelatihan, tutorial dan respon yang diberikan oleh dunia walet. Jelas, Singkat, Cepat dan Padat." user="Ujang Sinclair" city="bandung" prov="jawa barat"/>
            </div>
          </div>
          <div className="bl b--primary w1px left-50 absolute top-0 bottom-0 h-100"></div>
        </section>

        <section className="pv5 ph3 bt b--primary relative">
          <div className="mw8 center ph3 cf bg-white relative z-2">
            <div className="fl dib w-100 w-two-thirds-l">
              <h3 className="ttu f7 fw6 tracked primary mb3">Artikel</h3>
              <div className="cf">
                <div className="fl dib w-100 w-50-l pr3-l">
                  <HeadlineNews
                      title={this.state.headline.title}
                      imageThumb="assets/images/sarang.jpg"
                      postDate={this.state.headline.date}
                      viewer={this.state.headline.views}
                      postLink="post"
                      link="#"
                      reviews={this.state.headline.preview}
                     />
                </div>
                <div className="fl dib w-100 w-50-l">
                  <ul>{LatestNews}</ul>
                </div>
              </div>
            </div>

            <div className="fl dib w-100 w-third-l mb4 pr3-l">
              <h3 className="ttu f7 fw6 tracked mb3">
                <a className="link primary" href="https://twitter.com/duniawaletnews">from our twitter</a></h3>
              <div>
                <a class="twitter-timeline" data-lang="id" data-height="360" data-dnt="true" href="https://twitter.com/duniawaletnews"></a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>
          </div>
        </section>




      </div>
		);
	}
}

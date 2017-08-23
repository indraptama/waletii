import {h, Component} from 'preact';


export default class Pemesanan extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="pt6">
      <section className="ph3">
        <div className="mw8 center bb b--black-10 pv4">
          <div className="flex-l">
            <div className="w-100 w-50-l mb3">
              <img src="assets/icons/icon-pilih.svg" alt="" className="mw5 center db"/>
            </div>
            <div className="w-100 w-50-l">
              <h3 className="fw6 f5 primary mb3 ttc">Pilih produk yang anda butuhkan.</h3>
            </div>
          </div>
        </div>
        <div className="mw8 center bb b--black-10 pv4">
          <div className="flex-l">
            <div className="w-100 w-50-l mb3">
              <img src="assets/icons/icon-transfer.svg" alt="" className="mw5 center db"/>
            </div>
            <div className="w-100 w-50-l">
              <h3 className="fw6 f5 primary mb3 ttc">lakukan Transfer ke Rekening Kami</h3>
              <ul>
                <li>Bank Mandiri (Weleri Semarang)</li>
                <li>No. Rek : 1360066434496</li>
                <li>a.n CV Bina Agro Nusantara</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mw8 center bb b--black-10 pv4">
          <div className="flex-l">
            <div className="w-100 w-50-l mb3">
              <img src="assets/icons/icon-sms.svg" alt="" className="mw4 center db"/>
            </div>
            <div className="w-100 w-50-l">
              <h3 className="fw6 f5 primary mb3 ttc">Kirim Pesan Konfirmasi</h3>
              <ul>
                <li>Konfirmasikan bahwa anda sudah transfer ke nomor.</li>
                <li>
                  <i className="icon icon-whatsapp mr2"></i>082138388899 (whatsapp)
                </li>
                <li><i className="icon icon-comment-o mr2"></i>082138388899 (sms)</li>
                <li>Tunggu konfirmasi dari kami. setelah transfer anda kami terima, segera kami kirim barang</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

import React from 'react';
import './footer.css';
import recommend from '../../assets/recommend.png';
import scan from '../../assets/scan.png';
import expert from '../../assets/expert.png';
import community from '../../assets/community.png';


const Footer = () => {
  return (
    <div>
      <div className="fleur__footer-links">
        <div className="fleur__footer-links_home"> 
          <img src={recommend} alt="recommend" class="upper-left" />
          <img src={scan} alt="scan" class="upper-right" />
        </div>

        <div className="fleur__footer-features">
          <p className='recommend'>GỢI Ý QUY TRÌNH SKINCARE</p>
          <p className='skin__analysis'>PHÂN TÍCH DA MẶT</p>
        </div>

        <div className="fleur__footer-links_home"> 
          <img src={expert} alt="expert" class="lower-left" />
          <img src={community} alt="community" class="lower-right" />
        </div>

        <div className="fleur__footer-features">
          <p className="expert">CHUYÊN GIA TƯ VẤN</p>
          <p className="community">CỘNG ĐỒNG</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

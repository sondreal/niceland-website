import { BsCheck2All } from "react-icons/bs"
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";

const Pricing = (props) => {
  // window.scrollTo(0, 0);

  const [tab, setTab] = useState(1)
  const navigate = useNavigate()
  const NavigateToCashPayments = () => {
    navigate("/cash")
  }

  return (
    <>
      <div className={`pricing-tabs grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >
        <div className="announcement">Limited Time Launch Discount!</div>
      </div>

      <div className={`pricing-tabs grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >
        <div className={`tab monthly ${tab === 1 ? "active" : ""}`} onClick={() => setTab(1)}>Monthly Billing</div>
        <div className={`tab onetime ${tab === 2 ? "active" : ""}`} onClick={() => setTab(2)}>Upfront Billing</div>
        <div className={`tab onetime`} onClick={() => NavigateToCashPayments()}>Cash Payment</div>
      </div>

      <div className={`pricing grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >

        <div className="sub sub-1" onClick={() => LoadPaymentWindow(1)}>
          <div className="title">Nice Price</div>
          <span className="launch">20% Launch Discount!</span>

          <div className="price price-old teal">
            <span className="value">Before 10 USD</span>
          </div>
          <div className="price price-current teal">
            <span className="value">8</span>
            <span className="month">USD per month</span>
          </div>

          <div className="text orange commitment">1 month commitment</div>
          <div className="seperator-text"></div>
          <div className="text">30 Day money-back guarantee</div>

        </div>

        <div className="sub sub-2" onClick={() => LoadPaymentWindow(2)}>
          <div className="title">Nicer Price</div>
          <span className="launch">20% Launch Discount!</span>
          {tab === 1 &&
            <>
              <div className="price price-old teal">
                <span className="value">Before 8.5 USD</span>
              </div>
              <div className="price price-current teal">
                <span className="value">6.8</span>
                <span className="month">USD per month</span>
                <span className="month"></span>
              </div>
              <div className="text orange commitment">6 month commitment</div>
            </>
          }
          {tab === 2 &&
            <>
              <div className="price price-old teal">
                <span className="value">Before 8.5 USD</span>
              </div>
              <div className="price price-current teal">
                <span className="value">6.8</span>
                <span className="month">USD per month</span>
                <span className="month"></span>
              </div>
              <div className="text orange commitment">$40.8 billed every 6 months</div>
            </>
          }

          <div className="seperator-text"></div>
          <div className="text">30 Day money-back guarantee</div>

        </div>

        <div className="sub sub-3" onClick={() => LoadPaymentWindow(3)}>
          {/* <div className="discount">Save 40%</div> */}
          <div className="title">Nicest Price</div>
          <span className="launch">20% Launch Discount!</span>
          {tab === 1 &&
            <>
              <div className="price price-old teal">
                <span className="value">Before 6.5 USD</span>
              </div>
              <div className="price price-current teal">
                <span className="value">5.2</span>
                <span className="month">USD per month</span>
                <span className="month"></span>
              </div>
              <div className="text orange commitment">12 month commitment</div>
            </>
          }
          {tab === 2 &&
            <>
              <div className="price price-old teal">
                <span className="value">Before 6.5 USD</span>
              </div>
              <div className="price price-current teal">
                <span className="value">5.2</span>
                <span className="month">USD per month</span>
                <span className="month"></span>
              </div>
              <div className="text orange commitment">$62.4 billed every 12 months</div>
            </>
          }
          <div className="seperator-text"></div>
          <div className="text">30 Day money-back guarantee</div>

        </div>

        <div className={`pricing-desc grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >

          <div className="title font-section-title">Subscription Benefits</div>
          <div className="subtitle font-section-subtitle">All subscriptions have access to our full list of features and the following support platforms</div>

          <div className="benefits">
            <div className="item">Email</div>
            <div className="item">Telegram</div>
            <div className="item">Slack</div>
            <div className="item">Discord</div>
            <div className="item">Element / Matrix</div>
            <div className="item">Reddit</div>
          </div>
        </div>
      </div>
    </>


  );
}

export default Pricing;
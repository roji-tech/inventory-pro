import React from "react";
import SubscribeBtn from "../buttons/SubscribeBtn";
import FooterStyle from "./styles";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <div className="container">
          <section className="footer">
            <div className="item1">
              <img className="brand-logo" src="/Brandde-logo-2.png" alt="" />
              <p className="content">
                Brandde is a global self-service ticketing platform for live
                experiences that allows anyone to create, share, find and attend
                events that fuel their passions and enrich their lives.
              </p>
              <img className="socials" src="/f-group.png" alt="" />
              <img className="socials" src="/t-group.png" alt="" />
              <img className="socials" src="/l-group.png" alt="" />
            </div>
            <div className="item2">
              <div className="items events">
                <p className="titles">Plan Events</p>
                <li className="list-items">Create and Set up</li>
                <li className="list-items">Sell Tickets</li>
                <li className="list-items">Online RSVP</li>
                <li className="list-items">Online Events</li>
                <br /> 
                <p className="titles">Brandde DP</p>

                <li className="list-items">Create DP</li>
                <li className="list-items">USe DP</li>
              </div>
              <div className="items">
                <h3 className="titles">Brandde</h3>
                <li className="list-items">About us</li>
                <li className="list-items">Press</li>
                <li className="list-items">Contact Us</li>
                <li className="list-items">Help Center</li>
                <li className="list-items">How it Works</li>
                <li className="list-items">Privacy</li>
                <li className="list-items">Terms</li>
              </div>
            </div>
            <div className="item3">
              <h3 className="titles">Stay in the Loop</h3>
              <div className="list-items">
                Join our mailing list to stay in the loop with our newest for
                Event and concert
                <SubscribeBtn />
              </div>
            </div>
          </section>

          <div className="copyright">
            <hr className="h-line" />
            <p className="copy">Copyright © 2023 Brandde</p>
          </div>
        </div>
      </FooterStyle>
    </>
  );
};

export default Footer;

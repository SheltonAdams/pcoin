import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
  TermsAndC,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>FAQ</FooterLinkTitle>
              <FooterLink to="/signin">Fee Schedule</FooterLink>
              <FooterLink to="/signin">Account</FooterLink>
              <FooterLink to="/signin">Margin Trading</FooterLink>
              <FooterLink to="/signin">How to File an Inquiry</FooterLink>
              <FooterLink to="/signin">
                Customer Relationship Summary
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About PurpleCoin</FooterLinkTitle>
              <FooterLink to="/signin">Our Story</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">PurpleCoin Promotions</FooterLink>
              <FooterLink to="/signin">Blog</FooterLink>
              <FooterLink to="/signin">BrokerCheck</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Terms & Conditions</FooterLinkTitle>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
              <FooterLink to="/signin">Business Continuity Plan</FooterLink>
              <FooterLink to="/signin">Disclosures</FooterLink>
              <FooterLink to="/signin">Data Disclaimer</FooterLink>
              <FooterLink to="/signin">Customer Stories</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Help</FooterLinkTitle>
              <FooterLink to="/signin">Support Center</FooterLink>
              <FooterLink to="/signin">Tutorials</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <TermsAndC>
          Securities trading is offered to self-directed customers by PurpleCoin
          Financial LLC, a broker dealer registered with the Securities and
          Exchange Commission (SEC). PurpleCoin Financial LLC is a member of the
          Financial Industry Regulatory Authority (FINRA), Securities Investor
          Protection Corporation (SIPC), The New York Stock Exchange (NYSE),
          NASDAQ and Cboe EDGX Exchange, Inc (CBOE EDGX). <br />
          <br />
          PurpleCoin Financial LLC is a member of SIPC, which protects
          securities customers of its members up to $500,000 (including $250,000
          for claims for cash). An explanatory brochure is available upon
          request or at www.sipc.org. Our clearing firm, Apex Clearing Corp.,
          has purchased an additional insurance policy.. <br /> <br />
          Our clearing firm Apex Clearing Corp has purchased an additional
          insurance policy. The coverage limits provide protection for
          securities and cash up to an aggregate of $150 million, subject to
          maximum limits of $37.5 million for any one customer’s securities and
          $900,000 for any one customer’s cash. Similar to SIPC protection, this
          additional insurance does not protect against a loss in the market
          value of securities. <br />
          <br />
          Cryptocurrency execution and custody services are provided by Apex
          Crypto LLC (NMLS ID 1828849) through a software licensing agreement
          between Apex Crypto LLC and PurpleCoin Pay LLC. Cryptocurrency trading
          is offered through an account with Apex Crypto. Apex Crypto is not a
          registered broker-dealer or FINRA member and your cryptocurrency
          holdings are not FDIC or SIPC insured. Please ensure that you fully
          understand the risks involved before trading. Not all coins provided
          by Apex Crypto LLC and Webull Pay LLC are available to New York
          residents. Please visit www.PurpleCoin.com/cryptocurrency to see a
          list of crypto available to trade.
          <br />
          <br /> All investments involve risk, and not all risks are suitable
          for every investor. The value of securities may fluctuate and as a
          result, clients may lose more than their original investment. The past
          performance of a security, or financial product does not guarantee
          future results or returns. Keep in mind that while diversification may
          help spread risk, it does not assure a profit or protect against loss
          in a down market. There is always the potential of losing money when
          you invest in securities or other financial products. Investors should
          consider their investment objectives and risks carefully before
          investing.
          <br />
          <br /> Options trading entails significant risk and is not appropriate
          for all investors. Option investors can rapidly lose the value of
          their investment in a short period of time and incur permanent loss by
          expiration date. Losses can potentially exceed the initial required
          deposit. You need to complete an options trading application and get
          approval on eligible accounts. Please read the Characteristics and
          Risks of Standardized Options before trading options.
          <br /> <br /> No content on the PurpleCoin Financial LLC website shall
          be considered as a recommendation or solicitation for the purchase or
          sale of securities, options, or other investment products. All
          information and data on the website is for reference only and no
          historical data shall be considered as the basis for judging future
          trends.
          <br />
          <br /> Investors should be aware that system response, execution
          price, speed, liquidity, market data, and account access times are
          affected by many factors, including market volatility, size and type
          of order, market conditions, system performance, and other factors.
          <br />
          <br />
          Free trading of stocks, ETFs, and options refers to $0 commissions for
          PurpleCoin Financial LLC self-directed individual cash or margin
          brokerage accounts and IRAs that trade U.S. listed securities via
          mobile devices, desktop or website products. Relevant regulatory and
          exchange fees may apply. Please refer to our Fee Schedule for more
          details.
        </TermsAndC>
        <WebsiteRights>
          PurpleCoin © {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;

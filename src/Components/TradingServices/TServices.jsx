import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  Servicesp,
} from "../TradingServices/TServicesElements";
import Icon1 from "../../images/Icon1.svg";
import Icon2 from "../../images/Icon2.svg";
import Icon3 from "../../images/Icon3.svg";
import Icon4 from "../../images/Icon4.svg";

function TServices() {
  return (
    <>
      <ServicesContainer id="Services">
        <ServicesH1>Trading Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Stocks</ServicesH2>
            <Servicesp>
              Invest in thousands of companies and fractional shares with as
              little as $5 using our trading tools and analytics to create your
              own financial portfolio.
            </Servicesp>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Options</ServicesH2>
            <Servicesp>
              Options provide a strategic alternative to just investing in
              equity.Options provide a strategic alternative to just investing
              in equity.
            </Servicesp>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>EFTs</ServicesH2>
            <Servicesp>
              Diversify your holdings by investing into a group of stocks with
              the same convenience as trading a single stock.
            </Servicesp>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Cryptos</ServicesH2>
            <Servicesp>
              Diversify your holdings by investing in digital currencies
              including Bitcoin, Ethereum, Bitcoin Cash and Litecoin.
            </Servicesp>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default TServices;

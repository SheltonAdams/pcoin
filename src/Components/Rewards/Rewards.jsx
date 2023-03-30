import React, { useState } from "react";
import Video from "../../video/Video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  Herop,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./RewardsElements";

function Rewards() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="Rewards">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Get up to $300 in rewards with PurpleCoin </HeroH1>
        <Herop>
          Sign up for a new account today and and earn up to $300 just by taking
          advantage of our rewards!
        </Herop>
        <HeroBtnWrapper>
          <Button
            to="Hero"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default Rewards;

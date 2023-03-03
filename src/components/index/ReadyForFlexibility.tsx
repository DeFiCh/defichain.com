import { Container } from "@components/commons/Container";
import { JellyfishBackground } from "@components/index/Jellyfish";
import classNames from "classnames";
import { Button } from "@components/commons/Buttons";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

export function ReadyForFlexibility() {
  const dimensions = useWindowDimensions();
  return (
    <div className="relative z-0 lg:mt-[316.02px] md:mt-[131px] mt-[142px]">
      <Container>
        <div
          className={classNames(
            "flex flex-col lg:w-[548px] md:w-[425px] w-auto",
            { "w-[327px]": dimensions.width <= 750 }
          )}
        >
          <div className="leading-4 accent-gradient-1 text-transparent bg-clip-text w-fit">
            READY FOR FLEXIBILITY
          </div>
          <div className="text-6xl text-[40px] leading-11 mt-5">
            <span className="text-dark-1000">DeFi MetaChain the</span>
            <span className="text-electric">&nbsp;upgrade</span>
          </div>
          <div>
            <div className="tracking-[0.03em] text-dark-700 font-desc lg:text-xl md:text-base lg:mt-8 mt-5">
              DeFi Meta Chain is an EVM-compatible blockchain that uses Proof of
              Authority (POA) and runs in parallel with the Native DeFiChain
              blockchain.
            </div>
            <div className="tracking-[0.03em] text-dark-700 font-desc lg:text-xl md:text-base mt-8">
              Read through the documentation to get started with deploying next
              generation DeFi applications on DeFi Meta Chain.
            </div>
          </div>

          <Button
            text="Explore DeFi MetaChain"
            className="lg:mt-16 mt-8 py-4 w-[294px]"
          />
        </div>
      </Container>
      <JellyfishBackground
        desktop={{
          position: [50, 110, -70],
          rotation: [0.3, -0.2, -0.6],
          containerStyle:
            "2xl:right-[10%] xl:right-[12%] lg:right-[14%] top-[55%] h-[453px] w-[453px] z-[-1]",
        }}
        tablet={{
          position: [50, 110, -70],
          rotation: [0.3, -0.2, -0.6],
          containerStyle:
            "right-[14%] top-[45%] h-[232.46px] w-[232.46px] z-[-1]",
        }}
      />
      <div
        className={classNames(
          " mix-blend-screen absolute z-[-1] inset-0 bg-right bg-contain bg-no-repeat ",
          "md:bg-[url(/assets/img/index/ready-for-flexibility.png)] bg-[url(/assets/img/index/ready-for-flex-mobile.png)]",
          "lg:h-[871.39px] h-[514.78px] lg:-top-[150px] md:-top-[78.29px] md:right-0 top-[50%]"
        )}
      />
    </div>
  );
}

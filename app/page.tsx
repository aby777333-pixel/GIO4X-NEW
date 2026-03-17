import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/ui/Ticker";
import { TrustBar } from "@/components/sections/TrustBar";
import { MarketOverview } from "@/components/sections/MarketOverview";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { AccountTypes } from "@/components/sections/AccountTypes";
import { WhyGIO4X } from "@/components/sections/WhyGIO4X";
import { LiveSpreads } from "@/components/sections/LiveSpreads";
import { Testimonials } from "@/components/sections/Testimonials";
import { EARobotFriendly } from "@/components/sections/EARobotFriendly";
import { CTABand } from "@/components/sections/CTABand";
import { IBSection } from "@/components/sections/IBSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <TrustBar />
      <MarketOverview />
      <PlatformShowcase />
      <AccountTypes />
      <WhyGIO4X />
      <LiveSpreads />
      <Testimonials />
      <EARobotFriendly />
      <CTABand />
      <IBSection />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/ui/Ticker";
import { TrustBar } from "@/components/sections/TrustBar";
import { MarketOverview } from "@/components/sections/MarketOverview";
import { TradingStats } from "@/components/sections/TradingStats";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { AccountTypes } from "@/components/sections/AccountTypes";
import { WhyGIO4X } from "@/components/sections/WhyGIO4X";
import { MarketSentiment } from "@/components/sections/MarketSentiment";
import { LiveSpreads } from "@/components/sections/LiveSpreads";
import { TradingKnowledge } from "@/components/sections/TradingKnowledge";
import { Testimonials } from "@/components/sections/Testimonials";
import { EARobotFriendly } from "@/components/sections/EARobotFriendly";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { CTABand } from "@/components/sections/CTABand";
import { IBSection } from "@/components/sections/IBSection";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
      <Ticker />
      <TrustBar />
      <MarketOverview />
      <TradingStats />
      <PlatformShowcase />
      <AccountTypes />
      <WhyGIO4X />
      <MarketSentiment />
      <LiveSpreads />
      <TradingKnowledge />
      <Testimonials />
      <EARobotFriendly />
      <HomeFAQ />
      <NewsletterSignup />
      <CTABand />
      <IBSection />
    </>
  );
}

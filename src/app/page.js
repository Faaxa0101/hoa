import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import Process from "@/components/sections/process/Process";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import WhereWeWork from "@/components/sections/others/WhereWeWork";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<Hero />
						<Features />
						<Process />
						<BuildingsWeManage />
						<PricingPlan />
						<Faq2 type={1} />
						<WhereWeWork />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

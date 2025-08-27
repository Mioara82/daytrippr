import { HeroSection } from "@/app/ui/landing-page/hero-section";
import { CTASection } from "@/app/ui/landing-page/CTA-section";
import { SignInHeroSection } from "@/app/ui/landing-page/sign-in-hero-section";

export default function Home() {
	return (
		<div >
			<main>
				<HeroSection />
				<SignInHeroSection />
				<CTASection />
			</main>
		</div>
	);
}

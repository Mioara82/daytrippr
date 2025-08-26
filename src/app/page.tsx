import { HeroSection } from "@/shared/ui/landing-page/hero-section";
import { CTASection } from "@/shared/ui/landing-page/CTA-section";
import { SignInHeroSection } from "@/shared/ui/landing-page/sign-in-hero-section";

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

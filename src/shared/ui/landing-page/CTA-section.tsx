import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparkleIcon,LightningIcon, TargetIcon } from "@phosphor-icons/react/dist/ssr";
import { SparklesIcon } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,white,transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm">
            <SparklesIcon className="h-4 w-4" />
            Ready to start your adventure?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Perfect Day Trip
            <span className="block">Starts Here</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered their next favorite destination with our intelligent trip planner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-white/90">
              Start Planning Your Trip
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats or trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <LightningIcon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">10K+</div>
              <div className="text-white/80">Trips Planned</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <TargetIcon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <SparkleIcon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
          
          <p className="text-sm text-white/70 pt-8">
            No credit card required • Free to start • Upgrade anytime
          </p>
        </div>
      </div>
    </section>
  )
}
import Image from "next/image";
import Link from "next/link";
import {
  ArrowCircleRightIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful destination landscape"
          className="w-full h-full object-cover"
          fill={true}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Plan Your Perfect
            <span className="block text-primary">Day Trip</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover amazing destinations, create personalized itineraries, and
            make every moment count with our intelligent trip planner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-3 text-foreground">
                Start Planning Now
                <ArrowCircleRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Explore Destinations
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500/20 p-3 rounded-full mb-3">
                <MapPinIcon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Smart Routing</h3>
              <p className="text-sm text-gray-300">
                Optimize your route with AI-powered recommendations
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500/20 p-3 rounded-full mb-3">
                <ClockIcon className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Time Management</h3>
              <p className="text-sm text-gray-300">
                Perfect timing for every activity and destination
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/20 p-3 rounded-full mb-3">
                <UsersIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Share & Collaborate</h3>
              <p className="text-sm text-gray-300">
                Plan together with friends, family, and travel companions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

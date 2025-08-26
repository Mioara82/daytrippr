import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileIcon, ShareNetworkIcon,HeartIcon, UsersIcon, MapTrifoldIcon, CalendarIcon } from "@phosphor-icons/react/dist/ssr";

export function SignInHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Save Your Adventures,
                <span className="block text-blue-600 dark:text-blue-400">Share Your Stories</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                While you can plan trips without an account, signing in unlocks powerful features to preserve your memories and connect with loved ones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 border-2 border-dashed border-blue-400/30 bg-blue-50/50 dark:bg-blue-950/20">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                    <FileIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Save Routes</h3>
                    <p className="text-sm text-muted-foreground">Keep your perfect itineraries for future trips</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-2 border-dashed border-green-400/30 bg-green-50/50 dark:bg-green-950/20">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                    <ShareNetworkIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Share Plans</h3>
                    <p className="text-sm text-muted-foreground">Send itineraries to friends and family instantly</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-2 border-dashed border-purple-400/30 bg-purple-50/50 dark:bg-purple-950/20">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg">
                    <HeartIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Favorites</h3>
                    <p className="text-sm text-muted-foreground">Bookmark amazing places you discover</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-2 border-dashed border-orange-400/30 bg-orange-50/50 dark:bg-orange-950/20">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg">
                    <UsersIcon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Collaborate</h3>
                    <p className="text-sm text-muted-foreground">Plan together with travel companions</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                Sign Up - It's Free!
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Continue as Guest
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              No commitment required. Start planning instantly, upgrade when you're ready.
            </p>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1543766499-7c6877bb5400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Friends planning a trip together"
                className="w-full h-96 object-cover"
                fill={true}
              />
            </div>
            
            {/* Floating cards */}
            <Card className="absolute -top-4 -left-4 p-3 shadow-lg bg-white dark:bg-card">
              <div className="flex items-center gap-2">
                <MapTrifoldIcon className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Route Saved!</span>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-3 shadow-lg bg-white dark:bg-card">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Shared with 3 friends</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
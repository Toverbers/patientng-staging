export function HeroSection() {
    return (
      <section className="relative h-[300px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/medals.jpg"
            alt="Award Medals"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/50 to-emerald-500 mix-blend-multiply" />
        
        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-full">
            <div className="text-white ml-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Health &<br />
                Wellness Awards
              </h1>
              <p className="text-xl mt-2 text-right">2024</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

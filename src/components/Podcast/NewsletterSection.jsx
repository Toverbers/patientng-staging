import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <section className="bg-emerald-950 py-16 relative overflow-hidden md:-mx-44">
      {/* Left decoration */}
      <div className="absolute left-0 bottom-0" aria-hidden="true">
        <img
          src="/left.png"
          alt=""
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>
      
      {/* Right decoration */}
      <div className="absolute right-0 bottom-0" aria-hidden="true">
        <img
          src="/right.png"
          alt=""
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Subscribe For The New Episodes In Your Inbox.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white border-0 flex-1"
            />
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
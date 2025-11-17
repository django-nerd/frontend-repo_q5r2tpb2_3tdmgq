import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            <Sparkles size={14} className="text-pink-500" />
            Bespoke 3D couture explorations
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Designing fashion for the next dimension
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            I craft immersive garments, digital silhouettes, and interactive experiences blending fabric, form, and code.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-white">
              View work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-gray-900 border border-black/10">
              Start a project
            </a>
          </div>

          {/* brand cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Vogue", "Prada", "Balenciaga", "Off-White"].map((b) => (
              <div key={b} className="rounded-md border border-black/10 bg-white/60 px-3 py-2 text-center text-sm text-gray-700 backdrop-blur">
                {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

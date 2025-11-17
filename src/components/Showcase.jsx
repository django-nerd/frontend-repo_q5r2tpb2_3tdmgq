import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Holographic Drapery',
    desc: 'Volumetric mesh sculpted in CLO3D, rendered in real-time.',
    image: 'https://images.unsplash.com/photo-1761300287683-aecfb82942b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb2xvZ3JhcGhpYyUyMERyYXBlcnl8ZW58MHwwfHx8MTc2MzM2MjQxN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Parametric Bodice',
    desc: 'Algorithmic patterning with generative seams and vents.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Digital Couture Set',
    desc: 'Metallic textiles simulated with custom shader pipelines.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-2 text-gray-600">A few explorations from my 3D fashion practice.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

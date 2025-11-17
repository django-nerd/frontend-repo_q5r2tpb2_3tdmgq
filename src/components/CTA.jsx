import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      budget: form.get('budget') || undefined,
      project_type: form.get('project_type') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Let’s create together</h2>
          <p className="mt-2 text-gray-600">Tell me about your project and I’ll get back within 24 hours.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 rounded-xl border border-black/10 bg-white p-6 shadow-sm"
        >
          <input name="name" required placeholder="Your name" className="col-span-1 rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20" />
          <input name="email" type="email" required placeholder="Email address" className="col-span-1 rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20" />
          <input name="project_type" placeholder="Project type (runway, lookbook, digital twin...)" className="col-span-1 rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20" />
          <input name="budget" placeholder="Budget (optional)" className="col-span-1 rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20" />
          <textarea name="message" required placeholder="Project details" rows="5" className="col-span-2 rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20" />
          <div className="col-span-2 flex items-center gap-3">
            <button disabled={loading} className="rounded-md bg-black px-5 py-3 text-white disabled:opacity-60">{loading ? 'Sending...' : 'Send inquiry'}</button>
            {status && status.ok && <span className="text-green-600">Thanks! I’ll be in touch.</span>}
            {status && !status.ok && <span className="text-red-600">{status.error || 'Something went wrong'}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Analog Heights Studio</span>
        <a href="#cta" className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition">
          Book Studio Time
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-violet-600 font-semibold mb-4">Recording Studio</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Record your sound the way it deserves</h1>
        <p className="text-lg text-slate-600 mb-10">A full analog-hybrid studio with an in-house engineer for artists and bands.</p>
        <a href="#cta" className="inline-block bg-violet-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-violet-700 transition">
          Reserve a Session
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">In-House Engineer</h3>
          <p className="text-slate-600">A dedicated engineer for every session.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Analog Gear</h3>
          <p className="text-slate-600">Vintage consoles and outboard gear, mixed with modern tools.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Mixing & Mastering</h3>
          <p className="text-slate-600">Full post-production, done in-house.</p>
        </div>
      </section>

      <section id="cta" className="bg-violet-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Your next track starts here</h2>
        <p className="mb-8 text-violet-100">Hourly and full-day rates available.</p>
        <a href="#" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Reserve a Session
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Analog Heights Studio. All rights reserved.
      </footer>
    </div>
  )
}

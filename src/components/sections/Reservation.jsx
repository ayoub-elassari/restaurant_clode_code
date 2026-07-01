import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "../ui/Container"
import Button from "../ui/Button"
import Media from "../ui/Media"

const initialForm = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
}

const inputClasses =
  "w-full rounded-xl border bg-ink/60 px-4 py-3.5 text-cream placeholder-cream/30 outline-none transition-colors duration-200 focus:border-gold"

function todayISO() {
  const d = new Date()
  const offset = d.getTimezoneOffset()
  const local = new Date(d.getTime() - offset * 60 * 1000)
  return local.toISOString().slice(0, 10)
}

export default function Reservation() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Please enter your full name."
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address."
    }
    if (!form.date) {
      next.date = "Please choose a date."
    } else if (form.date < todayISO()) {
      next.date = "Please choose a future date."
    }
    if (!form.time) {
      next.time = "Please choose a time."
    }
    if (!form.guests || Number(form.guests) < 1) {
      next.guests = "Please select the number of guests."
    }
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section
      id="reservation"
      className="relative scroll-mt-16 overflow-hidden bg-charcoal py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 flex flex-col justify-center gap-6 lg:order-1">
            <div className="divider-ornament lg:self-start">
              <span className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-gold">
                Reservations
              </span>
            </div>
            <h2 className="text-3xl leading-tight font-semibold text-cream sm:text-4xl md:text-5xl">
              Save Your Seat by the{" "}
              <span className="text-gradient-gold italic">Fire</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
              Tables move quickly on weekends. Reserve online in under a
              minute and we'll confirm by email within a few hours — or call
              us directly for same-day availability.
            </p>

            <Media
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
              alt="Reserved table setting at Ember & Oak"
              className="hidden aspect-16/10 w-full rounded-2xl sm:block"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl border border-gold/15 bg-ink/50 p-6 shadow-2xl shadow-black/30 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center gap-4 py-10 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-8 w-8"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-cream">
                      Request Received
                    </h3>
                    <p className="max-w-xs text-sm text-cream/60">
                      Thank you — we'll confirm your table by email shortly.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Book Another Table
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-cream/80">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={handleChange}
                        className={`${inputClasses} ${
                          errors.name ? "border-wine-light" : "border-cream/15"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-wine-light">{errors.name}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-cream/80">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${inputClasses} ${
                          errors.email ? "border-wine-light" : "border-cream/15"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-wine-light">{errors.email}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="date" className="text-sm font-medium text-cream/80">
                          Date
                        </label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          min={todayISO()}
                          value={form.date}
                          onChange={handleChange}
                          className={`${inputClasses} ${
                            errors.date ? "border-wine-light" : "border-cream/15"
                          }`}
                        />
                        {errors.date && (
                          <span className="text-xs text-wine-light">{errors.date}</span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="time" className="text-sm font-medium text-cream/80">
                          Time
                        </label>
                        <input
                          id="time"
                          name="time"
                          type="time"
                          value={form.time}
                          onChange={handleChange}
                          className={`${inputClasses} ${
                            errors.time ? "border-wine-light" : "border-cream/15"
                          }`}
                        />
                        {errors.time && (
                          <span className="text-xs text-wine-light">{errors.time}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="guests" className="text-sm font-medium text-cream/80">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none border-cream/15`}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n} className="bg-ink">
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                        <option value="11" className="bg-ink">
                          10+ Guests (Private Dining)
                        </option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="notes" className="text-sm font-medium text-cream/80">
                        Special Requests{" "}
                        <span className="text-cream/40">(optional)</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Allergies, celebrations, seating preferences..."
                        value={form.notes}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none border-cream/15`}
                      />
                    </div>

                    <Button type="submit" variant="primary" className="mt-2 w-full">
                      Confirm Reservation
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

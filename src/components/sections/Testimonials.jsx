import { useRef, useState } from "react"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"
import Media from "../ui/Media"
import { testimonials } from "../../data/testimonials"

function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${filled ? "fill-gold" : "fill-cream/20"}`}
    >
      <path d="M10 1.5l2.6 5.53 6.1.62-4.55 4.13 1.27 6.02L10 14.9l-5.42 2.9 1.27-6.02L1.3 7.65l6.1-.62L10 1.5z" />
    </svg>
  )
}

export default function Testimonials() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (index) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" })
    }
    setActive(index)
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.offsetWidth)
    setActive(index)
  }

  return (
    <section className="relative bg-ink py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Guests Keep Coming Back"
          description="A few words from the people who've pulled up a chair at Ember & Oak."
        />

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex w-[85%] shrink-0 snap-center flex-col gap-5 rounded-2xl border border-cream/10 bg-charcoal p-6 sm:w-[60%] sm:p-8 lg:w-[32%]"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < t.rating} />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-cream/80 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-cream/10 pt-4">
                <Media
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 shrink-0 rounded-full"
                  compact
                />
                <div className="flex flex-col">
                  <span className="font-medium text-cream">{t.name}</span>
                  <span className="text-xs text-cream/50">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-gold" : "w-2 bg-cream/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

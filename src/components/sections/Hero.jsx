import { motion } from "framer-motion"
import Container from "../ui/Container"
import Button from "../ui/Button"
import Media from "../ui/Media"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Media
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1920&auto=format&fit=crop"
          alt="Chargrilled signature dish at Ember & Oak"
          className="h-full w-full"
          eager
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/70 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/40 to-ink/80" />

      <Container className="relative pt-24 pb-16 sm:pt-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="divider-ornament"
          >
            <span className="text-xs sm:text-sm font-medium tracking-[0.35em] uppercase text-gold">
              Fire &middot; Flavor &middot; Ritual
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-5xl leading-[1.05] font-semibold text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            A Modern Kitchen,{" "}
            <span className="text-gradient-gold italic">Rooted in Fire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Wood-fired mains, seasonal produce, and a wine list built for
            slow evenings. Step into Ember &amp; Oak for a dining experience
            that lingers long after the last course.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Button as="a" href="#reservation" variant="primary" className="w-full sm:w-auto">
              Reserve a Table
            </Button>
            <Button as="a" href="#menu" variant="outline" className="w-full sm:w-auto">
              View Menu
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 grid w-full max-w-md grid-cols-3 gap-4 border-t border-cream/10 pt-6 sm:mt-10"
          >
            {[
              ["12+", "Years"],
              ["4.9", "Rating"],
              ["30+", "Dishes"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-display text-2xl text-gold sm:text-3xl">
                  {value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-[1px] animate-pulse bg-cream/40" />
      </motion.a>
    </section>
  )
}

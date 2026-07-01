import { motion } from "framer-motion"
import Container from "../ui/Container"
import Media from "../ui/Media"

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-16 bg-ink py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <Media
              src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1200&auto=format&fit=crop"
              alt="Ember & Oak head chef plating a dish in the open kitchen"
              className="aspect-4/5 w-full rounded-2xl"
            />
            <div className="absolute -bottom-6 -right-4 flex flex-col items-center gap-1 rounded-2xl border border-gold/30 bg-ink/90 px-6 py-5 shadow-xl backdrop-blur-sm sm:-right-8 sm:-bottom-8">
              <span className="font-display text-3xl text-gold sm:text-4xl">
                2013
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
                Est. in the city
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="order-1 flex flex-col items-start gap-5 text-left lg:order-2"
          >
            <div className="divider-ornament">
              <span className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-gold">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl leading-tight font-semibold text-cream sm:text-4xl md:text-5xl">
              Where Live Fire Meets{" "}
              <span className="text-gradient-gold italic">Quiet Elegance</span>
            </h2>
            <p className="text-base leading-relaxed text-cream/70 sm:text-lg">
              Ember &amp; Oak began as a single wood-fired grill and a
              stubborn belief: that the best meals come from patience, not
              shortcuts. Over a decade later, our kitchen still runs on the
              same principle — honest ingredients, live flame, and a team
              that treats every plate like it's the only one going out
              tonight.
            </p>
            <p className="text-base leading-relaxed text-cream/70 sm:text-lg">
              From our sourdough starter to our slow-reduced sauces,
              nothing here is rushed. We partner with local farms for
              produce, age our own meats, and change the menu with the
              seasons so every visit feels a little different.
            </p>

            <div className="mt-4 grid w-full grid-cols-2 gap-6 border-t border-cream/10 pt-6 sm:grid-cols-3">
              {[
                ["Local", "Sourced Daily"],
                ["Live-Fire", "Wood Grill"],
                ["Seasonal", "Menu Changes"],
              ].map(([title, sub]) => (
                <div key={title} className="flex flex-col gap-1">
                  <span className="font-display text-lg text-gold sm:text-xl">
                    {title}
                  </span>
                  <span className="text-xs text-cream/50">{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

import { motion } from "framer-motion"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"
import Media from "../ui/Media"
import { offers } from "../../data/offers"

export default function SpecialOffers() {
  return (
    <section className="relative bg-ink py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Special Offers"
          title="Reasons to Book Tonight"
          description="Seasonal experiences and standing offers designed to make every visit worth planning around."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-charcoal"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Media
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-wine px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream">
                  {offer.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <h3 className="font-display text-2xl text-cream">{offer.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-cream/60">
                  {offer.description}
                </p>
                <div className="flex items-end justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="font-display text-2xl text-gold">
                      {offer.price}
                    </span>
                    <span className="text-xs text-cream/50">{offer.per}</span>
                  </div>
                  <a
                    href="#reservation"
                    className="text-sm font-medium uppercase tracking-wide text-gold underline-offset-4 hover:underline"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

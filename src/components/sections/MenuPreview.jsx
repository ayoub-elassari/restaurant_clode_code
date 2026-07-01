import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"
import Media from "../ui/Media"
import Button from "../ui/Button"
import { categories, menuItems } from "../../data/menu"

export default function MenuPreview() {
  const [active, setActive] = useState("All")
  const tabs = ["All", ...categories]
  const filtered =
    active === "All" ? menuItems : menuItems.filter((i) => i.category === active)

  return (
    <section id="menu" className="relative scroll-mt-16 bg-charcoal py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Menu"
          title="Crafted Dishes, Seasonal Ingredients"
          description="A preview of what's on the table this season — every dish built around fire, patience, and local produce."
        />

        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                active === tab
                  ? "border-gold bg-gold text-ink"
                  : "border-cream/15 text-cream/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-ink/40 transition-colors duration-300 hover:border-gold/40"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Media
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl text-cream sm:text-2xl">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap font-display text-lg text-gold sm:text-xl">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-cream/60">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center">
          <Button as="a" href="#reservation" variant="outline">
            Reserve to Taste the Full Menu
          </Button>
        </div>
      </Container>
    </section>
  )
}

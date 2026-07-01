import { motion } from "framer-motion"
import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"
import Media from "../ui/Media"
import { galleryImages } from "../../data/gallery"

const sizeClasses = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-16 bg-charcoal py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Gallery"
          title="A Taste of the Atmosphere"
          description="Live fire, warm light, and plates worth pausing for — a glimpse inside Ember & Oak."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-xl ${sizeClasses[img.size]}`}
            >
              <Media
                src={img.image}
                alt={img.alt}
                className="h-full w-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
                <p className="p-3 text-xs font-medium text-cream sm:p-4 sm:text-sm">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

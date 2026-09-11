import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory } from '../data/gallery';
import { IconCamera, IconFridge, IconWasher, IconWind, IconWrench } from './icons';

const CATEGORY_ICON: Record<GalleryCategory, typeof IconWind> = {
  'Aires acondicionados': IconWind,
  Neveras: IconFridge,
  Lavadoras: IconWasher,
  'Otros electrodomésticos': IconWrench,
};

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | 'Todos'>('Todos');

  const items = useMemo(
    () => (filter === 'Todos' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter)),
    [filter],
  );

  return (
    <section id="trabajos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Galería"
        title="Trabajos realizados"
        description="Espacio preparado para fotografías reales de los trabajos, organizadas por categoría."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {(['Todos', ...GALLERY_CATEGORIES] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
              filter === c ? 'bg-ink text-white' : 'bg-cloud-dim text-ink-soft hover:bg-cloud-line'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = CATEGORY_ICON[item.category];
          return (
            <motion.div
              key={`${item.category}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-cloud-line bg-gradient-to-br from-ice-light to-cloud-dim shadow-soft"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={`Trabajo realizado: ${item.category}`}
                  loading="lazy"
                  className="photo-cool h-full w-full object-cover"
                />
              ) : (
                <>
                  <Icon className="h-8 w-8 text-ice-dark/60" />
                  <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                    <IconCamera className="h-3.5 w-3.5" />
                    Foto pendiente
                  </span>
                </>
              )}
              <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink backdrop-blur-sm">
                {item.category}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

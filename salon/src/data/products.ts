import { Product } from "@/types";

export const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-botanical-scalp-serum",
    slug: "botanical-follicle-serum",
    title: "No. 01 Botanical Follicle Elixir",
    brand: "Élan Formulations",
    volume: "50 ml / 1.7 fl. oz",
    price: 88,
    description:
      "A concentrated trichological tincture of biodynamic rosemary extract, Japanese wasabi flavone, and copper peptides. Formulated to reactivate dormant follicle stem cells, reduce shedding, and restore natural lipid barriers.",
    benefits: [
      "Stimulates micro-capillary blood delivery to follicular papilla",
      "Calms erythema and relieves scalp tightness without greasy weight",
      "Cold-extracted botanical bioactives preserve 99% peptide integrity",
    ],
    usage:
      "Apply 8–10 drops along natural parting lines before bed. Gently press with fingertips using circular cranial acupressure. Do not rinse.",
    ingredients:
      "Rosmarinus Officinalis Hydrosol, Camellia Sinensis Leaf Extract, Copper Tripeptide-1, Wasabia Japonica Leaf Extract, Squalane, Caffeine, Centella Asiatica.",
    imageUrl:
      "https://images.unsplash.com/photo-1608248597359-57774e11cb44?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "prod-acidic-shine-glaze",
    slug: "acidic-shine-glaze-mask",
    title: "No. 02 Acidic Chroma Shine Glaze",
    brand: "Élan Formulations",
    volume: "200 ml / 6.8 fl. oz",
    price: 74,
    description:
      "A pH 4.2 restorative conditioning bath that locks down lifted cuticles after lightening, heat, or hard water mineral buildup. Enriched with fermented camellia oil for instantaneous silk reflection.",
    benefits: [
      "Re-aligns hair cuticle scales to reflect maximum ambient light",
      "Neutralizes hard water calcium and chlorine discoloration",
      "Zero silicones or heavy occlusive waxes that weigh down texture",
    ],
    usage:
      "Work through clean, towel-damp hair from mid-lengths to ends. Leave for 5 to 7 minutes under a warm towel, then rinse with cold water.",
    ingredients:
      "Aqua, Cetearyl Alcohol, Camellia Japonica Seed Oil, Hydrolyzed Rice Protein, Lactic Acid, Argania Spinosa Kernel Oil, Tocopherol.",
    imageUrl:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "prod-dry-sculpt-texture-balm",
    slug: "dry-sculpt-texture-balm",
    title: "No. 03 Architectural Dry Texture Balm",
    brand: "Élan Formulations",
    volume: "60 g / 2.1 oz",
    price: 62,
    description:
      "A pliable matte shaping balm formulated with French kaolin clay and raw beeswax. Delivers lived-in perimeter definition and separation with zero greasy residue or stiffness.",
    benefits: [
      "Creates architectural separation with flexible restylable memory",
      "Absorbs excess scalp sebum while providing satin-matte grip",
      "Infused with cedarwood, frankincense, and vetiver essential oils",
    ],
    usage:
      "Warm a thumbnail-sized amount between palms until invisible. Work through dry ends, fringe, or crown layers to define silhouette.",
    ingredients:
      "Kaolin Clay, Cera Alba (Beeswax), Butyrospermum Parkii (Shea Butter), Cedrus Atlantica Wood Oil, Boswellia Carterii Oil, Vetiveria Zizanoides Root Oil.",
    imageUrl:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "prod-horn-wide-tooth-comb",
    slug: "handcrafted-horn-dressing-comb",
    title: "No. 04 Artisanal Buffalo Horn Dressing Comb",
    brand: "Élan Atelier Tools",
    volume: "Handcrafted 18 cm",
    price: 95,
    description:
      "Hand-carved from ethically reclaimed buffalo horn by third-generation master comb-makers in Normandy. Naturally anti-static keratin material glides through wet or dry hair without snagging or fracturing delicate cuticle walls.",
    benefits: [
      "Eliminates static charge and mechanical cuticle friction",
      "Hand-polished rounded teeth gently massage scalp meridians",
      "Every piece exhibits unique marbleized amber and charcoal grain",
    ],
    usage:
      "Use to distribute masks through wet hair in the bath, or to comb out editorial waves after thermal setting.",
    ingredients: "100% Reclaimed Keratin Horn, Hand-Polished.",
    imageUrl:
      "https://images.unsplash.com/photo-1590159763121-7c9ff3149e0a?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
];

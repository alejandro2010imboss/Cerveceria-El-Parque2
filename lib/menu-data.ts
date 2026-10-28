export type AllergenId =
  | 'gluten'
  | 'lacteos'
  | 'huevo'
  | 'pescado'
  | 'marisco'
  | 'moluscos'
  | 'frutos-secos'
  | 'soja'
  | 'sulfitos'

export type DishTag = 'vegetariano' | 'picante' | 'favorito'

export interface Dish {
  name: string
  description: string
  price: number
  allergens?: AllergenId[]
  tags?: DishTag[]
  note?: string
}

export interface MenuCategory {
  id: string
  label: string
  intro: string
  dishes: Dish[]
}

export const restaurant = {
  name: 'Bodega Lumbre',
  tagline: 'Tapas de mercado, vino y sobremesa',
  address: 'Calle de la Cava Baja, 24',
  city: '28005 Madrid',
  phoneDisplay: '+34 600 123 456',
  whatsappNumber: '34600123456',
  whatsappMessage: 'Hola Bodega Lumbre, me gustaría reservar una mesa para ___ personas el día ___ a las ___.',
  mapQuery: 'Calle de la Cava Baja 24, 28005 Madrid',
  schedule: [
    { days: 'Lun', hours: 'Cerrado' },
    { days: 'Mar – Jue', hours: '12:30 – 16:00 · 20:00 – 00:00' },
    { days: 'Vie – Sáb', hours: '12:30 – 16:30 · 20:00 – 01:00' },
    { days: 'Dom', hours: '12:30 – 17:00' },
  ],
}

export const whatsappUrl = `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(restaurant.whatsappMessage)}`

export const menu: MenuCategory[] = [
  {
    id: 'entrantes',
    label: 'Entrantes',
    intro: 'Para abrir boca y compartir al centro.',
    dishes: [
      {
        name: 'Pan de cristal con tomate',
        description: 'Tomate rallado, aceite de oliva virgen extra arbequina y escamas de sal.',
        price: 4.5,
        allergens: ['gluten'],
        tags: ['vegetariano'],
      },
      {
        name: 'Aceitunas aliñadas de la casa',
        description: 'Gordal y manzanilla maceradas con naranja, tomillo y ajo.',
        price: 3.8,
        tags: ['vegetariano'],
      },
      {
        name: 'Ensalada de tomate rosa',
        description: 'Tomate de temporada, ventresca de bonito, cebolleta y piparras.',
        price: 11.5,
        allergens: ['pescado'],
      },
      {
        name: 'Tabla de quesos artesanos',
        description: 'Selección de cuatro quesos nacionales con membrillo y nueces.',
        price: 15,
        allergens: ['lacteos', 'frutos-secos'],
        tags: ['vegetariano'],
      },
      {
        name: 'Salmorejo cordobés',
        description: 'Con huevo duro picado, virutas de jamón y aceite picual.',
        price: 7.5,
        allergens: ['gluten', 'huevo'],
      },
    ],
  },
  {
    id: 'tapas-estrella',
    label: 'Tapas Estrella',
    intro: 'Las que nos piden una y otra vez.',
    dishes: [
      {
        name: 'Patatas bravas Lumbre',
        description: 'Patata confitada y crujiente, salsa brava ahumada y alioli suave.',
        price: 6.5,
        allergens: ['huevo'],
        tags: ['favorito', 'picante', 'vegetariano'],
      },
      {
        name: 'Croquetas de jamón ibérico',
        description: 'Bechamel cremosa, cortadas a mano. Ración de 6 unidades.',
        price: 9,
        allergens: ['gluten', 'lacteos', 'huevo'],
        tags: ['favorito'],
      },
      {
        name: 'Gambas al ajillo',
        description: 'En cazuela de barro con ajo laminado, guindilla y un toque de brandy.',
        price: 13.5,
        allergens: ['marisco', 'sulfitos'],
        tags: ['picante'],
      },
      {
        name: 'Pulpo a la gallega',
        description: 'Sobre cachelos, pimentón de la Vera y aceite de oliva virgen.',
        price: 18,
        allergens: ['moluscos'],
        tags: ['favorito'],
      },
      {
        name: 'Tortilla de Betanzos',
        description: 'Jugosa, poco cuajada, con cebolla pochada a fuego lento.',
        price: 8.5,
        allergens: ['huevo'],
        tags: ['vegetariano'],
      },
      {
        name: 'Jamón ibérico de bellota',
        description: '100% ibérico, cortado a cuchillo al momento. 80 g.',
        price: 22,
      },
    ],
  },
  {
    id: 'principales',
    label: 'Platos Principales',
    intro: 'Cocina de brasa y cuchara para quedarse.',
    dishes: [
      {
        name: 'Arroz meloso de carabineros',
        description: 'Fumet tostado, sofrito de ñora y carabinero entero. Mínimo 2 personas.',
        price: 24,
        note: 'precio por persona',
        allergens: ['marisco', 'pescado', 'sulfitos'],
      },
      {
        name: 'Presa ibérica a la brasa',
        description: 'Con pimientos asados, patata panadera y sal ahumada.',
        price: 21,
      },
      {
        name: 'Bacalao confitado',
        description: 'Lomo al pil-pil sobre pisto manchego de verduras de temporada.',
        price: 19.5,
        allergens: ['pescado'],
      },
      {
        name: 'Rabo de toro estofado',
        description: 'Guiso lento al vino tinto con puré de patata trufado.',
        price: 20,
        allergens: ['lacteos', 'sulfitos'],
      },
      {
        name: 'Canelones de setas',
        description: 'Boletus y champiñón, bechamel de queso curado y piñones.',
        price: 16,
        allergens: ['gluten', 'lacteos', 'huevo', 'frutos-secos'],
        tags: ['vegetariano'],
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    intro: 'Vinos por copa, vermut de grifo y algo fresco.',
    dishes: [
      {
        name: 'Vermut rojo de grifo',
        description: 'Con piel de naranja y aceituna. Servido bien frío.',
        price: 3.5,
        allergens: ['sulfitos'],
      },
      {
        name: 'Caña de cerveza',
        description: 'Cerveza de barril tirada con mimo, 25 cl.',
        price: 2.8,
        allergens: ['gluten'],
      },
      {
        name: 'Copa de Ribera del Duero',
        description: 'Tinto crianza, tempranillo. Pregunta por la referencia del día.',
        price: 4.5,
        allergens: ['sulfitos'],
      },
      {
        name: 'Copa de Albariño',
        description: 'Blanco de Rías Baixas, fresco y afrutado.',
        price: 4.8,
        allergens: ['sulfitos'],
      },
      {
        name: 'Sangría de la casa',
        description: 'Jarra de 1 litro con fruta de temporada y canela.',
        price: 16,
        allergens: ['sulfitos'],
      },
      {
        name: 'Refrescos y agua',
        description: 'Cola, limón, naranja, tónica o agua mineral con o sin gas.',
        price: 2.5,
      },
    ],
  },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value)
}

import { Category } from './shared/category.model';
import { Product } from './shared/product.model';

export const CATEGORIES: Category[] = [
  {
    'categori_id': 1,
    'name': 'game mats'
  },
  {
    'categori_id': 2,
    'name': 'spell cards'
  },
  {
    'categori_id': 3,
    'name': 'trap cards'
  },
  {
    'categori_id': 4,
    'name': 'monster cards'
  }
];

export const PRODUCTS: Partial<Product>[] =  [
    {
      'id': 1,
      'name': 'Trancefamiliar',
      'price': '1.98',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/trancefamiliar.jpg',
      'description': 'Level 1 dark attribute, zero ATK or DEF points.',
      'stockLevel': 2
    },
    {
      'id': 2,
      'name': 'Prompthorn',
      'price': '1.99',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/prompthorn.jpg',
      'description': 'Level 1 dark attribute, 200 ATK - 400 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 3,
      'name': 'Elementsaber Malo',
      'price': '2.00',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/elementsaber-malo.jpg',
      'description': 'Level 3 fire attribute, 1700 ATK - 200 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 4,
      'name': 'Sergeant Electro',
      'price': '2.00',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/sergeant-electro.jpg',
      'description': 'Level 4 fire attribute, 1600 ATK - 1300 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 5,
      'name': 'Amazoness Archer',
      'price': '1.99',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/amazoness-archer.jpg',
      'description': 'Level 4 earth attribute, 1400 ATK - 1000 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 6,
      'name': 'Leotaur',
      'price': '2.00',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/leotaur.jpg',
      'description': 'Level 4 earth attribute, 1500 ATK - 1600 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 7,
      'name': 'Elementsaber Aina',
      'price': '1.28',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/elementsaber-aina.jpg',
      'description': 'Level 2 earth attribute, 900 ATK - 1800 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 8,
      'name': 'Oxygeddon',
      'price': '2.05',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/oxygeddon.jpg',
      'description': 'Level 4 wind attribute, 1800 ATK - 800 DEF points.',
      'stockLevel': 1
    },
    {
      'id': 9,
      'name': 'A Legendary Ocean',
      'price': '2.00',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/a-legendary-ocean.jpg',
      'description': 'Field spell card. (This card\'s name is always treated as "Umi".)',
      'stockLevel': 1
    },
    {
      'id': 10,
      'name': 'Hydrogeddon',
      'price': '2.05',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/hydrogeddon.jpg',
      'description': 'Level 4 water attribute, 1600 ATK - 1000 DEF points.',
      'stockLevel': 2
    },
    {
      'id': 11,
      'name': 'Bonding - H20',
      'price': '2.05',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/bonding-h20.jpg',
      'description': 'Tribute 2 "Hydrogeddon" and 1 "Oxygeddon"; Special Summmon 1 "Water Dragon"',
      'stockLevel': 1
    },
    {
      'id': 12,
      'name': 'Revendread Evolution',
      'price': '2.10',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/revendread-evolution.jpg',
      'description': 'This card can be used to Ritual Summon any "Vendread" Ritual Monster.',
      'stockLevel': 1
    },
    {
      'id': 13,
      'name': 'Staring Contest',
      'price': '2.00',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/staring-contest.jpg',
      'description': 'When you Special Summon a monster to the Extra Monster Zone: You can target 1 monster in your opponent\'s  Main Monster Zone.',
      'stockLevel': 1
    },
    {
      'id': 14,
      'name': 'World Legacy\'s Nightmare',
      'price': '2.10',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/world-legacys-nightmare.jpg',
      'description': 'You take no battle damage from attacks involving your co-linked monsters. Oncer per turn: You can activate one of these effects.',
      'stockLevel': 1
    },
    {
      'id': 15,
      'name': 'World Legacy Awakens',
      'price': '1.99',
      'best_seller': false,
      'categories': [3],
      'img': '/assets/products/world-legacy-awakens.jpg',
      'description': 'Immediately after this effect resolves, Link Summon 1 Link Monster using monster(s) you control as material.',
      'stockLevel': 1
    },
    {
      'id': 16,
      'name': 'F.A. Dead Heat',
      'price': '1.99',
      'best_seller': false,
      'categories': [3],
      'img': '/assets/products/fa-dead-heat.jpg',
      'description': 'When an opponent\'s monster declares a direct attack: You can Special Summon 1 "F.A." monster from your deck.',
      'stockLevel': 1
    },
    {
      'id': 17,
      'name': 'Cybersal Cyclone',
      'price': '2.00',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/cybersal-cyclone.jpg',
      'description': 'Target 1 Link Monster your oppponent controls, banish 1 monster form your GY that has the same Link Rating as that monster, and if you do, destroy that monster.',
      'stockLevel': 1
    },
    {
      'id': 18,
      'name': 'Trickstar Bouquet',
      'price': '1.99',
      'best_seller': false,
      'categories': [2, 3],
      'img': '/assets/products/trickster-bouquet.jpg',
      'description': 'Target t1 "Trickstar" monster you control and 1 face-up monster on the field; return that "Trickstar" monster of the hand.',
      'stockLevel': 1
    },
    {
      'id': 19,
      'name': 'Amazoness Call',
      'price': '2.00',
      'best_seller': false,
      'categories': [2, 3],
      'img': '/assets/products/amazoness-call.jpg',
      'description': 'Take 1 "Amazoness" card from your deck, except "Amazoness Call", and either add it to your hand or send it to the GY.',
      'stockLevel': 1
    },
    {
      'id': 20,
      'name': 'Infected Mail',
      'price': '2.00',
      'best_seller': false,
      'categories': [2],
      'img': '/assets/products/infected-mail.jpg',
      'description': 'Once per turn you can target 1 face-up Level 4 or lower monster you control, it can attack your opponent directly this turn. Send it to the GY at the end of the Battle Phase',
      'stockLevel': 1
    },
    {
      'id': 21,
      'name': 'Water Dragon',
      'price': '10.05',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/water-dragon.jpg',
      'description': 'Level 8 water attribute, 2800 ATK - 2600 DEF points',
      'stockLevel': 1
    },
    {
      'id': 22,
      'name': 'Degrade Buster',
      'price': '10.05',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/degrade-buster.jpg',
      'description': 'Level 7 fire attribute, 2500 ATK - 2500 DEF points',
      'stockLevel': 1
    },
    {
      'id': 23,
      'name': 'ULTRA RARE: Ghost Belle & Haunted Mansion',
      'price': '20.00',
      'best_seller': false,
      'categories': [4],
      'img': '/assets/products/ghost-belle-haunted-mansion.jpg',
      'description': 'Level 3 earth attribute, 0 ATK - 1800 DEF points',
      'stockLevel': 1
    },
    {
      'id': 24,
      'name': 'Amazoness Onlaught',
      'price': '3.20',
      'categories': [3],
      'img': '/assets/products/amazoness-onslaught.jpg',
      'description': 'Continuous trap',
      'stockLevel': 1
    }
  ];

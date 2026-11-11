export interface ChurchArticleSection {
  heading: string
  paragraphs: string[]
}

export interface ChurchArticle {
  slug: string
  title: string
  category: string
  publishedAt: string
  readingTime: string
  excerpt: string
  image: string
  imageAlt: string
  sections: ChurchArticleSection[]
}

export const articles: ChurchArticle[] = [
  {
    slug: 'changer-le-monde-pour-christ',
    title: 'Changer le monde pour Christ : une mission qui commence près de nous',
    category: 'Vision & mission',
    publishedAt: '2026-11-11',
    readingTime: '4 min de lecture',
    excerpt: 'La mission chrétienne ne commence pas nécessairement au loin. Elle prend forme dans nos familles, nos quartiers et chaque rencontre où nous pouvons témoigner de l’amour du Christ.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Des personnes réunies dans un moment de partage',
    sections: [
      { heading: 'Une vision qui devient une manière de vivre', paragraphs: [
        '« Changer le monde pour Christ » est une invitation à laisser l’Évangile transformer notre manière de penser, de parler et d’agir. Cette vision ne se limite pas à une déclaration : elle prend corps dans les choix simples de chaque journée.',
        'Elle nous encourage à vivre notre foi avec cohérence, à rechercher la paix, à pratiquer la compassion et à considérer chaque personne avec dignité.'
      ]},
      { heading: 'Commencer là où Dieu nous a placés', paragraphs: [
        'Notre premier terrain de témoignage est souvent tout proche : la famille, le voisinage, le lieu de travail, l’école et les relations quotidiennes. Une parole qui encourage, une écoute attentive ou un geste de solidarité peuvent ouvrir un chemin de confiance.',
        'L’évangélisation se vit avec respect et amour. Elle ne consiste pas à imposer, mais à partager avec humilité l’espérance que nous trouvons en Jésus-Christ.'
      ]},
      { heading: 'Avancer ensemble', paragraphs: [
        'Une communauté grandit lorsque chacun comprend qu’il peut contribuer à la mission. La prière, l’enseignement, le service et l’accompagnement donnent à cette vision une dimension collective.',
        'Que chacun puisse devenir, à son niveau, un témoin de l’espérance et un artisan de paix.'
      ]}
    ]
  },
  {
    slug: 'la-parole-au-coeur-de-nos-vies',
    title: 'La Parole de Dieu au cœur de nos vies',
    category: 'Foi & enseignement',
    publishedAt: '2026-11-08',
    readingTime: '3 min de lecture',
    excerpt: 'Lire la Bible, la méditer et la mettre en pratique nous aide à construire une foi enracinée et à discerner notre manière d’avancer.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Une Bible ouverte dans une atmosphère paisible',
    sections: [
      { heading: 'Écouter avant d’agir', paragraphs: [
        'La Parole de Dieu nous invite à prendre du recul, à écouter et à laisser nos pensées être éclairées. Dans un quotidien souvent chargé, réserver un temps à la lecture biblique permet de recentrer notre attention sur l’essentiel.',
        'Il ne s’agit pas seulement d’accumuler des connaissances, mais de chercher à comprendre le message des Écritures et ce qu’il nous apprend sur Dieu, sur nous-mêmes et sur notre prochain.'
      ]},
      { heading: 'Mettre en pratique ce que nous découvrons', paragraphs: [
        'Une foi vivante se manifeste aussi dans les actes. La patience, le pardon, la vérité, la justice et l’amour deviennent des repères concrets lorsque nous cherchons à appliquer la Parole dans nos relations.',
        'Nous pouvons avancer progressivement : lire un passage, le méditer, prier et identifier une action simple à mettre en pratique.'
      ]},
      { heading: 'Grandir dans une démarche commune', paragraphs: [
        'L’étude biblique partagée permet de poser des questions, d’apprendre les uns des autres et de s’encourager. Elle rappelle que la croissance spirituelle est un chemin qui se poursuit tout au long de la vie.',
        'Que la Parole demeure une lumière pour nos pas et une source d’encouragement pour notre communauté.'
      ]}
    ]
  },
  {
    slug: 'levangelisation-partager-lesperance',
    title: 'L’évangélisation : partager l’espérance avec amour',
    category: 'Évangélisation',
    publishedAt: '2026-11-04',
    readingTime: '4 min de lecture',
    excerpt: 'Partager l’Évangile demande de la conviction, mais aussi de l’écoute, du respect et une attention sincère à la réalité de chaque personne.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Un rassemblement de personnes dans un moment de communion',
    sections: [
      { heading: 'Un message porté par l’amour', paragraphs: [
        'L’Évangile annonce une espérance. Le partager suppose de garder au centre l’amour de Dieu et la dignité de la personne que nous rencontrons. Notre attitude doit être en accord avec le message que nous souhaitons transmettre.',
        'L’écoute précède souvent la parole. Comprendre les questions, les préoccupations et le parcours de l’autre aide à établir un dialogue sincère.'
      ]},
      { heading: 'Témoigner par les paroles et les actes', paragraphs: [
        'Nos paroles peuvent présenter le message du Christ, tandis que nos actes donnent à voir les valeurs que nous confessons. La disponibilité, l’entraide, la compassion et la fidélité sont autant de manières de rendre notre témoignage crédible.',
        'Chacun peut contribuer selon ses dons, son environnement et les occasions qui se présentent.'
      ]},
      { heading: 'Une mission qui nous rassemble', paragraphs: [
        'L’évangélisation n’est pas réservée à quelques personnes. Elle est une responsabilité partagée qui se nourrit de la prière, de la formation et du soutien mutuel.',
        'Ensemble, nous pouvons annoncer l’espérance avec simplicité, respect et persévérance.'
      ]}
    ]
  },
  {
    slug: 'servir-avec-amour-au-quotidien',
    title: 'Servir avec amour : donner du sens aux gestes du quotidien',
    category: 'Vie communautaire',
    publishedAt: '2026-10-29',
    readingTime: '3 min de lecture',
    excerpt: 'Le service chrétien se manifeste aussi dans les gestes discrets : accueillir, écouter, accompagner et prendre soin de ceux qui nous entourent.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Des bénévoles réunis autour d’une action solidaire',
    sections: [
      { heading: 'Le service commence par l’attention', paragraphs: [
        'Servir ne signifie pas toujours accomplir de grandes choses. C’est parfois remarquer une personne isolée, prendre le temps d’écouter ou proposer une aide concrète à quelqu’un qui traverse une difficulté.',
        'Ces gestes prennent leur sens lorsqu’ils sont accomplis librement, avec humilité et sans rechercher la reconnaissance.'
      ]},
      { heading: 'Chaque contribution compte', paragraphs: [
        'Une communauté rassemble des personnes aux talents et aux disponibilités différents. L’accueil, la musique, l’organisation, l’enseignement, la prière, la communication et l’entraide participent tous à la vie collective.',
        'Il est important que chacun puisse trouver un cadre adapté à ses capacités et être accompagné dans son engagement.'
      ]},
      { heading: 'Construire une culture de bienveillance', paragraphs: [
        'Une communauté accueillante se reconnaît à la manière dont elle prend soin des personnes, notamment de celles qui découvrent l’église ou qui ont besoin d’un soutien particulier.',
        'Servir avec amour, c’est faire de la bienveillance une pratique quotidienne.'
      ]}
    ]
  },
  {
    slug: 'la-priere-au-coeur-de-la-communion',
    title: 'La prière, un chemin de communion et de confiance',
    category: 'Vie spirituelle',
    publishedAt: '2026-10-22',
    readingTime: '3 min de lecture',
    excerpt: 'La prière nous aide à déposer nos préoccupations devant Dieu, à exprimer notre reconnaissance et à porter les autres dans l’intercession.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'La lumière du matin sur un paysage paisible',
    sections: [
      { heading: 'Un temps pour se rendre disponible', paragraphs: [
        'La prière est un espace de relation et de confiance. Elle nous invite à nous arrêter, à exprimer ce que nous portons et à chercher la présence de Dieu avec simplicité.',
        'Elle n’exige pas des mots compliqués. Une prière sincère peut commencer par une parole de reconnaissance, une demande d’aide ou un moment de silence.'
      ]},
      { heading: 'Porter les autres dans la prière', paragraphs: [
        'Prier ensemble nous rappelle que nous ne sommes pas seuls. Nous pouvons confier à Dieu les familles, les personnes éprouvées, les responsables, les jeunes et les besoins de notre ville.',
        'L’intercession développe aussi notre attention aux autres et nous encourage à poser des actes de soutien lorsque cela est possible.'
      ]},
      { heading: 'Faire de la prière une habitude', paragraphs: [
        'Un moment régulier, même court, peut aider à développer une vie de prière fidèle. La prière personnelle et la prière communautaire se complètent et nous fortifient.',
        'Que ces temps nourrissent notre confiance, notre unité et notre engagement.'
      ]}
    ]
  }
]

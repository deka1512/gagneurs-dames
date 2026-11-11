export interface LeadershipMember {
  id: string
  name: string
  title: string
  group: string
  description: string
  image: string
  imageAlt: string
  initials: string
}

const portrait = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`

export const pastoralCollege: LeadershipMember[] = [
  { id: 'beni-kalala', name: 'Révérend Beni H. Kalala', title: 'Représentant légal', group: 'Collège pastoral', description: 'Porter la vision spirituelle de la communauté et veiller à son orientation générale.', image: '/beni%20h.jpg', imageAlt: 'Portrait du Révérend Beni H. Kalala', initials: 'BK' },
  { id: 'jean-mukendi', name: 'Pasteur Jean Mukendi', title: 'Vice-président du collège pastoral', group: 'Collège pastoral', description: 'Participer à la coordination pastorale et à l’accompagnement des responsables.', image: portrait('photo-1500648767791-00dcc994a43e'), imageAlt: 'Portrait illustratif d’un responsable congolais', initials: 'JM' },
  { id: 'marie-kabeya', name: 'Pasteure Marie Kabeya', title: 'Secrétaire générale', group: 'Collège pastoral', description: 'Assurer le suivi des orientations et faciliter la communication entre les équipes.', image: portrait('photo-1531123897727-8f129e1688ce'), imageAlt: 'Portrait illustratif d’une responsable congolaise', initials: 'MK' },
  { id: 'patrick-ilunga', name: 'Pasteur Patrick Ilunga', title: 'Conseiller pastoral', group: 'Collège pastoral', description: 'Apporter un accompagnement spirituel et contribuer à la formation des serviteurs.', image: portrait('photo-1507003211169-0a1dd7228f2d'), imageAlt: 'Portrait illustratif d’un responsable congolais', initials: 'PI' }
]

export const pastoralTeam: LeadershipMember[] = [
  { id: 'daniel-mbuyi', name: 'Pasteur Daniel Mbuyi', title: 'Responsable de l’accompagnement pastoral', group: 'Équipe pastorale', description: 'Être à l’écoute des personnes et accompagner les familles dans les différentes saisons de la vie.', image: portrait('photo-1506794778202-cad84cf45f1d'), imageAlt: 'Portrait illustratif d’un pasteur congolais', initials: 'DM' },
  { id: 'esther-kanku', name: 'Pasteure Esther Kanku', title: 'Responsable de l’intercession', group: 'Équipe pastorale', description: 'Animer les temps de prière et soutenir la communauté dans l’intercession.', image: portrait('photo-1534528741775-53994a69daeb'), imageAlt: 'Portrait illustratif d’une pasteure congolaise', initials: 'EK' },
  { id: 'samuel-banza', name: 'Pasteur Samuel Banza', title: 'Responsable de la jeunesse', group: 'Équipe pastorale', description: 'Encourager les jeunes à grandir dans la foi, à développer leurs dons et à servir.', image: portrait('photo-1500648767791-00dcc994a43e'), imageAlt: 'Portrait illustratif d’un responsable congolais', initials: 'SB' },
  { id: 'grace-tshiala', name: 'Pasteure Grâce Tshiala', title: 'Responsable des familles et des couples', group: 'Équipe pastorale', description: 'Proposer écoute, encouragement et orientation aux couples et aux familles.', image: portrait('photo-1531123897727-8f129e1688ce'), imageAlt: 'Portrait illustratif d’une pasteure congolaise', initials: 'GT' }
]

export const collaborators: LeadershipMember[] = [
  { id: 'benjamin-kasongo', name: 'Benjamin Kasongo', title: 'Coordinateur de l’accueil', group: 'Collaborateurs', description: 'Recevoir les visiteurs, faciliter leur orientation et créer un environnement chaleureux.', image: portrait('photo-1507003211169-0a1dd7228f2d'), imageAlt: 'Portrait illustratif d’un collaborateur congolais', initials: 'BK' },
  { id: 'ruth-mbuyi', name: 'Ruth Mbuyi', title: 'Responsable de la louange', group: 'Collaborateurs', description: 'Préparer les temps de louange et contribuer à la qualité des célébrations.', image: portrait('photo-1534528741775-53994a69daeb'), imageAlt: 'Portrait illustratif d’une collaboratrice congolaise', initials: 'RM' },
  { id: 'cedric-kabamba', name: 'Cédric Kabamba', title: 'Responsable médias et communication', group: 'Collaborateurs', description: 'Valoriser les activités, produire les supports et assurer la communication de la communauté.', image: portrait('photo-1506794778202-cad84cf45f1d'), imageAlt: 'Portrait illustratif d’un collaborateur congolais', initials: 'CK' },
  { id: 'nadine-mwamba', name: 'Nadine Mwamba', title: 'Responsable de l’action sociale', group: 'Collaborateurs', description: 'Identifier les besoins et organiser des actions d’entraide au bénéfice des personnes.', image: portrait('photo-1531123897727-8f129e1688ce'), imageAlt: 'Portrait illustratif d’une collaboratrice congolaise', initials: 'NM' }
]

export const leadershipPreview = [pastoralCollege[0]!, pastoralCollege[1]!, pastoralTeam[0]!, collaborators[0]!]

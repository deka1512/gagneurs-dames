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

export const pastoralCollege: LeadershipMember[] = [
  { id: 'beni-kalala', name: 'Révérend Beni H. Kalala', title: 'Représentant légal', group: 'Collège pastoral', description: 'Porter la vision spirituelle de la communauté et veiller à son orientation générale.', image: '/images/benih.jpg', imageAlt: 'Portrait du Révérend Beni H. Kalala', initials: 'BK' },
  { id: 'coordination-pastorale', name: 'Coordination pastorale', title: 'Responsabilité collégiale', group: 'Collège pastoral', description: 'Favoriser la concertation, la coordination des équipes et le suivi de la vie communautaire.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'CP' },
  { id: 'enseignement-formation', name: 'Enseignement & formation', title: 'Responsable de l’enseignement', group: 'Collège pastoral', description: 'Préparer les parcours bibliques et accompagner la formation spirituelle des membres.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'EF' },
  { id: 'mission-evangelisation', name: 'Mission & évangélisation', title: 'Responsable de la mission', group: 'Collège pastoral', description: 'Encourager les initiatives d’évangélisation, de témoignage et de service dans la cité.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'ME' }
]

export const pastoralTeam: LeadershipMember[] = [
  { id: 'accompagnement', name: 'Accompagnement pastoral', title: 'Visites & écoute', group: 'Équipe pastorale', description: 'Être à l’écoute des personnes et accompagner les familles dans les différentes saisons de la vie.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'AP' },
  { id: 'intercession', name: 'Intercession & prière', title: 'Responsable de la prière', group: 'Équipe pastorale', description: 'Animer les temps de prière et soutenir la communauté dans l’intercession.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'IP' },
  { id: 'jeunesse', name: 'Jeunesse & discipleship', title: 'Accompagnement des jeunes', group: 'Équipe pastorale', description: 'Encourager les jeunes à grandir dans la foi, à développer leurs dons et à servir.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'JD' },
  { id: 'familles', name: 'Familles & couples', title: 'Accompagnement des familles', group: 'Équipe pastorale', description: 'Proposer écoute, encouragement et orientation aux couples et aux familles.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'FC' }
]

export const collaborators: LeadershipMember[] = [
  { id: 'accueil', name: 'Accueil & intégration', title: 'Équipe d’accueil', group: 'Collaborateurs', description: 'Recevoir les visiteurs, faciliter leur orientation et créer un environnement chaleureux.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'AI' },
  { id: 'louange', name: 'Louange & musique', title: 'Équipe de louange', group: 'Collaborateurs', description: 'Préparer les temps de louange et contribuer à la qualité des célébrations.', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'LM' },
  { id: 'medias', name: 'Médias & communication', title: 'Équipe médias', group: 'Collaborateurs', description: 'Valoriser les activités, produire les supports et assurer la communication de la communauté.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'MC' },
  { id: 'solidarite', name: 'Action sociale & solidarité', title: 'Équipe de solidarité', group: 'Collaborateurs', description: 'Identifier les besoins et organiser des actions d’entraide au bénéfice des personnes.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85', imageAlt: 'Portrait illustratif', initials: 'AS' }
]

export const leadershipPreview = [pastoralCollege[0], pastoralCollege[1], pastoralTeam[0], collaborators[0]]

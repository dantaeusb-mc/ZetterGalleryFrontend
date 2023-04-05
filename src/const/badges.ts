export enum BadgeTier {
  Uncommon = 'uncommon',
  Rare = 'rare',
  Exceptional = 'exceptional',
  Epic = 'epic',
  Legendary = 'legendary',
}

export interface Badge {
  code: string;
  name: string;
  description: string;
  category: BadgeCategory;
  tier: BadgeTier;
}

export enum BadgeCategory {
  ANTI = 'anti',
  COLLECTOR = 'collector',
  COMMUNITY = 'community',
  EVENT = 'event',
  LEGACY = 'legacy',
  STYLE = 'style',
  SUPPORT = 'support',
}

export enum AntiBadge {
  BANNED = 'banned',
  DISQUALIFIED = 'disqualified',
}

export const AntiBadges: Record<AntiBadge, Badge> = {
  [AntiBadge.BANNED]: {
    code: AntiBadge.BANNED,
    name: 'Banned',
    description:
      'Get a ban for spamming paintings or publishing disturbing content.',
    category: BadgeCategory.ANTI,
    tier: BadgeTier.Rare,
  },
  [AntiBadge.DISQUALIFIED]: {
    code: AntiBadge.DISQUALIFIED,
    name: 'Disqualified',
    description:
      'Impersonate someone, publish another person’s art which you don’t have rights to',
    category: BadgeCategory.ANTI,
    tier: BadgeTier.Rare,
  },
};

export enum CollectorBadge {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  WELL_KNOWN = 'well-known',
  EXPERT = 'expert',
  INSANE = 'insane',
}

export const CollectorBadges: Record<CollectorBadge, Badge> = {
  [CollectorBadge.BEGINNER]: {
    code: CollectorBadge.BEGINNER,
    name: 'Beginner Collector',
    description: 'Buy 25 unique paintings',
    category: BadgeCategory.COLLECTOR,
    tier: BadgeTier.Uncommon,
  },
  [CollectorBadge.INTERMEDIATE]: {
    code: CollectorBadge.INTERMEDIATE,
    name: 'Intermediate Collector',
    description: 'Buy 100 unique paintings',
    category: BadgeCategory.COLLECTOR,
    tier: BadgeTier.Rare,
  },
  [CollectorBadge.WELL_KNOWN]: {
    code: CollectorBadge.WELL_KNOWN,
    name: 'Well-known Collector',
    description: 'Buy 250 unique paintings',
    category: BadgeCategory.COLLECTOR,
    tier: BadgeTier.Exceptional,
  },
  [CollectorBadge.EXPERT]: {
    code: CollectorBadge.EXPERT,
    name: 'Expert Collector',
    description: 'Buy 750 unique paintings',
    category: BadgeCategory.COLLECTOR,
    tier: BadgeTier.Epic,
  },
  [CollectorBadge.INSANE]: {
    code: CollectorBadge.INSANE,
    name: 'Insane Collector',
    description: 'Buy 1500 unique paintings',
    category: BadgeCategory.COLLECTOR,
    tier: BadgeTier.Legendary,
  },
};

export enum CommunityBadge {
  ARTIST_MAECENAS = 'artist-maecenas',
  HONORED_I = 'honored-i',
  HONORED_II = 'honored-ii',
  HONORED_III = 'honored-iii',
  HONORED_IV = 'honored-iv',
  HONORED_V = 'honored-v',
  NICHE_ARTIST = 'niche-artist',
  POPULAR_ARTIST = 'popular-artist',
  RISING_STAR = 'rising-star',
  STAR = 'star',
  POP_STAR = 'pop-star',
}

export const CommunityBadges: Record<CommunityBadge, Badge> = {
  [CommunityBadge.ARTIST_MAECENAS]: {
    code: CommunityBadge.ARTIST_MAECENAS,
    name: 'Artist-Maecenas',
    description:
      '“Donate” 10 of your existing paintings into Zetter Gallery pool.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Uncommon,
  },
  [CommunityBadge.HONORED_I]: {
    code: CommunityBadge.HONORED_I,
    name: 'Honored Artist I',
    description: '10 unique players added paintings to favorites.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Uncommon,
  },
  [CommunityBadge.HONORED_II]: {
    code: CommunityBadge.HONORED_II,
    name: 'Honored Artist II',
    description: '100 unique players added paintings to favorites.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Rare,
  },
  [CommunityBadge.HONORED_III]: {
    code: CommunityBadge.HONORED_III,
    name: 'Honored Artist III',
    description: '500 unique players added paintings to favorites.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Exceptional,
  },
  [CommunityBadge.HONORED_IV]: {
    code: CommunityBadge.HONORED_IV,
    name: 'Honored Artist IV',
    description: '2.5k unique players added paintings to favorites.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Epic,
  },
  [CommunityBadge.HONORED_V]: {
    code: CommunityBadge.HONORED_V,
    name: 'Honored Artist V',
    description: '10k unique players added paintings to favorites.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Legendary,
  },
  [CommunityBadge.NICHE_ARTIST]: {
    code: CommunityBadge.NICHE_ARTIST,
    name: 'Niche Artist',
    description: 'Merchants sold 1k paintings of yours.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Uncommon,
  },
  [CommunityBadge.POPULAR_ARTIST]: {
    code: CommunityBadge.POPULAR_ARTIST,
    name: 'Popular Artist',
    description: 'Merchants sold 5k paintings of yours.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Rare,
  },
  [CommunityBadge.RISING_STAR]: {
    code: CommunityBadge.RISING_STAR,
    name: 'Rising Star',
    description: 'Merchants sold 50k paintings of yours.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Exceptional,
  },
  [CommunityBadge.STAR]: {
    code: CommunityBadge.STAR,
    name: 'Star',
    description: 'Merchants sold 250k paintings of yours.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Epic,
  },
  [CommunityBadge.POP_STAR]: {
    code: CommunityBadge.POP_STAR,
    name: 'Pop Star',
    description: 'Merchants sold 1M paintings of yours.',
    category: BadgeCategory.COMMUNITY,
    tier: BadgeTier.Legendary,
  },
};

export enum EventBadge {
  THE_CENSORSHIP = 'the-censorship',
}

export const EventBadges: Record<EventBadge, Badge> = {
  [EventBadge.THE_CENSORSHIP]: {
    code: EventBadge.THE_CENSORSHIP,
    name: 'The Censorship',
    description: 'Participate in The Censorship event.',
    category: BadgeCategory.EVENT,
    tier: BadgeTier.Legendary,
  },
};

export enum LegacyBadge {
  AMERICAN = 'american',
  EUROPEAN = 'european',
  JAPANESE = 'japanese',
  MIDDLE_EASTERN = 'middle-eastern',
}

export const LegacyBadges: Record<LegacyBadge, Badge> = {
  [LegacyBadge.AMERICAN]: {
    code: LegacyBadge.AMERICAN,
    name: 'American',
    description: 'Publish 5 paintings in American style.',
    category: BadgeCategory.LEGACY,
    tier: BadgeTier.Exceptional,
  },
  [LegacyBadge.EUROPEAN]: {
    code: LegacyBadge.EUROPEAN,
    name: 'European',
    description: 'Publish 5 paintings in European style.',
    category: BadgeCategory.LEGACY,
    tier: BadgeTier.Exceptional,
  },
  [LegacyBadge.JAPANESE]: {
    code: LegacyBadge.JAPANESE,
    name: 'Japanese',
    description: 'Publish 5 paintings in Japanese style.',
    category: BadgeCategory.LEGACY,
    tier: BadgeTier.Exceptional,
  },
  [LegacyBadge.MIDDLE_EASTERN]: {
    code: LegacyBadge.MIDDLE_EASTERN,
    name: 'Middle Eastern',
    description: 'Publish 5 paintings in Middle Eastern style.',
    category: BadgeCategory.LEGACY,
    tier: BadgeTier.Exceptional,
  },
};

export enum StyleBadge {
  DARK = 'dark',
  HORROR = 'horror',
  IMPRESSIONISM = 'impressionism',
  LANDSCAPE = 'landscape',
  MANGA = 'manga',
  MINECRAFT = 'minecraft',
  POP_ART = 'pop-art',
  PORTRAIT = 'portrait',
  SCI_FI = 'sci-fi',
  SEA = 'sea',
  STILL_LIFE = 'still-life',
  SURREALISM = 'surrealism',
}

export const StyleBadges: Record<StyleBadge, Badge> = {
  [StyleBadge.DARK]: {
    code: StyleBadge.DARK,
    name: 'Dark Artist',
    description: 'Publish 5 paintings in Dark style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.HORROR]: {
    code: StyleBadge.HORROR,
    name: 'Horror Artist',
    description: 'Publish 5 paintings in Horror style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.IMPRESSIONISM]: {
    code: StyleBadge.IMPRESSIONISM,
    name: 'Impressionist',
    description: 'Publish 5 paintings in Impressionism style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.LANDSCAPE]: {
    code: StyleBadge.LANDSCAPE,
    name: 'Landscape Artist',
    description: 'Publish 5 landscape paintings.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.MANGA]: {
    code: StyleBadge.MANGA,
    name: 'Manga Artist',
    description: 'Publish 5 paintings in Manga style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.MINECRAFT]: {
    code: StyleBadge.MINECRAFT,
    name: 'Minecraft Artist',
    description: 'Publish 5 paintings in Minecraft style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.POP_ART]: {
    code: StyleBadge.POP_ART,
    name: 'Pop Art Artist',
    description: 'Publish 5 paintings in Pop Art style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.PORTRAIT]: {
    code: StyleBadge.PORTRAIT,
    name: 'Portrait Artist',
    description: 'Publish 5 portraits.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.SCI_FI]: {
    code: StyleBadge.SCI_FI,
    name: 'Sci-Fi Artist',
    description: 'Publish 5 paintings in Sci-Fi style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.SEA]: {
    code: StyleBadge.SEA,
    name: 'Sea Artist',
    description: 'Publish 5 paintings with sea or ships.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.STILL_LIFE]: {
    code: StyleBadge.STILL_LIFE,
    name: 'Still Life Artist',
    description: 'Publish 5 paintings in Still Life style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
  [StyleBadge.SURREALISM]: {
    code: StyleBadge.SURREALISM,
    name: 'Surrealist',
    description: 'Publish 5 paintings in Surrealism style.',
    category: BadgeCategory.STYLE,
    tier: BadgeTier.Exceptional,
  },
};

export enum SupportBadge {
  ALPHA = 'alpha',
  BETA = 'beta',
  RESILIENT = 'resilient',
}

export const SupportBadges: Record<SupportBadge, Badge> = {
  [SupportBadge.ALPHA]: {
    code: SupportBadge.ALPHA,
    name: 'Alpha',
    description: 'Registered when Zetter Gallery was in alpha stage.',
    category: BadgeCategory.SUPPORT,
    tier: BadgeTier.Exceptional,
  },
  [SupportBadge.BETA]: {
    code: SupportBadge.BETA,
    name: 'Beta',
    description: 'Registered when Zetter Gallery was in beta stage.',
    category: BadgeCategory.SUPPORT,
    tier: BadgeTier.Rare,
  },
  [SupportBadge.RESILIENT]: {
    code: SupportBadge.RESILIENT,
    name: 'Resilient',
    description: 'Was active for a year.',
    category: BadgeCategory.SUPPORT,
    tier: BadgeTier.Uncommon,
  },
};

export const Badges: Record<BadgeCategory, Record<string, Badge>> = {
  [BadgeCategory.ANTI]: AntiBadges,
  [BadgeCategory.COLLECTOR]: CollectorBadges,
  [BadgeCategory.COMMUNITY]: CommunityBadges,
  [BadgeCategory.EVENT]: EventBadges,
  [BadgeCategory.LEGACY]: LegacyBadges,
  [BadgeCategory.STYLE]: StyleBadges,
  [BadgeCategory.SUPPORT]: SupportBadges,
};

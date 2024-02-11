export class PlayerPreferencesResponseDto {
  playerUuid: string;
  isProfilePublic: boolean;
  paintingRatings: string[];
}

export class PlayerPreferencesUpToDateResponseDto {
  upToDate: boolean;
}

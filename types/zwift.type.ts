export interface EventSubgroup {
  id: number;
  name: string;
  description: string;
  label: number;
  subgroupLabel: string;
  rulesId: number;
  mapId: number;
  routeId: number;
  routeUrl: string | null;
  jerseyHash: number | null;
  bikeHash: number | null;
  startLocation: number;
  invitedLeaders: number[];
  invitedSweepers: number[];
  paceType: number;
  fromPaceValue: number;
  toPaceValue: number;
  fieldLimit: number | null;
  registrationStart: string;
  registrationEnd: string;
  lineUpStart: string;
  lineUpEnd: string;
  eventSubgroupStart: string;
  durationInSeconds: number;
  laps: number;
  distanceInMeters: number;
  signedUp: boolean;
  signupStatus: number;
  registered: boolean;
  registrationStatus: number;
  followeeEntrantCount: number;
  totalEntrantCount: number;
  followeeSignedUpCount: number;
  totalSignedUpCount: number;
  followeeJoinedCount: number;
  totalJoinedCount: number;
  auxiliaryUrl: string;
  rulesSet: string[];
  workoutHash: string | null;
  customUrl: string;
  overrideMapPreferences: boolean;
  tags: string[];
  lateJoinInMinutes: number | null;
  timeTrialOptions: TimeTrialOptions | null;
  accessValidationResult: AccessValidationResult | null;
  accessRules: AccessRule[];
  rangeAccessLabel: string | null;
  category: Category | null;
}

interface EventSeries {
  id: number;
  name: string;
  description: string | null;
  imported: boolean;
}

interface TimeTrialOptions {
  option1: string;
  option2: number;
}

interface AccessValidationResult {
  result: boolean;
  message: string;
}

interface AccessRule {
  ruleName: string;
  ruleValue: string;
}

interface RecurringOffset {
  offsetType: string;
  offsetValue: number;
}

export interface Event {
  id: number;
  worldId: number;
  name: string;
  description: string;
  shortName: string | null;
  shortDescription: string;
  imageUrl: string;
  rulesId: number;
  mapId: number;
  routeId: number;
  routeUrl: string | null;
  jerseyHash: number | null;
  bikeHash: number | null;
  visible: boolean;
  overrideMapPreferences: boolean;
  eventStart: string;
  durationInSeconds: number;
  distanceInMeters: number;
  laps: number;
  privateEvent: boolean;
  invisibleToNonParticipants: boolean;
  followeeEntrantCount: number;
  totalEntrantCount: number;
  followeeSignedUpCount: number;
  totalSignedUpCount: number;
  followeeJoinedCount: number;
  totalJoinedCount: number;
  eventSubgroups: EventSubgroup[];
  eventSeries: EventSeries | null;
  auxiliaryUrl: string;
  imageS3Name: string | null;
  imageS3Bucket: string | null;
  sport: string;
  cullingType: string;
  rulesSet: string[];
  recurring: boolean;
  recurringOffset: RecurringOffset | null;
  publishRecurring: boolean;
  parentId: number | null;
  type: string;
  workoutHash: string | null;
  customUrl: string;
  restricted: boolean;
  unlisted: boolean;
  eventSecret: string | null;
  accessExpression: string | null;
  tags: string[];
  lateJoinInMinutes: number | null;
  timeTrialOptions: TimeTrialOptions | null;
  microserviceName: string | null;
  microserviceExternalResourceId: string | null;
  microserviceEventVisibility: string | null;
  minGameVersion: string | null;
  recordable: boolean;
  imported: boolean;
  eventTemplateId: string | null;
  categoryEnforcement: boolean;
  rangeAccessLabel: string | null;
  eventType: string;
  eventStartTimeLocal: string | null;
}

type Route = {
  zwiftRouteId: number;
  name: string;
  leadInKm: number;
  distanceKm: number;
  elevationM: number;
  profile: string | null;
  world: string | null;
  zwiftinsiderUrl: string | null;
};

export type EventWithRoute = Event & {
  route: Route | null;
};

interface Privacy {
  approvalRequired: boolean;
  displayWeight: boolean;
  minor: boolean;
  privateMessaging: boolean;
  defaultFitnessDataPrivacy: boolean;
  suppressFollowerNotification: boolean;
  displayAge: boolean;
  defaultActivityPrivacy: string;
}

interface SocialFacts {
  profileId: number;
  followersCount: number;
  followeesCount: number;
  followeesInCommonWithLoggedInPlayer: number;
  followerStatusOfLoggedInPlayer: string;
  followeeStatusOfLoggedInPlayer: string | null;
  isFavoriteOfLoggedInPlayer: boolean;
}

interface PublicAttributes {
  [key: string]: string;
}

interface ProfilePropertyChange {
  propertyName: string;
  changeCount: number;
  maxChanges: number;
}

interface CompetitionMetrics {
  racingScore: number | null;
  category: Category;
  categoryWomen: Category;
}

export interface UserProfile {
  id: number;
  publicId: string;
  firstName: string;
  lastName: string;
  male: boolean;
  eventCategory: string;
  imageSrc: string;
  imageSrcLarge: string;
  playerType: string;
  countryAlpha3: string;
  countryCode: number;
  useMetric: boolean;
  riding: boolean;
  privacy: Privacy;
  socialFacts: SocialFacts;
  worldId: number;
  enrolledZwiftAcademy: boolean;
  playerTypeId: number;
  playerSubTypeId: number | null;
  currentActivityId: number | null;
  likelyInGame: boolean;
  address: string | null;
  age: number;
  bodyType: number;
  connectedToStrava: boolean;
  connectedToTrainingPeaks: boolean;
  connectedToTodaysPlan: boolean;
  connectedToUnderArmour: boolean;
  connectedToWithings: boolean;
  connectedToFitbit: boolean;
  connectedToGarmin: boolean;
  connectedToWahoo: boolean;
  connectedToRuntastic: boolean;
  connectedToZwiftPower: boolean;
  stravaPremium: boolean;
  bt: string | null;
  dob: string | null;
  emailAddress: string | null;
  height: number;
  location: string;
  preferredLanguage: string;
  mixpanelDistinctId: string;
  profileChanges: boolean;
  weight: number;
  b: boolean;
  createdOn: string;
  source: string;
  origin: string | null;
  launchedGameClient: string;
  ftp: number;
  userAgent: string;
  runTime1miInSeconds: number;
  runTime5kmInSeconds: number;
  runTime10kmInSeconds: number;
  runTimeHalfMarathonInSeconds: number;
  runTimeFullMarathonInSeconds: number;
  cyclingOrganization: string | null;
  licenseNumber: string | null;
  bigCommerceId: string | null;
  marketingConsent: string | null;
  publicAttributes: PublicAttributes;
  privateAttributes: Record<string, unknown>;
  achievementLevel: number;
  totalDistance: number;
  totalDistanceClimbed: number;
  totalTimeInMinutes: number;
  totalInKomJersey: number;
  totalInSprintersJersey: number;
  totalInOrangeJersey: number;
  totalWattHours: number;
  totalExperiencePoints: number;
  targetExperiencePoints: number;
  totalGold: number;
  runAchievementLevel: number;
  totalRunDistance: number;
  totalRunTimeInMinutes: number;
  totalRunExperiencePoints: number;
  targetRunExperiencePoints: number;
  totalRunCalories: number;
  powerSourceType: string;
  powerSourceModel: string;
  virtualBikeModel: string;
  numberOfFolloweesInCommon: number;
  affiliate: string | null;
  avantlinkId: string | null;
  fundraiserId: string | null;
  profilePropertyChanges: ProfilePropertyChange[];
  streaksCurrentLength: number;
  streaksMaxLength: number;
  streaksLastRideTimestamp: string;
  competitionMetrics: CompetitionMetrics | null;
}

export type Category = "A" | "B" | "C" | "D" | "E" | "unknown";

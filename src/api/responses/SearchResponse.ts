type ImageIndex = number;
type VehicleIndex = number;
type PathIndex = number;
type Path = string;
type PlaceIndex = number;
type LineName = string;
type HopIndex = number;
type TransferIndex = number;
type RouteIndex = number;
type SegmentIndex = number;
type OptionIndex = number;
type TransitionGuideIndex = number;

// eslint-disable-next-line no-shadow
enum VehicleKind {
  UNKNOWN = 'unknown',
  PLANE = 'plane',
  HELICOPTER = 'helicopter',
  CAR = 'car',
  BUS = 'bus',
  TAXI = 'taxi',
  RIDESHARE = 'rideshare',
  SHUTTLE = 'shuttle',
  TOWNCAR = 'towncar',
  TRAIN = 'train',
  TRAM = 'tram',
  CABLECAR = 'cablecar',
  SUBWAY = 'subway',
  FERRY = 'ferry',
  FOOT = 'foot',
  ANIMAL = 'animal',
  BICYCLE = 'bicycle'
}

// eslint-disable-next-line no-shadow
enum PlaceKind {
  UNKNOWN = 'unknown',
  CONTINENT = 'continent',
  COUNTRY = 'country',
  ADMIN3 = 'admin3',
  ADMIN2 = 'admin2',
  ADMIN1 = 'admin1',
  ISLAND = 'island',
  VILLAGE = 'village',
  TOWN = 'town',
  CITY = 'city',
  CAPITAL = 'capital',
  METROPOLIS = 'metropolis',
  MEGALOPOLIS = 'megalopolis',
  LANDMARK = 'landmark',
  PLACE = 'place',
  ROAD = 'road',
  ACCOMMODATION = 'accommodation',
  STATION = 'station',
  AIRPORT = 'airport',
  SEAPORT = 'seaport',
  SEA = 'sea',
  LAKE = 'lake',
  RIVER = 'river',
}

interface _SearchRequest {
  oName: string;
  dName: string;
  languageCode: string;
  currencyCode: string;
  requestId: string;
}

interface _AnalyticsDimensions {
  dimension1: string;
  dimension21: string;
  dimension22: string;
  dimension23: string;
  dimension24: string;
  dimension25: string;
  dimension26: string;
  dimension27: string;
  dimension28: string;
  dimension29: string;
  dimension3: string;
  dimension30: string;
  dimension31: string;
  dimension32: string;
  dimension33: string;
  dimension35: string;
  dimension36: string;
  dimension37: string;
  dimension38: string;
  dimension39: string;
  dimension40: string;
  dimension41: string;
  dimension42: string;
  dimension43: string;
  dimension44: string;
  dimension6: string;
  dimension8: string;
  metric2: number;
  metric3: number;
  metric4: number;
  groups: string;
  anonymize_ip: boolean;
  transport_type: string;
}

interface _Analytics {
  experiment_config: string;
  custom_dimensions: _AnalyticsDimensions;
}

interface CustomTargeting {
  bcufi: string[];
  origin_country: string[];
  destination_country: string[];
  origin_city: string[];
  destination_city: string[];
  dest_canonical: string[];
  dest_shortname: string[];
  origin_kind: string[];
  dest_kind: string[];
  trip_market_segment: string[];
}

interface _AdsConfig {
  custom_targeting: CustomTargeting;
}

interface TransitImage {
  title: string;
  credit: string;
  link: string;
  thumbnailUrl: string;
  width: number;
  height: number;
}

interface Vehicle {
  name: string;
  kind: VehicleKind;
}

interface Carrier {
  name: string;
  code: string;
  iconUrl: string;
  url: string;
  urlLabel: string;
  transitImages: ImageIndex[];
  phone: string;
  email: string;
  twitter: string;
}

interface Place {
  shortName: string;
  longName: string;
  canonicalName: string;
  kind: PlaceKind;
  lat: number;
  lng: number;
  radius: number;
  timeZone: string;
  regionCode: string;
  countryCode: string;
  code: string;
  transitImages: number[];
}

interface TimeZone {
  name: string;
  utcOffsetHours: number;
}

interface Color {
  name: string;
  lineColor: string;
  textColor: string;
}

interface Line {
  places: PlaceIndex[];
  names: LineName[];
  distance: number;
  path: PathIndex;
  colors: Color[];
}

interface TransitGuide {
  title: string;
  url: string;
  thumbnailUrl: string;
  description: string;
}

interface IndicativePrice {
  useInRange: boolean;
  currencyCode: string;
  price: number;
  priceLow?: number;
  priceHigh?: number;
  nativeCurrencyCode: string;
  nativePrice?: number;
  nativePriceLow?: number;
  nativePriceHigh?: number;
  className: string;
  isDisplay?: boolean;
}

interface ExternalLink {
  kind: string;
  text: string;
  url: string;
  displayUrl: string;
  urlName: string;
}

interface Debug {
  linesDebugUrl: string;
  editUrls: string[];
  elapsedTime: number;
  priceIsHistoric: boolean;
  pathCost: number;
  pathPolicyName: string;
}

interface BookingInfo {
  canPurchases: number;
  bookingTexts: string[];
}

interface Codeshare {
  carrier: number;
  code: string;
}

interface Hop {
  // debug: Partial<Debug>;
  line: number;
  marketingCarrier: number;
  vehicle: VehicleIndex;
  duration: number;
  frequency: number;
  operatingDays: number;
  additionalTexts: string[];
  indicativePrices: IndicativePrice[];
  transitImages: ImageIndex[];
  externalLinks: ExternalLink[];
  bookingInfo: BookingInfo;
  codeshares: Codeshare[];
}

interface Option {
  hops: HopIndex[];
  indicativePrices: IndicativePrice[];
  debug: Partial<Debug>;
  transfers: TransferIndex[];
}

interface PickerConfig {
  initialDateOffset: number;
  initialHourOffset: number;
}
interface Link {
  type: string;
  url: string;
  templatedParameters: string[];
  originCanonical: string;
  destinationCanonical: string;
  providers: string[];
  pickerConfig: PickerConfig;
}

interface AgeGroup {
  age: number;
  name: string;
  namePlural: string;
}
interface Configuration {
  bitfield: number;
  maxPassengers: number;
  ageGroups: AgeGroup[];
  defaultPassengerAge: number;
  ageGroupUrls: string[];
}
interface ScheduleInfo {
  configuration: Configuration;
  data: string;
}
interface AgeGroup2 {
  age: number;
  name: string;
  namePlural: string;
}

interface BookingInfo2 {
  configuration: Configuration;
  data: string;
}

interface Segment {
  options: OptionIndex[];
  isMajor: boolean;
  duration: number;
  links: Link[];
  indicativePrices: IndicativePrice[];
  scheduleInfo: ScheduleInfo;
  bookingInfo: BookingInfo2;
  transitGuides: TransitionGuideIndex[];
}

interface Alternative {
  firstSegment: number;
  lastSegment: number;
  segments: number[];
}

interface Bounds {
  tlLat: number;
  tlLng: number;
  brLat: number;
  brLng: number;
}
interface HotelInfo {
  type: string;
  centerPlace: number;
  bounds: Bounds;
  providerKind: string;
}

interface Route {
  // debug: Partial<Debug>;
  name: string;
  canonicalName: string;
  duration: number;
  segments: SegmentIndex[];
  transfers: TransferIndex[];
  alternatives: Alternative[];
  hotelInfo: HotelInfo;
  links: never[];
  indicativePrices: IndicativePrice[];
  places: PlaceIndex[];
  scheduleInfo: ScheduleInfo;
}

interface Result {
  originPlace: PlaceIndex;
  destinationPlace: PlaceIndex;
  routes: RouteIndex[];
  isSpecial: boolean;
}

export interface SearchResponse {
  // request: _SearchRequest;
  // adsConfig: _AdsConfig;
  // analytics: _Analytics;
  // debug: Partial<Debug>  ;
  carriers: Carrier[];
  hops: Hop[];
  lines: Line[];
  options: Option[];
  places: Place[];
  result: Result;
  routes: Route[];
  paths: Path[];
  segments: Segment[];
  timeZones: TimeZone[];
  transitGuides: TransitGuide[];
  transitImages: TransitImage[];
  vehicles: Vehicle[];
}

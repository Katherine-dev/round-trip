interface AutocompleteRequest {
  query: string;
  languageCode: string;
}

interface Place {
  kind: string;
  kinds: Array<string>;
  shortName: string;
  longName: string;
  canonicalName: string;
}

export interface AutocompleteResponse {
  request: AutocompleteRequest;
  results: Array<Place> ;
}

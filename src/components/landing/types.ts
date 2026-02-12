export type Chapter = {
  id: string;
  name: string;
  city: string;
  country: string;
  signatureWork: string[];
};

export type ImpactData = {
  chapterId: string;
  metrics: {
    eventsHosted: string;
    participantsReached: string;
    fundsRaised: string;
    partnerships: string;
  };
  highlights: string[];
  gallery: { caption: string }[];
};

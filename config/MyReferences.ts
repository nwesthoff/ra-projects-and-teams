const myReferences: AcademicRef[] = [
  {
    citationKey: "shapeUp",
    entryType: "TRUSTED",
    entryTags: {
      author: "Singer and Basecamp",
      year: "2019",
      inBib:
        "Singer, R. and Basecamp (2019). Shape Up: Stop Running in Circles and Ship Work that Matters. [online] Shape Up. Available at: https://basecamp.com/shapeup/webbook [Accessed 25 Jun. 2020].",
    },
  },
  {
    citationKey: "spotifyCulture",
    entryType: "TRUSTED",
    entryTags: {
      author: "Kniberg and Spotify",
      year: "2014",
      inBib:
        "Kniberg, H. and Spotify (2014). Spotify Engineering Culture. [online] Spotify Engineering. Available at: https://engineering.atspotify.com/2014/03/27/spotify-engineering-culture-part-1/ [Accessed 25 Jun. 2020].",
    },
  },
];

export interface AcademicRef {
  citationKey: string;
  entryType: "TRUSTED" | "TRADEMAG" | "ACADEMIC";
  entryTags: {
    author: string;
    year: string;
    inBib: string;
  };
}

export default myReferences;

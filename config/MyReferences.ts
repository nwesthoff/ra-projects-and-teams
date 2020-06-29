const myReferences: AcademicRef[] = [
  {
    citationKey: "shapeUp",
    entryType: "TRUSTED",
    entryTags: {
      author: "Singer",
      year: "2019",
      inBib:
        "Singer, R. and Basecamp (2019). Shape Up: Stop Running in Circles and Ship Work that Matters. [online] Shape Up. Available at: https://basecamp.com/shapeup/webbook [Accessed 25 Jun. 2020].",
    },
  },
  {
    citationKey: "basecampComms",
    entryType: "TRUSTED",
    entryTags: {
      author: "Fried",
      year: "2019",
      inBib:
        "Fried, J. (2019). The Basecamp Guide to Internal Communication. [online] Basecamp. Available at: https://basecamp.com/guides/how-we-communicate [Accessed 29 Jun. 2020].",
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
  {
    citationKey: "agileDoberman",
    entryType: "TRUSTED",
    entryTags: {
      author: "Essnert, Muñoz and Frakes",
      year: "2020",
      inBib:
        "Essnert, V., Muñoz, J. and Frakes, M. (2020). Agile Beyond the Tools.",
    },
  },
  {
    citationKey: "agileManifesto",
    entryType: "TRUSTED",
    entryTags: {
      author: "Beck et al.",
      year: "2001",
      inBib:
        "Beck, K., Beedle, M., Bennekum, A. van, Cockburn, A., Cunningham, W., Fowler, M., Grenning, J., Highsmith, J., Hunt, A., Jeffries, R., Kern, J., Marick, B., Martin, R.C., Mellor, S., Schwaber, K., Sutherland, J. and Thomas, D. (2001). Manifesto for Agile Software Development. [online] Agilemanifesto.org. Available at: http://agilemanifesto.org/ [Accessed 28 Jun. 2020].",
    },
  },
  {
    citationKey: "daveLandis",
    entryType: "TRUSTED",
    entryTags: {
      author: "Landis",
      year: "2014",
      inBib:
        "Landis, D. (2014). What Does Lean UX Have That I don’t? [Part 1 of 3]. [online] Lithespeed. Available at: https://lithespeed.com/lean-ux-dont-part-1-3-2/ [Accessed 29 Jun. 2020].",
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

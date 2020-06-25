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

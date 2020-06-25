const myReferences: AcademicRef[] = [
  {
    citationKey: "ideationMetrics",
    entryType: "ACADEMIC",
    entryTags: {
      author: "Nelson et al.",
      year: "2009",
      inBib:
        "Nelson, B.A., Wilson, J.O., Rosen, D. and Yen, J. (2009). Refined metrics for measuring ideation effectiveness. Design Studies, 30(6), pp.737–743.",
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

const fortuneTeller = {
  year: [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
    2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044,
    2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
    2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068,
    2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080,
    2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092,
    2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104,
    2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116,
    2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128,
    2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140,
  ],
  day: ["morning", "afternoon", "evening", "night"],
  month: [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  death: [
    {
      where: "the park",
      how: "by tripping on steps and hitting your head",
    },
    {
      where: "the forest",
      how: "by getting stabbed to death",
    },
    {
      where: "the ocean",
      how: "by drowning",
    },
    {
      where: "the hospital",
      how: "by a disease",
    },
    {
      where: "your bed",
      how: "by having a heart attack",
    },
    {
      where: "your home",
      how: "of old age",
    },
    {
      where: "the street",
      how: "of a gun shot to the head",
    },
    {
      where: "the road",
      how: "by getting ran over by a car while walking",
    },
    {
      where: "the store",
      how: "of laughter",
    },
    {
      where: "the office",
      how: "of drinking too much water",
    },
  ],

  randomGenerateFortune(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  },

  whatYearWillIDie() {
    return this.randomGenerateFortune(this.year);
  },

  whichMonthWillIDie() {
    return this.randomGenerateFortune(this.month);
  },

  whatTimeOfDayDidIDie() {
    return this.randomGenerateFortune(this.day);
  },

  whereDidIDie() {
    const chooseDeath = this.randomGenerateFortune(this.death);
    return chooseDeath.where;
  },

  howDidIDie() {
    const chooseDeath = this.randomGenerateFortune(this.death);
    return chooseDeath.how;
  },

  tellMeAboutMyDeath() {
    let year = this.whatYearWillIDie();
    let month = this.whichMonthWillIDie();
    let day = this.whatTimeOfDayDidIDie();
    let where = this.whereDidIDie();
    let how = this.howDidIDie();
    if (where === "the ocean") {
      let indexOfOcean = this.death.indexOf((word) => word === "the ocean");
      let howOcean = this.death[indexOfOcean].how;
      return `In the ${day} of the month of ${month}, in ${year}. You will die ${howOcean} in ${where}.`;
    }
    return `In the ${day} of the month of ${month}, in ${year}. You will die ${how} in ${where}.`;
  },
};

// console.log(fortuneTeller.whatTimeOfDayDidIDie());
// console.log(fortuneTeller.whichMonthWillIDie());
// console.log(fortuneTeller.whatYearWillIDie());
// console.log(fortuneTeller.whereDidIDie());
// console.log(fortuneTeller.howDidIDie());
console.log(fortuneTeller.tellMeAboutMyDeath());

// Course manifest: every lesson of the original course and the data file (if already converted).
window.COURSE = {
  lessons: {},
  manifest: [
    { n: 1, file: 'data/lekcija_1.js' },
    { n: 2, file: 'data/lekcija_2.js' },
    { n: 3, file: 'data/lekcija_3.js' }, { n: 4, file: 'data/lekcija_4.js' }, { n: 5, file: 'data/lekcija_5.js' }, { n: 6, file: 'data/lekcija_6.js' }, { n: 7, file: 'data/lekcija_7.js' }, { n: 8, file: 'data/lekcija_8.js' }, { n: 9, file: 'data/lekcija_9.js' }, { n: 10, file: 'data/lekcija_10.js' },
    { n: 11, file: 'data/lekcija_11.js' }, { n: 12, file: 'data/lekcija_12.js' }, { n: 13, file: 'data/lekcija_13.js' }, { n: 14, file: 'data/lekcija_14.js' }, { n: 15, file: 'data/lekcija_15.js' }, { n: 16, file: 'data/lekcija_16.js' }, { n: 17, file: 'data/lekcija_17.js' }, { n: 18, file: 'data/lekcija_18.js' }, { n: 19, file: 'data/lekcija_19.js' }, { n: 20, file: 'data/lekcija_20.js' },
    { n: 21, file: 'data/lekcija_21.js' }, { n: 22, file: 'data/lekcija_22.js' }, { n: 23, file: 'data/lekcija_23.js' }, { n: 24, file: 'data/lekcija_24.js' }, { n: 25, file: 'data/lekcija_25.js' }, { n: 26, file: 'data/lekcija_26.js' }, { n: 27, file: 'data/lekcija_27.js' }, { n: 28, file: 'data/lekcija_28.js' }, { n: 29, file: 'data/lekcija_29.js' }, { n: 30, file: 'data/lekcija_30.js' }
  ],
  register: function (lesson) { this.lessons[lesson.n] = lesson; }
};

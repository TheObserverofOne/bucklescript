'use strict';

var Mt                      = require("./mt");
var $$Array                 = require("../../lib/js/array");
var Block                   = require("../../lib/js/block");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions");

var suites = [/* [] */0];

var test_id = [0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* :: */[
    /* tuple */[
      loc + (" id " + test_id[0]),
      function () {
        return /* Eq */Block.__(0, [
                  x,
                  y
                ]);
      }
    ],
    suites[0]
  ];
  return /* () */0;
}

function convert(s) {
  return $$Array.to_list(Array.from(s, function (x) {
                  var match = x.codePointAt(0);
                  if (match !== undefined) {
                    return match;
                  }
                  else {
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "chn_test.ml",
                            13,
                            18
                          ]
                        ];
                  }
                }));
}

eq('File "chn_test.ml", line 18, characters 7-14', convert("*j"), /* :: */[
      27721,
      /* :: */[
        23383,
        /* :: */[
          26159,
          /* :: */[
            19990,
            /* :: */[
              30028,
              /* :: */[
                19978,
                /* :: */[
                  26368,
                  /* :: */[
                    32654,
                    /* :: */[
                      20029,
                      /* :: */[
                        30340,
                        /* :: */[
                          99,
                          /* :: */[
                            104,
                            /* :: */[
                              97,
                              /* :: */[
                                114,
                                /* :: */[
                                  97,
                                  /* :: */[
                                    99,
                                    /* :: */[
                                      116,
                                      /* :: */[
                                        101,
                                        /* :: */[
                                          114,
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

eq('File "chn_test.ml", line 39, characters 5-12', convert("*j"), /* :: */[
      63,
      /* :: */[
        63,
        /* :: */[
          97,
          /* [] */0
        ]
      ]
    ]);

eq('File "chn_test.ml", line 41, characters 5-12', convert("*j"), /* :: */[
      63,
      /* :: */[
        63,
        /* :: */[
          97,
          /* [] */0
        ]
      ]
    ]);

eq('File "chn_test.ml", line 43, characters 5-12', convert("*j"), /* :: */[
      63,
      /* :: */[
        63,
        /* :: */[
          97,
          /* [] */0
        ]
      ]
    ]);

eq('File "chn_test.ml", line 45, characters 5-12', convert("*j"), /* :: */[
      128640,
      /* :: */[
        128640,
        /* :: */[
          97,
          /* [] */0
        ]
      ]
    ]);

eq('File "chn_test.ml", line 47, characters 5-12', convert("*j"), /* :: */[
      128640,
      /* :: */[
        97,
        /* [] */0
      ]
    ]);

eq('File "chn_test.ml", line 49, characters 5-12', convert("*j"), /* :: */[
      128640,
      /* :: */[
        63,
        /* [] */0
      ]
    ]);

eq('File "chn_test.ml", line 54, characters 5-12', convert("*j"), /* :: */[
      128640,
      /* :: */[
        128640,
        /* :: */[
          97,
          /* [] */0
        ]
      ]
    ]);

eq('File "chn_test.ml", line 57, characters 5-12', 14, 3);

eq('File "chn_test.ml", line 58, characters 5-12', convert("*j"), /* :: */[
      128640,
      /* [] */0
    ]);

eq('File "chn_test.ml", line 59, characters 5-12', convert("*j"), /* :: */[
      128640,
      /* :: */[
        128640,
        /* [] */0
      ]
    ]);

eq('File "chn_test.ml", line 60, characters 5-12', convert("*j"), /* :: */[
      32,
      /* :: */[
        8,
        /* :: */[
          9,
          /* :: */[
            10,
            /* :: */[
              11,
              /* :: */[
                12,
                /* :: */[
                  13,
                  /* :: */[
                    97,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

eq('File "chn_test.ml", line 67, characters 6-13', convert("*j"), /* :: */[
      32,
      /* :: */[
        8,
        /* :: */[
          9,
          /* :: */[
            10,
            /* :: */[
              11,
              /* :: */[
                12,
                /* :: */[
                  13,
                  /* :: */[
                    34,
                    /* :: */[
                      39,
                      /* :: */[
                        92,
                        /* :: */[
                          0,
                          /* :: */[
                            97,
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

Mt.from_pair_suites("chn_test.ml", suites[0]);

exports.suites  = suites;
exports.test_id = test_id;
exports.eq      = eq;
exports.convert = convert;
/*  Not a pure module */
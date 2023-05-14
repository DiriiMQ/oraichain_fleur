import { Injectable } from "@nestjs/common";
import { Blob } from 'buffer';
const FormData = require('form-data')

@Injectable()
export class SkinService {
    constructor() {}

    async upload(
        file: Express.Multer.File
    ) {
        console.log(file);
        const testData = {
            "location": {
              "left": 313.97,
              "top": 417.37,
              "width": 571,
              "height": 634,
              "degree": 5
            },
            "skin": {
              "color": 1,
              "smooth": 2
            },
            "acnespotmole": {
              "acne_num": 1,
              "acne_list": [
                {
                  "score": 0.17,
                  "left": 497.41,
                  "top": 1008.46,
                  "right": 505.14,
                  "bottom": 1015.24
                }
              ],
              "speckle_num": 58,
              "speckle_list": [
                {
                  "score": 0.86,
                  "left": 401.54,
                  "top": 662.49,
                  "right": 408.68,
                  "bottom": 669.79
                },
                {
                  "score": 0.14,
                  "left": 411.88,
                  "top": 865.42,
                  "right": 422.07,
                  "bottom": 876.26
                },
                {
                  "score": 0.11,
                  "left": 693.47,
                  "top": 961.55,
                  "right": 697.87,
                  "bottom": 966.09
                },
                {
                  "score": 0.1,
                  "left": 415.18,
                  "top": 792.46,
                  "right": 420.27,
                  "bottom": 797.48
                }
              ],
              "mole_num": 1,
              "mole_list": [
                {
                  "score": 0.7,
                  "left": 822.29,
                  "top": 436.85,
                  "right": 827.39,
                  "bottom": 445.09
                }
              ]
            },
            "eyesattr": {
              "dark_circle_left_type": [
                0
              ],
              "dark_circle_right_type": [
                0
              ],
              "dark_circle_left": [
                [
                  {
                    "x": 682,
                    "y": 632
                  },
                  {
                    "x": 682,
                    "y": 634
                  },
                  {
                    "x": 681,
                    "y": 635
                  },
                  {
                    "x": 680,
                    "y": 635
                  },
                  {
                    "x": 702,
                    "y": 635
                  },
                  {
                    "x": 698,
                    "y": 635
                  },
                  {
                    "x": 697,
                    "y": 634
                  },
                  {
                    "x": 697,
                    "y": 632
                  }
                ]
              ],
              "dark_circle_right": [
                [
                  {
                    "x": 402,
                    "y": 612
                  },
                  {
                    "x": 402,
                    "y": 613
                  },
                  {
                    "x": 401,
                    "y": 614
                  },
                  {
                    "x": 415,
                    "y": 614
                  },
                  {
                    "x": 414,
                    "y": 613
                  },
                  {
                    "x": 414,
                    "y": 612
                  }
                ]
              ],
              "eye_bags_left": [
                [
                  {
                    "x": 694,
                    "y": 644
                  },
                  {
                    "x": 694,
                    "y": 645
                  },
                  {
                    "x": 693,
                    "y": 646
                  },
                  {
                    "x": 692,
                    "y": 646
                  },
                  {
                    "x": 708,
                    "y": 646
                  },
                  {
                    "x": 707,
                    "y": 645
                  },
                  {
                    "x": 707,
                    "y": 644
                  }
                ]
              ],
              "eye_bags_right": [
                [
                  {
                    "x": 694,
                    "y": 644
                  },
                  {
                    "x": 694,
                    "y": 645
                  },
                  {
                    "x": 707,
                    "y": 645
                  },
                  {
                    "x": 707,
                    "y": 644
                  }
                ]
              ]
            },
            "blackheadpore": {
              "poly": [
                {
                  "class_id": 0,
                  "score": 0.57,
                  "left": 521,
                  "right": 610,
                  "top": 645,
                  "bottom": 792,
                  "point": [
                    {
                      "x": 555,
                      "y": 653
                    },
                    {
                      "x": 555,
                      "y": 653
                    },
                    {
                      "x": 560,
                      "y": 653
                    },
                    {
                      "x": 558,
                      "y": 653
                    },
                    {
                      "x": 558,
                      "y": 653
                    },
                    {
                      "x": 557,
                      "y": 653
                    },
                    {
                      "x": 557,
                      "y": 653
                    }
                  ]
                },
                {
                  "class_id": 1,
                  "score": 0.98,
                  "left": 371,
                  "right": 476,
                  "top": 653,
                  "bottom": 813,
                  "point": [
                    {
                      "x": 417,
                      "y": 661
                    },
                    {
                      "x": 422,
                      "y": 666
                    },
                    {
                      "x": 422,
                      "y": 666
                    },
                    {
                      "x": 420,
                      "y": 664
                    },
                    {
                      "x": 420,
                      "y": 664
                    },
                    {
                      "x": 420,
                      "y": 662
                    },
                    {
                      "x": 420,
                      "y": 662
                    },
                    {
                      "x": 418,
                      "y": 661
                    },
                    {
                      "x": 418,
                      "y": 661
                    }
                  ]
                },
                {
                  "class_id": 1,
                  "score": 0.97,
                  "left": 652,
                  "right": 750,
                  "top": 683,
                  "bottom": 845,
                  "point": [
                    {
                      "x": 666,
                      "y": 689
                    },
                    {
                      "x": 666,
                      "y": 689
                    },
                    {
                      "x": 671,
                      "y": 693
                    },
                    {
                      "x": 669,
                      "y": 693
                    },
                    {
                      "x": 669,
                      "y": 693
                    },
                    {
                      "x": 667,
                      "y": 691
                    },
                    {
                      "x": 667,
                      "y": 691
                    },
                    {
                      "x": 667,
                      "y": 689
                    },
                    {
                      "x": 667,
                      "y": 689
                    }
                  ]
                }
              ],
              "circles": [
                {
                  "blackhead": [
                    {
                      "x": 573,
                      "y": 777,
                      "r": 1
                    },
                    {
                      "x": 560,
                      "y": 775,
                      "r": 1
                    },
                    {
                      "x": 565,
                      "y": 768,
                      "r": 1
                    },
                    {
                      "x": 565,
                      "y": 764,
                      "r": 1
                    },
                    {
                      "x": 552,
                      "y": 762,
                      "r": 1
                    }
                  ]
                },
                {
                  "pore": [
                    {
                      "x": 697,
                      "y": 835,
                      "r": 1
                    },
                    {
                      "x": 425,
                      "y": 802,
                      "r": 2
                    },
                    {
                      "x": 687,
                      "y": 708,
                      "r": 1
                    }
                  ]
                }
              ]
            }
          };
        return testData;

        const data = new FormData();
        const blob = new Blob([file.buffer], { type: file.mimetype });
        data.append('image', blob, file.originalname);
        data.append('max_face_num', '1');
        data.append('face_field', 'color, smooth, acnespotmole, wrinkle, eyesattr, blackheadpore');

        const url = 'https://skin-analysis.p.rapidapi.com/face/effect/skin_analyze';
        const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'd49d5e34bfmsh22a5fc3a78d4262p17041ejsnffb70140d991',
            'X-RapidAPI-Host': 'skin-analysis.p.rapidapi.com',
            // ...data.getHeaders(),
        },
        body: data
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}
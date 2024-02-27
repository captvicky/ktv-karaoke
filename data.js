var APP_DATA = {
  "scenes": [
    {
      "id": "0-halaman-parkir",
      "name": "Halaman Parkir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -0.24774775134228477,
        "pitch": -0.044591025385301464,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 0.06487550150210453,
          "pitch": 0.31711302615085124,
          "rotation": 0,
          "target": "1-pintu-masuk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pintu-masuk",
      "name": "Pintu Masuk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -0.3185312630876336,
        "pitch": -0.056481965488037744,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.8347113346679755,
          "pitch": 0.4001342497283886,
          "rotation": 0,
          "target": "0-halaman-parkir"
        },
        {
          "yaw": -0.28298088366005736,
          "pitch": 0.26436541367671396,
          "rotation": 0,
          "target": "2-lobby-spot-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6869578962840759,
          "pitch": -0.04305862745432165,
          "title": "Selamat Datang di Colour Karaoke",
          "text": "Jl. Karapitan No. 20, Paledang, Kec. Lengkong, Kota Bandung, Jawa Barat 40261<div><br></div><div>Colour Karaoke <b>Buka 24 Jam ya.</b></div>"
        }
      ]
    },
    {
      "id": "2-lobby-spot-1",
      "name": "Lobby spot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -0.5158595697806234,
        "pitch": 0.06065024899167781,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.034402738408696,
          "pitch": 0.3364200972467728,
          "rotation": 0,
          "target": "1-pintu-masuk"
        },
        {
          "yaw": -0.7356399130825011,
          "pitch": 0.324469613181563,
          "rotation": 0,
          "target": "3-lobby-spot-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.28950517618527094,
          "pitch": -0.059674128618135924,
          "title": "Pesan Ruanganmu di sini!",
          "text": "Kamu datang berapa orang ? Colour Karaoke menyediakan <b>Small Room</b> yang muat 2-4 orang, <b>Large Room</b> yang muat 6-8 orang, hingga<b> Royal Suite Room</b> yang bisa muat sampai 15 orang.<div><br></div><div>Kamu juga bisa booking ruanganya jauh-jauh hari ya, hubungi kami di nomor berikut untuk booking ruanganya.</div><div><br></div><div>(022) 4262676</div>"
        }
      ]
    },
    {
      "id": "3-lobby-spot-2",
      "name": "Lobby spot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 0.36644268068304875,
        "pitch": 0.005945470051365476,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.3434264400713536,
          "pitch": 0.2749084466439502,
          "rotation": 0,
          "target": "2-lobby-spot-1"
        },
        {
          "yaw": 0.28507548139624994,
          "pitch": 0.25744101609925174,
          "rotation": 5.497787143782138,
          "target": "4-lorong-bawah"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.10418895736438216,
          "pitch": 0.1860519548476134,
          "title": "Lobby",
          "text": "Sambil nunggu teman-teman kamu, kamu bisa nongkrong di sini ya sambil pesen minuman di bar."
        }
      ]
    },
    {
      "id": "4-lorong-bawah",
      "name": "Lorong Bawah",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 1.477381603297859,
        "pitch": 0.15022086006964663,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.0507445034372083,
          "pitch": 0.26755761697742386,
          "rotation": 0,
          "target": "3-lobby-spot-2"
        },
        {
          "yaw": 2.0164765307567123,
          "pitch": 0.43241576328420805,
          "rotation": 0,
          "target": "6-small-room"
        },
        {
          "yaw": 1.0137390232303822,
          "pitch": 0.24090459057990898,
          "rotation": 10.995574287564278,
          "target": "5-lorong-bawah-spot-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9433926082091748,
          "pitch": 0.015276639123181113,
          "title": "Small Room",
          "text": "Kamu datang bersama teman 2-4 orang ? ruangan ini cocok banget buat kalian!"
        },
        {
          "yaw": -1.3030564116568613,
          "pitch": -0.137101547234181,
          "title": "Toiletnya di sini ya.",
          "text": ""
        },
        {
          "yaw": 1.0003738376358697,
          "pitch": -0.006544305137785145,
          "title": "Yuk ke lantai 2 untuk liat ruangan yang lebih besar",
          "text": ""
        }
      ]
    },
    {
      "id": "5-lorong-bawah-spot-2",
      "name": "Lorong Bawah spot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -1.2854760816358457,
        "pitch": -0.10410658100073533,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.4498590520453227,
          "pitch": 0.3631920814160061,
          "rotation": 1.5707963267948966,
          "target": "4-lorong-bawah"
        },
        {
          "yaw": -1.2852274766211522,
          "pitch": -0.045352444005967385,
          "rotation": 0,
          "target": "7-lorong-tangga-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-small-room",
      "name": "Small Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -2.503451607824486,
        "pitch": 0.18675326372958523,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.6966363750170146,
          "pitch": 0.3424988354025409,
          "rotation": 0,
          "target": "4-lorong-bawah"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lorong-tangga-",
      "name": "Lorong Tangga ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 0.02081903680311825,
        "pitch": -0.05648196548803952,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.497277968840816,
          "pitch": 0.6874107813723107,
          "rotation": 0,
          "target": "5-lorong-bawah-spot-2"
        },
        {
          "yaw": 0.03906652028197044,
          "pitch": -0.04204745838087831,
          "rotation": 0,
          "target": "8-lorong-atas-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lorong-atas-",
      "name": "Lorong Atas ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -0.08743995457307463,
        "pitch": 0.17539136651549825,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.7330676781999657,
          "pitch": 0.6417748419421976,
          "rotation": 0,
          "target": "7-lorong-tangga-"
        },
        {
          "yaw": 0.04557911399380821,
          "pitch": 0.4960929194292145,
          "rotation": 0,
          "target": "9-lorong-atas-spot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lorong-atas-spot-2",
      "name": "Lorong Atas spot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 3.0771128967206387,
        "pitch": 0.09639756383391429,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.8683535439486096,
          "pitch": 0.41974025875819976,
          "rotation": 0,
          "target": "8-lorong-atas-"
        },
        {
          "yaw": 3.1034680316982843,
          "pitch": 0.4676804758315214,
          "rotation": 0,
          "target": "10-lorong-atas-spot-3"
        },
        {
          "yaw": -0.0131972693338831,
          "pitch": 0.39862361406976277,
          "rotation": 0,
          "target": "12-lorong-atas-spot-5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7196274718002229,
          "pitch": -0.055763509377216636,
          "title": "Toiletnya di Sebelah Sini Ya.",
          "text": ""
        }
      ]
    },
    {
      "id": "10-lorong-atas-spot-3",
      "name": "Lorong Atas spot 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -0.01040951840155735,
        "pitch": 0.11296393097607904,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.0028633845893964,
          "pitch": 0.5564140596005291,
          "rotation": 0,
          "target": "8-lorong-atas-"
        },
        {
          "yaw": 0.8050401410966792,
          "pitch": 0.43371171794936636,
          "rotation": 5.497787143782138,
          "target": "13-large-room-1"
        },
        {
          "yaw": 0.025844773418951306,
          "pitch": 0.3821590859723969,
          "rotation": 0,
          "target": "11-lorong-atas-spot-4"
        },
        {
          "yaw": 3.0792674258183963,
          "pitch": 0.5913212302994655,
          "rotation": 0,
          "target": "9-lorong-atas-spot-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8157604001370462,
          "pitch": 0.008006506792288093,
          "title": "Large Room",
          "text": "Kamu datang bersama teman 6-8 orang ? nih ruangan yang cocok buat kalian."
        },
        {
          "yaw": 0.029259748849051803,
          "pitch": 0.11457416751514415,
          "title": "Royal Suite Room",
          "text": "Nah buat kamu yang nyari ruangan untuk dangdutan rame-rame bersama teman kamu, Royal Suite Room ini cocok banget buat kalian! Bisa muat 15 orang loh."
        }
      ]
    },
    {
      "id": "11-lorong-atas-spot-4",
      "name": "Lorong Atas spot 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 2.5101034679454166,
        "pitch": 0.07433701347931176,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 0.03838297357928866,
          "pitch": 0.32480127654155844,
          "rotation": 0,
          "target": "10-lorong-atas-spot-3"
        },
        {
          "yaw": 2.475419129211833,
          "pitch": 0.3519673508143306,
          "rotation": 0.7853981633974483,
          "target": "16-royal-suite-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4717329945093276,
          "pitch": -0.02878228484920342,
          "title": "Toiletnya di Sini Ya.",
          "text": ""
        }
      ]
    },
    {
      "id": "12-lorong-atas-spot-5",
      "name": "Lorong Atas spot 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 0.01665522944249176,
        "pitch": 0.08619398663982025,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.40246774776964145,
          "pitch": 0.4016869605017561,
          "rotation": 0,
          "target": "15-large-room-3"
        },
        {
          "yaw": 3.0266464019432533,
          "pitch": 0.42698909319292966,
          "rotation": 0,
          "target": "9-lorong-atas-spot-2"
        },
        {
          "yaw": 0.41543079167594854,
          "pitch": 0.40108885732017185,
          "rotation": 0,
          "target": "14-large-room-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.00223943560529527,
          "pitch": 0.0040253909556415834,
          "title": "Large Room&nbsp;",
          "text": "Untuk kamu yang datang bersama teman 6-8 orang, ini ruangan lain dari Large Room ya."
        }
      ]
    },
    {
      "id": "13-large-room-1",
      "name": "Large Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 3.1158762496626506,
        "pitch": 0.17595673608535733,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 0.7851528633842051,
          "pitch": 0.4165388443813747,
          "rotation": 0,
          "target": "10-lorong-atas-spot-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-large-room-2",
      "name": "Large Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 1.2421446812302523,
        "pitch": -0.00007821612143033008,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.5352367299798573,
          "pitch": 0.3994840010285188,
          "rotation": 0,
          "target": "12-lorong-atas-spot-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-large-room-3",
      "name": "Large Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 3.128302030451879,
        "pitch": -0.11396686599383621,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.000431173064076,
          "pitch": 0.3793397094092743,
          "rotation": 0,
          "target": "12-lorong-atas-spot-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-royal-suite-room",
      "name": "Royal Suite Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 2.823193123628272,
        "pitch": 0.03846749036606667,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.3808309718584564,
          "pitch": 0.340287962006375,
          "rotation": 0.7853981633974483,
          "target": "11-lorong-atas-spot-4"
        },
        {
          "yaw": 2.570207153805237,
          "pitch": 0.45144069617651716,
          "rotation": 0,
          "target": "19-royal-suite-room-spot-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-royal-suite-room-spot-2",
      "name": "Royal Suite Room spot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -3.095176256136625,
        "pitch": 0.10876712858686943,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.0828815512228296,
          "pitch": 0.5785142107208898,
          "rotation": 0,
          "target": "19-royal-suite-room-spot-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-royal-suite-room-spot-3",
      "name": "Royal Suite Room spot 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 0.7419781237070744,
        "pitch": 0.12723347889833114,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.4870563886902266,
          "pitch": 0.3910400180246967,
          "rotation": 0,
          "target": "19-royal-suite-room-spot-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-royal-suite-room-spot-4",
      "name": "Royal Suite Room spot 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -3.13865462265718,
        "pitch": 0.14923923300773723,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 3.134465725789001,
          "pitch": 0.31073366389858315,
          "rotation": 0,
          "target": "17-royal-suite-room-spot-2"
        },
        {
          "yaw": -1.4032745549501016,
          "pitch": 0.4582597997596647,
          "rotation": 0,
          "target": "16-royal-suite-room"
        },
        {
          "yaw": 1.3381976476133026,
          "pitch": 0.4196561189968726,
          "rotation": 0,
          "target": "18-royal-suite-room-spot-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Colour KTV",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

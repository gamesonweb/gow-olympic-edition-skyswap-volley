let BotStrongModel = {
    "nodes": [
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 0
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 1
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 2
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 3
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 4
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 5
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 6
        },
        {
            "bias": 0,
            "type": "input",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 7
        },
        {
            "bias": 1.1497732157027596,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 8
        },
        {
            "bias": -0.05800013848776722,
            "type": "hidden",
            "squash": "GAUSSIAN",
            "mask": 1,
            "index": 9
        },
        {
            "bias": 0.3042203504368636,
            "type": "hidden",
            "squash": "GAUSSIAN",
            "mask": 1,
            "index": 10
        },
        {
            "bias": -0.1377737236864273,
            "type": "hidden",
            "squash": "SELU",
            "mask": 1,
            "index": 11
        },
        {
            "bias": -0.07541797659188748,
            "type": "hidden",
            "squash": "IDENTITY",
            "mask": 1,
            "index": 12
        },
        {
            "bias": -0.7155198505179818,
            "type": "hidden",
            "squash": "BIPOLAR_SIGMOID",
            "mask": 1,
            "index": 13
        },
        {
            "bias": -0.0613222703083629,
            "type": "hidden",
            "squash": "SOFTSIGN",
            "mask": 1,
            "index": 14
        },
        {
            "bias": -0.027919405246249474,
            "type": "hidden",
            "squash": "ABSOLUTE",
            "mask": 1,
            "index": 15
        },
        {
            "bias": 0.061308515019644155,
            "type": "hidden",
            "squash": "ABSOLUTE",
            "mask": 1,
            "index": 16
        },
        {
            "bias": -0.06615562567529643,
            "type": "hidden",
            "squash": "RELU",
            "mask": 1,
            "index": 17
        },
        {
            "bias": -0.16340895469688124,
            "type": "hidden",
            "squash": "BIPOLAR_SIGMOID",
            "mask": 1,
            "index": 18
        },
        {
            "bias": -0.5235999228800245,
            "type": "hidden",
            "squash": "BENT_IDENTITY",
            "mask": 1,
            "index": 19
        },
        {
            "bias": 1.6417654808630855,
            "type": "hidden",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": 20
        },
        {
            "bias": 0.1536348958638992,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 21
        },
        {
            "bias": -1.0889897773867685,
            "type": "hidden",
            "squash": "TANH",
            "mask": 1,
            "index": 22
        },
        {
            "bias": -0.07984899633671727,
            "type": "hidden",
            "squash": "HARD_TANH",
            "mask": 1,
            "index": 23
        },
        {
            "bias": -0.09121819928199448,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 24
        },
        {
            "bias": 0.09201263760701192,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 25
        },
        {
            "bias": -0.16360761113950786,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 26
        }
    ],
    "connections": [
        {
            "weight": 0.7763556897207873,
            "from": 8,
            "to": 8,
            "gater": null
        },
        {
            "weight": 1,
            "from": 9,
            "to": 9,
            "gater": null
        },
        {
            "weight": 1,
            "from": 10,
            "to": 10,
            "gater": null
        },
        {
            "weight": 1,
            "from": 13,
            "to": 13,
            "gater": null
        },
        {
            "weight": 1,
            "from": 14,
            "to": 14,
            "gater": null
        },
        {
            "weight": 1,
            "from": 17,
            "to": 17,
            "gater": null
        },
        {
            "weight": 1.6139124567319678,
            "from": 20,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.7763556897207873,
            "from": 21,
            "to": 21,
            "gater": null
        },
        {
            "weight": 1.041875162800339,
            "from": 22,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.06519357883392751,
            "from": 26,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.0015631372250668046,
            "from": 26,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.07356446563684385,
            "from": 23,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 24,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.00362834212350327,
            "from": 25,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.005673811385765989,
            "from": 26,
            "to": 23,
            "gater": 25
        },
        {
            "weight": 0.004134439722635233,
            "from": 25,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.027762164050418342,
            "from": 26,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.06519357883392751,
            "from": 24,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.009516873639468806,
            "from": 25,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.39184605100781683,
            "from": 26,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.032115294382887155,
            "from": 24,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.08590913868166469,
            "from": 25,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.06844285601178264,
            "from": 26,
            "to": 20,
            "gater": 12
        },
        {
            "weight": 0.007349492153584686,
            "from": 21,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 22,
            "to": 23,
            "gater": 13
        },
        {
            "weight": -0.8130033539230933,
            "from": 23,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.04225109400546878,
            "from": 24,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.3456575522709552,
            "from": 25,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 20,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 21,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.007895450246367203,
            "from": 23,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.04225109400546878,
            "from": 24,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.0008263761789473606,
            "from": 26,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.00219638421169574,
            "from": 20,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.6203464465181832,
            "from": 21,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.059754381452577034,
            "from": 22,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.9254212975722051,
            "from": 23,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.08195606553136847,
            "from": 25,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.004423571575105173,
            "from": 18,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.05519045193596392,
            "from": 20,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.03640654303558244,
            "from": 22,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.010142206762160377,
            "from": 24,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.005242532295083313,
            "from": 26,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.027424767347778142,
            "from": 18,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.10872653596985452,
            "from": 20,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.06519357883392751,
            "from": 21,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.08195806067410892,
            "from": 23,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.05377858556642373,
            "from": 16,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.028212979795012097,
            "from": 18,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.05822514006695542,
            "from": 22,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.03946606339834208,
            "from": 23,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.05834108611846181,
            "from": 24,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.005001750955729634,
            "from": 26,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.0264412364250627,
            "from": 16,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.19299286992561174,
            "from": 18,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.05223419374780045,
            "from": 19,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.012978476654987595,
            "from": 21,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.001453065956556282,
            "from": 23,
            "to": 16,
            "gater": 16
        },
        {
            "weight": 0.2825148635699597,
            "from": 25,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.04819291854794008,
            "from": 26,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.9135420426120918,
            "from": 16,
            "to": 22,
            "gater": 20
        },
        {
            "weight": -0.08757980424017103,
            "from": 18,
            "to": 20,
            "gater": 22
        },
        {
            "weight": 0.06348124268469393,
            "from": 20,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.0020339115422648713,
            "from": 22,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.09589155579537176,
            "from": 24,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.0916092346714486,
            "from": 25,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.025839152050062084,
            "from": 26,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.0697259596630933,
            "from": 10,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.0008528031710057365,
            "from": 12,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.010626082641249382,
            "from": 13,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.0853897174886453,
            "from": 16,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.005928308220617989,
            "from": 21,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.18407191037877224,
            "from": 23,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.048507922467929454,
            "from": 24,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.006736221701344108,
            "from": 25,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.062191317237556026,
            "from": 26,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.017692703519423605,
            "from": 9,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.08376756469994176,
            "from": 10,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.019540958418978654,
            "from": 11,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.026394605040639618,
            "from": 13,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.0010718356290578546,
            "from": 20,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.08649984945077614,
            "from": 21,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.0020339115422648713,
            "from": 22,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.09054214775935927,
            "from": 23,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0663556262087849,
            "from": 24,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.09341928508987038,
            "from": 25,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.9908277794138529,
            "from": 26,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.005292363769761985,
            "from": 9,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.06128594196028181,
            "from": 10,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.01677675090926653,
            "from": 11,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.03485400387171192,
            "from": 12,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.09687978581259774,
            "from": 13,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.031643251949429727,
            "from": 16,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.021470116376258813,
            "from": 17,
            "to": 18,
            "gater": null
        },
        {
            "weight": 1.4029935527902038,
            "from": 21,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.07848679044825807,
            "from": 22,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.02412307712211348,
            "from": 23,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.05535957350038343,
            "from": 24,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.020926324328585988,
            "from": 25,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.06721207360932394,
            "from": 26,
            "to": 8,
            "gater": 24
        },
        {
            "weight": 2.3324013018559344,
            "from": 7,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.0284398011482013,
            "from": 9,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.018935840492036032,
            "from": 10,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.05139340463139783,
            "from": 11,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.09687978581259774,
            "from": 13,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.029919291330869374,
            "from": 16,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.05771587668363161,
            "from": 18,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.7122057344874051,
            "from": 20,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.09055394399850578,
            "from": 21,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0663556262087849,
            "from": 22,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.040106293174563185,
            "from": 23,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.05000503722623462,
            "from": 24,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.0755666084948807,
            "from": 25,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.0010888707919409352,
            "from": 6,
            "to": 26,
            "gater": 24
        },
        {
            "weight": 1.7625342782566884,
            "from": 7,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.020751639591377297,
            "from": 9,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.08668500633389595,
            "from": 10,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.061515301101334935,
            "from": 11,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.01918782627443974,
            "from": 12,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.09961761511206696,
            "from": 20,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.02412307712211348,
            "from": 21,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.08305307727683806,
            "from": 22,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.026630612440862886,
            "from": 23,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.08999068854484271,
            "from": 24,
            "to": 8,
            "gater": null
        },
        {
            "weight": 3.0531517398849104,
            "from": 5,
            "to": 26,
            "gater": null
        },
        {
            "weight": 2.9692240859630736,
            "from": 6,
            "to": 25,
            "gater": null
        },
        {
            "weight": 2.3324013018559344,
            "from": 7,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.007275864925138625,
            "from": 8,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.029305381608724673,
            "from": 9,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.016164926239399163,
            "from": 10,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.09184040384783426,
            "from": 11,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.053716865372246264,
            "from": 13,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.02919760370060187,
            "from": 18,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.0786925865728291,
            "from": 19,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0115534353188734,
            "from": 20,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.0814281632064276,
            "from": 21,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.8938054783048301,
            "from": 22,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.08292651621505498,
            "from": 23,
            "to": 8,
            "gater": null
        },
        {
            "weight": 3.0531517398849104,
            "from": 5,
            "to": 25,
            "gater": null
        },
        {
            "weight": 2.7887632079631404,
            "from": 6,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.04799031379117196,
            "from": 7,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.4990455597907182,
            "from": 8,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.0991707742186268,
            "from": 9,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.0598630528233243,
            "from": 10,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.03132257252318396,
            "from": 12,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.06856406717174646,
            "from": 13,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.01944450920772947,
            "from": 14,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.09004601791692099,
            "from": 18,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.014684863082032248,
            "from": 20,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.0067401611539890105,
            "from": 21,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.02963905194284759,
            "from": 22,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.6164923369607296,
            "from": 3,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.6218164411394866,
            "from": 4,
            "to": 25,
            "gater": 8
        },
        {
            "weight": 0.7235609955160847,
            "from": 5,
            "to": 24,
            "gater": null
        },
        {
            "weight": 2.7887632079631404,
            "from": 6,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.04799031379117196,
            "from": 7,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.07259362232592484,
            "from": 8,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.09347717012278825,
            "from": 9,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.01934459046423953,
            "from": 11,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.00128051660684525,
            "from": 13,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.6275387049969752,
            "from": 16,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.09825667109718136,
            "from": 18,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.09442637757863834,
            "from": 20,
            "to": 9,
            "gater": 25
        },
        {
            "weight": 0.9254212975722051,
            "from": 21,
            "to": 8,
            "gater": null
        },
        {
            "weight": 2.638004817566401,
            "from": 2,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.6164923369607296,
            "from": 3,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.6218164411394866,
            "from": 4,
            "to": 24,
            "gater": null
        },
        {
            "weight": 3.0531517398849104,
            "from": 5,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.24828517437952077,
            "from": 6,
            "to": 22,
            "gater": null
        },
        {
            "weight": 3.851146864647743,
            "from": 7,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.7688358011902214,
            "from": 8,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.05944076710203503,
            "from": 10,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.07158464433477336,
            "from": 12,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.033374909062357405,
            "from": 16,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.010570796914091712,
            "from": 17,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.02053163461618257,
            "from": 18,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.07564658849947645,
            "from": 20,
            "to": 8,
            "gater": 11
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 26,
            "gater": null
        },
        {
            "weight": 1.4521537667382285,
            "from": 2,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.6218164411394866,
            "from": 4,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.04282922325322454,
            "from": 5,
            "to": 22,
            "gater": null
        },
        {
            "weight": 1.365401832629086,
            "from": 6,
            "to": 21,
            "gater": 18
        },
        {
            "weight": 3.793390666579118,
            "from": 7,
            "to": 20,
            "gater": 18
        },
        {
            "weight": 0.05868421860861375,
            "from": 9,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.09187868888833926,
            "from": 11,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.0024305120111841882,
            "from": 16,
            "to": 11,
            "gater": 24
        },
        {
            "weight": 0.09442637757863834,
            "from": 18,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.9183617040326926,
            "from": 0,
            "to": 26,
            "gater": null
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 25,
            "gater": null
        },
        {
            "weight": 2.638004817566401,
            "from": 2,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.6164923369607296,
            "from": 3,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.08676626545915589,
            "from": 4,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.663076141290242,
            "from": 5,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.06619284924831162,
            "from": 6,
            "to": 20,
            "gater": 13
        },
        {
            "weight": -0.01121873685756851,
            "from": 8,
            "to": 18,
            "gater": 26
        },
        {
            "weight": -0.08033424115472076,
            "from": 10,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.00128051660684525,
            "from": 12,
            "to": 13,
            "gater": 24
        },
        {
            "weight": -0.01088066457091115,
            "from": 13,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.02973905046743619,
            "from": 16,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.8303569916203412,
            "from": 18,
            "to": 8,
            "gater": 8
        },
        {
            "weight": 0.3760228012766085,
            "from": 0,
            "to": 25,
            "gater": null
        },
        {
            "weight": 2.2106674722876622,
            "from": 1,
            "to": 24,
            "gater": 25
        },
        {
            "weight": -0.006754602689866079,
            "from": 2,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.07376212569904324,
            "from": 3,
            "to": 22,
            "gater": null
        },
        {
            "weight": 1.212675331713295,
            "from": 4,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.6905907986846441,
            "from": 5,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.006530940926729928,
            "from": 6,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.03477842336148035,
            "from": 7,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.03414034585781045,
            "from": 9,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.09187868888833926,
            "from": 11,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.07736888944863472,
            "from": 13,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.07460330424699163,
            "from": 16,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.9183617040326926,
            "from": 0,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.05232624522165494,
            "from": 1,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.023205701933729367,
            "from": 2,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.022422244356335594,
            "from": 4,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.013341678582414168,
            "from": 5,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.034963294149875035,
            "from": 6,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.6366961639978733,
            "from": 10,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.013792017053917194,
            "from": 12,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.010612044791709213,
            "from": 13,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.07036440394425086,
            "from": 14,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.3151988152571597,
            "from": 16,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.3760228012766085,
            "from": 0,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.05056173742834585,
            "from": 1,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.006754602689866079,
            "from": 2,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.013568318369414897,
            "from": 5,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.007472182940239019,
            "from": 7,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.09430161763744063,
            "from": 8,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.042245909475514154,
            "from": 9,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.053455870047068116,
            "from": 10,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.04158631063515217,
            "from": 12,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.07460330424699163,
            "from": 13,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.01726295097195782,
            "from": 0,
            "to": 22,
            "gater": null
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.09991055568751647,
            "from": 2,
            "to": 20,
            "gater": 16
        },
        {
            "weight": -0.09006836195353243,
            "from": 4,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.6661272172599131,
            "from": 6,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.0062812778166323885,
            "from": 8,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.05175070133440593,
            "from": 9,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.05116347184458045,
            "from": 10,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.03649800478604348,
            "from": 11,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.038655386329685286,
            "from": 12,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.039913689455547054,
            "from": 13,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.3760228012766085,
            "from": 0,
            "to": 21,
            "gater": 25
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.009152925511987986,
            "from": 3,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.04370671712318539,
            "from": 5,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.014292276156033429,
            "from": 6,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.007472182940239019,
            "from": 7,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.2210861218058213,
            "from": 8,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.08679220799150383,
            "from": 9,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.07728989960223004,
            "from": 11,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.03790820768266717,
            "from": 12,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.058273789725537095,
            "from": 0,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.0049375431861428815,
            "from": 2,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.0009467051238866847,
            "from": 4,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.7460857982563804,
            "from": 6,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.08725199584966431,
            "from": 7,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.0023600074444816155,
            "from": 8,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.021723109506839672,
            "from": 10,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.09734413536646072,
            "from": 11,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.09936411302283435,
            "from": 3,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.04370671712318539,
            "from": 5,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.03938726564878086,
            "from": 7,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.09305155170025464,
            "from": 8,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.05672843680507014,
            "from": 10,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.04709133200939686,
            "from": 0,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.08356019825702764,
            "from": 1,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.03545285640374085,
            "from": 2,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.046880572081791354,
            "from": 4,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.08232893711418399,
            "from": 5,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.013123454218969849,
            "from": 6,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.03938726564878086,
            "from": 7,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.03784777732025107,
            "from": 8,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.011470373481707735,
            "from": 9,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.027743900335439872,
            "from": 1,
            "to": 16,
            "gater": 20
        },
        {
            "weight": 0.09936411302283435,
            "from": 3,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.06602571447801689,
            "from": 4,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.07954842778005006,
            "from": 5,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.09147787039164178,
            "from": 6,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.005845640130504079,
            "from": 7,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.012248319018725876,
            "from": 0,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.09282998522959404,
            "from": 1,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.01917814588361652,
            "from": 2,
            "to": 13,
            "gater": 24
        },
        {
            "weight": 0.08543865275365645,
            "from": 3,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.0375903033785141,
            "from": 4,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.07869856258280677,
            "from": 5,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.012277688767205003,
            "from": 6,
            "to": 9,
            "gater": 20
        },
        {
            "weight": -0.8971248292049654,
            "from": 7,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.04500090119043416,
            "from": 1,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.08515393222605705,
            "from": 2,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.038592350847652834,
            "from": 3,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.017835013330157953,
            "from": 4,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.005475056366905887,
            "from": 5,
            "to": 9,
            "gater": null
        },
        {
            "weight": 1.0276041787155803,
            "from": 6,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.01544361360247723,
            "from": 0,
            "to": 13,
            "gater": 16
        },
        {
            "weight": 0.014747040625713831,
            "from": 1,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.04899519458298457,
            "from": 2,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.007101671793141445,
            "from": 3,
            "to": 10,
            "gater": 20
        },
        {
            "weight": 0.19405132776395378,
            "from": 4,
            "to": 9,
            "gater": null
        },
        {
            "weight": 1.1954764589013243,
            "from": 5,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.01282326387063848,
            "from": 1,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.046791446717513896,
            "from": 2,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.016765349543902713,
            "from": 3,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.03273023872830909,
            "from": 4,
            "to": 8,
            "gater": 16
        },
        {
            "weight": 0.020265023861968073,
            "from": 0,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.8200176468262808,
            "from": 1,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.08095676340337232,
            "from": 2,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.06759271596962901,
            "from": 0,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.0033934743149603153,
            "from": 1,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.6152017487914834,
            "from": 2,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.025490868770069286,
            "from": 0,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.04864949065325202,
            "from": 1,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.03949691857126442,
            "from": 0,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.0010287714133701414,
            "from": 11,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.011366637616564021,
            "from": 14,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.03774967892796002,
            "from": 14,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.08900287812895719,
            "from": 14,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.021676962534822847,
            "from": 26,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.05546274922227479,
            "from": 25,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.05995571314072601,
            "from": 15,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.056490512177934576,
            "from": 15,
            "to": 11,
            "gater": null
        }
    ],
    "input": 8,
    "output": 3,
    "dropout": 0
};

export default BotStrongModel;
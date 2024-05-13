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
            "bias": 1.1667206970794572,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 8
        },
        {
            "bias": -0.09121819928199448,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 9
        },
        {
            "bias": 0.04613728561283725,
            "type": "hidden",
            "squash": "GAUSSIAN",
            "mask": 1,
            "index": 10
        },
        {
            "bias": -0.1377737236864273,
            "type": "hidden",
            "squash": "IDENTITY",
            "mask": 1,
            "index": 11
        },
        {
            "bias": 0.4372126221367731,
            "type": "hidden",
            "squash": "SINUSOID",
            "mask": 1,
            "index": 12
        },
        {
            "bias": 0.9576070673803058,
            "type": "hidden",
            "squash": "GAUSSIAN",
            "mask": 1,
            "index": 13
        },
        {
            "bias": 0.09885134951513086,
            "type": "hidden",
            "squash": "BIPOLAR_SIGMOID",
            "mask": 1,
            "index": 14
        },
        {
            "bias": 2.5194772315312512,
            "type": "hidden",
            "squash": "STEP",
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
            "bias": 0.5900734734905019,
            "type": "hidden",
            "squash": "GAUSSIAN",
            "mask": 1,
            "index": 17
        },
        {
            "bias": -0.013710735464048801,
            "type": "hidden",
            "squash": "STEP",
            "mask": 1,
            "index": 18
        },
        {
            "bias": 0.5900734734905019,
            "type": "hidden",
            "squash": "GAUSSIAN",
            "mask": 1,
            "index": 19
        },
        {
            "bias": -0.06786950796868307,
            "type": "hidden",
            "squash": "SOFTSIGN",
            "mask": 1,
            "index": 20
        },
        {
            "bias": 0.1782220269166983,
            "type": "hidden",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": 21
        },
        {
            "bias": 2.630410057202502,
            "type": "hidden",
            "squash": "STEP",
            "mask": 1,
            "index": 22
        },
        {
            "bias": 0.1536348958638992,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 23
        },
        {
            "bias": -0.751135592511941,
            "type": "hidden",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": 24
        },
        {
            "bias": -0.07984899633671727,
            "type": "hidden",
            "squash": "HARD_TANH",
            "mask": 1,
            "index": 25
        },
        {
            "bias": -0.09121819928199448,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 26
        },
        {
            "bias": 0.09201263760701192,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 27
        },
        {
            "bias": -0.16360761113950786,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": 28
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
            "from": 12,
            "to": 12,
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
            "from": 15,
            "to": 15,
            "gater": null
        },
        {
            "weight": 1.8545244391644613,
            "from": 17,
            "to": 17,
            "gater": null
        },
        {
            "weight": 1,
            "from": 20,
            "to": 20,
            "gater": null
        },
        {
            "weight": 1,
            "from": 21,
            "to": 21,
            "gater": null
        },
        {
            "weight": 1.5337813704285934,
            "from": 22,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.7763556897207873,
            "from": 23,
            "to": 23,
            "gater": null
        },
        {
            "weight": 1.041875162800339,
            "from": 24,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.06519357883392751,
            "from": 28,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.032115294382887155,
            "from": 28,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.07356446563684385,
            "from": 25,
            "to": 28,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 26,
            "to": 27,
            "gater": null
        },
        {
            "weight": -0.00362834212350327,
            "from": 27,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.005673811385765989,
            "from": 28,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.004134439722635233,
            "from": 27,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.027762164050418342,
            "from": 28,
            "to": 24,
            "gater": 9
        },
        {
            "weight": 0.06519357883392751,
            "from": 26,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.009516873639468806,
            "from": 27,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.39184605100781683,
            "from": 28,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.00031901136922729556,
            "from": 24,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.032115294382887155,
            "from": 26,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.08590913868166469,
            "from": 27,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.06844285601178264,
            "from": 28,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
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
            "weight": -0.8130033539230933,
            "from": 25,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.04225109400546878,
            "from": 26,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.3456575522709552,
            "from": 27,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.05331394539273543,
            "from": 28,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 22,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.007349492153584686,
            "from": 23,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.007895450246367203,
            "from": 25,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.39075038272838225,
            "from": 26,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.08195806067410892,
            "from": 27,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.06547663210211413,
            "from": 28,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.00219638421169574,
            "from": 22,
            "to": 25,
            "gater": null
        },
        {
            "weight": 1.4291132254466683,
            "from": 23,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.059754381452577034,
            "from": 24,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.9254212975722051,
            "from": 25,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.06601986329774032,
            "from": 26,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.07600302604931666,
            "from": 27,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.03567155967408214,
            "from": 28,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.01919849209785167,
            "from": 18,
            "to": 28,
            "gater": null
        },
        {
            "weight": -0.0015853168460497058,
            "from": 21,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.05519045193596392,
            "from": 22,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.03640654303558244,
            "from": 24,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.06141945926225487,
            "from": 25,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.018431971093002722,
            "from": 26,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.08195606553136847,
            "from": 27,
            "to": 19,
            "gater": 8
        },
        {
            "weight": -0.011741584233152969,
            "from": 28,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.06219990680761209,
            "from": 17,
            "to": 28,
            "gater": null
        },
        {
            "weight": -0.07701349540273293,
            "from": 18,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.018516098659101005,
            "from": 19,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.06889908716725687,
            "from": 21,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.10872653596985452,
            "from": 22,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.5810708010911607,
            "from": 23,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.05683254531659185,
            "from": 24,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.04102589392040637,
            "from": 25,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.010142206762160377,
            "from": 26,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.002147020653845061,
            "from": 27,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.0020455272877642344,
            "from": 28,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.8398538139234418,
            "from": 17,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.02956540999844348,
            "from": 18,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.027424767347778142,
            "from": 19,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.08572226694978832,
            "from": 20,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.00921578517962969,
            "from": 21,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.05278312458282605,
            "from": 23,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.08130144959561197,
            "from": 24,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.08195806067410892,
            "from": 25,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.09993061785565924,
            "from": 26,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.01673239696726672,
            "from": 27,
            "to": 17,
            "gater": 16
        },
        {
            "weight": -0.005242532295083313,
            "from": 28,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.7286189389005415,
            "from": 17,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.02737427220980458,
            "from": 18,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.028212979795012097,
            "from": 19,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.0044832742910315415,
            "from": 20,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.037218062412952696,
            "from": 21,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.0722081081245074,
            "from": 22,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.07608013098050659,
            "from": 23,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.05822514006695542,
            "from": 24,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.09515788332827971,
            "from": 25,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.007555499109172942,
            "from": 26,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.001208421996062109,
            "from": 27,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.026911963557464266,
            "from": 28,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.05377858556642373,
            "from": 16,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.797603698726836,
            "from": 17,
            "to": 25,
            "gater": 12
        },
        {
            "weight": -0.5945467770820306,
            "from": 18,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.19299286992561174,
            "from": 19,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.007109119722983115,
            "from": 20,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.086444135418277,
            "from": 22,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.012978476654987595,
            "from": 23,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.018431971093002722,
            "from": 24,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.040645211346550615,
            "from": 25,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.05834108611846181,
            "from": 26,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.034106510763265305,
            "from": 27,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.005001750955729634,
            "from": 28,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.0008789581609996294,
            "from": 13,
            "to": 28,
            "gater": null
        },
        {
            "weight": -0.09687978581259774,
            "from": 16,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.018516098659101005,
            "from": 17,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.8864994578167915,
            "from": 18,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.08757980424017103,
            "from": 19,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.037218062412952696,
            "from": 20,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.026986686474321786,
            "from": 21,
            "to": 20,
            "gater": 19
        },
        {
            "weight": 0.06348124268469393,
            "from": 22,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.0008108902553476405,
            "from": 23,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.08055724959276978,
            "from": 24,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.001453065956556282,
            "from": 25,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.012741292457846679,
            "from": 26,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.7412467192361427,
            "from": 27,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.008418408597818589,
            "from": 28,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.018946406206123756,
            "from": 13,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.003837890220712653,
            "from": 15,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.9135420426120918,
            "from": 16,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.0786855792781938,
            "from": 17,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.17762336874793433,
            "from": 18,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.035272865857751065,
            "from": 19,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.08796858153780915,
            "from": 21,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.006579594678302408,
            "from": 22,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.06829706493238463,
            "from": 23,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.0020339115422648713,
            "from": 24,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.01673239696726672,
            "from": 25,
            "to": 15,
            "gater": 14
        },
        {
            "weight": 0.09589155579537176,
            "from": 26,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.8977507376348067,
            "from": 27,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.04029022918917233,
            "from": 28,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0000012127133050265915,
            "from": 13,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.010626082641249382,
            "from": 14,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.09040630548352194,
            "from": 15,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.0853897174886453,
            "from": 16,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.05454181129281399,
            "from": 17,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.002605328117868441,
            "from": 18,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.02135241475731467,
            "from": 19,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.00026787448503187705,
            "from": 20,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.007292930093162564,
            "from": 21,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.10531865279626458,
            "from": 22,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.005928308220617989,
            "from": 23,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.007555499109172942,
            "from": 24,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.18407191037877224,
            "from": 25,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.039083426428046686,
            "from": 26,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.0916092346714486,
            "from": 27,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.025839152050062084,
            "from": 28,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.0697259596630933,
            "from": 10,
            "to": 28,
            "gater": null
        },
        {
            "weight": -0.7524725468482757,
            "from": 12,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.05469988367333642,
            "from": 13,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.026394605040639618,
            "from": 14,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.06359949791910685,
            "from": 15,
            "to": 23,
            "gater": null
        },
        {
            "weight": 1.0008329319340414,
            "from": 16,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.023265223771357355,
            "from": 17,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.03226578278197488,
            "from": 18,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.0004966703306951842,
            "from": 20,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.07463213213283579,
            "from": 21,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.0010718356290578546,
            "from": 22,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.08649984945077614,
            "from": 23,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.0020339115422648713,
            "from": 24,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.08493334345500456,
            "from": 25,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.04029022918917233,
            "from": 26,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.006736221701344108,
            "from": 27,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.05535957350038343,
            "from": 28,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.017692703519423605,
            "from": 9,
            "to": 28,
            "gater": null
        },
        {
            "weight": 0.08376756469994176,
            "from": 10,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.019540958418978654,
            "from": 11,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.006490301700832687,
            "from": 12,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.030172585021607995,
            "from": 13,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.09687978581259774,
            "from": 14,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.08601668830413739,
            "from": 15,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.031643251949429727,
            "from": 16,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.09342769025577664,
            "from": 17,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.0651465377406682,
            "from": 18,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.05206461853486486,
            "from": 19,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.0501085875714689,
            "from": 20,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.05804482582456322,
            "from": 21,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.05305377788240456,
            "from": 22,
            "to": 15,
            "gater": null
        },
        {
            "weight": 1.4029935527902038,
            "from": 23,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.00008832349180014354,
            "from": 24,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.09054214775935927,
            "from": 25,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.04029022918917233,
            "from": 26,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.09341928508987038,
            "from": 27,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.9908277794138529,
            "from": 28,
            "to": 9,
            "gater": 16
        },
        {
            "weight": -0.9923326210953964,
            "from": 9,
            "to": 27,
            "gater": null
        },
        {
            "weight": -0.06128594196028181,
            "from": 10,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.01677675090926653,
            "from": 11,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.7524725468482757,
            "from": 12,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.00131741063338002,
            "from": 13,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.09687978581259774,
            "from": 14,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.032043697645946084,
            "from": 15,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.04364316652808471,
            "from": 16,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.021470116376258813,
            "from": 17,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.011029127241464251,
            "from": 19,
            "to": 17,
            "gater": 24
        },
        {
            "weight": 0.002715892470171302,
            "from": 20,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.0982394631797786,
            "from": 21,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.7122057344874051,
            "from": 22,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.08493334345500456,
            "from": 23,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.07848679044825807,
            "from": 24,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.04873025516678181,
            "from": 25,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.05535957350038343,
            "from": 26,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.020926324328585988,
            "from": 27,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.064643856663157,
            "from": 28,
            "to": 8,
            "gater": null
        },
        {
            "weight": 2.3324013018559344,
            "from": 7,
            "to": 28,
            "gater": null
        },
        {
            "weight": -0.020751639591377297,
            "from": 9,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.3097975272162897,
            "from": 10,
            "to": 25,
            "gater": 21
        },
        {
            "weight": 0.05139340463139783,
            "from": 11,
            "to": 24,
            "gater": 16
        },
        {
            "weight": 0.00025514995093427195,
            "from": 12,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.01669354876821623,
            "from": 13,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.34070764839520307,
            "from": 14,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.06590453586414013,
            "from": 15,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.029919291330869374,
            "from": 16,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.0918829718736685,
            "from": 17,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.07866206974171175,
            "from": 18,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.05771587668363161,
            "from": 19,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.09979944966813395,
            "from": 20,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.024463910529575597,
            "from": 21,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.08285733619140889,
            "from": 22,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.09055394399850578,
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
            "weight": -0.040106293174563185,
            "from": 25,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.05000503722623462,
            "from": 26,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.0755666084948807,
            "from": 27,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.0010888707919409352,
            "from": 6,
            "to": 28,
            "gater": null
        },
        {
            "weight": 1.7625342782566884,
            "from": 7,
            "to": 27,
            "gater": null
        },
        {
            "weight": -0.020751639591377297,
            "from": 9,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.029305381608724673,
            "from": 10,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.061515301101334935,
            "from": 11,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.14224581775166248,
            "from": 12,
            "to": 22,
            "gater": 27
        },
        {
            "weight": -0.6130128137339836,
            "from": 13,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.07369982378868137,
            "from": 14,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.023899634179947032,
            "from": 15,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.02854114015582497,
            "from": 16,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.0069253465082900895,
            "from": 18,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.02925795899043715,
            "from": 19,
            "to": 15,
            "gater": 20
        },
        {
            "weight": -0.048158244595953775,
            "from": 20,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.09230457008752979,
            "from": 21,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.0115534353188734,
            "from": 22,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0814281632064276,
            "from": 23,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.08305307727683806,
            "from": 24,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.09850334928728027,
            "from": 25,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.0031961026747810983,
            "from": 26,
            "to": 8,
            "gater": 11
        },
        {
            "weight": 3.0531517398849104,
            "from": 5,
            "to": 28,
            "gater": null
        },
        {
            "weight": 2.9692240859630736,
            "from": 6,
            "to": 27,
            "gater": null
        },
        {
            "weight": 2.3324013018559344,
            "from": 7,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.07259362232592484,
            "from": 8,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.029305381608724673,
            "from": 9,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.016164926239399163,
            "from": 10,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.09184040384783426,
            "from": 11,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.08239428594519557,
            "from": 12,
            "to": 21,
            "gater": 28
        },
        {
            "weight": -0.06494053811584313,
            "from": 13,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.053716865372246264,
            "from": 14,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.051336342589396504,
            "from": 15,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.04671285494244995,
            "from": 16,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.02529185552169326,
            "from": 17,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.05639141786306734,
            "from": 18,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.05804482582456322,
            "from": 19,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.010871634791319668,
            "from": 20,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.0786925865728291,
            "from": 21,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0115534353188734,
            "from": 22,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.6258979937547033,
            "from": 23,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.8938054783048301,
            "from": 24,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.08292651621505498,
            "from": 25,
            "to": 8,
            "gater": null
        },
        {
            "weight": 3.0531517398849104,
            "from": 5,
            "to": 27,
            "gater": null
        },
        {
            "weight": 2.7887632079631404,
            "from": 6,
            "to": 26,
            "gater": null
        },
        {
            "weight": -0.04799031379117196,
            "from": 7,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.4990455597907182,
            "from": 8,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.0991707742186268,
            "from": 9,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.0598630528233243,
            "from": 10,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.012135048700883028,
            "from": 11,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.08809479592080344,
            "from": 12,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.02626748122013943,
            "from": 13,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.05515280763525296,
            "from": 14,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.08697353499610228,
            "from": 15,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.45839100485171635,
            "from": 17,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.002625585552745141,
            "from": 18,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.08643341442628039,
            "from": 19,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.09587586421997188,
            "from": 20,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.05572334346732846,
            "from": 21,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.014684863082032248,
            "from": 22,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.0067401611539890105,
            "from": 23,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.07564658849947645,
            "from": 24,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.6164923369607296,
            "from": 3,
            "to": 28,
            "gater": null
        },
        {
            "weight": 0.6218164411394866,
            "from": 4,
            "to": 27,
            "gater": 8
        },
        {
            "weight": 0.7235609955160847,
            "from": 5,
            "to": 26,
            "gater": null
        },
        {
            "weight": 2.7887632079631404,
            "from": 6,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.04799031379117196,
            "from": 7,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.05249015977422264,
            "from": 8,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.27824255241772955,
            "from": 9,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.05944076710203503,
            "from": 10,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.023588107120324997,
            "from": 11,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.028756782359427996,
            "from": 12,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.14565374739073256,
            "from": 13,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.06856406717174646,
            "from": 14,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.01944450920772947,
            "from": 15,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.2288869547632185,
            "from": 16,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.01970913412160344,
            "from": 17,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.0996710639318232,
            "from": 18,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.09004601791692099,
            "from": 19,
            "to": 12,
            "gater": 28
        },
        {
            "weight": 0.006317173826779279,
            "from": 20,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.014684863082032248,
            "from": 21,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.09442637757863834,
            "from": 22,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.9254212975722051,
            "from": 23,
            "to": 8,
            "gater": null
        },
        {
            "weight": 2.638004817566401,
            "from": 2,
            "to": 28,
            "gater": null
        },
        {
            "weight": 0.6164923369607296,
            "from": 3,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.6218164411394866,
            "from": 4,
            "to": 26,
            "gater": null
        },
        {
            "weight": 3.0531517398849104,
            "from": 5,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.24828517437952077,
            "from": 6,
            "to": 24,
            "gater": null
        },
        {
            "weight": 3.851146864647743,
            "from": 7,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.9345260418783399,
            "from": 8,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.05868421860861375,
            "from": 9,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.08299034835666226,
            "from": 10,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.01934459046423953,
            "from": 11,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.06148162889737105,
            "from": 12,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.0869958812869228,
            "from": 13,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.00128051660684525,
            "from": 14,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.6275387049969752,
            "from": 16,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.032283933055840125,
            "from": 17,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.0156358976702434,
            "from": 18,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.010570796914091712,
            "from": 19,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.05766554113366418,
            "from": 20,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.04408121233527793,
            "from": 21,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.07564658849947645,
            "from": 22,
            "to": 8,
            "gater": null
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 28,
            "gater": null
        },
        {
            "weight": 1.4521537667382285,
            "from": 2,
            "to": 27,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.6218164411394866,
            "from": 4,
            "to": 25,
            "gater": 14
        },
        {
            "weight": -0.6905907986846441,
            "from": 5,
            "to": 24,
            "gater": null
        },
        {
            "weight": 1.365401832629086,
            "from": 6,
            "to": 23,
            "gater": 19
        },
        {
            "weight": 3.793390666579118,
            "from": 7,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.05249015977422264,
            "from": 8,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.002945270069202227,
            "from": 9,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.05944076710203503,
            "from": 10,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.023588107120324997,
            "from": 11,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.08632616142355842,
            "from": 12,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.028049391323370698,
            "from": 13,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.0008187591855555176,
            "from": 14,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.09804304122499441,
            "from": 15,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.04798017332260329,
            "from": 16,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.07910013301773633,
            "from": 17,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.04745300395959569,
            "from": 18,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.045290356914291646,
            "from": 19,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.06787255070346351,
            "from": 20,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.025727917685360646,
            "from": 21,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.9183617040326926,
            "from": 0,
            "to": 28,
            "gater": null
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 27,
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
            "weight": 0.8212856557921568,
            "from": 4,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.663076141290242,
            "from": 5,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.06619284924831162,
            "from": 6,
            "to": 22,
            "gater": 22
        },
        {
            "weight": -0.041466518565411725,
            "from": 7,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.06537313038830983,
            "from": 8,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.05868421860861375,
            "from": 9,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.06351873208313386,
            "from": 10,
            "to": 18,
            "gater": 21
        },
        {
            "weight": 0.5695517251460955,
            "from": 11,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.07158464433477336,
            "from": 12,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.0869958812869228,
            "from": 13,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.02923491859480852,
            "from": 15,
            "to": 13,
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
            "weight": 0.03474002330702136,
            "from": 18,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.09442637757863834,
            "from": 19,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.05577147158966042,
            "from": 20,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.3760228012766085,
            "from": 0,
            "to": 27,
            "gater": null
        },
        {
            "weight": 2.2106674722876622,
            "from": 1,
            "to": 26,
            "gater": 27
        },
        {
            "weight": -0.006754602689866079,
            "from": 2,
            "to": 25,
            "gater": null
        },
        {
            "weight": -0.07376212569904324,
            "from": 3,
            "to": 24,
            "gater": null
        },
        {
            "weight": 1.212675331713295,
            "from": 4,
            "to": 23,
            "gater": null
        },
        {
            "weight": -0.6905907986846441,
            "from": 5,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.06598386187514413,
            "from": 6,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.052926801009568536,
            "from": 7,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.01121873685756851,
            "from": 8,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.04572133700092356,
            "from": 9,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.060245387569844905,
            "from": 10,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.09187868888833926,
            "from": 11,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.05669747675939423,
            "from": 12,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.07272112740442371,
            "from": 13,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.09647360375725796,
            "from": 14,
            "to": 13,
            "gater": null
        },
        {
            "weight": -0.08711355117091518,
            "from": 15,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.0024305120111841882,
            "from": 16,
            "to": 11,
            "gater": 16
        },
        {
            "weight": 0.045290356914291646,
            "from": 17,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.030379036398798492,
            "from": 18,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.8303569916203412,
            "from": 19,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.9183617040326926,
            "from": 0,
            "to": 26,
            "gater": null
        },
        {
            "weight": 0.05232624522165494,
            "from": 1,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.023205701933729367,
            "from": 2,
            "to": 24,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.8212856557921568,
            "from": 4,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.07434801599260937,
            "from": 5,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.038600485434697684,
            "from": 6,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.03477842336148035,
            "from": 7,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.06191806157273577,
            "from": 8,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.03433596593578209,
            "from": 9,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.08033424115472076,
            "from": 10,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.07142623708726853,
            "from": 11,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.00128051660684525,
            "from": 12,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.01088066457091115,
            "from": 14,
            "to": 12,
            "gater": null
        },
        {
            "weight": 0.024061139478960353,
            "from": 15,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.02973905046743619,
            "from": 16,
            "to": 10,
            "gater": null
        },
        {
            "weight": 0.007534156534955858,
            "from": 17,
            "to": 9,
            "gater": null
        },
        {
            "weight": 1.0585682260967615,
            "from": 18,
            "to": 8,
            "gater": 10
        },
        {
            "weight": 0.3760228012766085,
            "from": 0,
            "to": 25,
            "gater": null
        },
        {
            "weight": 0.0017190182455195172,
            "from": 1,
            "to": 24,
            "gater": null
        },
        {
            "weight": -0.006754602689866079,
            "from": 2,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.0900140384819137,
            "from": 3,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.05340661423246909,
            "from": 4,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.18000733437336577,
            "from": 5,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.034963294149875035,
            "from": 6,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.010684060934561673,
            "from": 7,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.008466932481367054,
            "from": 8,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.03414034585781045,
            "from": 9,
            "to": 16,
            "gater": 8
        },
        {
            "weight": -0.060245387569844905,
            "from": 10,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.09187868888833926,
            "from": 11,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.028671288359458508,
            "from": 12,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.06985538008536168,
            "from": 13,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.07736888944863472,
            "from": 14,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.07498214535869102,
            "from": 15,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.22080763645496476,
            "from": 16,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.022832403887702052,
            "from": 17,
            "to": 8,
            "gater": 20
        },
        {
            "weight": -0.01726295097195782,
            "from": 0,
            "to": 24,
            "gater": null
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 23,
            "gater": null
        },
        {
            "weight": 0.09991055568751647,
            "from": 2,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.009230649584446485,
            "from": 3,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.03304418548077365,
            "from": 4,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.013568318369414897,
            "from": 5,
            "to": 19,
            "gater": null
        },
        {
            "weight": -0.0291512172439881,
            "from": 6,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.010684060934561673,
            "from": 7,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.0062812778166323885,
            "from": 8,
            "to": 16,
            "gater": null
        },
        {
            "weight": -0.02643761074775748,
            "from": 9,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.6366961639978733,
            "from": 10,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.04288303842964991,
            "from": 11,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.05155506195216905,
            "from": 13,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.010612044791709213,
            "from": 14,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.07036440394425086,
            "from": 15,
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
            "gater": 27
        },
        {
            "weight": 1.5884379302274896,
            "from": 1,
            "to": 22,
            "gater": null
        },
        {
            "weight": -0.06590060970587275,
            "from": 2,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.07738337204751927,
            "from": 3,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.09006836195353243,
            "from": 4,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.0003393312687913763,
            "from": 5,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.08820369090058798,
            "from": 6,
            "to": 17,
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
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.042245909475514154,
            "from": 9,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.08048826549383833,
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
            "weight": -0.09661537679047343,
            "from": 13,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.07460330424699163,
            "from": 14,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.006920059590645566,
            "from": 15,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.058273789725537095,
            "from": 0,
            "to": 22,
            "gater": null
        },
        {
            "weight": 0.08085369755574742,
            "from": 1,
            "to": 21,
            "gater": null
        },
        {
            "weight": -0.001095192347866203,
            "from": 2,
            "to": 20,
            "gater": null
        },
        {
            "weight": -0.009152925511987986,
            "from": 3,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.09206156518550582,
            "from": 4,
            "to": 18,
            "gater": null
        },
        {
            "weight": 0.08889991930314381,
            "from": 5,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.6661272172599131,
            "from": 6,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.056172701265967684,
            "from": 7,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.0062812778166323885,
            "from": 8,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.07506300319515433,
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
            "weight": 0.07483153428663827,
            "from": 13,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.039913689455547054,
            "from": 14,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.04709133200939686,
            "from": 0,
            "to": 21,
            "gater": null
        },
        {
            "weight": 0.01935664752140523,
            "from": 1,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.0049375431861428815,
            "from": 2,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.09695860941124665,
            "from": 3,
            "to": 18,
            "gater": null
        },
        {
            "weight": -0.01202038616755359,
            "from": 4,
            "to": 17,
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
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.007472182940239019,
            "from": 7,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.04560575096574024,
            "from": 8,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.4239982117427262,
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
            "weight": 0.08240435443300984,
            "from": 13,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.05877916747451271,
            "from": 0,
            "to": 20,
            "gater": null
        },
        {
            "weight": 0.08057572262808896,
            "from": 2,
            "to": 18,
            "gater": 22
        },
        {
            "weight": -0.059153339702752744,
            "from": 3,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.0009467051238866847,
            "from": 4,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.06549949128609245,
            "from": 5,
            "to": 15,
            "gater": 11
        },
        {
            "weight": -0.7460857982563804,
            "from": 6,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.007231391171559798,
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
            "weight": -0.30222984403536873,
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
            "weight": 0.04709133200939686,
            "from": 0,
            "to": 19,
            "gater": null
        },
        {
            "weight": 0.052915286988906296,
            "from": 2,
            "to": 17,
            "gater": null
        },
        {
            "weight": 0.0019917937462007596,
            "from": 3,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.0565870010281421,
            "from": 4,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.04370671712318539,
            "from": 5,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.08701763020793823,
            "from": 6,
            "to": 13,
            "gater": 18
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
            "weight": -0.04998919378478464,
            "from": 9,
            "to": 10,
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
            "weight": -0.08356019825702764,
            "from": 1,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.03545285640374085,
            "from": 2,
            "to": 16,
            "gater": 21
        },
        {
            "weight": -0.010485712213259418,
            "from": 3,
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.046880572081791354,
            "from": 4,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.06931385586478181,
            "from": 5,
            "to": 13,
            "gater": null
        },
        {
            "weight": 0.06915251699819766,
            "from": 6,
            "to": 12,
            "gater": null
        },
        {
            "weight": -0.9712747698513092,
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
            "weight": 0.03241082488219163,
            "from": 0,
            "to": 17,
            "gater": null
        },
        {
            "weight": -0.027743900335439872,
            "from": 1,
            "to": 16,
            "gater": null
        },
        {
            "weight": 0.03945229115961771,
            "from": 2,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.09936411302283435,
            "from": 3,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.0018181210455815167,
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
            "gater": 13
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
            "to": 15,
            "gater": null
        },
        {
            "weight": -0.01917814588361652,
            "from": 2,
            "to": 14,
            "gater": null
        },
        {
            "weight": -0.6370366512182741,
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
            "weight": 0.012277688767205003,
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
            "weight": -0.06753802227126426,
            "from": 0,
            "to": 15,
            "gater": null
        },
        {
            "weight": 0.04500090119043416,
            "from": 1,
            "to": 14,
            "gater": null
        },
        {
            "weight": 0.2636122889876517,
            "from": 2,
            "to": 13,
            "gater": null
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
            "gater": null
        },
        {
            "weight": -0.8971248292049654,
            "from": 7,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.01544361360247723,
            "from": 0,
            "to": 14,
            "gater": 21
        },
        {
            "weight": 0.03794976714474335,
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
            "weight": 0.07537292932726933,
            "from": 0,
            "to": 13,
            "gater": null
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
            "gater": 18
        },
        {
            "weight": -0.007101671793141445,
            "from": 3,
            "to": 10,
            "gater": null
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
            "weight": -0.017474358049899094,
            "from": 0,
            "to": 12,
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
            "weight": -0.12196749644338038,
            "from": 4,
            "to": 8,
            "gater": 16
        },
        {
            "weight": 0.020265023861968073,
            "from": 0,
            "to": 11,
            "gater": 19
        },
        {
            "weight": 0.8200176468262808,
            "from": 1,
            "to": 10,
            "gater": 21
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
            "weight": -0.3551213003705487,
            "from": 0,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.5255140441699139,
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
        }
    ],
    "input": 8,
    "output": 3,
    "dropout": 0
};

export default BotStrongModel;
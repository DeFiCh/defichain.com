import { SVGProps } from "react";

export function PlayStoreDownloadBadge(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg width={150} height={48} viewBox="0 0 150 48" {...props}>
      <g
        id="Assets"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="app-store-badge-ios" fillRule="nonzero">
          <path
            d="M138.054936,0 L11.9518081,0 C11.4921463,0 11.038,0 10.5795541,0.00255599169 C10.1957923,0.00495598389 9.81508902,0.0119279612 9.4276419,0.0177959422 C8.58592769,0.0272780757 7.74619291,0.0981671929 6.91573502,0.229847253 C6.08644359,0.364393969 5.28313033,0.61805288 4.53296466,0.982244808 C3.78371646,1.34951767 3.09910696,1.8267511 2.50397216,2.39663221 C1.90571301,2.96491076 1.40701781,3.62176388 1.02706268,4.34193389 C0.64605889,5.0606705 0.381869635,5.830863 0.243619492,6.62591047 C0.10405497,7.41995377 0.0289540302,8.22315393 0.0189906628,9.02830266 C0.00735809838,9.39622146 0.00612965947,9.76536426 0,10.1333311 L0,37.8703529 C0.00612965947,38.2429517 0.00735809838,38.6039105 0.0189906628,38.9766293 C0.0289570855,39.7817381 0.104058026,40.5848982 0.243619492,41.3789015 C0.381487885,42.1744138 0.64569276,42.9450484 1.02706268,43.6640541 C1.40684528,44.3818952 1.90561061,45.0360891 2.50397216,45.6012078 C3.0968504,46.1736228 3.78190241,46.6511809 4.53296466,47.0156432 C5.28312463,47.3808099 6.08635129,47.6359786 6.91573502,47.7726007 C7.74633409,47.903226 8.5859825,47.9741439 9.4276419,47.98476 C9.81508902,47.99292 10.1957923,47.9976 10.5795541,47.9976 C11.0379874,48 11.4921714,48 11.9518081,48 L138.054936,48 C138.505447,48 138.963228,48 139.41374,47.9976 C139.795684,47.9976 140.187405,47.99292 140.56935,47.98476 C141.409418,47.9747085 142.247486,47.9037861 143.076368,47.7726007 C143.908427,47.6350168 144.714534,47.3799157 145.468314,47.0156432 C146.218699,46.6509699 146.903118,46.1734248 147.495489,45.6012078 C148.092307,45.0338758 148.592137,44.3801605 148.976635,43.6640541 C149.355143,42.9445253 149.616833,42.1739523 149.752683,41.3789015 C149.892468,40.5847892 149.970233,39.7818078 149.985334,38.9766293 C149.990223,38.6039105 149.990223,38.2429517 149.990223,37.8703529 C150,37.4343943 150,37.0008357 150,36.5577972 L150,11.4434748 C150,11.0040242 150,10.5680897 149.990223,10.1333311 C149.990223,9.76536426 149.990223,9.39622146 149.985334,9.02825466 C149.970236,8.22303621 149.892471,7.42001469 149.752683,6.62586247 C149.616455,5.83127497 149.35478,5.06114348 148.976635,4.34188589 C148.202874,2.89838188 146.975913,1.72338088 145.468314,0.982136808 C144.714531,0.618834845 143.908339,0.365243305 143.076368,0.229739253 C142.247629,0.097479023 141.409474,0.0265652315 140.56935,0.0176279427 C140.187405,0.0117719617 139.795684,0.0047399846 139.41374,0.0023999922 C138.963228,0 138.505447,0 138.054936,0 L138.054936,0 Z"
            id="Background-Gray"
            fill="#000"
          />
          <path
            d="M52.862038,32.512797 L46.9342957,32.512797 L45.5107559,36.6384807 L43,36.6384807 L48.6146618,21.3745142 L51.2232491,21.3745142 L56.8379109,36.6384807 L54.284338,36.6384807 L52.862038,32.512797 Z M47.5482217,30.609005 L52.2469349,30.609005 L49.9306271,23.9133255 L49.8658069,23.9133255 L47.5482217,30.609005 Z M68.9636717,31.0747539 C68.9636717,34.5330293 67.0778497,36.7549087 64.2319974,36.7549087 C62.7610012,36.8304353 61.3754031,36.0742016 60.6645945,34.8078864 L60.6107447,34.8078864 L60.6107447,40.32 L58.2834289,40.32 L58.2834289,25.5098224 L60.5361814,25.5098224 L60.5361814,27.3607965 L60.5789858,27.3607965 C61.3213728,26.1024202 62.708465,25.346512 64.189193,25.3933821 C67.0667917,25.3933944 68.9636717,27.6260783 68.9636717,31.0747539 Z M66.5715358,31.0747539 C66.5715358,28.8216655 65.3852484,27.3403921 63.5752545,27.3403921 C61.797057,27.3403921 60.6009891,28.8528621 60.6009891,31.0747539 C60.6009891,33.31705 61.797057,34.8187155 63.5752545,34.8187155 C65.385261,34.8187155 66.5715358,33.3482589 66.5715358,31.0747539 Z M81.442863,31.0747539 C81.442863,34.5330293 79.5570409,36.7549087 76.7111886,36.7549087 C75.2401924,36.8304353 73.8545944,36.0742016 73.1437858,34.8078864 L73.0899359,34.8078864 L73.0899359,40.32 L70.7626202,40.32 L70.7626202,25.5098224 L73.0153226,25.5098224 L73.0153226,27.3607965 L73.0581269,27.3607965 C73.8005194,26.1024209 75.1876169,25.3465172 76.6683467,25.3933944 C79.546033,25.3933944 81.442863,27.6260783 81.442863,31.0747539 Z M79.0507396,31.0747539 C79.0507396,28.8216655 77.8644397,27.3403921 76.0544458,27.3403921 C74.2762483,27.3403921 73.0801803,28.8528621 73.0801803,31.0747539 C73.0801803,33.31705 74.2762483,34.8187155 76.0544458,34.8187155 C77.8644522,34.8187155 79.0507396,33.3482589 79.0507396,31.0747539 L79.0507396,31.0747539 Z M89.6905825,32.3855522 C89.8630272,33.8992268 91.3611804,34.8930809 93.4084143,34.8930809 C95.3700644,34.8930809 96.781369,33.8991777 96.781369,32.5343445 C96.781369,31.3495741 95.9301781,30.640177 93.9147282,30.1540114 L91.8992782,29.6774581 C89.0436453,29.0004499 87.7179369,27.6896392 87.7179369,25.5625788 C87.7179369,22.9289607 90.0562606,21.12 93.3766178,21.12 C96.6627115,21.12 98.9154515,22.9289607 98.9912796,25.5625788 L96.641923,25.5625788 C96.5012872,24.0393043 95.2183832,23.1198279 93.343569,23.1198279 C91.4687549,23.1198279 90.1858634,24.0501211 90.1858634,25.4041374 C90.1858634,26.4832721 91.0052579,27.1182669 93.0096999,27.604371 L94.7230772,28.0173019 C97.9138065,28.7579325 99.2395149,30.0159498 99.2395149,32.2486092 C99.2395149,35.1042911 96.9219798,36.8928474 93.2359444,36.8928474 C89.7871616,36.8928474 87.4586311,35.1463045 87.3082021,32.3854416 L89.6905825,32.3855522 Z M104.262279,22.8762043 L104.262279,25.5098224 L106.418377,25.5098224 L106.418377,27.3187831 L104.262279,27.3187831 L104.262279,33.4538824 C104.262279,34.4069768 104.693992,34.8511167 105.641787,34.8511167 C105.897751,34.8467358 106.153301,34.829093 106.407369,34.7982619 L106.407369,36.5964182 C105.98124,36.6745689 105.548115,36.7099631 105.114685,36.702054 C102.819178,36.702054 101.923955,35.8557876 101.923955,33.6975183 L101.923955,27.3187831 L100.275398,27.3187831 L100.275398,25.5098224 L101.92393,25.5098224 L101.92393,22.8762043 L104.262279,22.8762043 Z M107.66708,31.0747539 C107.66708,27.5732727 109.768139,25.37299 113.04449,25.37299 C116.331836,25.37299 118.423114,27.5732235 118.423114,31.0747539 C118.423114,34.5858472 116.342844,36.7765177 113.04449,36.7765177 C109.7473,36.7765177 107.66708,34.5858349 107.66708,31.0747539 Z M116.051766,31.0747539 C116.051766,28.6728118 114.930299,27.255173 113.044477,27.255173 C111.158655,27.255173 110.038415,28.6836162 110.038415,31.0747539 C110.038415,33.4862959 111.158655,34.8931424 113.044477,34.8931424 C114.930299,34.8931424 116.051766,33.4862959 116.051766,31.0747539 L116.051766,31.0747539 Z M120.341897,25.5098224 L122.561601,25.5098224 L122.561601,27.4039899 L122.61545,27.4039899 C122.924995,26.1846284 124.063301,25.3454214 125.34267,25.3933698 C125.610873,25.3924507 125.878335,25.4210396 126.140049,25.4786012 L126.140049,27.6152615 C125.80146,27.5137107 125.448253,27.4670854 125.09436,27.4772245 C124.410151,27.4499803 123.747989,27.7176212 123.281738,28.2098727 C122.815486,28.7021243 122.591727,29.3698073 122.669213,30.037608 L122.669213,36.6384561 L120.341897,36.6384561 L120.341897,25.5098224 Z M136.87036,33.3698556 C136.557279,35.3900756 134.552824,36.7765054 131.988256,36.7765054 C128.689902,36.7765054 126.642656,34.6074316 126.642656,31.1275595 C126.642656,27.6368828 128.70091,25.3729777 131.890425,25.3729777 C135.027342,25.3729777 137,27.488029 137,30.8622777 L137,31.6449216 L128.991988,31.6449216 L128.991988,31.7829586 C128.917221,32.6114653 129.208691,33.4315721 129.792259,34.0346702 C130.375827,34.6377683 131.195245,34.9657296 132.042081,34.9351312 C133.171478,35.0389965 134.236279,34.4024506 134.660462,33.3698433 L136.87036,33.3698556 Z M129.002973,30.0484371 L134.671457,30.0484371 C134.713692,29.3039561 134.437594,28.5759438 133.909682,28.0397856 C133.38177,27.5036273 132.649909,27.2079361 131.890425,27.2239518 C131.124933,27.219468 130.38933,27.5152979 129.847118,28.0456877 C129.304906,28.5760775 129.001012,29.2970794 129.002973,30.0484371 L129.002973,30.0484371 Z"
            id="App-Store"
            fill="#FFFFFF"
          />
          <path
            d="M47.6806825,10.9151077 C48.6619588,10.8467243 49.6230972,11.2092763 50.2995508,11.9029737 C50.9760044,12.596671 51.2964713,13.5483942 51.1727452,14.4961878 C51.1727452,16.7986506 49.8913156,18.1221515 47.6806825,18.1221515 L45,18.1221515 L45,10.9151077 L47.6806825,10.9151077 Z M46.1526735,17.1029199 L47.5519264,17.1029199 C48.2531971,17.1436269 48.9360257,16.8753116 49.4108165,16.3724752 C49.8856073,15.8696388 50.1018125,15.1858147 49.9994001,14.5108752 C50.0943615,13.8387367 49.8750427,13.1605555 49.4014291,12.6618197 C48.9278156,12.1630839 48.2494703,11.8959856 47.5519264,11.9335784 L46.1526735,11.9335784 L46.1526735,17.1029199 Z M52.4748215,15.400263 C52.3787857,14.4253898 52.8601493,13.4819228 53.7170297,12.9655496 C54.5739101,12.4491764 55.6581553,12.4491764 56.5150357,12.9655496 C57.3719161,13.4819228 57.8532797,14.4253898 57.7572439,15.400263 C57.8551069,16.3761839 57.3741827,17.3214807 56.5165425,17.8389656 C55.6589023,18.3564504 54.5731631,18.3564504 53.7155229,17.8389656 C52.8578827,17.3214807 52.3769585,16.3761839 52.4748215,15.400263 Z M56.620354,15.400263 C56.620354,14.2213175 56.0749687,13.5318771 55.1178548,13.5318771 C54.1570843,13.5318771 53.6166119,14.2213175 53.6166119,15.4002751 C53.6166119,16.588666 54.1571216,17.2727919 55.1178548,17.2727919 C56.0749936,17.2727919 56.620354,16.5839312 56.620354,15.400263 L56.620354,15.400263 Z M64.7790184,18.1220428 L63.6324146,18.1220428 L62.474878,14.1163192 L62.3874278,14.1163192 L61.2347419,18.1220428 L60.0990584,18.1220428 L58.5552658,12.6831818 L59.6763721,12.6831818 L60.6796551,16.8333521 L60.7622546,16.8333521 L61.9137216,12.6831818 L62.9740941,12.6831818 L64.1255611,16.8333521 L64.2130113,16.8333521 L65.2114311,12.6831818 L66.3167414,12.6831818 L64.7790184,18.1220428 Z M67.6151735,12.6831818 L68.6791903,12.6831818 L68.6791903,13.5471926 L68.7617897,13.5471926 C69.049022,12.9110521 69.7202007,12.5219187 70.4331196,12.5781955 C70.9851302,12.5378917 71.5260616,12.7435379 71.9031819,13.1370699 C72.2803022,13.5306019 72.4526869,14.0693142 72.3716633,14.6011016 L72.3716633,18.1219824 L71.266353,18.1219824 L71.266353,14.8706452 C71.266353,13.9966092 70.8752462,13.5619405 70.0577964,13.5619405 C69.6833761,13.5450054 69.320011,13.6877048 69.0629644,13.9526275 C68.8059179,14.2175502 68.6808259,14.5782745 68.7204838,14.9402294 L68.7204838,18.1220428 L67.6151735,18.1220428 L67.6151735,12.6831818 Z M74.1328812,10.56 L75.2381915,10.56 L75.2381915,18.1220308 L74.1328812,18.1220308 L74.1328812,10.56 Z M76.7746955,15.400263 C76.6787335,14.425326 77.1601729,13.4818351 78.017117,12.965454 C78.874061,12.4490728 79.9583619,12.4490728 80.8153059,12.965454 C81.6722499,13.4818351 82.1536894,14.425326 82.0577273,15.400263 C82.1554661,16.3762188 81.6744538,17.321489 80.816771,17.838951 C79.9590882,18.3564131 78.8733346,18.3564131 78.0156519,17.838951 C77.1579691,17.321489 76.6769568,16.3762188 76.7746955,15.400263 L76.7746955,15.400263 Z M80.920228,15.400263 C80.920228,14.2213175 80.3748427,13.5318771 79.4177288,13.5318771 C78.4569583,13.5318771 77.9164859,14.2213175 77.9164859,15.4002751 C77.9164859,16.588666 78.4569956,17.2727919 79.4177288,17.2727919 C80.3748552,17.2727919 80.920228,16.5839312 80.920228,15.400263 L80.920228,15.400263 Z M83.221346,16.5839312 C83.221346,15.6049089 83.9719924,15.0405051 85.3044294,14.9602918 L86.8215057,14.8753679 L86.8215057,14.4059131 C86.8215057,13.8314721 86.4303989,13.5071041 85.6749018,13.5071041 C85.0578748,13.5071041 84.6303253,13.7270897 84.5076388,14.1116206 L83.4375524,14.1116206 C83.5505125,13.1774216 84.4554125,12.5782196 85.7259093,12.5782196 C87.1300254,12.5782196 87.9219652,13.257031 87.9219652,14.4059131 L87.9219652,18.1220549 L86.8579484,18.1220549 L86.8579484,17.3577158 L86.7704982,17.3577158 C86.4091161,17.9158948 85.766461,18.242119 85.0882355,18.2116653 C84.6127832,18.2596915 84.1385982,18.1101584 83.7829077,17.8000332 C83.4272172,17.4899079 83.2232193,17.0481359 83.221346,16.5839312 L83.221346,16.5839312 Z M86.8215057,16.119187 L86.8215057,15.6644801 L85.4538323,15.749404 C84.6825392,15.7995297 84.332726,16.0543135 84.332726,16.5337934 C84.332726,17.0232985 84.7699894,17.3081577 85.3712826,17.3081577 C85.7272352,17.3431489 86.0825712,17.2363572 86.3559467,17.0122293 C86.6293222,16.7881014 86.7973286,16.465829 86.8215057,16.119187 Z M89.3746509,15.400263 C89.3746509,13.6816746 90.2844141,12.5929554 91.6994506,12.5929554 C92.4139735,12.5609838 93.0831905,12.9327873 93.4169372,13.5471564 L93.4995366,13.5471564 L93.4995366,10.56 L94.6048469,10.56 L94.6048469,18.1220308 L93.5456933,18.1220308 L93.5456933,17.2627305 L93.4582431,17.2627305 C93.0992684,17.8720023 92.4218066,18.2375211 91.699463,18.2116653 C90.2747002,18.2117257 89.3746509,17.1229823 89.3746509,15.400263 Z M90.5164413,15.400263 C90.5164413,16.5538558 91.0763913,17.2480189 92.0128708,17.2480189 C92.9444623,17.2480189 93.5202207,16.5438427 93.5202207,15.4049857 C93.5202207,14.2714433 92.9384175,13.5572299 92.0128708,13.5572299 C91.0824236,13.5572299 90.516404,14.2561036 90.516404,15.400263 L90.5164413,15.400263 Z M99.1779289,15.400263 C99.081893,14.4253898 99.5632566,13.4819228 100.420137,12.9655496 C101.277017,12.4491764 102.361263,12.4491764 103.218143,12.9655496 C104.075023,13.4819228 104.556387,14.4253898 104.460351,15.400263 C104.558214,16.3761839 104.07729,17.3214807 103.21965,17.8389656 C102.36201,18.3564504 101.27627,18.3564504 100.41863,17.8389656 C99.56099,17.3214807 99.0800658,16.3761839 99.1779289,15.400263 L99.1779289,15.400263 Z M103.323449,15.400263 C103.323449,14.2213175 102.778076,13.5318771 101.820962,13.5318771 C100.860192,13.5318771 100.319719,14.2213175 100.319719,15.4002751 C100.319719,16.588666 100.860229,17.2727919 101.820962,17.2727919 C102.778088,17.2727919 103.323449,16.5839312 103.323449,15.400263 Z M105.94341,12.6831818 L107.007427,12.6831818 L107.007427,13.5471926 L107.090026,13.5471926 C107.377259,12.9110521 108.048437,12.5219187 108.761356,12.5781955 C109.313367,12.5378917 109.854298,12.7435379 110.231418,13.1370699 C110.608539,13.5306019 110.780923,14.0693142 110.6999,14.6011016 L110.6999,18.1219824 L109.594589,18.1219824 L109.594589,14.8706452 C109.594589,13.9966092 109.203483,13.5619405 108.386033,13.5619405 C108.011613,13.5450054 107.648248,13.6877048 107.391201,13.9526275 C107.134154,14.2175502 107.009062,14.5782745 107.04872,14.9402294 L107.04872,18.1220428 L105.94341,18.1220428 L105.94341,12.6831818 Z M116.945531,11.3290739 L116.945531,12.7079547 L118.15895,12.7079547 L118.15895,13.6120783 L116.945531,13.6120783 L116.945531,16.4087689 C116.945531,16.9784873 117.187247,17.2279565 117.73747,17.2279565 C117.878335,17.2275187 118.019059,17.2192475 118.15895,17.2031835 L118.15895,18.0972699 C117.960455,18.1317548 117.759343,18.1501012 117.557707,18.1521183 C116.328504,18.1521183 115.839001,17.7321974 115.839001,16.6835909 L115.839001,13.61203 L114.949897,13.61203 L114.949897,12.7079064 L115.839001,12.7079064 L115.839001,11.3290739 L116.945531,11.3290739 Z M119.668725,10.56 L120.764322,10.56 L120.764322,13.5572178 L120.851772,13.5572178 C121.152801,12.9155098 121.835727,12.5258806 122.559482,12.5829182 C123.108359,12.5539144 123.641967,12.764088 124.014966,13.1561923 C124.387964,13.5482966 124.561502,14.0814916 124.488312,14.610547 L124.488312,18.1220428 L123.381895,18.1220428 L123.381895,14.8753438 C123.381895,14.0066102 122.965229,13.566639 122.184271,13.566639 C121.79973,13.5360124 121.420875,13.6717714 121.148989,13.9376221 C120.877102,14.2034728 120.739909,14.5723068 120.774086,14.9455198 L120.774086,18.1220428 L119.668775,18.1220428 L119.668725,10.56 Z M130.933197,16.6535154 C130.623255,17.6794379 129.60092,18.3422978 128.50637,18.227017 C127.759559,18.2461617 127.041832,17.9455527 126.54362,17.4049489 C126.045407,16.8643451 125.817076,16.138399 125.919207,15.4197215 C125.819788,14.6990467 126.047264,13.9719374 126.542703,13.4267664 C127.038141,12.8815954 127.75279,12.5720074 128.501506,12.5782076 C130.059876,12.5782076 131,13.6121266 131,15.3200256 L131,15.6945676 L127.045164,15.6945676 L127.045164,15.7547185 C127.010167,16.1583095 127.152105,16.5575129 127.436073,16.8541521 C127.72004,17.1507914 128.119688,17.3173421 128.53673,17.3128442 C129.077491,17.3758875 129.603885,17.1154007 129.86918,16.6534792 L130.933197,16.6535154 Z M127.045139,14.9007207 L129.874006,14.9007207 C129.902181,14.5316025 129.768531,14.1680937 129.505992,13.8997748 C129.243453,13.631456 128.876441,13.4832808 128.495399,13.4917644 C128.109196,13.4870525 127.7374,13.6340023 127.464351,13.8992794 C127.191302,14.1645565 127.040143,14.5256759 127.045164,14.9007207 L127.045139,14.9007207 Z"
            id="Download-on-the"
            fill="#FFFFFF"
          />
          <path
            d="M31.3749561,24.3441973 C31.4020976,22.3248829 32.5065163,20.4596506 34.3012772,19.4019876 C33.1639,17.8449436 31.3271627,16.8931363 29.3451482,16.8336946 C27.2599073,16.6238917 25.2383571,18.0297468 24.1757564,18.0297468 C23.092592,18.0297468 21.4565513,16.8545249 19.6948057,16.8892698 C17.3768077,16.9610551 15.2681915,18.1937175 14.1404384,20.1362618 C11.7388425,24.1218963 13.5302169,29.9794371 15.8307446,33.2011233 C16.9817474,34.7786914 18.3269391,36.5408755 20.0870953,36.4783846 C21.8095139,36.4099065 22.4528039,35.4255854 24.5319104,35.4255854 C26.5917197,35.4255854 27.1952604,36.4783846 28.9911301,36.4386523 C30.8393655,36.4098946 32.0038415,34.8540733 33.1144616,33.2615668 C33.9414552,32.1374919 34.5778254,30.8951443 35,29.5805428 C32.8048576,28.6905904 31.3775182,26.6288106 31.3749561,24.3441973 L31.3749561,24.3441973 Z M27.982882,14.7148956 C28.9906167,13.5552928 29.4870894,12.0648197 29.3668668,10.56 C27.8272723,10.7150018 26.4051182,11.4203268 25.3837691,12.5354388 C24.3752338,13.6356467 23.8643122,15.0750131 23.9635368,16.5365116 C25.5237755,16.5519103 27.0051892,15.8805156 27.982882,14.7148956 L27.982882,14.7148956 Z"
            id="Icon"
            fill="#FFFFFF"
          />
        </g>
      </g>
    </svg>
  );
}

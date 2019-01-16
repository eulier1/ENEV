import AmazonaFlag from '@/assets/svg/flags/Flag_of_Amazonas_State.svg'
import AnzoateguiFlag from '@/assets/svg/flags/Flag_of_Anzoátegui_State.svg'
import ApureFlag from '@/assets/svg/flags/Flag_of_Apure_State.svg'
import AraguaFlag from 'assets/svg/flags/Flag_of_Aragua_State.png'
import BarinasFlag from 'assets/svg/flags/Flag_of_Barinas_State.svg'
import BolívarFlag from 'assets/svg/flags/Flag_of_Bolívar_State.svg'
import CaraboboFlag from 'assets/svg/flags/Flag_of_Carabobo_State.svg'
import CojedesFlag from 'assets/svg/flags/Flag_of_Cojedes_State.svg'
import DeltaAmacuroFlag from 'assets/svg/flags/Flag_of_Delta_Amacuro_State.svg'
import FalconFlag from 'assets/svg/flags/Flag_of_Falcón.svg'
import GuaricoFlag from 'assets/svg/flags/Flag_of_Guárico.png'
import LaraFlag from 'assets/svg/flags/Flag_of_Lara_State.svg'
import MéridaFlag from 'assets/svg/flags/Flag_of_Mérida_State.svg'
import MirandaFlag from 'assets/svg/flags/Flag_of_Miranda_state.svg'
import MonagasFlag from 'assets/svg/flags/Flag_of_Monagas_State.svg'
import NuevaEspartaFlag from 'assets/svg/flags/Flag_of_Nueva_Esparta.svg'
import PortuguesaFlag from 'assets/svg/flags/Flag_of_Portuguesa.svg'
import SucreFlag from 'assets/svg/flags/Flag_of_Sucre_State.svg.png'
import TachiraFlag from 'assets/svg/flags/Flag_of_Táchira.svg'
import TrujilloFlag from 'assets/svg/flags/Flag_of_Trujillo_State.svg'
import VargasFlag from 'assets/svg/flags/Flag_of_Vargas_State.svg'
import YaracuyFlag from 'assets/svg/flags/Flag_of_Yaracuy_State.svg'
import ZuliaFlag from 'assets/svg/flags/Flag_of_Zulia_State.svg'

import anzoateguiShield from 'assets/svg/shields/png/shield-anzoategui.png'
import apureShield from 'assets/svg/shields/png/shield-apure.png'
import araguaShield from 'assets/svg/shields/png/shield-aragua.png'
import barinasShield from 'assets/svg/shields/png/shield-barinas.png'
import bolivarShield from 'assets/svg/shields/png/shield-bolivar.png'
import cojedesShield from 'assets/svg/shields/png/shield-cojedes.png'
import deltaamacuroShield from 'assets/svg/shields/png/shield-delta-amacuro.png'
import guaricoShield from 'assets/svg/shields/png/shield-guarico.png'
import laraShield from 'assets/svg/shields/png/shield-lara.png'
import meridaShield from 'assets/svg/shields/png/shield-merida.png'
import mirandaShield from 'assets/svg/shields/png/shield-miranda.png'
import nuevaespartaShield from 'assets/svg/shields/png/shield-nueva-esparta.png'
import portuguesaShield from 'assets/svg/shields/png/shield-portuguesa.png'
import sucreShield from 'assets/svg/shields/png/shield-sucre.png'
import tachiraShield from 'assets/svg/shields/png/shield-tachira.png'
import vargasShield from 'assets/svg/shields/png/shield-zulia.png'
import zuliaShield from 'assets/svg/shields/png/shield-vargas.png'

export const VENEZUELANSTATES = [
  {
    id: 0,
    svgId: "amazonas",
    name: "amazonas",
    description: `<p> <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Amazona_(mitolog%C3%ADa)">Amazonas</a> es una voz de origen griego con que se identificaba una raza de mujeres guerreras que vivían en la <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/S%C3%A1rmatas">Sarmacia Asiática</a>, más allá del <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/C%C3%A1ucaso">Cáucaso</a>.
    El nombre de este estado fue asignado a partir del 23 de abril de 1856, en honor al <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Amazonas">río Amazonas</a>, el cual fue descubierto por <a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Francisco_de_Orellana">Francisco de Orellana</a> en 1542, a quien se le atribuye también la denominación del río, producto de una leyenda sobre una tribu femenina que opuso tenaz resistencia a los conquistadores españoles, que le hizo recordar la leyenda griega de las <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Amazona_(mitolog%C3%ADa)">Amazonas</a>.
    El <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Amazonas">río Amazonas</a> no pasa por el Estado, pero una parte del territorio es la cuenca de dicho río por medio del <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Amazonas">río Amazonas</a>.
    </p>`,
    flag: AmazonaFlag,
    shield: "",
    svg: `<path
    d=" M 207.34 452.595 L 207.148 446.001 L 209.181 444.299 L 209.922 440.904 L 207.823 439.877 L 207.795 436.956 L 210.666 433.028 L 210.611 430.948 L 208.652 429.715 L 208.942 426.706 L 207.22 425.651 L 207.21 423.411 L 209.884 420.598 L 213.268 420.312 L 215.541 417.347 L 216.805 417.431 L 218.068 415.14 L 215.548 412.754 L 216.189 406.498 L 221.72 400.627 L 224.163 400.234 L 224.894 398.024 L 223.403 396.578 L 221.022 394.719 L 221.252 392.601 L 222.13 392.308 L 223.457 393.07 L 225.11 394.038 L 228.25 394.299 L 228.233 395.609 L 231.652 395.994 L 233.242 398.899 L 233.232 402.682 L 231.461 404.413 L 231.835 407.094 L 229.935 408.551 L 230.154 410.867 L 232.374 412.038 L 233.543 409.998 L 238.313 410.843 L 238.874 412.187 L 242.595 412.433 L 244.012 410.573 L 253.617 409.028 L 258.436 403.942 L 263.908 402.754 L 264.001 405.599 L 265.458 408.112 L 267.8 408.898 L 268.288 406.921 L 274.244 407.198 L 278.535 399.25 L 280.039 398.634 L 281.876 393.975 L 287.314 393.809 L 288.584 395.963 L 289.963 396.819 L 289.737 399.841 L 286.789 403.705 L 287.083 405.93 L 290.211 410.843 L 291.945 410.724 L 291.768 408.152 L 294.112 406.366 L 300.997 406.758 L 302.311 408.195 L 302.087 410.041 L 300.504 412.117 L 302.62 415.513 L 305.232 415.135 L 306.73 417.229 L 306.686 418.852 L 304.159 418.614 L 302.375 419.883 L 304.166 421.431 L 305.761 420.886 L 306.573 422.982 L 303.204 424.58 L 301.842 423.429 L 300.017 425.489 L 300.363 428.228 L 303.41 430.668 L 303.675 435.073 L 306.724 440.126 L 309.961 446.713 L 315.562 450.803 L 320.659 450.566 L 323.596 452.896 L 322.757 457.133 L 325.107 459.915 L 323.612 464.845 L 319.732 460.813 L 318.15 459.984 L 317.251 462.703 L 322.349 466.512 L 323.018 471.276 L 332.47 480.379 L 335.159 480.348 L 339.831 484.418 L 340.648 489.654 L 338.587 491.326 L 339.029 496.24 L 340.246 496.696 L 339.914 499.366 L 338.186 501.209 L 338.433 503.286 L 340.427 504.025 L 342.762 508.622 L 347.222 513.492 L 347.198 516.987 L 348.692 517.492 L 348.702 519.885 L 347.242 522.805 L 344.912 523.185 L 346.086 526.618 L 350.995 527.279 L 352.221 528.8 L 356.377 528.879 L 358.883 526.514 L 360.546 526.532 L 361.767 527.78 L 371.33 527.283 L 371.376 533.174 L 369.713 534.96 L 369.345 537.947 L 367.352 538.133 L 366.519 539.603 L 362.153 538.384 L 357.117 543.078 L 348.324 543.386 L 345.692 545.935 L 346.537 556.157 L 344.729 556.506 L 343.147 558.958 L 336.138 563.401 L 335.874 566.21 L 333.61 567.32 L 332.599 564.427 L 334.679 563.722 L 334.793 561.172 L 333.243 560.978 L 331.57 563.28 L 328.537 563.095 L 325.006 568.814 L 322.105 569.173 L 321.976 571.499 L 318.457 570.008 L 318.249 568.549 L 317.286 568.51 L 315.101 571.809 L 313.084 571.936 L 311.02 574.538 L 307.624 574.438 L 305.126 576.796 L 304.682 581.874 L 302.402 583.248 L 299.919 582.401 L 296.573 585.734 L 296.861 589.891 L 291.597 592.672 L 289.148 591.862 L 288.966 589.161 L 291.815 586.588 L 292.253 582.713 L 290.185 580.192 L 284.666 579.784 L 275.122 586.663 L 272.128 587.738 L 270.603 589.574 L 266.995 588.156 L 263.646 588.802 L 244.264 571.619 L 241.129 565.737 L 240.985 559.146 L 237.952 554.82 L 234.4 545.333 L 234.357 539.02 L 230.823 535.406 L 231.065 533.437 L 232.217 532.114 L 232.027 529.55 L 220.769 519.229 L 217.923 518.548 L 216.127 514.322 L 210.079 513.439 L 206.625 514.955 L 206.697 512.578 L 225.554 497.818 L 225.704 495.906 L 227.315 495.367 L 227.2 491.453 L 222.355 488.718 L 222.971 485.125 L 221.179 481.65 L 216.996 481.612 L 214.86 474.93 L 213.372 474.033 L 211.944 466.594 L 209.623 464.847 L 209.49 460.318 L 209.95 455.612 L 209.048 452.917 L 207.335 452.595 L 207.34 452.595 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.3"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="amazonas"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Amazonas_(Venezuela)">Amazonas</a>'
  },
  {
    id: 1,
    svgId: "anzoategui",
    name: "anzoátegui",
    description: `<p> En honor al prócer de la independencia General <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jos%C3%A9_Antonio_Anzo%C3%A1tegui">José Antonio Anzoátegui</a>.
    </p>`,
    flag: AnzoateguiFlag,
    shield: anzoateguiShield,
    svg: `<path
    d=" M 327.591 245.942 L 328.206 248.374 L 329.914 248.797 L 329.737 250.978 L 331.36 250.899 L 333.009 252.918 L 335.659 252.932 L 337.098 253.634 L 343.779 252.025 L 345.836 250.472 L 347.719 251.415 L 346.497 253.337 L 344.402 254.032 L 344.097 258.38 L 346.401 257.953 L 349.178 267.866 L 351.988 269.613 L 350.568 274.136 L 346.721 275.51 L 346.602 277.418 L 349.33 280.718 L 348.619 283.261 L 348.876 284.622 L 354.103 282.33 L 357.275 282.382 L 364.065 289.832 L 370.068 292.411 L 370.756 298.792 L 372.077 299.925 L 374.974 299.731 L 381.722 298.72 L 382.754 299.304 L 381.005 300.987 L 380.649 306.383 L 382.098 307.605 L 386.456 307.068 L 390.074 308.953 L 390.084 312.126 L 391.249 312.278 L 391.004 314.918 L 387.157 316.521 L 386.099 315.453 L 380.024 315.028 L 378.941 311.889 L 377.563 312.922 L 377.066 314.665 L 371.963 315.849 L 370.904 318.594 L 367.662 319.423 L 364.618 319.999 L 365.425 322.423 L 362.429 322.462 L 358.83 321.224 L 353.006 322.457 L 351.017 327.296 L 345.279 328.595 L 344.494 329.921 L 341.57 327.006 L 340.514 327.442 L 337.889 325.744 L 337.797 323.543 L 335.69 323.349 L 334.041 326.734 L 331.383 327.26 L 328.9 325.343 L 325.218 329.016 L 325.541 332.44 L 329.055 332.633 L 329.293 333.794 L 325.337 335.985 L 321.677 336.098 L 317.265 340.106 L 313.911 340.361 L 313.046 338.729 L 305.016 335.984 L 305.131 334.635 L 300.267 332.487 L 297.364 332.753 L 292.684 330.2 L 292.383 326.965 L 292.982 325.758 L 294.768 325.857 L 295.34 322.965 L 298.745 320.079 L 300.972 315.246 L 301.914 315.302 L 303.134 311.759 L 305.267 307.645 L 305.294 304.765 L 303.336 303.861 L 303.224 302.207 L 305.398 301.172 L 305.995 300.072 L 307.539 299.912 L 308.535 300.359 L 311.415 299.729 L 313.335 300.422 L 315.14 301.665 L 316.036 301.153 L 316.149 298.188 L 319.273 296.628 L 318.5 294.711 L 313.079 291.671 L 308.716 284.472 L 306.961 285.603 L 301.839 284.286 L 300.143 280.309 L 298.342 279.717 L 298.57 278.071 L 301.671 276.082 L 302.177 273.936 L 299.598 273.063 L 299.399 272.353 L 296.923 272.503 L 294.916 268.323 L 292.429 271.696 L 287.904 270.443 L 285.254 267.127 L 285.857 263.11 L 284.298 260.22 L 284.913 256.737 L 285.559 256.745 L 286.449 257.223 L 287.863 256.154 L 287.873 255.405 L 289.4 255.285 L 290.425 253.649 L 291.973 253.422 L 293.845 250.809 L 295.991 251.015 L 299.444 250.405 L 301.071 250.747 L 302.519 250.824 L 304.669 251.158 L 305.363 251.415 L 309.429 252.96 L 315.957 252.744 L 319.615 251.107 L 319.797 249.191 L 320.571 248.812 L 320.972 247.312 L 323.696 246.244 L 322.517 244.52 L 320.648 244.577 L 320.299 243.898 L 323.323 243.871 L 326.43 246.138 L 327.597 245.942 L 327.591 245.942 Z "
    fill="rgb(213,180,243)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="anzoategui"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Anzo%C3%A1tegui">Anzoátegui</a>'
  },
  {
    id: 2,
    svgId: "apure",
    name: "apure",
    description: `<p>El origen de su nombre no ha sido aceptado con unanimidad: ciertas fuentes señalan como inspiración a un arbusto llamado apure; otras, a un antiguo cacique aborigen denominado Apur. Sin embargo, en este caso específico, no se trata del nombre del <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Río_Apure">Río Apure</a>, sino del nombre del Estado y, obviamente, el nombre del Estado Apure procede del nombre del Río Apure. La obra de fray <a style="color: inherit !important;" href="http://historiadeapure.blogspot.com/2014/10/fray-jacinto-de-carvajal-primer.html">Jacinto de Carvajal</a> (1648) hace referencia al descubrimiento del Río Apure y este nombre ya era conocido entre los españoles desde la primera mitad del siglo XVI, es decir, mucho antes del nombre de la región, provincia o estado venezolano.
    En una publicación de su autoría, el cronista de San Fernando, <a style="color: inherit !important;" href="http://cuentaelabuelo.blogspot.com/2014/07/los-cronistas-apurenos-argenis-mendez.html">Argenis Méndez Echenique</a>, reseña que el nombre Apure deriva de una voz indígena que significa “La tierra de más lejos que más nunca.”
     </p>`,
    flag: ApureFlag,
    shield: apureShield,
    svg: `<path
    d=" M 236.519 359.167 L 234.147 358.891 L 234.422 361.673 L 237.235 366.075 L 236.679 371.639 L 234.33 373.64 L 232.998 383.103 L 229.013 385.25 L 226.34 389.479 L 222.4 392.366 L 221.29 392.661 L 220.966 391.713 L 218.07 390.448 L 214.727 390.583 L 213.411 389.023 L 207.594 389.018 L 201.636 393.399 L 200.264 393.384 L 198.804 391.595 L 196.143 391.413 L 194.297 393.102 L 191.843 393.455 L 190.184 394.632 L 187.101 394.567 L 185.965 393.164 L 181.787 393.274 L 179.947 394.969 L 175.549 395.239 L 173.602 392.829 L 169.051 393.661 L 166.24 393.14 L 165.214 391.562 L 162.053 391.624 L 157.296 397.434 L 155.189 397.687 L 153.909 394.575 L 151.223 394.315 L 149.24 395.785 L 125.796 363.802 L 122.259 363.714 L 119.984 365.641 L 116.369 365.345 L 116.043 363.768 L 112.341 363.74 L 109.696 360.52 L 106.704 361.295 L 105.194 359.169 L 99.758 359.515 L 96.861 362.291 L 95.229 362.367 L 93.815 364.164 L 90.591 363.967 L 88.421 361.096 L 86.837 361.281 L 85.499 362.531 L 81.195 363.285 L 79.417 362.108 L 78.818 361.098 L 76.937 360.648 L 73.833 363.41 L 73.266 360.912 L 70.811 360.733 L 70.287 359.622 L 67.943 362.317 L 64.465 363.065 L 63.479 361.495 L 57.644 361.443 L 51.874 354.191 L 51.918 349.416 L 50.915 348.691 L 51.461 346.792 L 53.225 346.726 L 56.212 349.453 L 58.794 349.722 L 59.402 348.05 L 60.118 347.471 L 62.299 347.059 L 64.169 345.01 L 65.328 345.602 L 67.162 345.165 L 71.69 347.986 L 75.032 347.633 L 76.084 347.089 L 77.845 346.551 L 84.813 347.554 L 92.785 351.595 L 98.828 351.262 L 101.766 352.943 L 105.331 351.818 L 109.245 351.737 L 112.081 348.292 L 116.764 348.107 L 117.384 343.281 L 119.722 340.304 L 121.333 341.559 L 124.749 342.128 L 124.749 340.759 L 125.999 338.55 L 127.457 336.719 L 133.117 337.607 L 134.95 334.074 L 140.375 333.92 L 142.141 330.787 L 149.527 325.086 L 154.778 325.708 L 156.255 324.124 L 161.433 325.507 L 161.654 327.785 L 163.88 328.892 L 165.862 326.047 L 167.217 325.987 L 169.914 331.521 L 171.641 330.681 L 175.323 330.717 L 175.777 328.954 L 180.349 327.802 L 180.928 329.391 L 186.811 330.391 L 188.45 329.046 L 190.478 331.118 L 193.545 330.29 L 195.452 328.924 L 200.701 331.184 L 205.374 330.728 L 208.223 331.782 L 214.203 330.033 L 214.706 329.134 L 218.225 328.639 L 219.866 331.028 L 222.967 330.737 L 226.711 331.275 L 228.831 333.008 L 229.056 335.617 L 233.015 335.39 L 236.931 336.608 L 239.489 335.354 L 241.937 337.196 L 244.918 336.929 L 246.915 339.577 L 248.171 339.471 L 248.229 337.883 L 251.185 337.649 L 250.14 335.939 L 254.267 335.283 L 254.754 333.748 L 257.664 335.583 L 257.117 336.885 L 258.442 337.71 L 260.966 337.087 L 261.707 339.904 L 260.638 344.122 L 254.541 347.423 L 252.241 352.33 L 247.464 352.485 L 245.962 355.498 L 241.712 356.066 L 240.767 357.647 L 236.519 359.168 L 236.519 359.167 Z "
    fill="rgb(213,180,243)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="apure"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Apure">Apure</a>'
  },
  {
    id: 3,
    svgId: "aragua",
    name: "aragua",
    description: `<p>Su nombre se deriva de los vocablos indígenas <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Caribes">Caribes</a> y <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pueblo_cumanagoto">Cumanagoto</a>, Aragua, que significa palma o aracuy, el cual tiene como significado yagua o curuzo.
    Otros les decían araguaicois o araguare, resumiendo todo esto eran palmas, palmeras o chaguaramas, muy abundantes en esa época en la cabecera del río. Quizás la palabra “Hua”, (castellanizada en Gua), no aclara el vocablo “Aragua”, sin embargo, la lengua caribe en rama de <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Idioma_guaran%C3%AD">Guaraní</a>, lo desempeña en papel eufónico, lo que si es cierto, es que los caribes llamaban a este poblado Aragua.
     </p>`,
    flag: AraguaFlag,
    shield: araguaShield,
    svg: `<path
    d=" M 243.963 267.538 L 240.301 266.396 L 239.76 264.357 L 237.935 264.596 L 237.484 263.309 L 234.84 263.58 L 234.713 261.617 L 233.436 261.899 L 233.061 260.141 L 233.266 258.074 L 231.248 257.912 L 229.087 259.213 L 228.468 257.602 L 226.843 258.308 L 223.462 255.846 L 220.353 257.332 L 220.073 256.246 L 218.562 255.34 L 216.902 255.876 L 216.72 254.879 L 214.79 254.327 L 214.043 253.292 L 215.252 252.686 L 215.587 251.783 L 214.511 246.647 L 215.785 245.708 L 215.057 243.448 L 214.162 243.009 L 213.405 243.587 L 212.02 242.854 L 210.123 243.705 L 209.021 242.241 L 207.54 242.09 L 207.448 239.446 L 208.15 238.535 L 208.312 238.975 L 208.175 239.411 L 209.11 239.685 L 208.963 238.718 L 209.117 238.256 L 210.46 238.743 L 210.326 237.901 L 211.954 237.501 L 212.8 237.768 L 214.401 237.682 L 217.436 236.889 L 217.93 237.365 L 219.866 236.698 L 220.303 236.86 L 221.828 236.398 L 223.55 236.129 L 224.445 236.585 L 224.14 237.382 L 226.496 241.62 L 227.324 240.57 L 230.063 240.163 L 231.607 242.815 L 232.979 243.452 L 231.707 244.307 L 233.365 244.912 L 235.249 247.013 L 234.459 248.035 L 234.752 248.99 L 233.827 250.06 L 235.351 253.102 L 237.879 253.339 L 240.071 252.835 L 241.074 255.202 L 242.119 254.64 L 243.578 255.27 L 244.655 254.262 L 246.957 255.044 L 248.106 256.219 L 252.955 256.689 L 253.214 260.874 L 254.197 261.555 L 252.492 263.996 L 252.311 265.869 L 253.451 266.886 L 255.01 269.301 L 254.493 270.972 L 254.613 273.936 L 253.38 277.76 L 251.033 279.506 L 250.149 282.2 L 248.993 282.476 L 245.546 279.797 L 242.607 279.638 L 239.35 276.307 L 239.147 276.894 L 237.961 276.837 L 238.726 273.638 L 240.839 272.125 L 242.69 272.458 L 243.421 270.816 L 244.489 269.689 L 243.963 267.538 L 243.963 267.538 Z "
    fill="rgb(213,180,243)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="aragua"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Aragua">Aragua</a>'
  },
  {
    id: 4,
    svgId: "barinas",
    name: "barinas",
    description: `<p> Barinas es una voz de origen indígena, posiblemente <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Muiscas">Chibcha</a>, con la que se designa a un viento fuerte que sopla en la estación lluviosa, desde los valles del <a style="color: inherit !important;" href="https://ceb.wikipedia.org/wiki/R%C3%ADo_Santo_Domingo_(suba_sa_Venezuela,_Estado_Barinas)">río Santo Domingo</a>, hacia la región Andina; conocido en la zona como "viento barinés". Esta palabra también se aplica a un arbusto bajo, espinoso, de flores amarillas, que abundan en el alto llano; conocido igualmente con los nombres de espinoamarillo, espinito, flor amarilla y flor de barinas (Cassia aculeata). </p>`,
    flag: BarinasFlag,
    shield: barinasShield,
    svg: `<path
    d=" M 91.411 325.392 L 93.747 322.575 L 93.855 319.266 L 94.741 316.252 L 93.246 314.234 L 93.04 311.487 L 96.569 309.866 L 97.237 307.806 L 95.919 306.086 L 96.963 303.059 L 103.43 301.049 L 109.082 297.147 L 109.523 294.673 L 111.092 292.188 L 112.802 291.806 L 116.578 291.462 L 119.047 289.934 L 123.591 291.025 L 125.914 294.012 L 128.205 294.333 L 132.171 296.876 L 134.683 300.271 L 138.72 300.417 L 141.371 302.235 L 143.801 300.246 L 144.753 299.911 L 146.059 303.008 L 150.334 303.201 L 151.961 303.792 L 152.557 305.127 L 157.962 306.885 L 159.082 309.55 L 161.931 312.352 L 161.329 314.873 L 165.57 316.959 L 169.633 321.727 L 171.34 324.95 L 172.809 324.316 L 173.081 318.825 L 179.104 313.911 L 180.045 309.199 L 181.639 306.763 L 181.185 306.07 L 184.32 305.959 L 187.421 304.571 L 189.624 305.602 L 191.513 304.873 L 194.741 305.267 L 197.5 304.984 L 199.183 307.551 L 201.77 308.235 L 201.844 309.319 L 204.796 311.102 L 207.524 316.868 L 212.739 318.674 L 214.213 322.976 L 217.977 325.989 L 217.115 327.577 L 218.115 328.752 L 214.678 329.126 L 214.282 329.984 L 208.329 331.742 L 205.355 330.69 L 200.749 331.198 L 195.467 328.933 L 193.342 330.383 L 190.504 331.077 L 188.483 329.053 L 186.684 330.422 L 180.916 329.389 L 180.234 327.845 L 175.787 329.042 L 175.329 330.634 L 171.634 330.713 L 169.849 331.493 L 167.269 326.034 L 165.895 326.003 L 163.875 328.843 L 161.686 327.729 L 161.399 325.57 L 156.155 324.153 L 154.769 325.733 L 149.583 325.004 L 142.18 330.742 L 140.362 333.907 L 135.051 334.019 L 133.131 337.632 L 127.467 336.767 L 125.999 338.485 L 124.706 340.821 L 124.764 342.125 L 121.23 341.573 L 119.704 340.319 L 117.37 343.34 L 116.801 348.075 L 111.967 348.429 L 109.21 351.654 L 105.412 351.711 L 101.769 352.88 L 98.726 351.255 L 92.805 351.596 L 84.899 347.604 L 77.905 346.513 L 76.15 347.058 L 75.005 347.679 L 71.671 347.924 L 67.168 345.187 L 65.293 345.58 L 64.199 344.969 L 63.75 344.847 L 63.437 344.31 L 64.971 343.526 L 65.402 342.938 L 66.874 343.11 L 67.436 343.52 L 67.662 342.915 L 69.074 343.375 L 70.153 342.999 L 71.659 343.345 L 73.472 344.009 L 73.9 343.446 L 75.312 344.256 L 76.396 344.068 L 80.442 344.49 L 82.371 345.47 L 84.428 345.287 L 83.589 344.599 L 82.428 343.991 L 81.555 342.519 L 80.359 342.153 L 79.354 341.308 L 78.355 340.827 L 77.821 340.339 L 77.491 339.13 L 77.849 337.792 L 77.465 336.521 L 76.611 335.148 L 76.964 334.317 L 77.949 333.607 L 80.257 333.907 L 86.385 326.727 L 91.411 325.392 L 91.411 325.392 Z "
    fill="rgb(255,167,169)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="barinas"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Barinas">Barinas</a>'
  },
  {
    id: 5,
    svgId: "bolivar",
    name: "bolivar",
    description: `<p> Llamado así para conmemorar al Libertador <a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar">Simón Bolívar</a>.
     </p>`,
    flag: BolívarFlag,
    shield: bolivarShield,
    svg: `<path
    d=" M 340.492 327.466 L 341.546 327.038 L 342.882 328.236 L 344.509 329.965 L 345.316 328.527 L 350.966 327.347 L 352.991 322.466 L 358.903 321.254 L 362.48 322.533 L 365.495 322.428 L 364.552 319.998 L 367.498 319.462 L 370.897 318.585 L 371.967 315.855 L 377.031 314.697 L 377.579 312.891 L 378.943 311.912 L 380.006 315.088 L 386.069 315.427 L 387.179 316.55 L 391.056 314.824 L 391.214 312.253 L 395.547 311.536 L 396.789 310.138 L 399.891 310.493 L 404.039 315.626 L 410.231 315.807 L 428.096 310.854 L 428.573 312.579 L 429.66 314.758 L 425.159 318.519 L 430.652 325.747 L 430.448 327.194 L 431.693 330.066 L 434.666 331.493 L 435.472 333.527 L 443.014 336.06 L 456.092 332.14 L 467.431 340.391 L 465.06 341.382 L 464.71 344.199 L 466.992 344.81 L 467.365 348.384 L 469.162 350.168 L 467.734 351.263 L 467.167 353.306 L 469.184 355.756 L 470.567 356.48 L 470.823 355.17 L 472.251 355.419 L 473.887 353.863 L 476.938 356.661 L 480.681 358.077 L 476.973 363.99 L 472.835 365.621 L 471.785 368.569 L 468.322 367.75 L 465.843 370.751 L 464.021 370.967 L 462.728 369.483 L 458.256 369.798 L 457.339 372.252 L 451.602 372.223 L 449.361 376.484 L 447.581 376.594 L 447.889 379.19 L 449.485 379.798 L 449.335 387.892 L 451.373 389.814 L 440.217 399.141 L 464.487 425.206 L 467.807 427.179 L 469.481 432.975 L 471.227 434.438 L 470.628 436.468 L 468.896 436.236 L 464.818 442.929 L 459.327 444.81 L 457.364 451.013 L 453.463 451.43 L 452.864 453.015 L 445.412 451.702 L 444.646 449.999 L 443.605 452.126 L 445.399 454.103 L 443.813 455.813 L 439.564 454.985 L 436.982 456.771 L 436.909 461.137 L 433.814 461.119 L 433.25 462.519 L 431.327 461.096 L 428.802 461.147 L 425.642 464.83 L 422.715 465.047 L 422.603 466.752 L 420.536 464.795 L 418.565 464.863 L 415.734 467.907 L 413.133 468.081 L 411.649 465.816 L 406.701 465.953 L 404.296 462.716 L 399.369 467.154 L 400.156 469.233 L 398.806 470.68 L 392.326 469.705 L 392.214 471.99 L 390.032 474.283 L 393.543 478.548 L 393.199 482.716 L 389.547 484.885 L 389.133 486.049 L 387.388 486.781 L 379.632 481.591 L 375.967 475.99 L 370.34 471.639 L 368.309 471.703 L 366.766 476.257 L 363.914 476.041 L 361.071 471.71 L 359.563 472.038 L 358.544 473.206 L 352.25 472.373 L 349.731 474.668 L 347.914 474.886 L 347.078 476.568 L 344.263 473.845 L 344.597 469.665 L 342.185 465.613 L 340.52 466.461 L 329.355 465.819 L 328.55 468.279 L 325.494 467.245 L 323.726 464.823 L 325.076 459.95 L 322.77 457.133 L 323.529 452.93 L 320.635 450.615 L 315.691 450.821 L 310.054 446.798 L 306.44 439.785 L 303.714 435.038 L 303.421 430.672 L 300.401 428.322 L 300.078 425.522 L 301.806 423.374 L 303.283 424.678 L 306.574 422.991 L 305.844 420.992 L 304.142 421.393 L 302.407 419.978 L 304.125 418.631 L 306.663 418.925 L 306.689 417.126 L 305.33 415.128 L 302.613 415.587 L 300.481 412.184 L 302.076 409.986 L 302.243 408.011 L 301.065 406.841 L 294.262 406.375 L 291.695 408.153 L 292.033 410.754 L 290.264 410.916 L 287.054 405.939 L 286.814 403.754 L 289.714 399.765 L 289.995 396.857 L 288.559 396.006 L 287.33 393.848 L 281.883 393.997 L 280.085 398.607 L 278.606 399.21 L 274.247 407.199 L 268.283 406.876 L 267.831 408.913 L 265.467 408.045 L 264.001 405.571 L 263.849 402.767 L 258.352 404.028 L 253.596 409.053 L 244.077 410.566 L 242.573 412.445 L 238.846 412.251 L 238.369 410.865 L 233.551 410.008 L 232.394 412.083 L 230.176 410.93 L 230.008 408.561 L 231.821 407.014 L 231.467 404.47 L 233.21 402.623 L 233.31 398.938 L 231.569 395.98 L 228.157 395.646 L 228.147 394.335 L 225.272 394.112 L 222.199 392.349 L 226.433 389.463 L 228.919 385.14 L 233.131 383.138 L 234.24 373.635 L 236.514 371.76 L 237.278 366.278 L 234.234 361.511 L 234.234 358.927 L 236.579 359.187 L 240.893 357.555 L 241.93 356.099 L 245.983 355.479 L 247.374 352.477 L 252.286 352.297 L 254.495 347.423 L 260.848 344.05 L 261.681 339.871 L 266.087 340.548 L 270.89 337.503 L 274.281 340.214 L 276.682 338.766 L 280.493 338.69 L 283.704 332.411 L 285.998 330.983 L 291.75 331.465 L 294.146 333.022 L 300.259 332.566 L 305.116 334.65 L 304.957 336.027 L 313.021 338.705 L 313.834 340.32 L 317.243 340.107 L 321.748 336.075 L 325.406 336.017 L 329.305 333.828 L 329.054 332.599 L 325.53 332.509 L 325.208 329.011 L 328.909 325.335 L 331.392 327.278 L 333.991 326.759 L 335.648 323.402 L 337.863 323.527 L 337.851 325.72 L 340.49 327.466 L 340.492 327.466 Z "
    fill="rgb(180,243,180)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="bolivar"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Bol%C3%ADvar">Bolívar</a>'
  },
  {
    id: 6,
    svgId: "carabobo",
    name: "carabobo",
    description: `<p> Se dice que su nombre deriva de la lengua Arauca. Karau significa sabana y Bo quiere decir agua. Al ir duplicado representa que hay mucha agua. Entonces Carabobo significa sabana de muchas aguas, haciendo referencia a ríos, quebradas y lagunas de la región. Otros investigadores dicen que Carabobo era el nombre de un tipo de palma local muy común en la zona.
    </p>`,
    flag: CaraboboFlag,
    shield: "",
    svg: `<path
    d=" M 215.577 251.66 L 215.284 252.67 L 213.983 253.319 L 214.883 254.407 L 216.773 254.893 L 216.903 255.915 L 218.509 255.335 L 220.083 256.209 L 221.031 260.39 L 220.115 260.159 L 219.06 258.917 L 218.258 258.666 L 217.612 261.576 L 215.372 260.978 L 214.335 262.192 L 213.588 260.981 L 210.822 259.765 L 210.42 257.554 L 208.737 259.172 L 209.84 260.64 L 209.241 261.91 L 207.063 261.538 L 205.145 262.793 L 203.557 261.958 L 203.314 259.979 L 200.882 261.062 L 198.849 261.597 L 197.501 258.12 L 195.538 257.943 L 195.078 256.68 L 193.642 256.376 L 193.911 255.087 L 195.649 253.396 L 195.228 252.409 L 193.53 253.478 L 192.539 253.184 L 190.806 254.926 L 190.936 255.821 L 189.816 256.315 L 188.834 255.171 L 189.426 254.201 L 187.769 253.198 L 188.614 250.758 L 187.672 248.566 L 189.828 248.113 L 189.254 246.15 L 190.188 245.524 L 190.083 244.266 L 188.354 243.804 L 188.374 241.688 L 187.85 240.095 L 189.653 239.337 L 190.19 237.928 L 189.164 236.981 L 189.395 235.467 L 192.569 235.883 L 193.289 234.586 L 194.371 234.297 L 195.242 235.448 L 195.96 236.972 L 197.659 237.371 L 198.044 238.303 L 199.62 237.323 L 200.87 237.631 L 201.461 238.144 L 202.929 238.714 L 202.966 237.753 L 203.636 237.965 L 203.962 237.965 L 204.381 238.401 L 204.81 238.838 L 205.079 238.697 L 205.489 238.164 L 205.489 239.035 L 205.994 239.129 L 206.268 238.812 L 206.438 238.298 L 206.74 238.786 L 207.151 238.538 L 208.126 238.607 L 207.442 239.42 L 207.432 242.127 L 208.996 242.24 L 210.131 243.717 L 211.965 242.874 L 213.471 243.606 L 214.157 242.988 L 215.049 243.408 L 215.828 245.689 L 214.497 246.582 L 215.579 251.66 L 215.577 251.66 Z "
    fill="rgb(255,167,169)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="carabobo"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Carabobo">Carabobo</a>'
  },
  {
    id: 7,
    svgId: "cojedes",
    name: "cojedes",
    description: `<p> El nombre del estado Cojedes proviene del vocablo indígena cohaeri, que significa «río encantado», y con el cual los habitantes de la zona nombraban a uno de sus principales ríos. Otros investigadores indican que Cojedes es una voz de origen <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Caribes">Caribe</a> que proviene de las voces: "Coa" que significa "Pueblo, Gente, Nación" y "Heir" que equivale a "Ollas Cocidas, Cerámica"; de allí se puede deducir que Cojedes significa "Pueblo de Cerámica" Posiblemente este nombre nos recuerde a un grupo humano, que habitó en la Región, que fabricaban o usaban ollas o recipientes de <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Cer%C3%A1mica">Cerámica</a>. </p>`,
    flag: CojedesFlag,
    shield: cojedesShield,
    svg: `<path
    d=" M 181.333 306.238 L 180.017 303.576 L 177.635 301.917 L 176.78 300.028 L 175.321 299.418 L 174.8 298.324 L 177.506 297.171 L 181.001 296.839 L 181.001 295.009 L 179.337 294.011 L 177.839 288.854 L 179.337 287.69 L 179.529 282.123 L 173.088 279.525 L 172.2 278.088 L 170.019 278.209 L 169.187 276.213 L 170.47 273.769 L 169.57 272.917 L 170.684 269.061 L 168.897 268.515 L 168.577 267.843 L 166.524 267.064 L 166.299 264.434 L 166.757 263.503 L 166.68 260.529 L 168.51 260.47 L 169.023 261.091 L 171.815 261.819 L 172.959 261.161 L 174.84 261.174 L 177.036 260.006 L 177.229 257.954 L 179.299 256.712 L 180.867 256.603 L 180.7 257.59 L 181.142 258.287 L 183.932 258.19 L 183.617 259.575 L 185.264 259.307 L 186.735 257.278 L 189.81 256.306 L 190.983 255.774 L 190.864 254.997 L 192.522 253.203 L 193.48 253.493 L 195.212 252.359 L 195.568 253.478 L 193.847 255.143 L 193.657 256.43 L 195.16 256.647 L 195.512 257.888 L 197.395 258.156 L 198.853 261.53 L 201.094 260.907 L 203.234 260.074 L 203.534 261.972 L 205.127 262.74 L 206.983 261.604 L 209.298 261.823 L 211.476 264.37 L 211.746 267.138 L 208.673 269.516 L 205.557 269.681 L 205.737 271.532 L 204.199 272.801 L 205.83 274.628 L 205.091 280.087 L 207.124 282.534 L 206.126 286.193 L 207.956 287.69 L 207.956 290.351 L 203.8 294.101 L 204.274 295.618 L 202.595 299.074 L 200.968 300.498 L 202.502 301.877 L 202.992 307.239 L 201.751 308.378 L 201.838 308.427 L 199.235 307.658 L 197.519 304.995 L 194.856 305.291 L 191.66 304.817 L 189.589 305.646 L 187.399 304.522 L 184.204 305.942 L 181.333 306.238 L 181.333 306.238 Z "
    fill="rgb(213,180,243)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="cojedes"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Cojedes">Cojedes</a>'
  },
  {
    id: 8,
    svgId: "deltaamacuro",
    name: "delta Amacuro",
    description: `<p> Amacuro es una voz de origen indígena de origen Guarao (Warao) que proviene de "amacoro" y significa: "La Presencia de la Cotorra" ave muy abundante en las bocas del <a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Orinoco">Orinoco</a>.  El estado fue designado con ese nombre a partir del 19 de abril de 1.901 en honor al Delta del Orinoco y a la población de San José de Amacuro, situada a orillas del Río Amacuro. Otras investigaciones sostienen que el nombre del estado Delta Amacuro proviene de un vocablo indígena <a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Warao_people">Warao</a> o guaraúno que significa “tejido de aguas”. </p>`,
    flag: DeltaAmacuroFlag,
    shield: deltaamacuroShield,
    svg: `<path
    d=" M 403.547 267.312 L 404.296 263.984 L 406.627 263.571 L 407.459 261.742 L 405.296 260.245 L 404.131 257.417 L 404.963 256.752 L 405.795 257.75 L 408.624 256.752 L 408.79 254.09 L 406.96 253.758 L 407.126 252.76 L 409.123 252.094 L 410.787 254.09 L 413.116 254.09 L 415.779 255.754 L 414.947 258.748 L 417.276 256.918 L 418.94 257.916 L 420.271 260.577 L 422.268 260.577 L 422.434 261.409 L 423.932 264.07 L 424.098 262.906 L 425.263 262.74 L 425.596 262.074 L 423.765 261.575 L 423.765 259.247 L 424.764 259.247 L 425.596 260.577 L 428.092 260.577 L 428.424 261.575 L 430.92 261.742 L 432.584 261.742 L 433.25 263.072 L 434.248 264.569 L 432.584 265.734 L 433.582 268.063 L 434.082 268.063 L 433.582 265.235 L 435.413 264.403 L 431.087 258.914 L 429.755 258.914 L 429.589 257.916 L 432.251 257.916 L 436.577 260.744 L 437.576 263.904 L 440.404 264.569 L 441.736 266.732 L 446.395 268.561 L 451.719 268.728 L 455.879 272.387 L 459.04 272.72 L 461.536 274.716 L 461.536 277.211 L 459.04 278.708 L 458.541 280.205 L 455.712 281.037 L 451.553 283.698 L 451.553 285.86 L 452.717 284.031 L 455.38 281.868 L 456.877 283.033 L 457.876 282.035 L 460.871 280.538 L 462.701 280.538 L 462.535 282.201 L 460.205 282.866 L 459.706 284.862 L 455.879 286.526 L 454.881 284.862 L 454.714 286.858 L 452.218 288.355 L 451.719 290.019 L 454.049 288.355 L 456.544 287.524 L 458.874 288.023 L 459.373 286.858 L 462.867 283.698 L 464.531 284.197 L 466.195 286.193 L 463.699 286.027 L 463.034 287.357 L 461.203 287.191 L 460.205 288.854 L 458.541 288.854 L 462.535 289.686 L 460.871 291.017 L 459.539 292.347 L 458.375 291.516 L 456.877 292.846 L 454.049 294.676 L 452.884 293.512 L 451.553 294.51 L 453.383 295.342 L 450.721 295.674 L 450.055 296.839 L 455.213 296.506 L 457.044 293.844 L 458.042 294.343 L 461.869 294.177 L 463.034 293.678 L 465.197 294.842 L 464.032 296.506 L 465.03 297.837 L 466.195 297.67 L 466.195 298.502 L 463.699 298.502 L 462.035 299.666 L 463.866 299.5 L 464.198 300.498 L 468.358 300.831 L 468.525 301.829 L 464.032 301.33 L 462.202 302.328 L 459.706 301.496 L 457.044 301.496 L 458.375 299.833 L 457.543 299.167 L 458.708 297.504 L 461.703 298.169 L 460.871 296.672 L 457.876 297.504 L 455.712 299.001 L 454.714 298.502 L 453.716 299.833 L 456.212 299.5 L 456.544 300.831 L 454.381 301.33 L 453.05 302.66 L 450.554 302.66 L 451.22 303.658 L 453.716 303.658 L 454.049 305.654 L 451.719 306.985 L 450.222 305.987 L 447.726 306.486 L 447.726 307.983 L 443.732 308.648 L 444.398 309.147 L 448.058 308.648 L 448.724 307.817 L 453.716 307.817 L 455.213 305.322 L 454.049 303.326 L 455.879 302.494 L 457.876 303.991 L 464.864 303.991 L 467.193 305.654 L 470.355 305.654 L 473.35 306.153 L 475.513 304.49 L 474.681 303.825 L 474.848 302.494 L 484.831 302.494 L 486.329 304.157 L 490.655 305.155 L 494.981 309.314 L 495.314 311.476 L 498.309 313.139 L 497.643 316.133 L 491.154 317.963 L 487.66 325.116 L 482.668 326.779 L 477.843 331.769 L 472.019 331.436 L 469.689 334.43 L 471.187 335.927 L 467.442 340.419 L 456.053 332.196 L 442.913 336.13 L 435.381 333.535 L 434.712 331.443 L 431.699 330.104 L 430.36 327.342 L 430.695 325.752 L 425.171 318.555 L 429.774 314.705 L 428.519 312.613 L 428.1 310.688 L 410.358 315.793 L 403.998 315.626 L 399.897 310.604 L 401.822 308.094 L 405.755 307.592 L 409.521 302.068 L 415.38 300.227 L 415.965 297.298 L 417.723 295.708 L 418.058 293.783 L 415.631 293.448 L 414.041 291.356 L 415.965 289.515 L 413.706 287.59 L 411.865 289.096 L 409.94 287.841 L 405.337 288.259 L 405.337 288.343 L 404.165 284.744 L 406.007 283.071 L 406.258 281.229 L 402.826 281.648 L 401.32 279.388 L 403.831 277.045 L 403.58 274.032 L 402.073 272.944 L 401.906 269.68 L 399.981 269.429 L 403.547 267.312 L 403.547 267.312 Z "
    fill="rgb(255,167,169)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="deltaamacuro"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Delta_Amacuro">Delta Amacuro</a>'
  },
  {
    id: 9,
    svgId: "falcon",
    name: "falcón",
    description: `<p> El estado Falcón debe su nombre al Mariscal <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Juan_Cris%C3%B3stomo_Falc%C3%B3n">Juan Crisóstomo Falcón</a>, uno de las principales figuras de la Federación venezolana, quien naciera cerca de la población de <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jadacaquiva">Jadacaquiva</a> en la península de <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pen%C3%ADnsula_de_Paraguan%C3%A1">Paraguaná</a>.
     </p>`,
    flag: FalconFlag,
    shield: "",
    svg: `<path
    d=" M 95.007 213.973 L 96.345 213.893 L 96.229 213.302 L 98.171 212.474 L 99.996 211.515 L 102.177 211.683 L 105.628 210.014 L 111.951 210.447 L 112.295 209.101 L 113.589 208.339 L 115.259 208.562 L 115.523 207.592 L 117.143 207.56 L 118.951 206.927 L 119.552 207.06 L 119.97 206.319 L 120.586 205.874 L 121.983 206.379 L 122.219 205.887 L 124.287 205.386 L 124.629 204.761 L 125.357 203.443 L 125.61 202.518 L 126.18 202.304 L 127.259 203.315 L 128.013 202.382 L 128.646 202.382 L 128.783 202.604 L 128.92 202.827 L 129.314 202.467 L 129.708 202.116 L 129.708 201.825 L 129.708 201.534 L 129.905 201.654 L 130.094 201.765 L 130.248 201.525 L 130.394 201.286 L 129.974 201.397 L 128.989 201.166 L 130.017 200.755 L 128.677 200.708 L 128.305 200.108 L 126.346 199.622 L 126.222 198.374 L 129.938 200.189 L 131.147 200.147 L 131.259 200.507 L 131.37 200.875 L 132.398 201.337 L 133.434 200.712 L 133.434 200.558 L 134.822 200.558 L 134.394 202.142 L 134.693 202.501 L 136.329 203.417 L 138.454 203.417 L 138.659 202.604 L 139.045 202.484 L 140.132 201.654 L 140.843 200.943 L 140.663 199.993 L 140.287 199.899 L 140.072 199.497 L 139.858 198.666 L 139.858 198.238 L 139.447 198.238 L 139.447 196.74 L 138.162 193.89 L 137.888 193.342 L 137.391 193.736 L 137.117 193.992 L 136.929 193.479 L 136.338 193.479 L 135.901 193.915 L 135.473 194.343 L 134.488 194.164 L 134.077 194.54 L 133.434 194.926 L 133.055 194.926 L 133.434 194.557 L 132.903 194.121 L 130.428 194.917 L 126.702 195.953 L 124.715 196.389 L 123.533 196.586 L 123.105 196.586 L 122.779 196.261 L 122.454 195.739 L 122.659 195.55 L 122.873 195.55 L 122.873 194.917 L 122.873 194.284 L 122.651 193.873 L 122.437 193.462 L 122.556 193.077 L 122.676 192.691 L 123.036 192.546 L 123.73 192.323 L 123.679 192.032 L 123.311 192.032 L 123.191 191.835 L 123.071 191.647 L 123.285 191.51 L 123.482 191.133 L 123.182 190.5 L 122.882 190.106 L 122.523 190.397 L 122.172 190.68 L 122.326 190.372 L 122.488 190.063 L 122.189 190.431 L 121.889 190.791 L 121.623 190.14 L 121.349 189.498 L 120.835 189.019 L 120.321 188.54 L 120.45 186.862 L 120.733 184.927 L 120.93 184.397 L 121.092 184.003 L 121.221 183.883 L 121.375 184.037 L 121.452 183.9 L 121.837 182.916 L 122.651 181.238 L 123.079 180.536 L 123.079 179.962 L 123.079 179.397 L 123.285 179.397 L 123.465 179.243 L 123.465 178.815 L 123.491 178.541 L 124.476 178.61 L 125.461 178.67 L 125.803 178.362 L 126.814 177.463 L 128.733 176.059 L 129.983 175.254 L 130.437 175.254 L 130.891 175.254 L 131.259 175.665 L 131.636 176.085 L 132.484 176.085 L 133.332 176.085 L 134.112 176.795 L 134.891 177.514 L 134.891 177.771 L 135.645 179.483 L 136.536 181.049 L 137.058 182.197 L 137.426 183.224 L 137.572 185.295 L 137.709 187.367 L 138.086 189.028 L 139.294 193.171 L 140.142 195.653 L 141.855 199.274 L 142.137 199.283 L 143.782 201.449 L 144.673 202.091 L 145.067 202.305 L 145.461 202.236 L 145.461 201.154 L 148.253 200.524 L 150.206 200.773 L 150.893 200.502 L 151.516 201.021 L 152.707 201.338 L 153.332 201.098 L 153.332 200.824 L 154.958 200.798 L 155.732 200.447 L 156.808 199.151 L 158.586 198.882 L 159.165 200.542 L 159.516 200.721 L 160.741 200.482 L 161.229 200.97 L 162.668 201.372 L 163.379 201.149 L 164.338 202.622 L 165.092 202.938 L 166.319 202.98 L 167.027 204.179 L 167.61 201.865 L 172.869 202.93 L 173.118 203.281 L 173.469 203.623 L 174.548 204.573 L 175.533 205.515 L 176.039 205.703 L 176.544 205.9 L 176.638 206.371 L 177.357 206.585 L 178.051 206.833 L 178.145 206.576 L 178.231 206.32 L 178.642 206.32 L 179.053 206.32 L 180.415 207.766 L 181.777 209.222 L 182.274 209.222 L 182.779 209.222 L 182.625 209.478 L 182.471 209.735 L 182.771 209.504 L 183.062 209.264 L 183.482 209.436 L 183.893 209.598 L 185.614 211.43 L 187.627 213.622 L 187.935 213.981 L 188.398 213.981 L 188.869 213.981 L 189.854 215.453 L 190.839 217.123 L 191.01 217.499 L 191.379 218.484 L 192.013 219.879 L 192.287 220.547 L 192.287 220.804 L 191.679 221.12 L 191.062 221.437 L 190.428 221.437 L 189.803 221.437 L 189.803 221.694 L 189.803 221.959 L 190.231 222.224 L 190.651 222.49 L 191.053 222.361 L 191.447 222.242 L 192.175 222.584 L 192.912 222.935 L 193.529 222.841 L 194.154 222.747 L 194.488 223.123 L 194.822 223.491 L 194.719 223.774 L 194.608 224.048 L 193.075 223.902 L 192.304 223.825 L 192.115 223.808 L 192.081 223.979 L 192.081 224.159 L 192.081 224.339 L 191.636 224.339 L 191.199 224.339 L 191.439 224.621 L 191.679 224.912 L 191.387 225.024 L 191.096 225.135 L 190.993 225.82 L 190.891 226.505 L 191.165 227.335 L 191.901 229.723 L 192.372 231.273 L 193.058 232.36 L 194.463 234.347 L 193.163 234.545 L 192.451 233.505 L 189.845 232.809 L 186.208 233.186 L 183.363 234.163 L 180.303 231.332 L 181.304 229.495 L 180.343 228.654 L 180.772 227.327 L 180.559 227.099 L 179.324 228.61 L 175.37 229.603 L 174.308 231.462 L 171.288 231.207 L 169.494 229.597 L 166.158 229.404 L 165.105 230.955 L 164.109 230.97 L 162.547 229.434 L 157.57 230.647 L 153.342 229.661 L 148.435 231.39 L 146.399 228.402 L 143.015 227.516 L 142.38 228.311 L 139.937 230.101 L 137.731 230.393 L 137.037 228.07 L 135.229 228.568 L 134.813 230.099 L 132.626 230.023 L 131.556 231.539 L 128.988 230.888 L 127.813 231.527 L 126.394 230.696 L 124.28 231.821 L 122.862 234.483 L 119.07 233.994 L 116.825 235.553 L 116.989 238.116 L 114.291 239.11 L 113.693 238.024 L 111.018 240.75 L 110.251 243.304 L 107.573 242.914 L 107.135 243.286 L 105.353 243.22 L 104.574 242.145 L 105.241 240.532 L 101.977 237.776 L 100.181 238.447 L 98.123 238.691 L 98.163 237.795 L 95.518 235.163 L 94.665 232.294 L 91.661 230.693 L 92.774 229.077 L 92.798 227.322 L 85.487 222.553 L 86.107 220.853 L 84.984 220.199 L 85.042 219.058 L 86.923 218.843 L 88.168 217.833 L 88.579 217.67 L 89.924 216.926 L 91.859 216.061 L 92.647 215.804 L 92.844 215.291 L 94.103 214.691 L 95.007 213.974 L 95.007 213.973 Z "
    fill="rgb(213,180,243)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="falcon"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Falc%C3%B3n">Falcón</a>'
  },
  {
    id: 10,
    svgId: "guarico",
    name: "guarico",
    description: `<p> La palabra guárico es un vocablo de la lengua <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Arahuacos">Arawaca</a> que sirve de nombre al árbol conocido como «caro» y a un río que recorre una gran porción del estado. En la lengua de la nación <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Caribes">Caribe</a> la palabra "guárico" significa "cacique". </p>`,
    flag: GuaricoFlag,
    shield: guaricoShield,
    svg: `<path
    d=" M 249.023 282.503 L 245.482 279.75 L 242.633 279.653 L 239.327 276.237 L 239.106 276.892 L 237.974 276.828 L 238.689 273.695 L 240.835 272.094 L 242.685 272.449 L 243.413 270.801 L 244.504 269.678 L 243.991 267.535 L 240.322 266.438 L 239.745 264.302 L 237.905 264.604 L 237.47 263.296 L 234.805 263.602 L 234.693 261.572 L 233.409 261.933 L 233.006 260.187 L 233.305 258.035 L 231.207 257.898 L 229.087 259.232 L 228.456 257.589 L 226.736 258.332 L 223.514 255.825 L 220.387 257.33 L 221.127 260.389 L 220.112 260.14 L 219.151 258.992 L 218.231 258.654 L 217.662 261.531 L 215.359 260.998 L 214.303 262.163 L 213.722 261.021 L 210.828 259.707 L 210.48 257.502 L 208.786 259.238 L 209.896 260.587 L 209.32 261.896 L 211.516 264.433 L 211.716 267.168 L 208.706 269.504 L 205.608 269.675 L 205.741 271.476 L 204.214 272.763 L 205.885 274.76 L 205.099 280.045 L 207.164 282.566 L 206.079 286.171 L 207.889 287.479 L 207.967 290.339 L 203.799 294.081 L 204.254 295.67 L 202.745 298.879 L 200.993 300.487 L 202.554 301.848 L 202.968 307.251 L 201.882 308.351 L 201.853 309.262 L 204.8 311.092 L 207.56 316.85 L 212.731 318.707 L 214.266 323.064 L 218.056 326.076 L 217.147 327.593 L 218.061 328.733 L 218.278 328.675 L 219.863 331.027 L 222.958 330.772 L 226.736 331.259 L 228.794 332.977 L 229.08 335.585 L 232.98 335.37 L 236.897 336.611 L 239.445 335.344 L 241.946 337.209 L 244.924 336.906 L 246.869 339.591 L 248.16 339.48 L 248.275 337.923 L 251.11 337.599 L 250.178 335.962 L 254.241 335.254 L 254.768 333.796 L 257.636 335.557 L 257.177 336.855 L 258.448 337.725 L 261.026 337.11 L 261.71 339.84 L 266.133 340.545 L 270.869 337.491 L 274.177 340.169 L 276.723 338.705 L 280.467 338.64 L 283.714 332.389 L 286.04 330.954 L 291.821 331.37 L 294.049 333.016 L 297.33 332.695 L 292.654 330.226 L 292.345 326.926 L 292.938 325.778 L 294.79 325.813 L 295.286 322.928 L 298.698 320.125 L 300.928 315.272 L 301.949 315.272 L 303.235 311.596 L 305.242 307.61 L 305.252 304.715 L 303.318 303.781 L 303.221 302.224 L 305.417 301.199 L 305.965 300.098 L 307.576 299.889 L 308.57 300.334 L 311.428 299.791 L 313.272 300.411 L 315.125 301.645 L 316.02 301.026 L 316.143 298.175 L 319.256 296.635 L 318.449 294.681 L 313.047 291.586 L 308.743 284.519 L 306.908 285.628 L 301.857 284.343 L 300.099 280.226 L 298.352 279.779 L 298.481 278.111 L 301.605 276.035 L 302.142 273.878 L 299.705 273.207 L 299.373 272.319 L 296.901 272.487 L 294.9 268.387 L 292.407 271.709 L 287.876 270.391 L 285.213 267.121 L 285.906 263.363 L 284.296 260.153 L 284.729 256.846 L 282.874 257.764 L 279.731 256.925 L 277.992 256.908 L 274.498 257.936 L 268.718 256.366 L 266.926 257.311 L 264.717 255.431 L 262.244 255.508 L 259.817 254.34 L 258.257 255.02 L 256.56 254.671 L 254.703 256.866 L 252.922 256.549 L 253.247 260.88 L 254.207 261.548 L 252.519 263.996 L 252.279 265.862 L 253.47 266.924 L 254.986 269.269 L 254.515 270.947 L 254.635 273.926 L 253.393 277.761 L 251.047 279.516 L 250.152 282.188 L 249.025 282.503 L 249.023 282.503 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="guarico"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Gu%C3%A1rico">Guárico</a>'
  },
  {
    id: 11,
    svgId: "lara",
    name: "lara",
    description: `<p> En honor al General independentista <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jacinto_Lara">Jacinto Lara</a>.
     </p>`,
    flag: LaraFlag,
    shield: laraShield,
    svg: `<path
    d=" M 156.366 261.727 L 154.36 263.37 L 154.258 265.198 L 152.186 267.914 L 151.916 269.155 L 150.568 269.022 L 147.932 269.593 L 145.596 269.876 L 144.103 272.272 L 144.615 275.873 L 143.402 278.239 L 141.893 278.503 L 140.283 276.206 L 136.435 276.517 L 135.18 276.303 L 135.48 274.882 L 137.809 272.088 L 137.504 270.264 L 135.234 272.161 L 134.325 271.254 L 132.097 271.741 L 129.809 274.67 L 130.41 275.533 L 129.493 276.355 L 127.878 275.481 L 128.034 274.044 L 126.333 272.426 L 125.888 269.798 L 126.778 268.171 L 127.686 267.401 L 130.016 267.435 L 129.793 266.245 L 129.168 265.595 L 128.157 265.5 L 127.703 264.696 L 127.129 263.737 L 125.862 263.942 L 125.468 264.096 L 123.661 262.513 L 123.018 261.366 L 122.401 261.16 L 121.879 262.359 L 121.596 264.019 L 120.954 262.889 L 120.312 261.751 L 118.761 261.751 L 118.915 261.058 L 117.554 258.806 L 115.421 258.772 L 114.761 259.542 L 114.025 259.56 L 113.305 259.953 L 112.928 259.808 L 112.851 259.217 L 112.097 259.405 L 111.147 258.601 L 110.873 257.265 L 110.247 256.726 L 109.009 256.962 L 109.05 255.758 L 107.581 254.095 L 108.789 253.598 L 108.309 252.368 L 109.141 251.604 L 110.287 246.487 L 108.082 245.929 L 107.052 243.501 L 107.429 243.064 L 110.238 243.344 L 111.22 240.608 L 113.656 238.014 L 114.338 239.053 L 116.904 238.195 L 116.819 235.452 L 119.061 234.076 L 122.913 234.474 L 124.26 231.859 L 126.291 230.707 L 127.805 231.539 L 129.037 230.888 L 131.686 231.551 L 132.736 229.916 L 134.971 230.091 L 135.129 228.652 L 137.104 228.073 L 137.691 230.324 L 139.811 230.151 L 142.142 228.412 L 143.13 227.443 L 146.341 228.426 L 148.364 231.352 L 153.209 229.71 L 157.415 230.693 L 162.614 229.403 L 164.053 230.942 L 165.1 230.994 L 165.979 229.468 L 169.53 229.627 L 171.326 231.287 L 170.633 231.991 L 172.307 233.527 L 168.905 236.316 L 165.919 236.004 L 165.201 238.161 L 163.824 238.385 L 163.32 240.252 L 165.614 240.01 L 165.294 245.545 L 167.124 246.153 L 166.197 247.709 L 165.354 246.886 L 164.812 247.691 L 163.733 246.632 L 163 247.849 L 162.452 248.466 L 161.793 250.726 L 160.559 250.614 L 158.917 251.472 L 159.801 252.438 L 163.086 252.344 L 162.251 253.439 L 162.333 255.758 L 160.749 256.812 L 161.448 258.956 L 162.038 259.289 L 162.253 260.187 L 163.227 260.852 L 163.396 258.789 L 164.33 255.656 L 166.102 255.811 L 169.077 254.302 L 171.705 255.033 L 172.16 256.465 L 168.554 260.481 L 166.591 260.467 L 166.68 263.211 L 166.273 264.55 L 166.316 265.724 L 163.472 266.331 L 162.478 268.227 L 157.045 265.648 L 156.526 262.601 L 156.367 261.727 L 156.366 261.727 Z "
    fill="rgb(255,167,169)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.8"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="lara"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Lara">Lara</a>'
  },
  {
    id: 12,
    svgId: "merida",
    name: "mérida",
    description: `<p> La ciudad recibió su nombre por el fundador Juan Rodríguez Suárez, quien la bautizó de este modo en honor a su ciudad natal, Mérida en <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Las_Extremaduras#Extremadura_leonesa">Extremadura</a>, España. Luego fue extensiva al estado.
    La palabra Mérida proviene del término "emérita", voz latina cuyo significado es "de quien tiene mérito" y también "emérito", que es el verdadero origen etimológico del nombre, ya que otra acepción del término en Latín estaba relacionada con los soldados que resultan licenciados del ejército.
    </p>`,
    flag: MéridaFlag,
    shield: meridaShield,
    svg: `<path
    d=" M 96.966 303.064 L 103.298 301.09 L 109.081 297.16 L 109.597 294.494 L 111.193 292.121 L 112.743 291.849 L 111.899 289.748 L 108.786 289.761 L 106.605 291.937 L 105.189 291.018 L 104.23 288.908 L 99.597 286.465 L 97.366 283.143 L 95.662 284.41 L 94.046 286.461 L 92.428 287.051 L 91.772 287.438 L 90.651 285.863 L 89.469 285.976 L 86.688 284.187 L 86.12 285.819 L 85.304 285.996 L 85.953 286.829 L 86.962 287.403 L 89.279 288.642 L 89.749 290.106 L 85.639 291.344 L 83.993 293.647 L 75.778 298.208 L 74.387 303.007 L 67.247 304.994 L 66 304.52 L 64.795 302.995 L 62.417 303.8 L 63.585 304.884 L 63.316 306.439 L 66.274 307.671 L 66.3 310.809 L 65.565 311.519 L 66.191 312.203 L 64.366 313.474 L 63.308 316.185 L 62.548 317.385 L 62.572 320.004 L 64.105 318.836 L 65.316 319.513 L 68.708 323.778 L 70.016 324.281 L 71.428 325.434 L 73.51 323.941 L 74.752 323.915 L 76.367 326.563 L 76.492 329.385 L 77.91 333.566 L 80.232 333.931 L 86.417 326.722 L 91.376 325.431 L 93.708 322.64 L 93.971 319.315 L 94.73 316.082 L 93.089 314.008 L 93.101 311.431 L 96.71 309.857 L 97.213 307.726 L 95.896 306.104 L 96.967 303.064 L 96.966 303.064 Z "
    fill="rgb(213,180,243)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="merida"
  ></path>`,
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_M%C3%A9rida">Mérida</a>'
  },
  {
    id: 13,
    svgId: "miranda",
    name: "miranda",
    description: `<p> En homenaje al Generalísimo <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Francisco_de_Miranda">Francisco de Miranda</a>.
     </p>`,
    flag: MirandaFlag,
    shield: mirandaShield,
    svg: `<path
    d=" M 274.548 257.948 L 278.032 256.903 L 279.768 256.955 L 282.833 257.782 L 284.917 256.706 L 285.465 256.746 L 286.536 257.208 L 287.886 256.106 L 287.871 255.415 L 289.439 255.248 L 290.476 253.621 L 291.937 253.457 L 293.354 251.353 L 293.825 250.831 L 286.215 248.192 L 285.32 248.304 L 279.812 245.66 L 278.364 244.839 L 274.364 241.92 L 271.855 240.19 L 269.765 237.999 L 269.765 236.244 L 270.356 236.492 L 271.581 236.124 L 272.043 235.071 L 270.938 235.071 L 269.242 234.489 L 265.696 232.726 L 263.435 233.094 L 262.865 233.663 L 262.386 237.041 L 261.05 236.31 L 256.545 236.403 L 255.643 235.881 L 253.276 235.789 L 250.716 236.131 L 244.696 236.024 L 244.524 236.949 L 243.581 235.983 L 243.673 237.484 L 242.596 239.682 L 242.63 241.239 L 240.694 240.644 L 238.972 241.894 L 236.134 241.806 L 235.271 240.961 L 233.46 240.901 L 233.049 240.192 L 230.775 241.094 L 231.524 242.903 L 232.959 243.483 L 231.709 244.313 L 233.438 244.967 L 235.252 247.073 L 234.419 248.092 L 234.837 248.907 L 233.858 250.063 L 235.304 253.041 L 237.944 253.326 L 240.081 252.83 L 241.062 255.178 L 242.12 254.629 L 243.531 255.298 L 244.636 254.263 L 246.982 255.035 L 248.034 256.183 L 252.931 256.747 L 252.911 256.463 L 254.775 256.872 L 256.568 254.659 L 258.244 255.017 L 259.785 254.288 L 262.244 255.484 L 264.716 255.419 L 266.949 257.337 L 268.731 256.337 L 274.547 257.948 L 274.548 257.948 Z "
    fill="rgb(180,243,180)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="miranda"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Miranda">Miranda</a>'
  },
  {
    id: 14,
    svgId: "monagas",
    name: "monagas",
    description: `<p> Llamado así para rendir tributo a los próceres <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jos%C3%A9_Tadeo_Monagas">Jose Tadeo</a> y <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jos%C3%A9_Gregorio_Monagas">José Gregorio Monagas</a>. Durante el gobierno de José Gregorio Monagas fue abolida la esclavitud en Venezuela. <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/1854">(1854)</a>. </p>`,
    flag: MonagasFlag,
    shield: "",
    svg: `<path
    d=" M 390.081 312.059 L 390.119 308.99 L 386.433 307.043 L 382.143 307.605 L 380.647 306.351 L 381.01 301.004 L 382.845 299.321 L 381.739 298.714 L 372.267 299.982 L 370.732 298.839 L 370.16 292.556 L 364.004 289.845 L 357.329 282.468 L 354.115 282.303 L 348.852 284.61 L 348.596 283.44 L 349.415 280.816 L 346.598 277.349 L 346.657 275.627 L 350.587 274.048 L 352.025 269.612 L 349.199 267.914 L 346.428 258 L 344.096 258.344 L 344.442 254.042 L 346.561 253.381 L 347.598 251.495 L 352.356 250.742 L 353.981 248.872 L 358.121 247.713 L 360.717 248.483 L 361.665 245.596 L 364.107 244.071 L 365.175 244.964 L 366.623 245.088 L 366.313 246.584 L 368.433 246.696 L 369.679 248.012 L 373.304 248.676 L 374.521 249.852 L 376.578 247.213 L 377.706 249.281 L 378.658 248.381 L 381.97 251.71 L 384.995 251.199 L 386.689 253.901 L 389.482 253.96 L 390.096 252.516 L 392.223 253.398 L 394.912 251.6 L 396.033 249.554 L 395.426 248.179 L 395.733 244.845 L 399.72 248.19 L 400.167 250.944 L 401.687 252.047 L 401.438 257.549 L 403.304 256.068 L 403.983 256.009 L 403.837 258.003 L 405.071 262.489 L 404.311 263.799 L 403.624 267.241 L 400.006 269.331 L 401.959 269.738 L 402.058 272.866 L 403.544 274.061 L 403.826 277.033 L 401.428 279.356 L 402.874 281.622 L 406.069 281.275 L 405.901 283.135 L 404.254 284.668 L 405.345 288.263 L 409.881 287.885 L 411.751 289.116 L 413.703 287.637 L 415.943 289.531 L 413.959 291.323 L 415.637 293.423 L 418.077 293.934 L 417.782 295.643 L 416.055 297.26 L 415.392 300.206 L 409.502 302.058 L 405.812 307.521 L 401.848 308.078 L 399.892 310.544 L 396.796 310.258 L 395.203 311.59 L 391.363 312.129 L 390.081 312.059 L 390.081 312.059 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="monagas"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Monagas">Monagas</a>'
  },
  {
    id: 15,
    svgId: "nuevaesparta",
    name: "nueva esparta",
    description: `<p> El nombre de Nueva Esparta hace honor al valeroso comportamiento de sus habitantes durante las heroicas acciones de defensa en la gesta independentista. La naciente República otorga el titulo de "Nueva Esparta" al territorio insular por su semejanza con la <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Esparta">Esparta</a> de la Grecia clásica por el heroísmo demostrado por los habitantes de la isla en la lucha por la <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Independencia_de_Venezuela">Independencia de Venezuela</a>. </p>`,
    flag: NuevaEspartaFlag,
    shield: nuevaespartaShield,
    svg: `<path
    d=" M 349.06 222.062 L 348.623 221.977 L 347.981 221.805 L 347.741 221.668 L 347.664 221.694 L 347.647 221.848 L 347.793 222.156 L 348.187 222.379 L 348.367 222.439 L 348.803 222.499 L 348.932 222.567 L 349.172 222.524 L 349.309 222.105 L 349.429 220.949 L 350.105 220.436 L 350.371 220.341 L 350.602 220.247 L 350.893 220.11 L 351.416 220.033 L 351.519 220.179 L 351.579 220.333 L 351.63 220.393 L 351.775 220.136 L 351.775 219.263 L 351.916 219.156 L 352.178 219.162 L 352.264 219.015 L 352.495 218.733 L 352.923 218.63 L 353.078 218.561 L 352.238 217.449 L 351.596 216.327 L 351.467 216.053 L 351.322 215.677 L 351.228 215.411 L 351.159 215.206 L 351.125 215.172 L 351.082 215.129 L 350.953 214.915 L 350.816 214.256 L 350.611 213.939 L 349.788 213.109 L 349.694 212.912 L 349.514 212.501 L 349.48 212.441 L 349.249 212.809 L 349.146 213.109 L 348.924 213.177 L 348.667 213.425 L 348.41 213.828 L 348.17 214.067 L 347.793 214.247 L 347.759 214.324 L 347.554 214.504 L 347.331 214.598 L 346.808 214.701 L 346.337 214.769 L 346.192 214.872 L 346.098 215.189 L 346.167 215.24 L 346.218 215.249 L 346.278 215.6 L 346.295 215.9 L 346.003 216.037 L 345.198 216.225 L 345.01 216.439 L 344.993 216.482 L 344.959 217.124 L 344.848 217.637 L 344.685 218.083 L 344.488 218.776 L 344.269 218.964 L 343.931 219.067 L 341.944 219.067 L 340.008 218.331 L 339.314 217.826 L 338.355 216.85 L 338.338 216.636 L 338.646 215.797 L 338.158 215.652 L 337.901 215.72 L 337.798 215.789 L 337.67 215.874 L 337.473 215.96 L 336.925 216.182 L 336.557 216.311 L 336.214 216.379 L 335.383 216.259 L 335.152 216.234 L 334.749 216.405 L 334.595 216.499 L 334.287 216.619 L 333.661 216.782 L 333.165 216.876 L 332.942 216.816 L 332.702 216.936 L 332.24 217.287 L 332.24 217.466 L 332.266 217.543 L 332.411 217.586 L 332.401 217.886 L 332.315 218.185 L 332.255 218.262 L 332.195 218.382 L 331.921 218.759 L 331.433 219.298 L 331.39 219.452 L 331.441 219.486 L 331.732 219.546 L 332.066 219.658 L 332.195 219.7 L 332.323 219.743 L 332.572 219.795 L 332.914 219.855 L 333.214 219.906 L 333.848 220.051 L 334.653 220.111 L 334.953 220.291 L 335.458 220.428 L 335.938 220.471 L 336.357 220.531 L 336.691 220.582 L 337.222 220.625 L 337.454 220.616 L 337.642 220.633 L 337.925 220.719 L 338.31 220.744 L 338.507 220.676 L 338.79 220.53 L 339.004 220.351 L 339.218 219.948 L 339.312 219.786 L 339.424 219.597 L 339.535 219.426 L 339.698 219.717 L 339.835 219.623 L 339.818 219.717 L 339.835 219.803 L 339.869 219.888 L 339.997 219.974 L 340.28 220.042 L 340.417 220 L 340.537 220.009 L 340.511 220 L 340.468 220.017 L 340.511 220.094 L 340.528 220.137 L 340.538 220.171 L 340.778 220.316 L 340.778 220.376 L 340.709 220.385 L 340.828 220.428 L 340.896 220.394 L 340.896 220.36 L 340.886 220.488 L 340.98 220.702 L 341.332 221.13 L 341.383 221.147 L 341.768 221.13 L 341.545 221.31 L 341.562 221.644 L 341.613 221.832 L 341.656 221.875 L 341.724 221.926 L 341.844 222.08 L 342.307 222.166 L 342.735 222.114 L 343.36 222.44 L 343.437 223.202 L 343.292 223.313 L 343.497 223.313 L 344.08 223.09 L 344.243 223.03 L 344.902 222.919 L 345.142 222.885 L 345.245 222.851 L 345.579 222.577 L 346.033 222.157 L 346.375 222.072 L 346.744 222.081 L 347.155 222.004 L 347.352 221.927 L 347.206 221.892 L 347.052 221.867 L 347.24 221.773 L 347.369 221.627 L 347.266 221.481 L 347.12 221.404 L 346.966 221.353 L 346.992 221.233 L 347.035 221.062 L 347.369 221.019 L 347.943 221.148 L 348.114 221.336 L 348.02 221.439 L 348.132 221.439 L 348.252 221.481 L 348.492 221.456 L 348.757 221.473 L 349.005 221.61 L 349.056 222.064 L 349.06 222.062 Z  M 347.356 221.977 L 347.322 222.045 L 347.288 222.079 L 347.142 222.105 L 347.142 222.174 L 347.459 222.139 L 347.449 222.045 L 347.355 221.977 L 347.356 221.977 Z  M 339.887 224.356 L 339.853 224.399 L 339.81 224.536 L 339.716 224.741 L 339.373 224.767 L 338.756 224.63 L 338.431 224.682 L 338.157 224.724 L 337.943 224.767 L 337.84 224.836 L 337.635 224.964 L 337.558 225.135 L 337.763 225.461 L 337.814 225.555 L 338.071 225.666 L 338.619 225.649 L 338.816 225.632 L 339.399 225.572 L 339.852 225.503 L 340.049 225.349 L 340.178 225.195 L 340.375 224.921 L 340.255 224.836 L 340.049 224.639 L 339.938 224.485 L 339.895 224.408 L 339.885 224.356 L 339.887 224.356 Z  M 345.514 225.135 L 345.617 225.289 L 345.754 225.811 L 345.737 225.948 L 345.617 226.051 L 345.514 226.154 L 345.42 226.231 L 345.343 226.351 L 345.574 226.522 L 345.849 226.625 L 346.345 226.71 L 346.859 226.83 L 347.005 226.856 L 347.356 227.198 L 347.262 227.318 L 347.176 227.361 L 347.296 227.429 L 347.75 227.669 L 347.844 227.772 L 348.058 227.849 L 348.795 227.772 L 349.086 227.464 L 349.154 227.113 L 348.777 226.419 L 348.606 226.128 L 348.357 225.88 L 348.212 225.829 L 347.972 225.777 L 346.756 225.563 L 346.619 225.529 L 346.422 225.409 L 346.113 225.324 L 345.711 225.238 L 345.514 225.135 L 345.514 225.135 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(128,176,240)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="nuevaesparta"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Nueva_Esparta">Nueva Esparta</a>'
  },
  {
    id: 16,
    svgId: "portuguesa",
    name: "portuguesa",
    description: `<p> Fue designado con ese nombre a partir del 4 de agosto de 1909 en honor al <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Portuguesa">Río Portuguesa</a>.  Según la leyenda el Río Portuguesa fue bautizado con ese nombre por haberse ahogado en sus aguas una mujer oriunda de <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Portugal">Portugal</a>; sin embargo también se señala que el nombre del Río fue colocado en homenaje a la colonia Portuguesa que se residencio en nuestro territorio desde la época de la colonia. </p>`,
    flag: PortuguesaFlag,
    shield: portuguesaShield,
    svg: `<path
    d=" M 179.257 293.839 L 177.71 288.721 L 179.4 287.409 L 179.559 281.99 L 173.087 279.506 L 172.188 277.947 L 170.075 278.254 L 169.032 276.133 L 170.492 273.743 L 169.599 272.86 L 170.772 268.943 L 168.937 268.494 L 168.586 267.844 L 166.396 267.051 L 166.334 265.707 L 163.497 266.382 L 162.477 268.17 L 157.055 265.673 L 156.356 261.671 L 154.33 263.495 L 154.258 265.217 L 152.213 267.92 L 151.921 269.198 L 150.571 268.983 L 148.156 269.552 L 145.634 269.836 L 144.117 272.346 L 144.591 275.859 L 143.423 278.193 L 141.877 278.494 L 140.233 276.28 L 136.546 276.511 L 135.185 276.334 L 135.47 274.904 L 137.814 272.148 L 137.521 270.184 L 135.244 272.132 L 134.318 271.24 L 132.095 271.7 L 129.862 274.682 L 130.399 275.573 L 129.607 276.303 L 129.629 277.48 L 125.757 279.513 L 126.174 281.557 L 128.174 280.875 L 129.279 282.445 L 129.244 286.09 L 126.048 289.01 L 127.143 289.73 L 126.416 290.746 L 123.68 291.078 L 125.914 293.975 L 128.324 294.381 L 132.076 296.757 L 134.697 300.263 L 138.73 300.448 L 141.376 302.184 L 143.791 300.297 L 144.753 299.939 L 146.06 302.972 L 150.314 303.177 L 151.954 303.762 L 152.552 305.062 L 158.006 306.871 L 159.076 309.555 L 161.909 312.326 L 161.342 314.841 L 165.589 316.989 L 169.617 321.693 L 171.29 324.885 L 172.796 324.299 L 173.118 318.813 L 179.066 313.889 L 179.983 309.207 L 181.635 306.741 L 181.12 306.016 L 180.095 303.576 L 177.671 301.878 L 176.861 299.97 L 175.36 299.368 L 174.878 298.242 L 177.507 297.173 L 180.911 296.782 L 181.213 295.144 L 179.256 293.839 L 179.257 293.839 Z "
    fill="rgb(180,243,180)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="portuguesa"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Portuguesa">Portuguesa</a>'
  },
  {
    id: 17,
    svgId: "sucre",
    name: "sucre",
    description: `<p> Llamado así para honrar la memoria del prócer cumanes, el Gran Mariscal de Ayacucho, <a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Antonio_Jos%C3%A9_de_Sucre">Antonio José de Sucre</a>.
     </p>`,
    flag: SucreFlag,
    shield: sucreShield,
    svg: `<path
    d=" M 394.802 251.64 L 394.148 247.271 L 392.983 247.271 L 393.316 243.611 L 390.321 241.948 L 390.321 241.116 L 393.815 242.613 L 393.482 241.116 L 390.82 239.453 L 389.988 237.29 L 388.657 237.29 L 388.491 239.952 L 386.327 240.95 L 387.659 240.118 L 387.825 236.958 L 384.83 235.793 L 385.662 235.461 L 387.825 234.13 L 392.151 233.964 L 393.316 232.467 L 394.148 232.3 L 395.645 234.463 L 405.462 234.463 L 407.459 230.803 L 418.774 230.637 L 422.102 228.641 L 421.935 227.144 L 421.103 226.978 L 418.774 227.976 L 411.286 228.308 L 408.291 228.974 L 403.632 228.641 L 401.635 227.31 L 390.487 227.477 L 388.657 228.807 L 386.327 228.807 L 385.163 230.138 L 382.334 228.308 L 375.179 228.475 L 373.183 229.972 L 367.026 229.972 L 363.865 231.469 L 356.211 231.302 L 355.046 229.639 L 352.384 230.138 L 351.718 231.469 L 342.899 231.136 L 341.568 232.134 L 339.072 231.469 L 335.578 230.97 L 333.914 231.635 L 336.244 233.631 L 336.244 235.793 L 337.408 235.793 L 338.906 233.964 L 342.899 233.964 L 344.563 232.966 L 346.56 232.966 L 347.558 234.296 L 351.884 234.463 L 351.884 235.96 L 357.375 236.958 L 357.043 237.623 L 355.711 237.623 L 354.547 238.787 L 342.733 238.621 L 340.736 238.122 L 337.908 239.453 L 334.081 239.453 L 333.415 241.948 L 330.919 240.783 L 329.588 241.449 L 327.092 240.783 L 326.593 241.615 L 331.086 242.281 L 332.084 243.279 L 329.422 245.607 L 327.599 245.988 L 328.182 248.422 L 329.957 248.836 L 329.78 250.907 L 331.437 250.907 L 332.916 252.86 L 335.698 252.919 L 337 253.629 L 343.687 252.091 L 345.758 250.493 L 347.651 251.44 L 352.208 250.789 L 353.983 248.895 L 358.244 247.652 L 360.729 248.481 L 361.676 245.581 L 361.795 245.581 L 364.162 244.042 L 365.227 244.989 L 366.647 244.989 L 366.351 246.587 L 368.363 246.646 L 369.665 247.948 L 373.394 248.658 L 374.518 249.783 L 376.589 247.297 L 377.654 249.25 L 378.66 248.422 L 381.915 251.676 L 384.992 251.262 L 386.708 253.866 L 389.431 253.984 L 390.141 252.446 L 392.212 253.393 L 394.802 251.64 L 394.802 251.64 Z "
    fill="rgb(180,243,180)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="sucre"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Sucre">Sucre</a>'
  },
  {
    id: 18,
    svgId: "tachira",
    name: "táchira",
    description: `<p> Es de un origen que se nutre de la diversidad <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Arahuacos">Arawaca</a> y <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Muiscas">Chibcha</a>, según Samir Sánchez, la palabra Táchira procede del tronco etno – lingüístico chibcha y muisca. Aplicando el método analógico, basado en una comparación con la estructura gramatical y fonológica, recopilada en la obra “gramática de la lengua general del nuevo reino” por el Fray Fernando Lugo y publicada en Madrid en 1619, permite encontrar un significado preciso en dichas raíces.
    Por ejemplo las raíces Ta, significa “labranza, propiedad o dominio”. Chi, significa pronombre posesivo “nuestro”. Ra, castellanización de la palabra ña, partícula de futuro. Con la cual Táchira viene a significar en un sentido literal, “lugar que será de nuestra heredad” o “nuestra tierra de heredad”. Esta es la propuesta que hace el Dr. Samir Sánchez en su tesis doctoral.
     </p>`,
    flag: TachiraFlag,
    shield: tachiraShield,
    svg: `<path
    d=" M 64.374 313.406 L 66.201 312.258 L 65.576 311.407 L 66.256 310.808 L 66.365 307.74 L 63.232 306.362 L 63.575 304.908 L 62.425 303.765 L 60.561 304.551 L 59.198 304.504 L 57.701 302.942 L 57.702 303.883 L 56.278 305.531 L 55.691 304.268 L 55.361 303.231 L 52.906 304.638 L 51.92 306.964 L 47.143 307.405 L 45.801 311.47 L 43.61 310.973 L 43.696 311.795 L 44.218 312.72 L 44.398 313.439 L 44.347 314.843 L 44.887 317.813 L 45.281 319.628 L 45.127 320.407 L 44.904 321.22 L 44.835 321.751 L 45.229 321.982 L 45.657 323.651 L 45.794 324.832 L 45.176 325.314 L 44.775 324.772 L 43.687 324.122 L 43.071 324.618 L 42.865 325.611 L 42.548 325.8 L 42.052 326.211 L 41.418 326.733 L 40.407 327.623 L 41.546 329.994 L 41.872 330.294 L 41.96 333.509 L 40.432 334.553 L 41.257 336.725 L 40.8 338.889 L 42.241 340.176 L 42.03 343.193 L 40.793 344.17 L 43.718 348.421 L 50.854 348.606 L 51.071 347.38 L 51.399 346.79 L 53.213 346.812 L 54.392 347.822 L 56.285 349.512 L 58.811 349.797 L 59.334 348.086 L 60.149 347.445 L 62.371 347.09 L 64.162 345.062 L 63.747 344.846 L 63.422 344.29 L 64.912 343.562 L 65.363 342.927 L 66.274 343.031 L 66.788 343.126 L 67.465 343.528 L 67.679 342.92 L 69.118 343.408 L 70.111 342.997 L 71.602 343.331 L 73.439 344.01 L 73.909 343.48 L 75.325 344.257 L 76.433 344.076 L 80.438 344.473 L 82.325 345.488 L 84.458 345.334 L 83.61 344.615 L 82.437 344.007 L 81.49 342.476 L 80.441 342.201 L 79.285 341.242 L 78.334 340.797 L 77.803 340.369 L 77.427 339.087 L 77.871 337.853 L 77.469 336.517 L 76.612 335.147 L 76.912 334.309 L 77.996 333.389 L 76.405 329.299 L 76.395 326.562 L 75.264 324.858 L 74.69 323.874 L 73.431 323.951 L 71.401 325.492 L 70.031 324.327 L 68.617 323.754 L 66.382 321.006 L 65.243 319.534 L 64.069 318.789 L 62.647 320.09 L 62.493 317.394 L 63.341 316.135 L 64.371 313.406 L 64.374 313.406 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="tachira"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_T%C3%A1chira">Táchira</a>'
  },
  {
    id: 19,
    svgId: "trujillo",
    name: "trujillo",
    description: `<p> La ciudad de Trujillo es fundada en 1557 por el conquistador y capitán <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Diego_Garc%C3%ADa_de_Paredes">Diego García de Paredes</a>, en honor a su pueblo homónimo y natal localizado en <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Las_Extremaduras#Extremadura_leonesa">Extremadura</a>, España. Pasó mucho tiempo de su fundación, de nombre, gobernadores y asentamientos, pero el 27 de octubre de 1570 sería ubicado finalmente con el nombre temporal de Trujillo de Nuestra Señora de la Paz. Asumiendo luego el nombre del estado. </p>`,
    flag: TrujilloFlag,
    shield: "",
    svg: `<path
    d=" M 126.149 281.594 L 128.18 280.882 L 129.224 282.476 L 129.327 286.047 L 126.01 289.046 L 127.191 289.702 L 126.485 290.725 L 123.603 291.072 L 118.993 289.969 L 116.567 291.386 L 112.793 291.843 L 111.862 289.721 L 108.721 289.819 L 106.592 291.897 L 105.147 290.953 L 104.16 288.905 L 99.78 286.64 L 97.19 282.997 L 96.192 281.812 L 95.046 279.693 L 91.928 279.325 L 92.316 278.13 L 91.467 277.712 L 93.45 273.584 L 93.133 272.54 L 92.366 269.21 L 96.253 268.572 L 98.834 270.966 L 101.933 270.764 L 102.992 265.994 L 106.099 264.148 L 107.823 261.036 L 106.434 259.797 L 105.849 254.811 L 107.554 254.033 L 109.169 255.799 L 109.001 257.068 L 110.328 256.605 L 110.876 257.306 L 111.115 258.692 L 111.998 259.43 L 112.869 259.225 C 113.002 259.38 112.851 259.683 112.906 259.837 L 113.354 260.016 L 114.072 259.533 L 114.804 259.603 L 115.436 258.769 L 117.592 258.838 L 118.954 261.075 L 118.705 261.783 L 120.363 261.741 L 121.652 264.202 L 121.825 262.508 L 122.393 261.157 L 123.075 261.441 L 123.637 262.518 L 125.559 264.149 L 125.986 263.91 L 127.133 263.669 L 128.151 265.504 L 129.088 265.554 L 129.746 266.104 L 130.024 267.43 L 127.717 267.342 L 126.782 268.135 L 125.899 269.872 L 126.392 272.422 L 127.999 274.081 L 127.878 275.421 L 129.61 276.342 L 129.641 277.509 L 125.761 279.538 L 126.149 281.594 L 126.149 281.594 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="trujillo"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Trujillo">Trujillo</a>'
  },
  {
    id: 20,
    svgId: "vargas",
    name: "vargas",
    description: `<p> Llamado así en homenaje al ilustre médico y Presidente José María Vargas, nacido en La Guaira en 1786. </p>`,
    flag: VargasFlag,
    shield: vargasShield,
    svg: `<path
    d=" M 226.458 241.615 L 224.177 237.433 L 224.503 236.49 L 226.688 235.233 L 231.686 233.245 L 236.351 232.9 L 238.818 233.344 L 242.744 233.182 L 244.405 232.833 L 250.814 232.855 L 256.136 232.207 L 258.137 233.011 L 259.093 232.685 L 261.015 234.094 L 262.905 233.585 L 262.362 236.992 L 260.979 236.33 L 257.565 236.403 L 256.611 236.391 L 255.604 235.866 L 253.828 235.857 L 253.152 235.729 L 250.763 236.159 L 244.664 236.057 L 244.41 236.775 L 243.545 235.92 L 241.705 235.631 L 239.986 236.08 L 237.326 235.504 L 237.498 236.521 L 236.658 237.057 L 235.758 238.861 L 233.632 239.097 L 232.916 240.233 L 230.638 241.154 L 229.99 240.141 L 227.364 240.557 L 226.458 241.615 L 226.458 241.615 Z "
    fill="rgb(255,167,169)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="vargas"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Vargas">Vargas</a>'
  },
  {
    id: 21,
    svgId: "yaracuy",
    name: "yaracuy",
    description: `<p> La palabra YARACUY deriva su nombre de las voces Yara – Yaraí, que quiere decir “coger agua” y cuí- cu-i, “allá lejos”. Por lo que la palabra Yaracuy significa “coger agua muy lejos”. Al mismo tiempo, en lenguaje <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Idioma_guaran%C3%AD">Guaraní</a> significa “agua que cae del cielo muy desmesuradamente”.
    Otros investigadores cuentan que en 1530 <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Nicol%C3%A1s_Federmann">Nicolás Federman</a>, llega a estas tierras y al recorrer tan largo y caudaloso río, lo compara con el <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Rin">RIN</a> (río extenso y caudaloso de Alemania). En sus riberas encontró a unos indígenas que escribían signos sobre la arena, que al leerlos fueron descifrados como “IRACUY”, por lo que así llamaron al largo río que le proporcionaba comida a los indios y le servía de vía de comunicación.
    Con el correr de los años la palabra Iracuy perdió la “i” convirtiéndose en “y”, o sea que el gentilicio de nuestro estado se le debe al <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Yaracuy">río Yaracuy</a>.
     </p>`,
    flag: YaracuyFlag,
    shield: "",
    svg: `<path
    d=" M 188.349 243.72 L 190.141 244.279 L 190.225 245.485 L 189.277 246.211 L 189.852 248.107 L 187.653 248.606 L 188.723 250.872 L 187.745 253.163 L 189.436 254.211 L 188.872 255.167 L 189.76 256.33 L 186.655 257.345 L 185.166 259.364 L 183.631 259.647 L 183.871 258.161 L 181.135 258.256 L 180.698 257.709 L 180.954 256.572 L 179.223 256.742 L 177.21 257.914 L 177.151 260.006 L 174.82 261.165 L 172.917 261.187 L 171.834 261.854 L 168.986 261.101 L 168.488 260.497 L 172.192 256.432 L 171.776 255.037 L 168.96 254.313 L 166.142 255.82 L 164.315 255.646 L 163.405 258.929 L 163.239 260.875 L 162.23 260.243 L 161.954 259.261 L 161.457 258.936 L 160.708 256.852 L 162.349 255.775 L 162.292 253.379 L 163.182 252.345 L 159.854 252.474 L 158.883 251.479 L 160.648 250.574 L 161.827 250.758 L 162.407 248.542 L 163.031 247.825 L 163.735 246.663 L 164.858 247.746 L 165.353 246.813 L 166.226 247.761 L 167.073 246.163 L 165.256 245.56 L 165.556 239.983 L 163.402 240.277 L 163.727 238.424 L 165.222 238.02 L 166.008 235.981 L 168.751 236.28 L 172.363 233.483 L 170.715 232.057 L 171.357 231.317 L 174.306 231.435 L 175.272 229.652 L 179.333 228.573 L 180.138 227.64 L 180.583 227.134 L 180.643 227.194 L 180.712 227.263 L 180.357 228.694 L 181.164 229.48 L 180.272 231.323 L 183.327 234.167 L 186.275 233.215 L 189.855 232.843 L 192.403 233.468 L 193.243 234.611 L 192.573 235.939 L 189.401 235.488 L 189.162 237.074 L 190.133 237.892 L 189.753 239.338 L 187.771 240.155 L 188.434 241.689 L 188.349 243.72 L 188.349 243.72 Z "
    fill="rgb(180,243,180)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="yaracuy"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Yaracuy">Yaracuy</a>'
  },
  {
    id: 22,
    svgId: "zulia",
    name: "zulia",
    description: `<p> Zulia es nombre aborigen. En efecto, correspondió a la identidad de una princesa de nación <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Poblaci%C3%B3n_ind%C3%ADgena_de_Norte_de_Santander">motilona</a>, (<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pueblo_Motil%C3%B3n-bar%C3%AD">Bari</a> y <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pueblo_yukpa">Yukpa</a>) hija del Cacique Ciñera que gobernaba una extensa región que abarcaba las geografías de los actuales municipios de Arboledas, Cucutilla, Salazar, San José de la Montaña, Gramalote del Departamento <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Norte_de_Santander">Norte de Santander</a>, en Colombia. 
    La princesa Zulia era muy conocida entre los pueblos aborígenes de la región, por la elegancia de sus formas y la belleza física y espiritual que adornaban su persona. Nada tiene de raro esa belleza, pues los europeos que llegaron con <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Alonso_de_Ojeda">Alonso de Ojeda</a> en 1499 y los que vinieron con <a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Ambrosio_Alfinger">Ambrosio Alfínger</a> en el año 1529, afirmaron que las hembras de la cuenca lacustre eran las más hermosas mujeres que habían visto en su vida. Los antiguos cronistas nos dicen que Zulia era de estatura de gran esbeltez y su cintura cimbreaba como el tallo de las palmeras de su tierra al ser acariciadas por el viento. Pero dicen también que era una mujer de temple formidable y de un valor a toda prueba.
     </p>`,
    flag: ZuliaFlag,
    shield: zuliaShield,
    svg: `<path
    d=" M 74.524 191.093 L 59.383 194.52 L 48.68 213.622 L 41.918 213.277 L 40.899 215.587 L 38.817 217.17 L 37.025 219.961 L 35.82 221.818 L 34.741 221.818 L 32.961 223.822 L 32.748 227.203 L 30.681 230.935 L 27.34 234.565 L 26.604 237.347 L 25.465 237.783 L 25.915 241.43 L 25.122 241.721 L 24.565 249.434 L 24.471 250.829 L 22.775 252.627 L 23.391 253.445 L 21.765 256.222 L 21.739 258.165 L 23.289 260.134 L 22.355 261.238 L 21.156 263.19 L 20.068 265.142 L 18.852 267.376 L 18.227 269.516 L 18.004 270.535 L 16.531 270.672 L 16.13 271.647 L 15.058 271.647 L 14.587 273.514 L 13.927 273.514 L 13.927 274.969 L 12.411 275.782 L 12.535 278.936 L 8.434 282.517 L 7.325 283.112 L 7.22 284.111 L 8.248 284.18 L 10.578 284.291 L 12.925 284.188 L 14.054 283.382 L 15.435 284.565 L 18.918 280.894 L 19.577 280.894 L 20.245 280.894 L 20.459 280.337 L 20.674 279.772 L 21.247 279.772 L 21.813 279.772 L 21.813 279.404 L 21.813 279.036 L 22.738 279.036 L 23.663 279.036 L 23.886 280.055 L 23.964 282.28 L 24.572 283.897 L 23.196 284.695 L 23.729 286.418 L 26.152 287.052 L 27.785 284.389 L 29.505 284.342 L 30.385 286.538 L 34.907 304.29 L 43.568 311.815 L 43.568 311.003 L 45.783 311.452 L 47.146 307.487 L 52.001 306.965 L 52.909 304.596 L 55.402 303.329 L 55.684 304.159 L 56.335 305.469 L 57.673 303.966 L 57.527 302.862 L 59.218 304.611 L 60.531 304.526 L 62.377 303.838 L 64.777 303.024 L 66.134 304.562 L 67.195 305.036 L 74.444 303.035 L 75.646 298.284 L 82.211 294.709 L 83.862 293.783 L 85.562 291.45 L 89.774 290.026 L 89.114 288.485 L 85.961 286.914 L 85.143 285.969 L 84.683 286.362 L 81.498 287.475 L 79.373 289.208 L 78.287 288.616 L 72.88 288.735 L 71.852 289.581 L 69.718 289.765 L 69.132 288.185 L 67.208 286.785 L 67.421 282.958 L 65.409 282.331 L 67.007 282.059 L 67.3 280.4 L 69.249 279.867 L 69.161 277.865 L 66.086 277.794 L 64.667 274.883 L 62.261 276.132 L 63.387 273.638 L 60.497 272.707 L 58.648 274.525 L 58.772 272.341 L 61.136 270.848 L 61.103 269.497 L 59.541 269.232 L 59.763 267.487 L 57.331 265.745 L 54.816 262.834 L 54.259 261.91 L 54.906 261.166 L 54.712 259.655 L 58.3 256.41 L 58.607 252.387 L 58.89 251.163 L 60.988 250.47 L 64.059 248.729 L 64.59 247.693 L 65.575 246.375 L 66.911 244.329 L 67.417 241.319 L 69.557 240.537 L 70.551 240.537 L 70.551 239.45 L 72.007 238.671 L 72.541 236.47 L 72.208 235.839 L 72.996 234.872 L 73.287 233.52 L 72.318 232.099 L 73.143 230.554 L 74.388 230.431 L 73.639 227.667 L 69.858 225.214 L 70.141 224.538 L 69.31 224.4 L 70.426 223.708 L 70.756 221.767 L 69.446 221.422 L 68.98 218.342 L 65.114 218.344 L 64.559 216.934 L 63.099 215.839 L 65.137 216.087 L 66.151 217.206 L 69.884 217.417 L 73.776 218.887 L 73.766 218.139 L 67.28 215.061 L 63.628 210.646 L 60.5 202.762 L 61.11 198.192 L 63.887 194.871 L 71.407 194.076 L 76.656 192.944 L 79.809 190.548 L 82.517 189.738 L 83.605 186.92 L 74.522 191.094 L 74.524 191.093 Z  M 83.121 218.878 L 83.149 222.229 L 81.292 219.713 L 77.507 220.038 L 78.766 221.433 L 80.097 221.414 L 79.417 222.162 L 79.772 224.942 L 78.574 225.003 L 78.425 226.303 L 73.447 225.542 L 74.387 226.833 L 76.055 226.952 L 75.592 230.347 L 77.19 231.101 L 76.903 232.626 L 75.077 233.729 L 75.087 234.992 L 76.388 235.883 L 77.93 236.371 L 78.648 237.473 L 78.638 240.84 L 79.725 241.259 L 80.171 242.68 L 80.128 244.914 L 81.182 245.624 L 81.182 246.361 L 81.807 247.234 L 85.739 249.311 L 86.115 255.58 L 86.998 255.803 L 87.829 255.137 L 91.344 258.151 L 91.185 261.452 L 92.445 263.027 L 94.088 263.234 L 94.252 264.75 L 92.078 266.331 L 92.351 269.208 L 96.323 268.527 L 98.83 271.02 L 101.905 270.691 L 102.998 266.075 L 106.097 264.196 L 107.812 261.002 L 106.537 259.85 L 106.348 258.934 L 105.822 254.899 L 108.69 253.497 L 108.288 252.379 L 109.178 251.657 L 110.247 246.437 L 108.043 245.889 L 106.984 243.312 L 105.4 243.233 L 104.516 242.208 L 105.227 240.487 L 102.025 237.928 L 100.068 238.494 L 98.115 238.751 L 98.095 237.71 L 95.449 234.878 L 94.702 232.29 L 91.56 230.586 L 92.757 229.155 L 92.757 227.291 L 85.543 222.581 L 86.016 220.851 L 84.945 220.235 L 85.05 218.968 L 83.125 218.878 L 83.121 218.878 Z  M 89.647 280.234 L 88.291 283.178 L 87.305 283.178 L 86.74 284.265 L 89.455 286.02 L 90.569 285.806 L 91.811 287.407 L 92.419 286.91 L 94.033 286.462 L 95.582 284.445 L 97.356 283.13 L 96.357 282.036 L 95.085 279.646 L 91.963 279.352 L 89.647 280.234 L 89.647 280.234 Z "
    fill="rgb(180,243,180)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="zulia"
  ></path>`, 
    wikiUrl: '<a style="color: inherit" href="https://es.wikipedia.org/wiki/Estado_Zulia">Zulia</a>'
  },
  {
    id: 23,
    svgId: "dtocapital",
    name: "dto capital",
    description: `<p> </p>`,
    flag: "",
    shield: "",
    svg: `<path
    d=" M 236.17 241.739 L 235.289 240.999 L 233.408 240.915 L 233.079 240.291 L 233.58 239.089 L 235.866 238.839 L 236.692 237.135 L 237.512 236.594 L 237.329 235.548 L 240.012 236.088 L 241.638 235.726 L 243.517 235.903 L 243.666 237.521 L 242.597 239.606 L 242.536 241.13 L 240.739 240.616 L 238.906 241.945 L 236.169 241.739 L 236.17 241.739 Z "
    fill="rgb(255,236,167)"
    vector-effect="non-scaling-stroke"
    stroke-width="0.6"
    stroke="rgb(208,192,160)"
    stroke-linejoin="miter"
    stroke-linecap="butt"
    stroke-miterlimit="4"
    id="dtocapital"
  ></path>`, 
    wikiUrl: '',
  }
];

export const LINKS = {
  'Amazonas': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Amazona_(mitolog%C3%ADa)">Amazonas</a>`,
  'Samarcia': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/S%C3%A1rmatas">Sarmacia Asiática</a>`,
  'Caucaso': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/C%C3%A1ucaso">Cáucaso</a>`,
  'FranciscoOrellana' : `<a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Francisco_de_Orellana">Francisco de Orellana</a>`,
  'RioAmazonas': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Amazonas">río Amazonas</a>`,
  'JoseAntonioAnzoategui': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jos%C3%A9_Antonio_Anzo%C3%A1tegui">José Antonio Anzoátegui</a>`,
  'RioApure': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Río_Apure">Río Apure</a>`,
  'FrayJacintoCarvajal': `<a style="color: inherit !important;" href="http://historiadeapure.blogspot.com/2014/10/fray-jacinto-de-carvajal-primer.html">Jacinto de Carvajal</a>`,
  'Caribes': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Caribes">Caribes</a>`,
  'Cumanagoto': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pueblo_cumanagoto">Cumanagoto</a>`,
  'GuaraniLanguage' : `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Idioma_guaran%C3%AD">Guaraní</a>`,
  'Chibcha': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Muiscas">Chibcha</a>`,
  'SimonBolivar': `<a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar">Simón Bolívar</a>`,
  'Cerámica': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Cer%C3%A1mica">Cerámica</a>`,
  'Warao': `<a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Warao_people">Guarao (Warao)</a>`,
  'JuanCrisostomoFalcon': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Juan_Cris%C3%B3stomo_Falc%C3%B3n">Juan Crisóstomo Falcon</a>`,
  'Jadacaquiva': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jadacaquiva">Jadacaquiva</a>`,
  'Paraguana': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pen%C3%ADnsula_de_Paraguan%C3%A1">Paraguaná</a>`,
  'Arawacos': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Arahuacos">Arawaca</a>`,
  'JacintoLara': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jacinto_Lara">Jacinto Lara</a>`,
  'JuanRodríguezSuarez': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Juan_Rodr%C3%ADguez_Su%C3%A1rez">Juan Rodríguez Suárez</a>`,
  'ExtremaduraEspaña': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Las_Extremaduras#Extremadura_leonesa">Extremadura</a>`,
  'FranciscoMiranda': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Francisco_de_Miranda">Francisco de Miranda</a>`,
  'JoseTadeoMonagas': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jos%C3%A9_Tadeo_Monagas">Jose Tadeo</a>`,
  'JoseGregorioMonagas': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Jos%C3%A9_Gregorio_Monagas">José Gregorio Monagas</a>`,
  '1854': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/1854">(1854)</a>`,
  'Esparta': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Esparta">Esparta</a>`,
  'IndependenciaVenezuela': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Independencia_de_Venezuela">Independencia de Venezuela</a>`,
  'RioPortuguesa': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Portuguesa">Río Portuguesa</a>`,
  'Portugal': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Portugal">Portugal</a>`,
  'AntonioJoseSucre': `<a style="color: inherit !important;" href="https://en.wikipedia.org/wiki/Antonio_Jos%C3%A9_de_Sucre">Antonio José de Sucre</a>`,
  'FrayFernandoLugo' : ``,
  'DiegoGarciaParedes': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Diego_Garc%C3%ADa_de_Paredes">Diego García de Paredes</a>`,
  'NicolasFederman': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Nicol%C3%A1s_Federmann">Nicolás Federman</a>`,
  'RinRiver': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Rin">RIN</a>`,
  'YaracuyRiver': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/R%C3%ADo_Yaracuy">río Yaracuy</a>`,
  'Motilones': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Poblaci%C3%B3n_ind%C3%ADgena_de_Norte_de_Santander">motilona</a>`,
  'Yupka': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pueblo_yukpa">Yukpa</a>`,
  'Bari': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Pueblo_Motil%C3%B3n-bar%C3%AD">Bari</a>`,
  'Cacique': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Cacique">Cacique</a>`,
  'NorthSantander': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Norte_de_Santander">Norte de Santander</a>`,
  'AlonsoOjeda': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Alonso_de_Ojeda">Alonso de Ojeda</a>`,
  'AmbrosioAlfinger': `<a style="color: inherit !important;" href="https://es.wikipedia.org/wiki/Ambrosio_Alfinger">Ambrosio Alfínger</a>`,
}
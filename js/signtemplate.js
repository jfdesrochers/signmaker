/**
 * Returns a new object with all the provided keys initialized with defaultValue.
 * @param {array} keys Array of keys to initialize the object with.
 * @param {*} defaultValue Default value for all the keys.
 */
function initObject(keys, defaultValue) {
    var obj = {}
    for (var i=0; i<keys.length; i++) {
        obj[keys[i]] = defaultValue
    }
    return obj
}

var SignTemplate = {}

SignTemplate.oninit = function () {
    try {
        this.signData = JSON.parse(decodeURIComponent(location.hash.slice(4)));
    } catch (e) {
        console.error(e);
        this.signData = initObject(['c1', 'c2', 'tx1', 'tx2', 'pf1', 'pf2', 'amo', 'ad1', 'ad2', 'p1', 'p2', 'sk1', 'sk2', 'ds1', 'ds2'], '');
    }
    console.log(this.signData)
}

SignTemplate.view = function () {
    return m("svg[height='765'][id='svg2883'][version='1.0'][width='990'][xmlns='http://www.w3.org/2000/svg'][xmlns:cc='http://creativecommons.org/ns#'][xmlns:dc='http://purl.org/dc/elements/1.1/'][xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'][xmlns:svg='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink']",
        [
            m("defs[id='defs2885']",
                [
                    m("clipPath[clipPathUnits='userSpaceOnUse'][id='clipPath3521']", 
                        m("path[d='M 0,612 792,612 792,0 0,0 0,612 z'][id='path3523']")
                    ),
                    m("radialGradient[cx='0'][cy='0'][fx='0'][fy='0'][gradientTransform='matrix(118.12244,0,0,-118.12244,661.97839,393.63153)'][gradientUnits='userSpaceOnUse'][id='radialGradient7439'][r='1'][spreadMethod='pad']",
                        [
                            m("stop[id='stop7441'][offset='0']", {style: {"stop-opacity": "1", "stop-color": "#ffffff"}}),
                            m("stop[id='stop7443'][offset='1']", {style: {"stop-opacity": "1", "stop-color": "#50b737"}})
                        ]
                    ),
                    m("radialGradient[cx='0'][cy='0'][fx='0'][fy='0'][gradientTransform='matrix(567.51051,0,0,194.28211,490.64422,153.12552)'][gradientUnits='userSpaceOnUse'][id='radialGradient5149'][r='1'][spreadMethod='pad'][xlink:href='#radialGradient7439']"),
                    m("clipPath[clipPathUnits='userSpaceOnUse'][id='clipPath5151']", 
                        m("path[d='M -3.77555e-5,180 989.99996,180 l 0,-180.00165179 -989.9999977555,0 0,180.00165179 z'][id='path5153']")
                    ),
                    m("radialGradient[cx='0'][cy='0'][fx='0'][fy='0'][gradientTransform='matrix(567.51051,0,0,194.28211,490.64422,153.12552)'][gradientUnits='userSpaceOnUse'][id='radialGradient5808'][r='1'][spreadMethod='pad'][xlink:href='#radialGradient7439']")
                ]
            ),
            m("metadata[id='metadata2888']", 
                m("rdf:rdf", 
                    m("cc:work[rdf:about='']",
                        [
                            m("dc:format", 
                                "image/svg+xml"
                            ),
                            m("dc:type[rdf:resource='http://purl.org/dc/dcmitype/StillImage']"),
                            m("dc:title")
                        ]
                    )
                )
            ),
            m("g[id='layer1']",
                [
                    m("text[id='text7124'][x='-1505.0338'][xml:space='preserve'][y='459.65585']", {style: {"font-size": "40px", "font-style": "normal", "font-weight": "normal", "fill": "#000000", "fill-opacity": "1", "stroke": "none", "font-family": "Bitstream Vera Sans"}}, 
                        m("tspan[id='tspan7126'][x='-1505.0338'][y='459.65585']")
                    ),
                    m("text[id='text6762'][x='-2681.5872'][xml:space='preserve'][y='537.31445']", {style: {"font-size": "40px", "font-style": "normal", "font-weight": "normal", "fill": "#000000", "fill-opacity": "1", "stroke": "none", "font-family": "Bitstream Vera Sans"}}, 
                        m("tspan[id='tspan6764'][x='-2681.5872'][y='537.31445']")
                    ),
                    m("rect[height='382.5'][id='rect3665'][width='990'][x='4.5057579e-05'][y='1.3785002e-06']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                    m("path[d='M 4.5057578e-5,180 990.00005,180 l 0,-179.9999986214998 -990.000004942422,0 L 4.5057578e-5,180 z'][id='path7417']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                    m("path[clip-path='url(#clipPath5151)'][d='M -78.393855,-7.0388999e-6 -76.866048,304.08337 l 1135.021548,0 -1.5278,-304.0833770388999 -1135.021555,0 z'][id='path7457']", {style: {"opacity": "0.39999396", "fill": "url(#radialGradient5149)", "stroke": "none"}}),
                    m("g[id='g3509'][transform='matrix(0.54320225,0,0,-0.54320225,369.90944,341.07002)']", 
                        m("path[d='M 0,0 -97.33,-10.277 -101.503,29.428 -4.171,39.709 0,0 z'][id='path3511']", {style: {"fill": "#ee2223", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                    ),
                    m("g[id='g3513'][transform='matrix(0.54320225,0,0,-0.54320225,325.22682,341.20316)']", 
                        m("path[d='m 0,0 -0.232,2.215 1.56,0.163 -1.048,9.973 -1.562,-0.162 -0.232,2.213 3.59,0.375 7.94,-8.981 0.017,0.002 -0.787,7.496 -1.579,-0.165 -0.235,2.212 5.305,0.558 0.231,-2.215 L 11.5,13.531 12.782,1.345 10.765,1.131 2.804,10.212 2.786,10.212 3.585,2.614 5.069,2.772 5.301,0.557 0,0 z'][id='path3515']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                    ),
                    m("g[id='g3517'][transform='matrix(0.54320225,0,0,-0.54320225,229.91047,535.95415)']", 
                        m("g[clip-path='url(#clipPath3521)'][id='g3519']",
                            [
                                m("g[id='g3525'][transform='translate(208.2178,361.9673)']", 
                                    m("path[d='m 0,0 -2.22,-0.233 -0.205,1.95 c -0.897,-1.432 -2.592,-2.489 -4.646,-2.705 -1.823,-0.194 -3.637,-0.02 -5.306,1.431 -1.332,1.155 -2.403,3.009 -2.646,5.072 -0.139,1.188 -0.057,2.71 0.348,3.825 0.398,1.1 0.923,1.675 1.317,2.128 1.156,1.326 3.105,2.36 5.048,2.511 1.602,0.127 3.162,-0.127 4.328,-1.425 l -0.166,1.57 2.182,0.227 0.424,-4.049 -2.797,-0.295 c -0.662,1.19 -2.846,1.671 -4.065,1.439 -1.152,-0.217 -2.204,-0.461 -3.238,-1.797 -0.966,-1.251 -1.075,-2.447 -0.952,-3.612 0.135,-1.309 0.738,-2.644 1.706,-3.502 0.987,-0.872 2.502,-1.108 3.67,-0.982 2.048,0.213 3.73,2.096 3.773,3.453 L -8.604,4.463 -8.825,6.578 -0.737,7.423 0,0 z'][id='path3527']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3529'][transform='translate(248.7104,367.207)']", 
                                    m("path[d='m 0,0 c -0.558,-0.839 -1.458,-1.513 -2.93,-1.771 -1.462,-0.262 -2.154,0.285 -2.883,0.456 -0.515,0.123 -0.643,-0.356 -0.643,-0.356 L -8.561,-1.89 -8.963,1.947 -6.205,2.24 C -6.186,2.077 -6.207,2.068 -6.176,1.899 -6.082,1.43 -5.514,0.076 -3.684,0.27 -3.1,0.33 -2.668,0.664 -2.299,1.188 -1.987,1.63 -2.067,2.52 -2.067,2.52 -2.215,3.926 -3.215,4.229 -4.294,4.544 l -1.788,0.371 c -0.939,0.242 -1.612,0.429 -2.362,1.082 -0.671,0.602 -1.121,1.651 -1.218,2.577 -0.136,1.307 0.329,1.946 0.582,2.418 0.476,0.903 1.611,1.661 3.032,2.038 0.979,0.261 2.129,0.056 2.841,-0.08 0.522,-0.097 0.541,0.345 0.541,0.345 l 2.108,0.223 0.403,-3.841 -2.535,-0.266 c -0.017,0.16 -0.044,0.27 -0.137,0.401 -0.423,0.619 -1.388,1.131 -2.514,0.89 -0.602,-0.127 -0.837,-0.249 -1.322,-0.67 C -6.891,9.835 -7.108,9.432 -7.081,9.171 -6.955,7.962 -5.798,7.635 -4.859,7.39 L -3.153,6.898 C -2.371,6.696 -1.742,6.498 -1.051,6.061 -0.299,5.615 0.034,5.001 0.38,4.197 0.574,3.747 0.624,3.408 0.663,3.025 0.748,2.237 0.671,1.465 0.307,0.588 0.178,0.28 0,0 0,0'][id='path3531']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3533'][transform='translate(165.5151,383.2158)']", 
                                    m("path[d='M 0,0 C 0.605,0.062 1.196,0.079 1.74,-0.29 2.203,-0.613 2.49,-1.267 2.548,-1.836 2.659,-2.891 2.022,-3.709 1.448,-3.778 2.267,-3.684 3.105,-4.492 3.22,-5.746 3.309,-6.697 2.892,-7.279 2.275,-7.727 1.831,-8.05 1.052,-8.171 0.477,-8.232 l -3.248,-0.338 -0.13,1.236 0.824,0.086 -0.602,5.724 -0.822,-0.088 -0.131,1.23 L 0,0 z M -1.222,-1.373 -1,-3.484 l 0.701,0.072 c 0.352,0.038 0.851,0.091 1.102,0.372 0.228,0.27 0.223,0.47 0.183,0.837 -0.038,0.371 -0.209,0.679 -0.646,0.841 -0.336,0.104 -0.764,0.075 -1.105,0.038 L -1.222,-1.373 z M 0.21,-7.018 c 0.393,0.04 0.956,0.112 1.243,0.431 0.279,0.331 0.362,0.549 0.317,0.984 -0.046,0.435 -0.235,0.795 -0.6,0.999 -0.354,0.194 -0.85,0.119 -1.232,0.08 l -0.819,-0.086 0.262,-2.493 0.829,0.085 z'][id='path3535']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3537'][transform='translate(168.3188,383.5078)']", 
                                    m("path[d='M 0,0 2.971,0.312 3.102,-0.916 2.354,-0.993 2.719,-4.485 c 0.063,-0.584 0.108,-1.133 0.449,-1.605 0.328,-0.453 0.816,-0.607 1.337,-0.552 0.266,0.027 0.443,0.103 0.673,0.242 0.376,0.211 0.551,0.718 0.623,1.142 0.057,0.386 -0.011,0.83 -0.051,1.208 L 5.396,-0.674 4.659,-0.751 4.529,0.479 7.36,0.775 7.49,-0.455 6.724,-0.534 7.085,-3.974 C 7.15,-4.59 7.258,-5.295 7.084,-5.904 6.91,-6.501 6.567,-7.021 6.101,-7.384 5.724,-7.689 4.98,-7.894 4.502,-7.946 4.035,-7.993 3.339,-7.917 2.908,-7.721 2.436,-7.514 2.063,-7.136 1.779,-6.692 1.409,-6.13 1.347,-5.453 1.278,-4.792 L 0.895,-1.146 0.13,-1.226 0,0 z'][id='path3539']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3541'][transform='translate(189.272,380.8276)']", 
                                    m("path[d='m 0,0 -2.268,-0.239 0.26,-2.439 2.217,0.232 -0.146,1.4 1.386,0.144 0.278,-2.642 -5.978,-0.63 -0.131,1.247 0.894,0.093 -0.61,5.81 L -4.992,2.882 -5.122,4.126 0.854,4.757 1.123,2.219 -0.265,2.069 -0.401,3.365 -2.621,3.132 -2.375,0.808 -0.111,1.046 0,0 z'][id='path3543']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3545'][transform='translate(194.2319,384.7358)']", 
                                    m("path[d='m 0,0 -0.852,-0.091 -0.132,1.264 2.41,0.254 3.859,-6.727 0.613,0.065 0.13,-1.243 -2.772,-0.293 -0.121,1.144 0.726,0.075 -0.65,1.265 -3.295,-0.345 -0.382,-1.373 0.66,0.071 0.12,-1.146 -2.933,-0.308 -0.13,1.244 0.843,0.089 L 0,0 z m 1.098,-0.488 -0.832,-2.975 2.325,0.245 -1.493,2.73 z'][id='path3547']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3549'][transform='translate(198.9668,386.5103)']", 
                                    m("path[d='m 0,0 3.212,0.34 0.131,-1.246 -0.961,-0.1 0.371,-3.539 c 0.064,-0.59 0.112,-1.149 0.456,-1.628 0.333,-0.455 0.828,-0.614 1.355,-0.56 0.27,0.028 0.446,0.105 0.683,0.25 0.381,0.212 0.555,0.722 0.63,1.154 0.059,0.394 -0.012,0.842 -0.053,1.225 L 5.464,-0.684 4.517,-0.782 4.386,0.465 7.458,0.785 7.589,-0.459 6.813,-0.542 7.18,-4.027 C 7.245,-4.649 7.352,-5.369 7.179,-5.981 7.001,-6.586 6.653,-7.116 6.179,-7.483 5.798,-7.791 5.046,-8 4.562,-8.048 4.086,-8.1 3.381,-8.022 2.947,-7.822 2.466,-7.615 2.088,-7.231 1.8,-6.782 1.426,-6.212 1.363,-5.527 1.293,-4.855 L 0.906,-1.162 0.13,-1.244 0,0 z'][id='path3551']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3553'][transform='translate(219.7964,378.811)']", 
                                    m("path[d='M 0,0 5.771,-2.055 9.63,-5.092 20.462,7.855 9.747,-6.206 7.111,-4.594 9.826,-6.961 21.495,7.199 9.934,-7.993 6.373,-5.599 10.028,-8.868 22.732,6.526 10.185,-10.379 3.723,-4.756 0,0 z'][id='path3555']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3557'][transform='translate(220.2402,370.5459)']", 
                                    m("path[d='M 0,0 C -0.544,5.185 3.215,9.828 8.395,10.372 13.58,10.916 18.221,7.157 18.765,1.973 19.311,-3.209 15.551,-7.85 10.369,-8.396 5.189,-8.938 0.546,-5.182 0,0 m 10.054,-5.573 c 3.621,0.379 6.25,3.626 5.867,7.247 C 15.543,5.295 12.297,7.927 8.675,7.545 5.051,7.164 2.423,3.919 2.804,0.294 3.186,-3.33 6.431,-5.957 10.054,-5.573'][id='path3559']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3561'][transform='translate(237.0723,382.4834)']", 
                                    m("path[d='m 0,0 -7.52,-9.878 -2.637,1.611 2.717,-2.366 L 0.965,-0.418 0,0 z'][id='path3563']", {style: {"fill": "#ed192d", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3565'][transform='translate(233.7534,376.0801)']", 
                                    m("path[d='M 0,0 2.118,2.783 2.817,2.103 0.48,-0.752 0,0 z'][id='path3567']", {style: {"fill": "#ed192d", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3569'][transform='translate(222.5854,377.7939)']", 
                                    m("path[d='M 0,0 2.982,-1.038 C 2.166,-1.632 1.29,-2.82 0.934,-3.739 l -1.902,2.432 C -0.733,-0.886 -0.255,-0.268 0,0'][id='path3571']", {style: {"fill": "#ed192d", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3573'][transform='translate(171.6304,365.0762)']", 
                                    m("path[d='m 0,0 -3.873,-0.406 0.441,-4.192 3.808,0.4 -0.25,2.401 2.378,0.25 0.477,-4.537 -10.259,-1.079 -0.224,2.137 1.537,0.163 -1.05,9.969 L -8.552,4.946 -8.775,7.083 1.485,8.161 1.943,3.804 -0.438,3.556 -0.67,5.774 -4.48,5.375 -4.06,1.385 -0.189,1.79 0,0 z'][id='path3575']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3577'][transform='translate(218.8643,365.2734)']", 
                                    m("path[d='m 0,0 1.475,0.154 0.227,-2.163 -3.134,-0.328 -5.395,6.09 1.714,0.166 c 0.751,0.081 1.794,0.196 2.346,0.687 0.642,0.573 0.809,1.151 0.712,2.314 -0.11,1.262 -0.885,1.994 -1.643,2.339 -0.596,0.272 -1.049,0.345 -1.794,0.265 l -1.914,-0.198 1.051,-9.994 1.379,0.144 0.227,-2.165 -5.381,-0.564 -0.225,2.167 1.433,0.146 -1.061,10.116 -1.438,-0.151 -0.225,2.144 6.132,0.645 c 1.143,0.121 2.634,0.163 3.675,-0.496 C -0.49,10.468 0.412,9.46 0.575,7.772 0.791,5.513 0.012,3.572 -2.376,2.731 L 0,0 z'][id='path3579']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3581'][transform='translate(183.3574,377.7529)']", 
                                    m("path[d='m 0,0 0.848,0.087 0.133,-1.246 -1.807,-0.189 -3.108,3.512 0.989,0.091 c 0.431,0.048 0.991,0.067 1.295,0.366 0.434,0.421 0.527,0.652 0.465,1.366 -0.063,0.728 -0.521,1.257 -0.958,1.456 -0.304,0.137 -0.619,0.145 -1.26,0.078 l -0.869,-0.091 0.611,-5.82 0.793,0.085 0.131,-1.244 -3.099,-0.326 -0.132,1.246 0.826,0.087 L -5.754,5.285 -6.579,5.2 -6.711,6.436 -3.177,6.807 C -2.52,6.874 -1.659,6.9 -1.059,6.521 -0.284,6.033 0.237,5.45 0.331,4.479 0.457,3.172 0.007,2.055 -1.368,1.572 L 0,0 z'][id='path3583']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3585'][transform='translate(250.0713,379.5205)']", 
                                    m("path[d='M 0,0 -0.363,1.087 -0.246,-0.024 -0.53,-0.055 -0.673,1.317 -0.261,1.363 0.108,0.333 0.251,1.418 0.664,1.458 0.809,0.084 0.528,0.056 0.411,1.169 0.283,0.032 0,0 z'][id='path3587']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3589'][transform='translate(252.2295,380.2217)']", 
                                    m("path[d='m 0,0 c 0.013,-0.14 -0.052,-0.305 -0.145,-0.398 -0.075,-0.074 -0.222,-0.154 -0.393,-0.178 -0.304,-0.041 -0.536,0.134 -0.642,0.416 -0.02,0.062 -0.04,0.149 -0.051,0.239 -0.009,0.093 -0.01,0.189 0.004,0.266 0.051,0.267 0.196,0.486 0.551,0.523 0.099,0.009 0.235,0.011 0.381,-0.068 0.212,-0.116 0.239,-0.292 0.249,-0.359 L -0.316,0.412 C -0.332,0.488 -0.415,0.677 -0.69,0.625 -0.817,0.604 -0.906,0.503 -0.94,0.375 -0.954,0.328 -0.963,0.234 -0.958,0.139 c 0.005,-0.101 0.026,-0.205 0.074,-0.286 0.056,-0.095 0.124,-0.149 0.196,-0.173 0.038,-0.013 0.075,-0.018 0.115,-0.013 0.04,0.004 0.078,0.015 0.116,0.03 0.191,0.072 0.182,0.214 0.186,0.275 L 0,0 z'][id='path3591']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3593'][transform='translate(292.1616,318.9229)']", 
                                    m("path[d='m 0,0 -6.308,0 0,8.461 6.308,0 c 0,11.461 4,14.999 15.153,14.999 2.077,0 4.231,-0.153 6.307,-0.23 l 0,-9.23 c -1.23,0.153 -2.384,0.23 -3.538,0.23 -3,0 -4.846,-0.384 -4.846,-4 l 0,-1.769 7.846,0 0,-8.461 -7.846,0 0,-31.46 L 0,-31.46 0,0 z'][id='path3595']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("path[d='m 315.931,327.384 13.077,0 0,-39.921 -13.077,0 0,39.921 z m 13.077,5 -13.077,0 0,10 13.077,0 0,-10 z'][id='path3597']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                m("g[id='g3599'][transform='translate(350.7764,294.3857)']", 
                                    m("path[d='M 0,0 C 6.23,0 8.308,3.538 8,11.769 6.154,10.615 2.77,10.384 -0.077,9.615 -3,8.923 -5.461,7.691 -5.461,4.538 -5.461,1.308 -2.923,0 0,0 m -16.922,20.691 c 0.231,5.231 2.692,8.615 6.231,10.692 3.538,2 8.153,2.769 12.691,2.769 9.461,0 18.615,-2.077 18.615,-13.384 l 0,-17.46 c 0,-3.385 0,-7.078 1.538,-10.231 L 9,-6.923 c -0.462,1.231 -0.616,2.461 -0.77,3.77 -3.384,-3.539 -8.384,-4.923 -13.153,-4.923 -7.615,0 -13.615,3.846 -13.615,12.076 0,12.999 14.154,11.999 23.23,13.845 2.231,0.462 3.462,1.231 3.462,3.693 0,2.999 -3.615,4.153 -6.308,4.153 -3.615,0 -5.923,-1.615 -6.538,-5 l -12.23,0 z'][id='path3601']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3603'][transform='translate(388.7773,307.8467)']", 
                                    m("path[d='m 0,0 c 0,-7 2,-11.538 7.923,-11.538 5.846,0 7.846,6.077 7.846,11.538 0,5.077 -2,10.692 -7.769,10.692 C 4.461,10.692 0,8.23 0,0 m -12.615,34.537 13.077,0 0,-19.384 0.154,0 c 2.692,3.692 6.461,5.538 11.384,5.538 11.307,0 16.845,-9.845 16.845,-20.23 0,-11.23 -5.308,-21.998 -17.845,-21.998 -4.615,0 -8.461,1.999 -11,5.768 l -0.154,0 0,-4.615 -12.461,0 0,54.921 z'][id='path3605']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("path[d='m 419.701,342.383 13.076,0 0,-54.92 -13.076,0 0,54.92 z'][id='path3607']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                m("g[id='g3609'][transform='translate(473.1563,327.1914)']", 
                                    m("path[d='m 0,0 0.775,0 0,-0.518 0.022,0 c 0.245,0.367 0.554,0.619 1.143,0.619 0.453,0 0.876,-0.195 1.042,-0.619 0.273,0.381 0.625,0.619 1.164,0.619 0.784,0 1.244,-0.346 1.244,-1.251 l 0,-2.566 -0.82,0 0,2.171 c 0,0.589 -0.036,0.999 -0.675,0.999 -0.553,0 -0.791,-0.367 -0.791,-0.992 l 0,-2.178 -0.819,0 0,2.386 c 0,0.511 -0.158,0.784 -0.654,0.784 -0.424,0 -0.812,-0.346 -0.812,-0.963 l 0,-2.207 L 0,-3.716 0,0 z'][id='path3611']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3613'][transform='translate(481.8379,325.9478)']", 
                                    m("path[d='m 0,0 c -0.064,0.453 -0.396,0.697 -0.848,0.697 -0.424,0 -1.02,-0.222 -1.02,-1.351 0,-0.618 0.272,-1.272 0.984,-1.272 0.474,0 0.805,0.316 0.884,0.848 l 0.819,0 c -0.151,-0.963 -0.747,-1.495 -1.703,-1.495 -1.164,0 -1.804,0.827 -1.804,1.919 0,1.121 0.611,1.998 1.833,1.998 C 0.007,1.344 0.74,0.913 0.819,0 L 0,0 z'][id='path3615']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3617'][transform='translate(455.4932,285.8535)']", 
                                    m("path[d='m 0,0 c -5.972,0.023 -10.896,2.573 -14.205,5.611 -3.575,3.42 -6.394,9.014 -6.489,15.709 -0.065,5.273 2.225,11.265 7.731,15.544 4.442,3.538 9.165,4.687 12.861,4.665 1.167,0 2.236,-0.105 3.188,-0.262 C 5.584,40.859 7.274,38.503 6.862,36.006 6.454,33.508 4.099,31.82 1.6,32.227 c -0.511,0.084 -1.086,0.142 -1.702,0.14 -1.983,-0.023 -4.354,-0.485 -7.178,-2.689 -3.318,-2.693 -4.19,-5.388 -4.25,-8.358 -0.1,-3.681 2.1,-7.763 3.54,-8.975 1.831,-1.701 4.783,-3.202 7.99,-3.183 1.694,0.005 3.521,0.376 5.555,1.402 2.075,1.058 3.564,2.514 4.532,4.003 0.979,1.475 1.372,3.004 1.364,3.845 0.028,2.532 2.099,4.562 4.628,4.535 2.528,-0.029 4.557,-2.098 4.531,-4.628 C 20.564,15.346 19.568,12.365 17.764,9.565 15.952,6.781 13.258,4.207 9.704,2.398 6.442,0.738 3.115,0 0.012,0 L 0,0 z'][id='path3619']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3621-5'][transform='translate(447.0273,301.293)']", 
                                    m("path[d='m 0,0 c -1.426,2.088 -0.892,4.937 1.197,6.364 l 18.394,12.561 c 2.087,1.427 4.938,0.887 6.362,-1.203 1.427,-2.087 0.893,-4.939 -1.196,-6.367 L 6.363,-1.199 C 5.574,-1.741 4.676,-1.999 3.786,-1.999 2.322,-1.999 0.887,-1.299 0,0'][id='path3623']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3625'][transform='translate(169.8994,334.0127)']", 
                                    m("path[d='m 0,0 3.831,0 -4.03,-4.059 -2.356,0 L 0,0 z m 3.462,-12.119 c -0.113,2.044 -1.504,3.889 -3.689,3.889 -2.242,0 -3.775,-1.703 -3.86,-3.889 l 7.549,0 z m -7.549,-2.128 c 0,-2.299 1.249,-4.343 3.945,-4.343 1.873,0 3.008,0.823 3.576,2.441 l 3.065,0 c -0.709,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.72 0,4.172 2.725,7.748 7.096,7.748 4.626,0 7.464,-4.172 6.925,-8.571 l -10.785,0 z'][id='path3627']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3629'][transform='translate(185.3711,315.4229)']", 
                                    m("path[d='m 0,0 c 2.81,0 4.115,2.101 4.115,5.166 0,3.178 -1.419,5.193 -4.115,5.193 -2.668,0 -4.059,-2.526 -4.059,-5.193 C -4.059,2.611 -2.952,0 0,0 m 7.237,-7.578 -3.236,0 0,7.323 -0.056,0 c -1.022,-1.618 -3.037,-2.299 -4.91,-2.299 -4.343,0 -6.329,3.718 -6.329,7.663 0,4.286 2.242,7.805 6.868,7.805 1.873,0 3.633,-0.71 4.541,-2.384 l 0.057,0 0,1.987 3.065,0 0,-20.095 z'][id='path3631']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3633'][transform='translate(207.5967,313.2661)']", 
                                    m("path[d='m 0,0 -3.179,0 0,2.043 -0.056,0 c -0.795,-1.475 -2.555,-2.44 -4.172,-2.44 -3.832,0 -5.478,1.93 -5.478,5.761 l 0,9.309 3.236,0 0,-8.997 c 0,-2.582 1.049,-3.519 2.809,-3.519 2.696,0 3.605,1.731 3.605,4.002 l 0,8.514 3.235,0 L 0,0 z'][id='path3635']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("path[d='m 210.24,327.939 3.235,0 0,-14.673 -3.235,0 0,14.673 z m 0,5.591 3.235,0 0,-3.065 -3.235,0 0,3.065 z'][id='path3637']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                m("g[id='g3639'][transform='translate(222.8989,325.7822)']", 
                                    m("path[d='m 0,0 c -2.725,0 -4.115,-2.072 -4.115,-5.194 0,-2.952 1.504,-5.165 4.115,-5.165 2.952,0 4.059,2.611 4.059,5.165 C 4.059,-2.526 2.667,0 0,0 m -7.237,2.157 3.065,0 0,-1.987 0.057,0 c 0.908,1.675 2.667,2.384 4.541,2.384 4.626,0 6.868,-3.519 6.868,-7.804 0,-3.945 -1.987,-7.664 -6.329,-7.664 -1.873,0 -3.888,0.682 -4.91,2.299 l -0.057,0 0,-7.322 -3.235,0 0,20.094 z'][id='path3641']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3643'][transform='translate(242.1445,321.894)']", 
                                    m("path[d='M 0,0 C -0.114,2.043 -1.504,3.888 -3.689,3.888 -5.932,3.888 -7.464,2.186 -7.549,0 L 0,0 z m -7.549,-2.128 c 0,-2.299 1.248,-4.343 3.945,-4.343 1.873,0 3.008,0.823 3.576,2.441 l 3.065,0 c -0.71,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.719 0,4.173 2.724,7.748 7.096,7.748 4.626,0 7.463,-4.171 6.924,-8.57 l -10.784,0 z'][id='path3645']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3647'][transform='translate(161.8105,302.5928)']", 
                                    m("path[d='m 0,0 2.441,0 0,4.399 3.235,0 0,-4.399 2.924,0 0,-2.412 -2.924,0 0,-7.833 c 0,-1.334 0.114,-2.016 1.561,-2.016 0.454,0 0.909,0 1.363,0.115 l 0,-2.499 c -0.71,-0.056 -1.391,-0.169 -2.1,-0.169 -3.378,0 -4.002,1.305 -4.059,3.746 l 0,8.656 L 0,-2.412 0,0 z'][id='path3649']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3651'][transform='translate(181.9634,296.5479)']", 
                                    m("path[d='M 0,0 C -0.114,2.044 -1.504,3.889 -3.689,3.889 -5.932,3.889 -7.464,2.186 -7.549,0 L 0,0 z m -7.549,-2.129 c 0,-2.299 1.248,-4.342 3.945,-4.342 1.873,0 3.008,0.824 3.576,2.441 l 3.065,0 c -0.71,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.719 0,4.172 2.724,7.748 7.096,7.748 4.626,0 7.464,-4.171 6.924,-8.571 l -10.784,0 z'][id='path3653']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3655'][transform='translate(196.7251,297.6836)']", 
                                    m("path[d='m 0,0 c -0.255,1.787 -1.561,2.753 -3.349,2.753 -1.674,0 -4.03,-0.88 -4.03,-5.336 0,-2.441 1.078,-5.023 3.888,-5.023 1.873,0 3.179,1.249 3.491,3.348 l 3.235,0 c -0.595,-3.803 -2.951,-5.903 -6.726,-5.903 -4.597,0 -7.124,3.264 -7.124,7.578 0,4.428 2.413,7.89 7.238,7.89 3.405,0 6.3,-1.703 6.612,-5.307 L 0,0 z'][id='path3657']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3659'][transform='translate(201.752,308.1841)']", 
                                    m("path[d='m 0,0 3.236,0 0,-7.521 0.056,0 c 0.795,1.334 2.47,2.327 4.399,2.327 3.179,0 5.194,-1.703 5.194,-4.995 l 0,-10.075 -3.235,0 0,9.223 c -0.057,2.299 -0.965,3.293 -2.867,3.293 -2.157,0 -3.547,-1.703 -3.547,-3.86 l 0,-8.656 -3.236,0 L 0,0 z'][id='path3661']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3663'][transform='translate(217.1943,302.5928)']", 
                                    m("path[d='m 0,0 3.065,0 0,-2.156 0.057,-0.058 c 0.965,1.618 2.64,2.611 4.569,2.611 3.179,0 5.194,-1.703 5.194,-4.995 l 0,-10.075 -3.235,0 0,9.224 c -0.057,2.299 -0.965,3.293 -2.867,3.293 -2.157,0 -3.547,-1.703 -3.547,-3.861 l 0,-8.656 -3.236,0 L 0,0 z'][id='path3665']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("path[d='m 233.291,302.593 3.235,0 0,-14.673 -3.235,0 0,14.673 z m 0,5.591 3.235,0 0,-3.065 -3.235,0 0,3.065 z'][id='path3667']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                m("g[id='g3669'][transform='translate(245.7793,290.0771)']", 
                                    m("path[d='m 0,0 c 2.81,0 4.116,2.1 4.116,5.165 0,3.179 -1.42,5.194 -4.116,5.194 -2.667,0 -4.058,-2.526 -4.058,-5.194 C -4.058,2.61 -2.951,0 0,0 m 7.237,-7.578 -3.235,0 0,7.322 -0.057,0 c -1.022,-1.617 -3.037,-2.299 -4.91,-2.299 -4.342,0 -6.329,3.718 -6.329,7.663 0,4.286 2.242,7.805 6.869,7.805 1.873,0 3.633,-0.709 4.541,-2.384 l 0.056,0 0,1.987 3.065,0 0,-20.094 z'][id='path3671']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3673'][transform='translate(268.0054,287.9199)']", 
                                    m("path[d='m 0,0 -3.179,0 0,2.043 -0.056,0 c -0.795,-1.476 -2.555,-2.44 -4.172,-2.44 -3.832,0 -5.478,1.929 -5.478,5.761 l 0,9.309 3.236,0 0,-8.997 c 0,-2.582 1.049,-3.519 2.809,-3.519 2.696,0 3.605,1.732 3.605,4.002 l 0,8.514 3.235,0 L 0,0 z'][id='path3675']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                ),
                                m("g[id='g3677'][transform='translate(280.6387,296.5479)']", 
                                    m("path[d='M 0,0 C -0.114,2.044 -1.504,3.889 -3.689,3.889 -5.932,3.889 -7.464,2.186 -7.549,0 L 0,0 z m -7.549,-2.129 c 0,-2.299 1.248,-4.342 3.945,-4.342 1.873,0 3.008,0.824 3.576,2.441 l 3.065,0 c -0.71,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.719 0,4.172 2.724,7.748 7.096,7.748 4.626,0 7.463,-4.171 6.924,-8.571 l -10.784,0 z'][id='path3679']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                )
                            ]
                        )
                    ),
                    m("text[id='text9863'][x='485.79755'][xml:space='preserve'][y='250.51724']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}},
                        [
                            m("tspan[id='tspan9873'][x='485.79755'][y='250.51724']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "Prix taxes incluses:"
                            ),
                            m("tspan[id='tspan8598'][x='485.79755'][y='264.51724']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                this.signData['tx1']
                            ),
                            m("tspan[id='tspan9889'][x='485.79755'][y='278.51724']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "Financement sans intérêts"
                            ),
                            m("tspan[id='tspan9893'][x='485.79755'][y='292.51724']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                this.signData['amo'] + " mois: " + this.signData['ad1'] + " / mois"
                            )
                        ]
                    ),
                    m("text[id='text8544'][x='66.466843'][xml:space='preserve'][y='117.11097']", {style: {"font-size": "23px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "start", "line-height": "125%", "letter-spacing": "0px", "word-spacing": "0px", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#ffffff", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}},
                        [
                            m("tspan[id='tspan8546'][x='66.466843'][y='117.11097']", 
                                "Programmes de configuration"
                            ),
                            m("tspan[id='tspan8550'][x='66.466843'][y='145.86096']", 
                                "et de service fiable Plus"
                            )
                        ]
                    ),
                    m("text[id='text8571'][x='5.676342'][xml:space='preserve'][y='202.11348']", {style: {"font-size": "18px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "start", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#b4d016", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}},
                        [
                            m("tspan[id='tspan8579'][x='5.676342'][y='202.11348']", {style: {"font-size": "18px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "start", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#b4d016", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "Simplifiez votre expérience d'achat avec notre"
                            ),
                            m("tspan[id='tspan8590'][x='5.676342'][y='220.11348']", {style: {"font-size": "18px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "start", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#b4d016", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "programme clé en main"
                            )
                        ]
                    ),
                    m("text[id='text8592'][x='4.2512808'][xml:space='preserve'][y='284.85611']", {style: {"font-size": "60px", "font-style": "normal", "font-variant": "normal", "font-weight": "800", "font-stretch": "normal", "text-align": "start", "line-height": "125%", "letter-spacing": "0px", "word-spacing": "0px", "writing-mode": "lr", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Ultra-Bold"}}, 
                        m("tspan[id='tspan8594'][x='4.2512808'][y='284.85611']", 
                            this.signData['c1']
                        )
                    ),
                    m("rect[height='315'][id='rect8552'][width='495'][x='495.00003'][y='67.5']", {style: {"fill": "#ffffff", "fill-opacity": "1", "stroke": "none"}}),
                    m("text[id='text4114'][x='741.91791'][xml:space='preserve'][y='149.70694']", {style: {"font-size": "39.09102631px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "center", "line-height": "125%", "writing-mode": "lr-tb", "text-anchor": "middle", "fill": "#787878", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}},
                        [
                            m("tspan[id='tspan4116'][x='741.91791'][y='149.70694']", 
                                "Insérez l'enseigne"
                            ),
                            m("tspan[id='tspan5473'][x='741.91791'][y='198.57072']", 
                                "4x6 ici."
                            )
                        ]
                    ),
                    m("path[d='m 495.00005,67.500001 0,314.999999 495,0 0,-314.999999 -495,0 z m 12.59375,12.59375 469.8125,0 0,289.812499 -469.8125,0 0,-289.812499 z'][id='path5471']", {style: {"fill": "#787878", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                    m("text[id='text8018'][x='741.91791'][xml:space='preserve'][y='252.73724']", {style: {"font-size": "39.09102631px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "center", "line-height": "125%", "writing-mode": "lr-tb", "text-anchor": "middle", "fill": "#787878", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}},
                        [
                            m("tspan[id='tspan8022'][x='741.91791'][y='252.73724']", 
                                "Prix ordinateur seul :"
                            ),
                            m("tspan[id='tspan8026'][x='741.91791'][y='301.60101']", 
                                this.signData['p1']
                            )
                        ]
                    ),
                    m("text[id='text8600'][x='513.091'][xml:space='preserve'][y='365.24243']", {style: {"font-size": "20px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "start", "line-height": "125%", "letter-spacing": "0px", "word-spacing": "0px", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#787878", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}}, 
                        m("tspan[id='tspan8602'][x='513.091'][y='365.24243']", 
                            this.signData['sk1'] + " - " + this.signData['ds1']
                        )
                    ),
                    m("text[id='text8624'][x='6.1379995'][xml:space='preserve'][y='317.53671']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1", "stroke": "none"}},
                        [
                            m("tspan[id='tspan8632'][x='6.1379995'][y='317.53671']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "Inclus :"
                            ),
                            m("tspan[id='tspan8643'][x='6.1379995'][y='332.93671']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "- Configuration de votre ordinateur"
                            ),
                            m("tspan[dx='0 0 1.3320718'][id='tspan8645'][x='6.1379995'][y='348.3367']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "  personnalisée selon vos besoins"
                            ),
                            m("tspan[id='tspan8647'][x='6.1379995'][y='363.73672']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "- Clé USB 32 gb pour la récupération"
                            ),
                            m("tspan[id='tspan8649'][x='6.1379995'][y='379.13672']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "- Un mois de service fiable Plus (" + this.signData['pf1'] + ")"
                            )
                        ]
                    ),
                    m("rect[height='382.5'][id='rect5542'][width='990'][x='4.5057579e-005'][y='382.5']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                    m("path[d='M 4.5057578e-5,562.5 990.00005,562.5 l 0,-180 -990.000004942422,0 0,180 z'][id='path5544']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                    m("path[clip-path='url(#clipPath5151)'][d='M -78.393855,-7.0388999e-6 -76.866048,304.08337 l 1135.021548,0 -1.5278,-304.0833770388999 -1135.021555,0 z'][id='path5546'][transform='translate(0,382.5)']", {style: {"opacity": "0.39999396", "fill": "url(#radialGradient5808)", "stroke": "none"}}),
                    m("g[id='g5578'][transform='matrix(0.54320225,0,0,-0.54320225,229.91047,918.45415)']",
                        [
                            m("g[id='g5580'][transform='translate(257.729,358.769)']", 
                                m("path[d='M 0,0 -97.33,-10.277 -101.503,29.428 -4.171,39.709 0,0 z'][id='path5582']", {style: {"fill": "#ee2223", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                            ),
                            m("g[id='g5584'][transform='translate(175.4712,358.5239)']", 
                                m("path[d='m 0,0 -0.232,2.215 1.56,0.163 -1.048,9.973 -1.562,-0.162 -0.232,2.213 3.59,0.375 7.94,-8.981 0.017,0.002 -0.787,7.496 -1.579,-0.165 -0.235,2.212 5.305,0.558 0.231,-2.215 L 11.5,13.531 12.782,1.345 10.765,1.131 2.804,10.212 2.786,10.212 3.585,2.614 5.069,2.772 5.301,0.557 0,0 z'][id='path5586']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                            ),
                            m("g[id='g5588']", 
                                m("g[clip-path='url(#clipPath3521)'][id='g5590']",
                                    [
                                        m("g[id='g5592'][transform='translate(208.2178,361.9673)']", 
                                            m("path[d='m 0,0 -2.22,-0.233 -0.205,1.95 c -0.897,-1.432 -2.592,-2.489 -4.646,-2.705 -1.823,-0.194 -3.637,-0.02 -5.306,1.431 -1.332,1.155 -2.403,3.009 -2.646,5.072 -0.139,1.188 -0.057,2.71 0.348,3.825 0.398,1.1 0.923,1.675 1.317,2.128 1.156,1.326 3.105,2.36 5.048,2.511 1.602,0.127 3.162,-0.127 4.328,-1.425 l -0.166,1.57 2.182,0.227 0.424,-4.049 -2.797,-0.295 c -0.662,1.19 -2.846,1.671 -4.065,1.439 -1.152,-0.217 -2.204,-0.461 -3.238,-1.797 -0.966,-1.251 -1.075,-2.447 -0.952,-3.612 0.135,-1.309 0.738,-2.644 1.706,-3.502 0.987,-0.872 2.502,-1.108 3.67,-0.982 2.048,0.213 3.73,2.096 3.773,3.453 L -8.604,4.463 -8.825,6.578 -0.737,7.423 0,0 z'][id='path5594']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5596'][transform='translate(248.7104,367.207)']", 
                                            m("path[d='m 0,0 c -0.558,-0.839 -1.458,-1.513 -2.93,-1.771 -1.462,-0.262 -2.154,0.285 -2.883,0.456 -0.515,0.123 -0.643,-0.356 -0.643,-0.356 L -8.561,-1.89 -8.963,1.947 -6.205,2.24 C -6.186,2.077 -6.207,2.068 -6.176,1.899 -6.082,1.43 -5.514,0.076 -3.684,0.27 -3.1,0.33 -2.668,0.664 -2.299,1.188 -1.987,1.63 -2.067,2.52 -2.067,2.52 -2.215,3.926 -3.215,4.229 -4.294,4.544 l -1.788,0.371 c -0.939,0.242 -1.612,0.429 -2.362,1.082 -0.671,0.602 -1.121,1.651 -1.218,2.577 -0.136,1.307 0.329,1.946 0.582,2.418 0.476,0.903 1.611,1.661 3.032,2.038 0.979,0.261 2.129,0.056 2.841,-0.08 0.522,-0.097 0.541,0.345 0.541,0.345 l 2.108,0.223 0.403,-3.841 -2.535,-0.266 c -0.017,0.16 -0.044,0.27 -0.137,0.401 -0.423,0.619 -1.388,1.131 -2.514,0.89 -0.602,-0.127 -0.837,-0.249 -1.322,-0.67 C -6.891,9.835 -7.108,9.432 -7.081,9.171 -6.955,7.962 -5.798,7.635 -4.859,7.39 L -3.153,6.898 C -2.371,6.696 -1.742,6.498 -1.051,6.061 -0.299,5.615 0.034,5.001 0.38,4.197 0.574,3.747 0.624,3.408 0.663,3.025 0.748,2.237 0.671,1.465 0.307,0.588 0.178,0.28 0,0 0,0'][id='path5598']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5600'][transform='translate(165.5151,383.2158)']", 
                                            m("path[d='M 0,0 C 0.605,0.062 1.196,0.079 1.74,-0.29 2.203,-0.613 2.49,-1.267 2.548,-1.836 2.659,-2.891 2.022,-3.709 1.448,-3.778 2.267,-3.684 3.105,-4.492 3.22,-5.746 3.309,-6.697 2.892,-7.279 2.275,-7.727 1.831,-8.05 1.052,-8.171 0.477,-8.232 l -3.248,-0.338 -0.13,1.236 0.824,0.086 -0.602,5.724 -0.822,-0.088 -0.131,1.23 L 0,0 z M -1.222,-1.373 -1,-3.484 l 0.701,0.072 c 0.352,0.038 0.851,0.091 1.102,0.372 0.228,0.27 0.223,0.47 0.183,0.837 -0.038,0.371 -0.209,0.679 -0.646,0.841 -0.336,0.104 -0.764,0.075 -1.105,0.038 L -1.222,-1.373 z M 0.21,-7.018 c 0.393,0.04 0.956,0.112 1.243,0.431 0.279,0.331 0.362,0.549 0.317,0.984 -0.046,0.435 -0.235,0.795 -0.6,0.999 -0.354,0.194 -0.85,0.119 -1.232,0.08 l -0.819,-0.086 0.262,-2.493 0.829,0.085 z'][id='path5602']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5604'][transform='translate(168.3188,383.5078)']", 
                                            m("path[d='M 0,0 2.971,0.312 3.102,-0.916 2.354,-0.993 2.719,-4.485 c 0.063,-0.584 0.108,-1.133 0.449,-1.605 0.328,-0.453 0.816,-0.607 1.337,-0.552 0.266,0.027 0.443,0.103 0.673,0.242 0.376,0.211 0.551,0.718 0.623,1.142 0.057,0.386 -0.011,0.83 -0.051,1.208 L 5.396,-0.674 4.659,-0.751 4.529,0.479 7.36,0.775 7.49,-0.455 6.724,-0.534 7.085,-3.974 C 7.15,-4.59 7.258,-5.295 7.084,-5.904 6.91,-6.501 6.567,-7.021 6.101,-7.384 5.724,-7.689 4.98,-7.894 4.502,-7.946 4.035,-7.993 3.339,-7.917 2.908,-7.721 2.436,-7.514 2.063,-7.136 1.779,-6.692 1.409,-6.13 1.347,-5.453 1.278,-4.792 L 0.895,-1.146 0.13,-1.226 0,0 z'][id='path5606']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5608'][transform='translate(189.272,380.8276)']", 
                                            m("path[d='m 0,0 -2.268,-0.239 0.26,-2.439 2.217,0.232 -0.146,1.4 1.386,0.144 0.278,-2.642 -5.978,-0.63 -0.131,1.247 0.894,0.093 -0.61,5.81 L -4.992,2.882 -5.122,4.126 0.854,4.757 1.123,2.219 -0.265,2.069 -0.401,3.365 -2.621,3.132 -2.375,0.808 -0.111,1.046 0,0 z'][id='path5610']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5612'][transform='translate(194.2319,384.7358)']", 
                                            m("path[d='m 0,0 -0.852,-0.091 -0.132,1.264 2.41,0.254 3.859,-6.727 0.613,0.065 0.13,-1.243 -2.772,-0.293 -0.121,1.144 0.726,0.075 -0.65,1.265 -3.295,-0.345 -0.382,-1.373 0.66,0.071 0.12,-1.146 -2.933,-0.308 -0.13,1.244 0.843,0.089 L 0,0 z m 1.098,-0.488 -0.832,-2.975 2.325,0.245 -1.493,2.73 z'][id='path5614']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5616'][transform='translate(198.9668,386.5103)']", 
                                            m("path[d='m 0,0 3.212,0.34 0.131,-1.246 -0.961,-0.1 0.371,-3.539 c 0.064,-0.59 0.112,-1.149 0.456,-1.628 0.333,-0.455 0.828,-0.614 1.355,-0.56 0.27,0.028 0.446,0.105 0.683,0.25 0.381,0.212 0.555,0.722 0.63,1.154 0.059,0.394 -0.012,0.842 -0.053,1.225 L 5.464,-0.684 4.517,-0.782 4.386,0.465 7.458,0.785 7.589,-0.459 6.813,-0.542 7.18,-4.027 C 7.245,-4.649 7.352,-5.369 7.179,-5.981 7.001,-6.586 6.653,-7.116 6.179,-7.483 5.798,-7.791 5.046,-8 4.562,-8.048 4.086,-8.1 3.381,-8.022 2.947,-7.822 2.466,-7.615 2.088,-7.231 1.8,-6.782 1.426,-6.212 1.363,-5.527 1.293,-4.855 L 0.906,-1.162 0.13,-1.244 0,0 z'][id='path5618']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5620'][transform='translate(219.7964,378.811)']", 
                                            m("path[d='M 0,0 5.771,-2.055 9.63,-5.092 20.462,7.855 9.747,-6.206 7.111,-4.594 9.826,-6.961 21.495,7.199 9.934,-7.993 6.373,-5.599 10.028,-8.868 22.732,6.526 10.185,-10.379 3.723,-4.756 0,0 z'][id='path5622']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5624'][transform='translate(220.2402,370.5459)']", 
                                            m("path[d='M 0,0 C -0.544,5.185 3.215,9.828 8.395,10.372 13.58,10.916 18.221,7.157 18.765,1.973 19.311,-3.209 15.551,-7.85 10.369,-8.396 5.189,-8.938 0.546,-5.182 0,0 m 10.054,-5.573 c 3.621,0.379 6.25,3.626 5.867,7.247 C 15.543,5.295 12.297,7.927 8.675,7.545 5.051,7.164 2.423,3.919 2.804,0.294 3.186,-3.33 6.431,-5.957 10.054,-5.573'][id='path5626']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5628'][transform='translate(237.0723,382.4834)']", 
                                            m("path[d='m 0,0 -7.52,-9.878 -2.637,1.611 2.717,-2.366 L 0.965,-0.418 0,0 z'][id='path5630']", {style: {"fill": "#ed192d", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5632'][transform='translate(233.7534,376.0801)']", 
                                            m("path[d='M 0,0 2.118,2.783 2.817,2.103 0.48,-0.752 0,0 z'][id='path5634']", {style: {"fill": "#ed192d", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5636'][transform='translate(222.5854,377.7939)']", 
                                            m("path[d='M 0,0 2.982,-1.038 C 2.166,-1.632 1.29,-2.82 0.934,-3.739 l -1.902,2.432 C -0.733,-0.886 -0.255,-0.268 0,0'][id='path5638']", {style: {"fill": "#ed192d", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5640'][transform='translate(171.6304,365.0762)']", 
                                            m("path[d='m 0,0 -3.873,-0.406 0.441,-4.192 3.808,0.4 -0.25,2.401 2.378,0.25 0.477,-4.537 -10.259,-1.079 -0.224,2.137 1.537,0.163 -1.05,9.969 L -8.552,4.946 -8.775,7.083 1.485,8.161 1.943,3.804 -0.438,3.556 -0.67,5.774 -4.48,5.375 -4.06,1.385 -0.189,1.79 0,0 z'][id='path5642']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5644'][transform='translate(218.8643,365.2734)']", 
                                            m("path[d='m 0,0 1.475,0.154 0.227,-2.163 -3.134,-0.328 -5.395,6.09 1.714,0.166 c 0.751,0.081 1.794,0.196 2.346,0.687 0.642,0.573 0.809,1.151 0.712,2.314 -0.11,1.262 -0.885,1.994 -1.643,2.339 -0.596,0.272 -1.049,0.345 -1.794,0.265 l -1.914,-0.198 1.051,-9.994 1.379,0.144 0.227,-2.165 -5.381,-0.564 -0.225,2.167 1.433,0.146 -1.061,10.116 -1.438,-0.151 -0.225,2.144 6.132,0.645 c 1.143,0.121 2.634,0.163 3.675,-0.496 C -0.49,10.468 0.412,9.46 0.575,7.772 0.791,5.513 0.012,3.572 -2.376,2.731 L 0,0 z'][id='path5646']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5648'][transform='translate(183.3574,377.7529)']", 
                                            m("path[d='m 0,0 0.848,0.087 0.133,-1.246 -1.807,-0.189 -3.108,3.512 0.989,0.091 c 0.431,0.048 0.991,0.067 1.295,0.366 0.434,0.421 0.527,0.652 0.465,1.366 -0.063,0.728 -0.521,1.257 -0.958,1.456 -0.304,0.137 -0.619,0.145 -1.26,0.078 l -0.869,-0.091 0.611,-5.82 0.793,0.085 0.131,-1.244 -3.099,-0.326 -0.132,1.246 0.826,0.087 L -5.754,5.285 -6.579,5.2 -6.711,6.436 -3.177,6.807 C -2.52,6.874 -1.659,6.9 -1.059,6.521 -0.284,6.033 0.237,5.45 0.331,4.479 0.457,3.172 0.007,2.055 -1.368,1.572 L 0,0 z'][id='path5650']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5652'][transform='translate(250.0713,379.5205)']", 
                                            m("path[d='M 0,0 -0.363,1.087 -0.246,-0.024 -0.53,-0.055 -0.673,1.317 -0.261,1.363 0.108,0.333 0.251,1.418 0.664,1.458 0.809,0.084 0.528,0.056 0.411,1.169 0.283,0.032 0,0 z'][id='path5654']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5656'][transform='translate(252.2295,380.2217)']", 
                                            m("path[d='m 0,0 c 0.013,-0.14 -0.052,-0.305 -0.145,-0.398 -0.075,-0.074 -0.222,-0.154 -0.393,-0.178 -0.304,-0.041 -0.536,0.134 -0.642,0.416 -0.02,0.062 -0.04,0.149 -0.051,0.239 -0.009,0.093 -0.01,0.189 0.004,0.266 0.051,0.267 0.196,0.486 0.551,0.523 0.099,0.009 0.235,0.011 0.381,-0.068 0.212,-0.116 0.239,-0.292 0.249,-0.359 L -0.316,0.412 C -0.332,0.488 -0.415,0.677 -0.69,0.625 -0.817,0.604 -0.906,0.503 -0.94,0.375 -0.954,0.328 -0.963,0.234 -0.958,0.139 c 0.005,-0.101 0.026,-0.205 0.074,-0.286 0.056,-0.095 0.124,-0.149 0.196,-0.173 0.038,-0.013 0.075,-0.018 0.115,-0.013 0.04,0.004 0.078,0.015 0.116,0.03 0.191,0.072 0.182,0.214 0.186,0.275 L 0,0 z'][id='path5658']", {style: {"fill": "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5660'][transform='translate(292.1616,318.9229)']", 
                                            m("path[d='m 0,0 -6.308,0 0,8.461 6.308,0 c 0,11.461 4,14.999 15.153,14.999 2.077,0 4.231,-0.153 6.307,-0.23 l 0,-9.23 c -1.23,0.153 -2.384,0.23 -3.538,0.23 -3,0 -4.846,-0.384 -4.846,-4 l 0,-1.769 7.846,0 0,-8.461 -7.846,0 0,-31.46 L 0,-31.46 0,0 z'][id='path5662']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("path[d='m 315.931,327.384 13.077,0 0,-39.921 -13.077,0 0,39.921 z m 13.077,5 -13.077,0 0,10 13.077,0 0,-10 z'][id='path5664']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                        m("g[id='g5666'][transform='translate(350.7764,294.3857)']", 
                                            m("path[d='M 0,0 C 6.23,0 8.308,3.538 8,11.769 6.154,10.615 2.77,10.384 -0.077,9.615 -3,8.923 -5.461,7.691 -5.461,4.538 -5.461,1.308 -2.923,0 0,0 m -16.922,20.691 c 0.231,5.231 2.692,8.615 6.231,10.692 3.538,2 8.153,2.769 12.691,2.769 9.461,0 18.615,-2.077 18.615,-13.384 l 0,-17.46 c 0,-3.385 0,-7.078 1.538,-10.231 L 9,-6.923 c -0.462,1.231 -0.616,2.461 -0.77,3.77 -3.384,-3.539 -8.384,-4.923 -13.153,-4.923 -7.615,0 -13.615,3.846 -13.615,12.076 0,12.999 14.154,11.999 23.23,13.845 2.231,0.462 3.462,1.231 3.462,3.693 0,2.999 -3.615,4.153 -6.308,4.153 -3.615,0 -5.923,-1.615 -6.538,-5 l -12.23,0 z'][id='path5668']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5670'][transform='translate(388.7773,307.8467)']", 
                                            m("path[d='m 0,0 c 0,-7 2,-11.538 7.923,-11.538 5.846,0 7.846,6.077 7.846,11.538 0,5.077 -2,10.692 -7.769,10.692 C 4.461,10.692 0,8.23 0,0 m -12.615,34.537 13.077,0 0,-19.384 0.154,0 c 2.692,3.692 6.461,5.538 11.384,5.538 11.307,0 16.845,-9.845 16.845,-20.23 0,-11.23 -5.308,-21.998 -17.845,-21.998 -4.615,0 -8.461,1.999 -11,5.768 l -0.154,0 0,-4.615 -12.461,0 0,54.921 z'][id='path5672']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("path[d='m 419.701,342.383 13.076,0 0,-54.92 -13.076,0 0,54.92 z'][id='path5674']", {style: {"fill": "#b4d016", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                        m("g[id='g5676'][transform='translate(473.1563,327.1914)']", 
                                            m("path[d='m 0,0 0.775,0 0,-0.518 0.022,0 c 0.245,0.367 0.554,0.619 1.143,0.619 0.453,0 0.876,-0.195 1.042,-0.619 0.273,0.381 0.625,0.619 1.164,0.619 0.784,0 1.244,-0.346 1.244,-1.251 l 0,-2.566 -0.82,0 0,2.171 c 0,0.589 -0.036,0.999 -0.675,0.999 -0.553,0 -0.791,-0.367 -0.791,-0.992 l 0,-2.178 -0.819,0 0,2.386 c 0,0.511 -0.158,0.784 -0.654,0.784 -0.424,0 -0.812,-0.346 -0.812,-0.963 l 0,-2.207 L 0,-3.716 0,0 z'][id='path5678']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5680'][transform='translate(481.8379,325.9478)']", 
                                            m("path[d='m 0,0 c -0.064,0.453 -0.396,0.697 -0.848,0.697 -0.424,0 -1.02,-0.222 -1.02,-1.351 0,-0.618 0.272,-1.272 0.984,-1.272 0.474,0 0.805,0.316 0.884,0.848 l 0.819,0 c -0.151,-0.963 -0.747,-1.495 -1.703,-1.495 -1.164,0 -1.804,0.827 -1.804,1.919 0,1.121 0.611,1.998 1.833,1.998 C 0.007,1.344 0.74,0.913 0.819,0 L 0,0 z'][id='path5682']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5684'][transform='translate(455.4932,285.8535)']", 
                                            m("path[d='m 0,0 c -5.972,0.023 -10.896,2.573 -14.205,5.611 -3.575,3.42 -6.394,9.014 -6.489,15.709 -0.065,5.273 2.225,11.265 7.731,15.544 4.442,3.538 9.165,4.687 12.861,4.665 1.167,0 2.236,-0.105 3.188,-0.262 C 5.584,40.859 7.274,38.503 6.862,36.006 6.454,33.508 4.099,31.82 1.6,32.227 c -0.511,0.084 -1.086,0.142 -1.702,0.14 -1.983,-0.023 -4.354,-0.485 -7.178,-2.689 -3.318,-2.693 -4.19,-5.388 -4.25,-8.358 -0.1,-3.681 2.1,-7.763 3.54,-8.975 1.831,-1.701 4.783,-3.202 7.99,-3.183 1.694,0.005 3.521,0.376 5.555,1.402 2.075,1.058 3.564,2.514 4.532,4.003 0.979,1.475 1.372,3.004 1.364,3.845 0.028,2.532 2.099,4.562 4.628,4.535 2.528,-0.029 4.557,-2.098 4.531,-4.628 C 20.564,15.346 19.568,12.365 17.764,9.565 15.952,6.781 13.258,4.207 9.704,2.398 6.442,0.738 3.115,0 0.012,0 L 0,0 z'][id='path5686']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5688'][transform='translate(447.0273,301.293)']", 
                                            m("path[d='m 0,0 c -1.426,2.088 -0.892,4.937 1.197,6.364 l 18.394,12.561 c 2.087,1.427 4.938,0.887 6.362,-1.203 1.427,-2.087 0.893,-4.939 -1.196,-6.367 L 6.363,-1.199 C 5.574,-1.741 4.676,-1.999 3.786,-1.999 2.322,-1.999 0.887,-1.299 0,0'][id='path5690']", {style: {"fill": "#b9d210", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5692'][transform='translate(169.8994,334.0127)']", 
                                            m("path[d='m 0,0 3.831,0 -4.03,-4.059 -2.356,0 L 0,0 z m 3.462,-12.119 c -0.113,2.044 -1.504,3.889 -3.689,3.889 -2.242,0 -3.775,-1.703 -3.86,-3.889 l 7.549,0 z m -7.549,-2.128 c 0,-2.299 1.249,-4.343 3.945,-4.343 1.873,0 3.008,0.823 3.576,2.441 l 3.065,0 c -0.709,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.72 0,4.172 2.725,7.748 7.096,7.748 4.626,0 7.464,-4.172 6.925,-8.571 l -10.785,0 z'][id='path5694']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5696'][transform='translate(185.3711,315.4229)']", 
                                            m("path[d='m 0,0 c 2.81,0 4.115,2.101 4.115,5.166 0,3.178 -1.419,5.193 -4.115,5.193 -2.668,0 -4.059,-2.526 -4.059,-5.193 C -4.059,2.611 -2.952,0 0,0 m 7.237,-7.578 -3.236,0 0,7.323 -0.056,0 c -1.022,-1.618 -3.037,-2.299 -4.91,-2.299 -4.343,0 -6.329,3.718 -6.329,7.663 0,4.286 2.242,7.805 6.868,7.805 1.873,0 3.633,-0.71 4.541,-2.384 l 0.057,0 0,1.987 3.065,0 0,-20.095 z'][id='path5698']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5700'][transform='translate(207.5967,313.2661)']", 
                                            m("path[d='m 0,0 -3.179,0 0,2.043 -0.056,0 c -0.795,-1.475 -2.555,-2.44 -4.172,-2.44 -3.832,0 -5.478,1.93 -5.478,5.761 l 0,9.309 3.236,0 0,-8.997 c 0,-2.582 1.049,-3.519 2.809,-3.519 2.696,0 3.605,1.731 3.605,4.002 l 0,8.514 3.235,0 L 0,0 z'][id='path5702']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("path[d='m 210.24,327.939 3.235,0 0,-14.673 -3.235,0 0,14.673 z m 0,5.591 3.235,0 0,-3.065 -3.235,0 0,3.065 z'][id='path5704']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                        m("g[id='g5706'][transform='translate(222.8989,325.7822)']", 
                                            m("path[d='m 0,0 c -2.725,0 -4.115,-2.072 -4.115,-5.194 0,-2.952 1.504,-5.165 4.115,-5.165 2.952,0 4.059,2.611 4.059,5.165 C 4.059,-2.526 2.667,0 0,0 m -7.237,2.157 3.065,0 0,-1.987 0.057,0 c 0.908,1.675 2.667,2.384 4.541,2.384 4.626,0 6.868,-3.519 6.868,-7.804 0,-3.945 -1.987,-7.664 -6.329,-7.664 -1.873,0 -3.888,0.682 -4.91,2.299 l -0.057,0 0,-7.322 -3.235,0 0,20.094 z'][id='path5708']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5710'][transform='translate(242.1445,321.894)']", 
                                            m("path[d='M 0,0 C -0.114,2.043 -1.504,3.888 -3.689,3.888 -5.932,3.888 -7.464,2.186 -7.549,0 L 0,0 z m -7.549,-2.128 c 0,-2.299 1.248,-4.343 3.945,-4.343 1.873,0 3.008,0.823 3.576,2.441 l 3.065,0 c -0.71,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.719 0,4.173 2.724,7.748 7.096,7.748 4.626,0 7.463,-4.171 6.924,-8.57 l -10.784,0 z'][id='path5712']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5714'][transform='translate(161.8105,302.5928)']", 
                                            m("path[d='m 0,0 2.441,0 0,4.399 3.235,0 0,-4.399 2.924,0 0,-2.412 -2.924,0 0,-7.833 c 0,-1.334 0.114,-2.016 1.561,-2.016 0.454,0 0.909,0 1.363,0.115 l 0,-2.499 c -0.71,-0.056 -1.391,-0.169 -2.1,-0.169 -3.378,0 -4.002,1.305 -4.059,3.746 l 0,8.656 L 0,-2.412 0,0 z'][id='path5716']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5718'][transform='translate(181.9634,296.5479)']", 
                                            m("path[d='M 0,0 C -0.114,2.044 -1.504,3.889 -3.689,3.889 -5.932,3.889 -7.464,2.186 -7.549,0 L 0,0 z m -7.549,-2.129 c 0,-2.299 1.248,-4.342 3.945,-4.342 1.873,0 3.008,0.824 3.576,2.441 l 3.065,0 c -0.71,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.719 0,4.172 2.724,7.748 7.096,7.748 4.626,0 7.464,-4.171 6.924,-8.571 l -10.784,0 z'][id='path5720']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5722'][transform='translate(196.7251,297.6836)']", 
                                            m("path[d='m 0,0 c -0.255,1.787 -1.561,2.753 -3.349,2.753 -1.674,0 -4.03,-0.88 -4.03,-5.336 0,-2.441 1.078,-5.023 3.888,-5.023 1.873,0 3.179,1.249 3.491,3.348 l 3.235,0 c -0.595,-3.803 -2.951,-5.903 -6.726,-5.903 -4.597,0 -7.124,3.264 -7.124,7.578 0,4.428 2.413,7.89 7.238,7.89 3.405,0 6.3,-1.703 6.612,-5.307 L 0,0 z'][id='path5724']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5726'][transform='translate(201.752,308.1841)']", 
                                            m("path[d='m 0,0 3.236,0 0,-7.521 0.056,0 c 0.795,1.334 2.47,2.327 4.399,2.327 3.179,0 5.194,-1.703 5.194,-4.995 l 0,-10.075 -3.235,0 0,9.223 c -0.057,2.299 -0.965,3.293 -2.867,3.293 -2.157,0 -3.547,-1.703 -3.547,-3.86 l 0,-8.656 -3.236,0 L 0,0 z'][id='path5728']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5730'][transform='translate(217.1943,302.5928)']", 
                                            m("path[d='m 0,0 3.065,0 0,-2.156 0.057,-0.058 c 0.965,1.618 2.64,2.611 4.569,2.611 3.179,0 5.194,-1.703 5.194,-4.995 l 0,-10.075 -3.235,0 0,9.224 c -0.057,2.299 -0.965,3.293 -2.867,3.293 -2.157,0 -3.547,-1.703 -3.547,-3.861 l 0,-8.656 -3.236,0 L 0,0 z'][id='path5732']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("path[d='m 233.291,302.593 3.235,0 0,-14.673 -3.235,0 0,14.673 z m 0,5.591 3.235,0 0,-3.065 -3.235,0 0,3.065 z'][id='path5734']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                                        m("g[id='g5736'][transform='translate(245.7793,290.0771)']", 
                                            m("path[d='m 0,0 c 2.81,0 4.116,2.1 4.116,5.165 0,3.179 -1.42,5.194 -4.116,5.194 -2.667,0 -4.058,-2.526 -4.058,-5.194 C -4.058,2.61 -2.951,0 0,0 m 7.237,-7.578 -3.235,0 0,7.322 -0.057,0 c -1.022,-1.617 -3.037,-2.299 -4.91,-2.299 -4.342,0 -6.329,3.718 -6.329,7.663 0,4.286 2.242,7.805 6.869,7.805 1.873,0 3.633,-0.709 4.541,-2.384 l 0.056,0 0,1.987 3.065,0 0,-20.094 z'][id='path5738']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5740'][transform='translate(268.0054,287.9199)']", 
                                            m("path[d='m 0,0 -3.179,0 0,2.043 -0.056,0 c -0.795,-1.476 -2.555,-2.44 -4.172,-2.44 -3.832,0 -5.478,1.929 -5.478,5.761 l 0,9.309 3.236,0 0,-8.997 c 0,-2.582 1.049,-3.519 2.809,-3.519 2.696,0 3.605,1.732 3.605,4.002 l 0,8.514 3.235,0 L 0,0 z'][id='path5742']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        ),
                                        m("g[id='g5744'][transform='translate(280.6387,296.5479)']", 
                                            m("path[d='M 0,0 C -0.114,2.044 -1.504,3.889 -3.689,3.889 -5.932,3.889 -7.464,2.186 -7.549,0 L 0,0 z m -7.549,-2.129 c 0,-2.299 1.248,-4.342 3.945,-4.342 1.873,0 3.008,0.824 3.576,2.441 l 3.065,0 c -0.71,-3.207 -3.434,-4.995 -6.641,-4.995 -4.598,0 -7.181,3.207 -7.181,7.719 0,4.172 2.724,7.748 7.096,7.748 4.626,0 7.463,-4.171 6.924,-8.571 l -10.784,0 z'][id='path5746']", {style: {"fill": "#a7a5a6", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}})
                                        )
                                    ]
                                )
                            )
                        ]
                    ),
                    m("text[id='text5748'][x='485.79755'][xml:space='preserve'][y='633.01721']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}},
                        [
                            m("tspan[id='tspan5750'][x='485.79755'][y='633.01721']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "Prix taxes incluses:"
                            ),
                            m("tspan[id='tspan5752'][x='485.79755'][y='647.01721']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                this.signData['tx2']
                            ),
                            m("tspan[id='tspan5754'][x='485.79755'][y='661.01721']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "Financement sans intérêts"
                            ),
                            m("tspan[id='tspan5756'][x='485.79755'][y='675.01721']", {style: {"font-size": "14px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "end", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                this.signData['amo'] + " mois: " + this.signData['ad2'] + " / mois"
                            )
                        ]
                    ),
                    m("text[id='text5758'][x='66.466843'][xml:space='preserve'][y='499.61096']", {style: {"font-size": "23px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "start", "line-height": "125%", "letter-spacing": "0px", "word-spacing": "0px", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#ffffff", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}},
                        [
                            m("tspan[id='tspan5760'][x='66.466843'][y='499.61096']", 
                                "Programmes de configuration"
                            ),
                            m("tspan[id='tspan5762'][x='66.466843'][y='528.36096']", 
                                "et de service fiable Plus"
                            )
                        ]
                    ),
                    m("text[id='text5764'][x='5.676342'][xml:space='preserve'][y='584.61346']", {style: {"font-size": "18px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "start", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#b4d016", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}},
                        [
                            m("tspan[id='tspan5766'][x='5.676342'][y='584.61346']", {style: {"font-size": "18px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "start", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#b4d016", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "Simplifiez votre expérience d'achat avec notre"
                            ),
                            m("tspan[id='tspan5768'][x='5.676342'][y='602.61346']", {style: {"font-size": "18px", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "text-align": "start", "line-height": "100%", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#b4d016", "fill-opacity": "1", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans"}}, 
                                "programme clé en main"
                            )
                        ]
                    ),
                    m("text[id='text5770'][x='4.2512808'][xml:space='preserve'][y='667.35608']", {style: {"font-size": "60px", "font-style": "normal", "font-variant": "normal", "font-weight": "800", "font-stretch": "normal", "text-align": "start", "line-height": "125%", "letter-spacing": "0px", "word-spacing": "0px", "writing-mode": "lr", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Ultra-Bold"}}, 
                        m("tspan[id='tspan5772'][x='4.2512808'][y='667.35608']", 
                            this.signData['c2']
                        )
                    ),
                    m("g[id='g5774'][transform='translate(4.5057578e-5,382.5)']",
                        [
                            m("rect[height='315'][id='rect5776'][width='495'][x='495'][y='67.5']", {style: {"fill": "#ffffff", "fill-opacity": "1", "stroke": "none"}}),
                            m("text[id='text5778'][x='741.91785'][xml:space='preserve'][y='149.70694']", {style: {"font-size": "39.09102631px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "center", "line-height": "125%", "writing-mode": "lr-tb", "text-anchor": "middle", "fill": "#787878", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}},
                                [
                                    m("tspan[id='tspan5780'][x='741.91785'][y='149.70694']", 
                                        "Insérez l'enseigne"
                                    ),
                                    m("tspan[id='tspan5782'][x='741.91785'][y='198.57072']", 
                                        "4x6 ici."
                                    )
                                ]
                            ),
                            m("path[d='m 495,67.5 0,315 495,0 0,-315 -495,0 z m 12.59375,12.59375 469.8125,0 0,289.8125 -469.8125,0 0,-289.8125 z'][id='path5784']", {style: {"fill": "#787878", "fill-opacity": "1", "fill-rule": "nonzero", "stroke": "none"}}),
                            m("text[id='text5786'][x='741.91785'][xml:space='preserve'][y='252.73724']", {style: {"font-size": "39.09102631px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "center", "line-height": "125%", "writing-mode": "lr-tb", "text-anchor": "middle", "fill": "#787878", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}},
                                [
                                    m("tspan[id='tspan5788'][x='741.91785'][y='252.73724']", 
                                        "Prix ordinateur seul :"
                                    ),
                                    m("tspan[id='tspan5790'][x='741.91785'][y='301.60101']", 
                                        this.signData['p2']
                                    )
                                ]
                            ),
                            m("text[id='text5792'][x='513.09094'][xml:space='preserve'][y='365.24243']", {style: {"font-size": "20px", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "text-align": "start", "line-height": "125%", "letter-spacing": "0px", "word-spacing": "0px", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#787878", "fill-opacity": "1", "stroke": "none", "font-family": "Open Sans", "-inkscape-font-specification": "Open Sans Bold"}}, 
                                m("tspan[id='tspan5794'][x='513.09094'][y='365.24243']", 
                                    this.signData['sk2'] + " - " + this.signData['ds2']
                                )
                            )
                        ]
                    ),
                    m("text[id='text5796'][x='6.1379995'][xml:space='preserve'][y='700.03674']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1", "stroke": "none"}},
                        [
                            m("tspan[id='tspan5806'][x='6.1379995'][y='700.03674']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "Inclus :"
                            ),
                            m("tspan[id='tspan8751'][x='6.1379995'][y='715.43677']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "- Configuration de votre ordinateur"
                            ),
                            m("tspan[dx='0 0 1.3320718'][id='tspan8753'][x='6.1379995'][y='730.83673']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "  personnalisée selon vos besoins"
                            ),
                            m("tspan[id='tspan8755'][x='6.1379995'][y='746.23676']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "- Clé USB 32 gb pour la récupération"
                            ),
                            m("tspan[id='tspan8757'][x='6.1379995'][y='761.63672']", {style: {"font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "14px", "line-height": "110.00000238%", "font-family": "'Open Sans'", "-inkscape-font-specification": "'Open Sans'", "text-align": "start", "writing-mode": "lr-tb", "text-anchor": "start", "fill": "#000000", "fill-opacity": "1"}}, 
                                "- Un mois de service fiable Plus (" + this.signData['pf2'] + ")"
                            )
                        ]
                    )
                ]
            )
        ]
    )
}

m.mount(document.getElementById('tplcontents'), SignTemplate)
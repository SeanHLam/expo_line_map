//data for the map component

//station locations and names
export const positions = [
{
    pos: [49.28594, -123.11129],
    desc: "Waterfront Station"
},{
    pos: [49.2856301387338, -123.12017610372385],
    desc: "Burrard Station"
},{
    pos: [49.28279594838779, -123.11651283070681],
    desc: "Granville Station"
},{
    pos: [49.2798194542634, -123.10973318652596],
    desc: "Stadium-Chinatown Station"
},{
    pos: [49.27321198070662, -123.1001139000175],
    desc: "Main Street–Science World Station"
},
{
    pos: [49.26279801805391, -123.06920431536274],
    desc: "Commercial–Broadway Station"
},
{
    pos: [49.24850229390638, -123.0558100135098],
    desc: "Nanaimo Station"
},
{
    pos: [49.24843225820979, -123.05589584419947],
    desc: "29th Ave Station"
},
{
    pos: [49.23854830405182, -123.03174707303602],
    desc: "Joyce–Collingwood Station"
},
{
    pos: [49.22993373459465, -123.0126618018727],
    desc: "Patterson Station"
},
{
    pos: [49.225939828340394, -123.00380837212707],
    desc: "Metrotown Station"
},{
    pos: [49.22027729920444, -122.98853787489027],
    desc: "Royal Oak Station"
},
{
    pos: [49.2125356484257, -122.95913431536472],
    desc: "Edmonds Station"
},
{
    pos: [49.20007573590922, -122.9492356209255],
    desc: "22nd Street Station"
},
{
    pos: [49.202324689282456, -122.91299373182213],
    desc: "New Westminster Station"
},{
    pos: [49.20502105217046, -122.90614145954605],
    desc: "Columbia Station"
},
{
    pos: [49.20466002229523, -122.87398446562352],
    desc: "Scott Road Station"
},
{
    pos: [49.199176696542615, -122.85069605954617],
    desc: "Gateway Station"
},
{
    pos: [49.1897019789881, -122.84800236217588],
    desc: "Surrey Central Station"
},{
    pos: [49.183015191019464, -122.84491531907267],
    desc: "King George Station"
},
{
    pos: [49.22487425253098, -122.88936395769178],
    desc: "Sapperton Station"
},
{
    pos: [49.23311369272441, -122.88289460281436],
    desc: "Braid Station"
},
{
    pos: [49.248695893027694, -122.89720949394089],
    desc: "Lougheed Town Centre"
},{
    pos: [49.25462053002426, -122.91925725226344],
    desc: "Production Way-University"
},]

//the main expo line locations to draw the polyline
export const polylineMain = [
[49.28594, -123.11129],
[49.2856301387338, -123.12017610372385],
[49.28279594838779, -123.11651283070681],
[49.2798194542634, -123.10973318652596],
[49.27329598134172, -123.10021045954335],
[49.26279801805391, -123.06920431536274],
[49.24850229390638, -123.0558100135098],
[49.24843225820979, -123.05589584419947],
[49.23854830405182, -123.03174707303602],
[49.22993373459465, -123.0126618018727],
[49.225939828340394, -123.00380837212707],
[49.22027729920444, -122.98853787489027],
[49.2125356484257, -122.95913431536472],
[49.20007573590922, -122.9492356209255],
[49.202324689282456, -122.91299373182213],
[49.20502105217046, -122.90614145954605],
[49.20466002229523, -122.87398446562352],
[49.199176696542615, -122.85069605954617],
[49.1897019789881, -122.84800236217588],
[49.183015191019464, -122.84491531907267], 
]

//the smaller line that branches off expo line
export const polylineSub =[
[49.20502105217046, -122.90614145954605],
[49.22487425253098, -122.88936395769178],
[49.23311369272441, -122.88289460281436],
[49.248695893027694, -122.89720949394089],
[49.25462053002426, -122.91925725226344],  
]
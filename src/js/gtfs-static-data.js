'use strict';

// MTA General Transit Feed Specification (GTFS) Static Data
// https://data.ny.gov/Transportation/MTA-General-Transit-Feed-Specification-GTFS-Static/fgm6-ccue/about_data

// Long Island Rail Road (LIRR)
// http://web.mta.info/developers/data/lirr/google_transit.zip
// stops.txt
export const lirrStops = [
    {
        "stop_name": "Albertson",
        "stop_lat": 40.77206317,
        "stop_lon": -73.64169095
    },
    {
        "stop_name": "Islip",
        "stop_lat": 40.73583449,
        "stop_lon": -73.20932145
    },
    {
        "stop_name": "Inwood",
        "stop_lat": 40.61228773,
        "stop_lon": -73.74418354
    },
    {
        "stop_name": "Jamaica",
        "stop_lat": 40.69960817,
        "stop_lon": -73.80852987
    },
    {
        "stop_name": "Kew Gardens",
        "stop_lat": 40.70964917,
        "stop_lon": -73.83088807
    },
    {
        "stop_name": "Broadway",
        "stop_lat": 40.76165318,
        "stop_lon": -73.80176612
    },
    {
        "stop_name": "Kings Park",
        "stop_lat": 40.88366659,
        "stop_lon": -73.25624757
    },
    {
        "stop_name": "Long Beach",
        "stop_lat": 40.5901817,
        "stop_lon": -73.66481822
    },
    {
        "stop_name": "Lawrence",
        "stop_lat": 40.6157347,
        "stop_lon": -73.73589955
    },
    {
        "stop_name": "Lindenhurst",
        "stop_lat": 40.68826504,
        "stop_lon": -73.36921149
    },
    {
        "stop_name": "Long Island City",
        "stop_lat": 40.74134343,
        "stop_lon": -73.95763922
    },
    {
        "stop_name": "Locust Manor",
        "stop_lat": 40.67513907,
        "stop_lon": -73.76504303
    },
    {
        "stop_name": "Little Neck",
        "stop_lat": 40.77504393,
        "stop_lon": -73.74064662
    },
    {
        "stop_name": "Laurelton",
        "stop_lat": 40.66848304,
        "stop_lon": -73.75174687
    },
    {
        "stop_name": "Locust Valley",
        "stop_lat": 40.87446697,
        "stop_lon": -73.59830284
    },
    {
        "stop_name": "Lakeview",
        "stop_lat": 40.68585582,
        "stop_lon": -73.65213777
    },
    {
        "stop_name": "Lynbrook",
        "stop_lat": 40.65605814,
        "stop_lon": -73.67607083
    },
    {
        "stop_name": "Mattituck",
        "stop_lat": 40.99179354,
        "stop_lon": -72.53606243
    },
    {
        "stop_name": "Merillon Avenue",
        "stop_lat": 40.73516903,
        "stop_lon": -73.66252148
    },
    {
        "stop_name": "Medford",
        "stop_lat": 40.81739665,
        "stop_lon": -72.99890946
    },
    {
        "stop_name": "Bridgehampton",
        "stop_lat": 40.93898378,
        "stop_lon": -72.31004593
    },
    {
        "stop_name": "Murray Hill",
        "stop_lat": 40.76270926,
        "stop_lon": -73.81453928
    },
    {
        "stop_name": "Manhasset",
        "stop_lat": 40.7967241,
        "stop_lon": -73.69989909
    },
    {
        "stop_name": "Mineola",
        "stop_lat": 40.74034743,
        "stop_lon": -73.64086293
    },
    {
        "stop_name": "Massapequa Park",
        "stop_lat": 40.6778591,
        "stop_lon": -73.45473724
    },
    {
        "stop_name": "Massapequa",
        "stop_lat": 40.67693014,
        "stop_lon": -73.46905552
    },
    {
        "stop_name": "Stony Brook",
        "stop_lat": 40.92032252,
        "stop_lon": -73.12854943
    },
    {
        "stop_name": "Mastic-Shirley",
        "stop_lat": 40.79898815,
        "stop_lon": -72.86442272
    },
    {
        "stop_name": "Montauk",
        "stop_lat": 41.04710896,
        "stop_lon": -71.95388103
    },
    {
        "stop_name": "Malverne",
        "stop_lat": 40.67547844,
        "stop_lon": -73.66886364
    },
    {
        "stop_name": "Nostrand Avenue",
        "stop_lat": 40.67838785,
        "stop_lon": -73.94822108
    },
    {
        "stop_name": "Nassau Boulevard",
        "stop_lat": 40.72296245,
        "stop_lon": -73.66269823
    },
    {
        "stop_name": "New Hyde Park",
        "stop_lat": 40.73075708,
        "stop_lon": -73.68095886
    },
    {
        "stop_name": "Northport",
        "stop_lat": 40.88064972,
        "stop_lon": -73.32848513
    },
    {
        "stop_name": "Oyster Bay",
        "stop_lat": 40.87533774,
        "stop_lon": -73.53403366
    },
    {
        "stop_name": "Oceanside",
        "stop_lat": 40.63472102,
        "stop_lon": -73.65466582
    },
    {
        "stop_name": "Oakdale",
        "stop_lat": 40.74343275,
        "stop_lon": -73.13243549
    },
    {
        "stop_name": "Bellmore",
        "stop_lat": 40.66880043,
        "stop_lon": -73.52886016
    },
    {
        "stop_name": "Plandome",
        "stop_lat": 40.81069853,
        "stop_lon": -73.69521438
    },
    {
        "stop_name": "Patchogue",
        "stop_lat": 40.76187901,
        "stop_lon": -73.01574451
    },
    {
        "stop_name": "Port Jefferson",
        "stop_lat": 40.9345531,
        "stop_lon": -73.05250164
    },
    {
        "stop_name": "Pinelawn",
        "stop_lat": 40.74535851,
        "stop_lon": -73.39960092
    },
    {
        "stop_name": "Port Washington",
        "stop_lat": 40.82903533,
        "stop_lon": -73.687401
    },
    {
        "stop_name": "Queens Village",
        "stop_lat": 40.71745785,
        "stop_lon": -73.73645989
    },
    {
        "stop_name": "Riverhead",
        "stop_lat": 40.91983928,
        "stop_lon": -72.66691054
    },
    {
        "stop_name": "Ronkonkoma",
        "stop_lat": 40.80808613,
        "stop_lon": -73.10594023
    },
    {
        "stop_name": "Rosedale",
        "stop_lat": 40.66594933,
        "stop_lon": -73.73554816
    },
    {
        "stop_name": "Roslyn",
        "stop_lat": 40.7904781,
        "stop_lon": -73.64326175
    },
    {
        "stop_name": "Rockville Centre",
        "stop_lat": 40.65831811,
        "stop_lon": -73.64654935
    },
    {
        "stop_name": "St. Albans",
        "stop_lat": 40.69118348,
        "stop_lon": -73.76550937
    },
    {
        "stop_name": "Sea Cliff",
        "stop_lat": 40.85236805,
        "stop_lon": -73.62541695
    },
    {
        "stop_name": "Seaford",
        "stop_lat": 40.67572393,
        "stop_lon": -73.48656847
    },
    {
        "stop_name": "Southold",
        "stop_lat": 41.06632089,
        "stop_lon": -72.4278803
    },
    {
        "stop_name": "Southampton",
        "stop_lat": 40.89471874,
        "stop_lon": -72.39012376
    },
    {
        "stop_name": "St. James",
        "stop_lat": 40.88216931,
        "stop_lon": -73.15950725
    },
    {
        "stop_name": "Stewart Manor",
        "stop_lat": 40.72302771,
        "stop_lon": -73.68102041
    },
    {
        "stop_name": "Speonk",
        "stop_lat": 40.82131516,
        "stop_lon": -72.70526225
    },
    {
        "stop_name": "Mets-Willets Point",
        "stop_lat": 40.75239835,
        "stop_lon": -73.84370059
    },
    {
        "stop_name": "Auburndale",
        "stop_lat": 40.76144288,
        "stop_lon": -73.78995927
    },
    {
        "stop_name": "Bethpage",
        "stop_lat": 40.74303924,
        "stop_lon": -73.48343821
    },
    {
        "stop_name": "Smithtown",
        "stop_lat": 40.85654755,
        "stop_lon": -73.19803235
    },
    {
        "stop_name": "Sayville",
        "stop_lat": 40.74035373,
        "stop_lon": -73.08645531
    },
    {
        "stop_name": "Syosset",
        "stop_lat": 40.82485746,
        "stop_lon": -73.5004456
    },
    {
        "stop_name": "Bellport",
        "stop_lat": 40.7737389,
        "stop_lon": -72.94396574
    },
    {
        "stop_name": "Valley Stream",
        "stop_lat": 40.66151762,
        "stop_lon": -73.70475875
    },
    {
        "stop_name": "Westbury",
        "stop_lat": 40.75345386,
        "stop_lon": -73.5858661
    },
    {
        "stop_name": "Woodside",
        "stop_lat": 40.74585067,
        "stop_lon": -73.90297516
    },
    {
        "stop_name": "Wantagh",
        "stop_lat": 40.67299016,
        "stop_lon": -73.50896484
    },
    {
        "stop_name": "West Hempstead",
        "stop_lat": 40.70196099,
        "stop_lon": -73.64164361
    },
    {
        "stop_name": "Woodmere",
        "stop_lat": 40.63133646,
        "stop_lon": -73.71371544
    },
    {
        "stop_name": "Westwood",
        "stop_lat": 40.66837227,
        "stop_lon": -73.68120878
    },
    {
        "stop_name": "Wyandanch",
        "stop_lat": 40.75480101,
        "stop_lon": -73.35806588
    },
    {
        "stop_name": "Yaphank",
        "stop_lat": 40.82561319,
        "stop_lon": -72.91587848
    },
    {
        "stop_name": "Baldwin",
        "stop_lat": 40.65673224,
        "stop_lon": -73.60716245
    },
    {
        "stop_name": "Merrick",
        "stop_lat": 40.6638004,
        "stop_lon": -73.55062102
    },
    {
        "stop_name": "Bellerose",
        "stop_lat": 40.72220443,
        "stop_lon": -73.71665289
    },
    {
        "stop_name": "Westhampton",
        "stop_lat": 40.83030532,
        "stop_lon": -72.65032454
    },
    {
        "stop_name": "Penn Station",
        "stop_lat": 40.75058844,
        "stop_lon": -73.99358408
    },
    {
        "stop_name": "Belmont Park",
        "stop_lat": 40.71368754,
        "stop_lon": -73.72829722
    },
    {
        "stop_name": "Atlantic Terminal",
        "stop_lat": 40.68359596,
        "stop_lon": -73.97567112
    },
    {
        "stop_name": "Bayside",
        "stop_lat": 40.76315241,
        "stop_lon": -73.77124986
    },
    {
        "stop_name": "Bay Shore",
        "stop_lat": 40.72443344,
        "stop_lon": -73.25408295
    },
    {
        "stop_name": "Babylon",
        "stop_lat": 40.70068942,
        "stop_lon": -73.32405561
    },
    {
        "stop_name": "Brentwood",
        "stop_lat": 40.78083474,
        "stop_lon": -73.24361074
    },
    {
        "stop_name": "Centre Avenue",
        "stop_lat": 40.64831835,
        "stop_lon": -73.6639675
    },
    {
        "stop_name": "Cedarhurst",
        "stop_lat": 40.62217451,
        "stop_lon": -73.72618275
    },
    {
        "stop_name": "Central Islip",
        "stop_lat": 40.79185312,
        "stop_lon": -73.19486082
    },
    {
        "stop_name": "Grand Central",
        "stop_lat": 40.755162,
        "stop_lon": -73.975455
    },
    {
        "stop_name": "Elmont-UBS Arena",
        "stop_lat": 40.720074,
        "stop_lon": -73.725549
    },
    {
        "stop_name": "Country Life Press",
        "stop_lat": 40.72145656,
        "stop_lon": -73.62967386
    },
    {
        "stop_name": "Copiague",
        "stop_lat": 40.68101528,
        "stop_lon": -73.39834027
    },
    {
        "stop_name": "Carle Place",
        "stop_lat": 40.74920704,
        "stop_lon": -73.60365242
    },
    {
        "stop_name": "Amagansett",
        "stop_lat": 40.98003964,
        "stop_lon": -72.13233416
    },
    {
        "stop_name": "Cold Spring Harbor",
        "stop_lat": 40.83563832,
        "stop_lon": -73.45108591
    },
    {
        "stop_name": "Douglaston",
        "stop_lat": 40.76806862,
        "stop_lon": -73.74941265
    },
    {
        "stop_name": "Deer Park",
        "stop_lat": 40.76948364,
        "stop_lon": -73.29356494
    },
    {
        "stop_name": "East Hampton",
        "stop_lat": 40.96508629,
        "stop_lon": -72.19324238
    },
    {
        "stop_name": "East New York",
        "stop_lat": 40.67581191,
        "stop_lon": -73.90280882
    },
    {
        "stop_name": "East Rockaway",
        "stop_lat": 40.64221085,
        "stop_lon": -73.65821626
    },
    {
        "stop_name": "East Williston",
        "stop_lat": 40.7560191,
        "stop_lon": -73.63940764
    },
    {
        "stop_name": "Forest Hills",
        "stop_lat": 40.71957556,
        "stop_lon": -73.84481402
    },
    {
        "stop_name": "Flushing Main Street",
        "stop_lat": 40.75789494,
        "stop_lon": -73.83134684
    },
    {
        "stop_name": "Farmingdale",
        "stop_lat": 40.73591503,
        "stop_lon": -73.44123878
    },
    {
        "stop_name": "Floral Park",
        "stop_lat": 40.72463725,
        "stop_lon": -73.70639714
    },
    {
        "stop_name": "Freeport",
        "stop_lat": 40.65745799,
        "stop_lon": -73.58232401
    },
    {
        "stop_name": "Far Rockaway",
        "stop_lat": 40.60914311,
        "stop_lon": -73.75054135
    },
    {
        "stop_name": "Gibson",
        "stop_lat": 40.64925173,
        "stop_lon": -73.70183483
    },
    {
        "stop_name": "Glen Cove",
        "stop_lat": 40.86583421,
        "stop_lon": -73.61616614
    },
    {
        "stop_name": "Garden City",
        "stop_lat": 40.72310156,
        "stop_lon": -73.64036107
    },
    {
        "stop_name": "Glen Head",
        "stop_lat": 40.83222531,
        "stop_lon": -73.62611822
    },
    {
        "stop_name": "Great Neck",
        "stop_lat": 40.78721647,
        "stop_lon": -73.72610046
    },
    {
        "stop_name": "Greenport",
        "stop_lat": 41.09970991,
        "stop_lon": -72.36310396
    },
    {
        "stop_name": "Great River",
        "stop_lat": 40.74044444,
        "stop_lon": -73.17019585
    },
    {
        "stop_name": "Glen Street",
        "stop_lat": 40.85798112,
        "stop_lon": -73.62121715
    },
    {
        "stop_name": "Greenvale",
        "stop_lat": 40.81571566,
        "stop_lon": -73.62687152
    },
    {
        "stop_name": "Greenlawn",
        "stop_lat": 40.86866524,
        "stop_lon": -73.36284977
    },
    {
        "stop_name": "Amityville",
        "stop_lat": 40.68024859,
        "stop_lon": -73.42031192
    },
    {
        "stop_name": "Hampton Bays",
        "stop_lat": 40.87660916,
        "stop_lon": -72.52394936
    },
    {
        "stop_name": "Hempstead",
        "stop_lat": 40.71329663,
        "stop_lon": -73.62503239
    },
    {
        "stop_name": "Hempstead Gardens",
        "stop_lat": 40.69491356,
        "stop_lon": -73.64620888
    },
    {
        "stop_name": "Hillside Facility",
        "stop_lat": 40.70773582,
        "stop_lon": -73.77695851
    },
    {
        "stop_name": "Hollis",
        "stop_lat": 40.71018151,
        "stop_lon": -73.76675252
    },
    {
        "stop_name": "Hunterspoint Avenue",
        "stop_lat": 40.74239046,
        "stop_lon": -73.94678997
    },
    {
        "stop_name": "Huntington",
        "stop_lat": 40.85300971,
        "stop_lon": -73.40952576
    },
    {
        "stop_name": "Hicksville",
        "stop_lat": 40.76717491,
        "stop_lon": -73.52853322
    },
    {
        "stop_name": "Hewlett",
        "stop_lat": 40.63676432,
        "stop_lon": -73.70513866
    },
    {
        "stop_name": "Island Park",
        "stop_lat": 40.60129906,
        "stop_lon": -73.65474248
    }
];

// Metro-North Railroad (MNR)
// http://web.mta.info/developers/data/mnr/google_transit.zip
// stops.txt
export const mnrStops = [
    {
        "stop_name": "Grand Central",
        "stop_lat": 40.752998,
        "stop_lon": -73.977056
    },
    {
        "stop_name": "Harlem-125 St",
        "stop_lat": 40.805157,
        "stop_lon": -73.939149
    },
    {
        "stop_name": "Yankees-E 153 St",
        "stop_lat": 40.8253,
        "stop_lon": -73.9299
    },
    {
        "stop_name": "Highbridge Yard",
        "stop_lat": 40.8359,
        "stop_lon": -73.9315
    },
    {
        "stop_name": "Morris Heights",
        "stop_lat": 40.854252,
        "stop_lon": -73.919583
    },
    {
        "stop_name": "University Heights",
        "stop_lat": 40.862248,
        "stop_lon": -73.91312
    },
    {
        "stop_name": "Marble Hill",
        "stop_lat": 40.874333,
        "stop_lon": -73.910941
    },
    {
        "stop_name": "Spuyten Duyvil",
        "stop_lat": 40.878245,
        "stop_lon": -73.921455
    },
    {
        "stop_name": "Riverdale",
        "stop_lat": 40.903981,
        "stop_lon": -73.914126
    },
    {
        "stop_name": "Ludlow",
        "stop_lat": 40.924972,
        "stop_lon": -73.904612
    },
    {
        "stop_name": "Yonkers",
        "stop_lat": 40.935795,
        "stop_lon": -73.902668
    },
    {
        "stop_name": "Glenwood",
        "stop_lat": 40.950496,
        "stop_lon": -73.899062
    },
    {
        "stop_name": "Greystone",
        "stop_lat": 40.972705,
        "stop_lon": -73.889069
    },
    {
        "stop_name": "Hastings-on-Hudson",
        "stop_lat": 40.994109,
        "stop_lon": -73.884512
    },
    {
        "stop_name": "Dobbs Ferry",
        "stop_lat": 41.012459,
        "stop_lon": -73.87949
    },
    {
        "stop_name": "Ardsley-on-Hudson",
        "stop_lat": 41.026198,
        "stop_lon": -73.876543
    },
    {
        "stop_name": "Irvington",
        "stop_lat": 41.039993,
        "stop_lon": -73.873083
    },
    {
        "stop_name": "Tarrytown",
        "stop_lat": 41.076473,
        "stop_lon": -73.864563
    },
    {
        "stop_name": "Philipse Manor",
        "stop_lat": 41.09492,
        "stop_lon": -73.869755
    },
    {
        "stop_name": "Scarborough",
        "stop_lat": 41.135763,
        "stop_lon": -73.866163
    },
    {
        "stop_name": "Ossining",
        "stop_lat": 41.157663,
        "stop_lon": -73.869281
    },
    {
        "stop_name": "Croton-Harmon",
        "stop_lat": 41.189903,
        "stop_lon": -73.882394
    },
    {
        "stop_name": "Cortlandt",
        "stop_lat": 41.246259,
        "stop_lon": -73.921884
    },
    {
        "stop_name": "Peekskill",
        "stop_lat": 41.285962,
        "stop_lon": -73.93042
    },
    {
        "stop_name": "Manitou",
        "stop_lat": 41.332601,
        "stop_lon": -73.970426
    },
    {
        "stop_name": "Garrison",
        "stop_lat": 41.38178,
        "stop_lon": -73.947202
    },
    {
        "stop_name": "Cold Spring",
        "stop_lat": 41.415283,
        "stop_lon": -73.95809
    },
    {
        "stop_name": "Breakneck Ridge",
        "stop_lat": 41.450181,
        "stop_lon": -73.982449
    },
    {
        "stop_name": "Beacon",
        "stop_lat": 41.504007,
        "stop_lon": -73.984528
    },
    {
        "stop_name": "New Hamburg",
        "stop_lat": 41.587448,
        "stop_lon": -73.947226
    },
    {
        "stop_name": "Poughkeepsie",
        "stop_lat": 41.705839,
        "stop_lon": -73.937946
    },
    {
        "stop_name": "Melrose",
        "stop_lat": 40.825761,
        "stop_lon": -73.915231
    },
    {
        "stop_name": "Tremont",
        "stop_lat": 40.847301,
        "stop_lon": -73.89955
    },
    {
        "stop_name": "Fordham",
        "stop_lat": 40.8615,
        "stop_lon": -73.89058
    },
    {
        "stop_name": "Botanical Garden",
        "stop_lat": 40.866555,
        "stop_lon": -73.883109
    },
    {
        "stop_name": "Williams Bridge",
        "stop_lat": 40.878569,
        "stop_lon": -73.871064
    },
    {
        "stop_name": "Woodlawn",
        "stop_lat": 40.895361,
        "stop_lon": -73.862916
    },
    {
        "stop_name": "Wakefield",
        "stop_lat": 40.905936,
        "stop_lon": -73.85568
    },
    {
        "stop_name": "Mt Vernon West",
        "stop_lat": 40.912142,
        "stop_lon": -73.851129
    },
    {
        "stop_name": "Fleetwood",
        "stop_lat": 40.92699,
        "stop_lon": -73.83948
    },
    {
        "stop_name": "Bronxville",
        "stop_lat": 40.93978,
        "stop_lon": -73.835208
    },
    {
        "stop_name": "Tuckahoe",
        "stop_lat": 40.949393,
        "stop_lon": -73.830166
    },
    {
        "stop_name": "Crestwood",
        "stop_lat": 40.958997,
        "stop_lon": -73.820564
    },
    {
        "stop_name": "Scarsdale",
        "stop_lat": 40.989168,
        "stop_lon": -73.808634
    },
    {
        "stop_name": "Hartsdale",
        "stop_lat": 41.010333,
        "stop_lon": -73.796407
    },
    {
        "stop_name": "White Plains",
        "stop_lat": 41.032589,
        "stop_lon": -73.775208
    },
    {
        "stop_name": "North White Plains",
        "stop_lat": 41.049806,
        "stop_lon": -73.773142
    },
    {
        "stop_name": "Valhalla",
        "stop_lat": 41.072819,
        "stop_lon": -73.772599
    },
    {
        "stop_name": "Mt Pleasant",
        "stop_lat": 41.095877,
        "stop_lon": -73.793822
    },
    {
        "stop_name": "Hawthorne",
        "stop_lat": 41.108581,
        "stop_lon": -73.79625
    },
    {
        "stop_name": "Pleasantville",
        "stop_lat": 41.135222,
        "stop_lon": -73.792661
    },
    {
        "stop_name": "Chappaqua",
        "stop_lat": 41.158015,
        "stop_lon": -73.774885
    },
    {
        "stop_name": "Mt Kisco",
        "stop_lat": 41.208242,
        "stop_lon": -73.729778
    },
    {
        "stop_name": "Bedford Hills",
        "stop_lat": 41.237316,
        "stop_lon": -73.699936
    },
    {
        "stop_name": "Katonah",
        "stop_lat": 41.259552,
        "stop_lon": -73.684155
    },
    {
        "stop_name": "Goldens Bridge",
        "stop_lat": 41.294338,
        "stop_lon": -73.677655
    },
    {
        "stop_name": "Purdy's",
        "stop_lat": 41.325775,
        "stop_lon": -73.659061
    },
    {
        "stop_name": "Croton Falls",
        "stop_lat": 41.347722,
        "stop_lon": -73.662269
    },
    {
        "stop_name": "Brewster",
        "stop_lat": 41.39447,
        "stop_lon": -73.619802
    },
    {
        "stop_name": "Southeast",
        "stop_lat": 41.413203,
        "stop_lon": -73.623787
    },
    {
        "stop_name": "Patterson",
        "stop_lat": 41.511827,
        "stop_lon": -73.604584
    },
    {
        "stop_name": "Pawling",
        "stop_lat": 41.564205,
        "stop_lon": -73.600524
    },
    {
        "stop_name": "Appalachian Trail",
        "stop_lat": 41.592871,
        "stop_lon": -73.588032
    },
    {
        "stop_name": "Harlem Valley-Wingdale",
        "stop_lat": 41.637525,
        "stop_lon": -73.57145
    },
    {
        "stop_name": "Dover Plains",
        "stop_lat": 41.740401,
        "stop_lon": -73.576502
    },
    {
        "stop_name": "Tenmile River",
        "stop_lat": 41.779938,
        "stop_lon": -73.558204
    },
    {
        "stop_name": "Wassaic",
        "stop_lat": 41.814722,
        "stop_lon": -73.562197
    },
    {
        "stop_name": "Mt Vernon East",
        "stop_lat": 40.912161,
        "stop_lon": -73.832185
    },
    {
        "stop_name": "Pelham",
        "stop_lat": 40.910321,
        "stop_lon": -73.810242
    },
    {
        "stop_name": "New Rochelle",
        "stop_lat": 40.911605,
        "stop_lon": -73.783807
    },
    {
        "stop_name": "Larchmont",
        "stop_lat": 40.933394,
        "stop_lon": -73.759792
    },
    {
        "stop_name": "Mamaroneck",
        "stop_lat": 40.954061,
        "stop_lon": -73.736125
    },
    {
        "stop_name": "Harrison",
        "stop_lat": 40.969432,
        "stop_lon": -73.712964
    },
    {
        "stop_name": "Rye",
        "stop_lat": 40.985922,
        "stop_lon": -73.682553
    },
    {
        "stop_name": "Port Chester",
        "stop_lat": 41.000732,
        "stop_lon": -73.6647
    },
    {
        "stop_name": "Greenwich",
        "stop_lat": 41.021277,
        "stop_lon": -73.624621
    },
    {
        "stop_name": "Cos Cob",
        "stop_lat": 41.030171,
        "stop_lon": -73.598306
    },
    {
        "stop_name": "Riverside",
        "stop_lat": 41.031682,
        "stop_lon": -73.588173
    },
    {
        "stop_name": "Old Greenwich",
        "stop_lat": 41.033817,
        "stop_lon": -73.565859
    },
    {
        "stop_name": "Stamford",
        "stop_lat": 41.046611,
        "stop_lon": -73.542846
    },
    {
        "stop_name": "Glenbrook",
        "stop_lat": 41.070547,
        "stop_lon": -73.520021
    },
    {
        "stop_name": "Springdale MW Facility",
        "stop_lat": 41.082147,
        "stop_lon": -73.519675
    },
    {
        "stop_name": "Springdale",
        "stop_lat": 41.08876,
        "stop_lon": -73.517828
    },
    {
        "stop_name": "Talmadge Hill",
        "stop_lat": 41.116012,
        "stop_lon": -73.498149
    },
    {
        "stop_name": "New Canaan",
        "stop_lat": 41.146305,
        "stop_lon": -73.495626
    },
    {
        "stop_name": "Noroton Heights",
        "stop_lat": 41.069041,
        "stop_lon": -73.49788
    },
    {
        "stop_name": "Darien",
        "stop_lat": 41.076913,
        "stop_lon": -73.472966
    },
    {
        "stop_name": "Rowayton",
        "stop_lat": 41.077456,
        "stop_lon": -73.445527
    },
    {
        "stop_name": "South Norwalk",
        "stop_lat": 41.09673,
        "stop_lon": -73.421132
    },
    {
        "stop_name": "Merritt 7",
        "stop_lat": 41.146618,
        "stop_lon": -73.427859
    },
    {
        "stop_name": "Wilton",
        "stop_lat": 41.196202,
        "stop_lon": -73.432434
    },
    {
        "stop_name": "Cannondale",
        "stop_lat": 41.21662,
        "stop_lon": -73.426703
    },
    {
        "stop_name": "Branchville",
        "stop_lat": 41.26763,
        "stop_lon": -73.441421
    },
    {
        "stop_name": "Redding",
        "stop_lat": 41.325684,
        "stop_lon": -73.4338
    },
    {
        "stop_name": "Bethel",
        "stop_lat": 41.376225,
        "stop_lon": -73.418171
    },
    {
        "stop_name": "Danbury",
        "stop_lat": 41.396146,
        "stop_lon": -73.44879
    },
    {
        "stop_name": "East Norwalk",
        "stop_lat": 41.103996,
        "stop_lon": -73.404588
    },
    {
        "stop_name": "Westport",
        "stop_lat": 41.118928,
        "stop_lon": -73.371413
    },
    {
        "stop_name": "Green's Farms",
        "stop_lat": 41.122265,
        "stop_lon": -73.315408
    },
    {
        "stop_name": "Southport",
        "stop_lat": 41.134844,
        "stop_lon": -73.28897
    },
    {
        "stop_name": "Fairfield",
        "stop_lat": 41.143077,
        "stop_lon": -73.257742
    },
    {
        "stop_name": "Fairfield-Black Rock",
        "stop_lat": 41.161,
        "stop_lon": -73.234336
    },
    {
        "stop_name": "Bridgeport",
        "stop_lat": 41.178677,
        "stop_lon": -73.187076
    },
    {
        "stop_name": "Stratford",
        "stop_lat": 41.194255,
        "stop_lon": -73.131532
    },
    {
        "stop_name": "Derby-Shelton",
        "stop_lat": 41.319718,
        "stop_lon": -73.083548
    },
    {
        "stop_name": "Ansonia",
        "stop_lat": 41.344156,
        "stop_lon": -73.079892
    },
    {
        "stop_name": "Seymour",
        "stop_lat": 41.395139,
        "stop_lon": -73.072499
    },
    {
        "stop_name": "Beacon Falls",
        "stop_lat": 41.441752,
        "stop_lon": -73.06359
    },
    {
        "stop_name": "Naugatuck",
        "stop_lat": 41.494204,
        "stop_lon": -73.052655
    },
    {
        "stop_name": "Waterbury",
        "stop_lat": 41.552728,
        "stop_lon": -73.046126
    },
    {
        "stop_name": "Milford",
        "stop_lat": 41.223231,
        "stop_lon": -73.057647
    },
    {
        "stop_name": "West Haven",
        "stop_lat": 41.27142,
        "stop_lon": -72.963488
    },
    {
        "stop_name": "New Haven",
        "stop_lat": 41.296501,
        "stop_lon": -72.92829
    },
    {
        "stop_name": "New Haven-State St",
        "stop_lat": 41.304979,
        "stop_lon": -72.921747
    }
];

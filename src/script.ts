import { DynamicTabs, Tab } from "./dynamic-tabs";

const COMPOST_OPTIONS: Record<string, [number, number, number]> = {
  "05-10-10": [  5, 10, 10 ],
  "05-25-05": [  5, 25,  5 ],
  "06-06-12": [  6,  6, 12 ],
  "06-08-10": [  6,  8, 10 ],
  "07-16-16": [  7, 16, 16 ],
  "08-06-10": [  8,  6, 10 ],
  "08-08-10": [  8,  8, 10 ],
  "08-08-12": [  8,  8, 12 ],
  "08-10-20": [  8, 10, 20 ],
  "08-24-24": [  8, 24, 24 ],
  "10-02-30": [ 10,  2, 30 ],
  "10-05-15": [ 10,  5, 15 ],
  "10-05-20": [ 10,  5, 20 ],
  "10-05-30": [ 10,  5, 30 ],
  "10-10-05": [ 10, 10,  5 ],
  "10-10-08": [ 10, 10,  8 ],
  "10-10-10": [ 10, 10, 10 ],
  "10-10-20": [ 10, 10, 20 ],
  "10-15-15": [ 10, 15, 15 ],
  "10-20-20": [ 10, 20, 20 ],
  "10-25-25": [ 10, 25, 25 ],
  "12-03-12": [ 12,  3, 12 ],
  "12-04-06": [ 12,  4,  6 ],
  "12-04-10": [ 12,  4, 10 ],
  "12-05-15": [ 12,  5, 15 ],
  "12-05-20": [ 12,  5, 20 ],
  "12-06-06": [ 12,  6,  6 ],
  "12-06-08": [ 12,  6,  8 ],
  "12-06-10": [ 12,  6, 10 ],
  "12-06-16": [ 12,  6, 16 ],
  "12-08-16": [ 12,  8, 16 ],
  "12-12-24": [ 12, 12, 24 ],
  "15-02-08": [ 15,  2,  8 ],
  "15-03-15": [ 15,  3, 15 ],
  "15-05-10": [ 15,  5, 10 ],
  "15-08-04": [ 15,  8,  4 ],
  "15-05-20": [ 15,  5, 20 ],
  "15-10-05": [ 15, 10,  5 ],
  "15-10-10": [ 15, 10, 10 ],
  "15-10-15": [ 15, 10, 15 ],
  "15-15-10": [ 15, 15, 10 ],
  "15-15-15": [ 15, 15, 15 ],
  "15-15-18": [ 15, 15, 18 ],
  "16-04-04": [ 16,  4,  4 ],
  "16-04-08": [ 16,  4,  8 ],
  "18-06-12": [ 18,  6, 12 ],
  "20-00-10": [ 20,  0, 10 ],
  "20-00-20": [ 20,  0, 20 ],
  "20-04-08": [ 20,  4,  8 ],
  "20-05-10": [ 20,  5, 10 ],
  "20-05-15": [ 20,  5, 15 ],
  "20-05-20": [ 20,  5, 20 ],
  "20-10-10": [ 20, 10, 10 ],
  "20-10-15": [ 20, 10, 15 ],
  "21-07-07": [ 21,  7,  7 ],
  "21-07-14": [ 21,  7, 14 ],
  "Ammonium Nitrate"             : [ 20,  0, 0 ],
  "Ammonium Nitrate Ammonia 37%" : [ 37,  0, 0 ],
  "Ammonium Nitrate Ammonia 41%" : [ 41,  0, 0 ],
  "Ammonium Polyphosphate 24%"   : [  8, 24, 0 ],
  "Ammonium Polyphosphate 30%"   : [  9, 30, 0 ],
  "Ammonium Polyphosphate 34%"   : [ 10, 34, 0 ],
  "Ammonium Polyphosphate 37%"   : [ 11, 37, 0 ],
  "Ammonium Sulfate"             : [ 21,  0, 0 ],
  "Aqua Ammonia 20%"             : [ 20,  0, 0 ],
  "Aqua Ammonia 24%"             : [ 24,  0, 0 ],
  "Calcium Ammonium Nitrate 17%" : [ 17,  0, 0 ],
  "Diammonium Phosphate"         : [ 18, 46, 0 ],
  "N Solution"                   : [ 30,  0, 0 ],
  "Phosphoric Acid 52%"          : [  0, 52, 0 ],
  "Phosphoric Acid 68%"          : [  0, 68, 0 ],
  "Phosphoric Acid 75%"          : [  0, 75, 0 ],
  "Potassium Cloride"            : [  0,  0, 6 ],
  "Potassium Sulfate"            : [  0,  0, 5 ],
  "Triple Superphospate"         : [  0, 45, 0 ],
  "Urea"                         : [ 46,  0, 0 ],
  "Urea Ammonium Nitrate 28%"    : [ 28,  0, 0 ],
  "Urea Ammonium Nitrate 32%"    : [ 32,  0, 0 ],
  "Urea Solution 20%"            : [ 20,  0, 0 ],
  "Urea Solution 23%"            : [ 23,  0, 0 ],
};

interface CropInformation {
  yield: {
    potential: number,
    common: number,
    used: number,
    typicalRange: [ number, number ],
  }
  /** [ N, P, K, Ca, Mg, S ] */
  nutrients: [ number, number, number, number, number, number ],
  /** [ N recom., P2O5 recom., K2O recom. ] */
  fertilizerRecom: {
    n: { low: number, high: number },
    p: { low: number, med: number, high: number },
    k: { low: number, med: number, high: number },
  },
}
const CROP_OPTIONS: Record<string, CropInformation> = {
  'Plantain'         : { yield: { potential: 38898.60244, common: 30051.73952, used:  26761.8198, typicalRange: [ 27257, 32846.56557 ] }, nutrients: [ 0.002586877, 0.00032858 , 0.007719253, 0.000310322, 0.000428308, 0           ], fertilizerRecom: { n: { low: 310, high: 194 }, p: { low:  56, med:  23, high: 17 }, k: { low: 695, med: 278, high: 208 } } },
  'Banana'           : { yield: { potential: 49891.59679, common: 38976.13366, used:  26761.8198, typicalRange: [ 35211, 42.74130241 ] }, nutrients: [ 0.004128236, 0.000473123, 0.009571642, 0.000473123, 0.000582305, 0           ], fertilizerRecom: { n: { low: 372, high: 248 }, p: { low:  65, med:  33, high: 24 }, k: { low: 861, med: 345, high: 258 } } },
  'Mango'            : { yield: { potential: 18016.05709, common: 13550.28992, used:  13380.9099, typicalRange: [ 10665, 16436.21766 ] }, nutrients: [ 0.001238453, 0.000222427, 0.001983177, 0.000472858, 0.000253533, 0.000152576 ], fertilizerRecom: { n: { low:  74, high:  37 }, p: { low:  23, med:  11, high:  8 }, k: { low:  89, med:  54, high:  27 } } },
  'Avocado'          : { yield: { potential: 20261.90901, common: 15174.24918, used: 10704.72792, typicalRange: [ 11467, 18854.59411 ] }, nutrients: [ 0.002416561, 0.000527467, 0.004114521, 0.000350838, 0.000492252, 0           ], fertilizerRecom: { n: { low: 116, high:  58 }, p: { low:  43, med:  22, high: 11 }, k: { low: 118, med:  59, high:  44 } } },
  'Papaya'           : { yield: { potential: 112731.4005, common: 76786.02709, used: 80285.45941, typicalRange: [ 49697, 158997.3238 ] }, nutrients: [ 0.001775   , 0.000275   , 0.002075   , 0.00045    , 0.00025    , 0           ], fertilizerRecom: { n: { low: 320, high: 160 }, p: { low: 113, med:  57, high: 43 }, k: { low: 448, med: 224, high: 168 } } },
  'Onion'            : { yield: { potential: 31115.80569, common: 23852.17487, used:  26761.8198, typicalRange: [ 20525, 27179.30419 ] }, nutrients: [ 0.002112344, 0.00037194 , 0.001741695, 0.000598111, 0.000174748, 0.000396877 ], fertilizerRecom: { n: { low: 190, high:  79 }, p: { low:  64, med:  38, high: 26 }, k: { low: 125, med:  63, high:  63 } } },
  'Tomato'           : { yield: { potential: 75350.57984, common: 51588.13851, used:  35682.4264, typicalRange: [ 43845,  59330.9545 ] }, nutrients: [ 0.00156616 , 0.000383458, 0.002576449, 0          , 0          , 0           ], fertilizerRecom: { n: { low: 188, high:  78 }, p: { low:  88, med:  53, high: 35 }, k: { low: 247, med: 124, high: 124 } } },
  'Pepper'           : { yield: { potential: 35057.98394, common: 29570.02676, used:  22301.5165, typicalRange: [ 26538, 32602.14095 ] }, nutrients: [ 0.001651604, 0.000345238, 0.002497482, 0.000806285, 0.000319435, 0.000268861 ], fertilizerRecom: { n: { low: 124, high:  52 }, p: { low:  49, med:  30, high: 20 }, k: { low: 150, med:  75, high:  75 } } },
  'Eggplant'         : { yield: { potential: 45240.85638, common: 28635.14719, used:  22301.5165, typicalRange: [ 24082,  33188.2248 ] }, nutrients: [ 0.001769679, 0.000215192, 0.001560068, 7.46042E-05, 0.000173495, 0.000168601 ], fertilizerRecom: { n: { low: 133, high:  55 }, p: { low:  31, med:  18, high: 12 }, k: { low:  94, med:  47, high:  47 } } },
  'Cucumber'         : { yield: { potential: 46094.55843, common: 34327.38626, used: 24531.66815, typicalRange: [ 27606,  41049.9554 ] }, nutrients: [ 0.001077497, 0.000282365, 0.001207443, 0.00003705 , 0.0000228  , 0.00018126  ], fertilizerRecom: { n: { low:  89, high:  37 }, p: { low:  44, med:  27, high: 18 }, k: { low:  80, med:  40, high:  40 } } },
  'Pumpkin'          : { yield: { potential: 32533.45227, common: 24120.42819, used:  22301.5165, typicalRange: [ 20661, 27579.83943 ] }, nutrients: [ 0.003063717, 0.000360621, 0.003177939, 0.000174647, 0.000217129, 0           ], fertilizerRecom: { n: { low: 230, high:  96 }, p: { low:  52, med:  31, high: 21 }, k: { low: 191, med:  95, high:  95 } } },
  'Cantaloupe'       : { yield: { potential: 28338.09099, common: 18342.55129, used: 18342.55129, typicalRange: [ 12640, 24044.60303 ] }, nutrients: [ 0.003143911, 0.000438564, 0.003726815, 0.001843006, 0.000222867, 0.000380843 ], fertilizerRecom: { n: { low: 194, high:  81 }, p: { low:  52, med:  31, high: 21 }, k: { low: 184, med:  92, high:  92 } } },
  'Watermelon'       : { yield: { potential: 46297.94826, common: 36616.41392, used: 36616.41392, typicalRange: [ 28012, 45220.33898 ] }, nutrients: [ 0.001926495, 0.000193551, 0.003291544, 0.000129947, 0.000385644, 0.000152268 ], fertilizerRecom: { n: { low: 237, high:  99 }, p: { low:  45, med:  27, high: 18 }, k: { low: 324, med: 162, high: 162 } } },
  'Coffee'           : { yield: { potential: 3375.557538, common: 1771.632471, used: 446.0303301, typicalRange: [  1210, 2334.522748 ] }, nutrients: [ 0.005521611, 0.000385533, 0.006730812, 0.000862737, 0.000418029, 0.000447269 ], fertilizerRecom: { n: { low: 313, high:   0 }, p: { low:  11, med:   5, high:  3 }, k: { low:  62, med:  37, high:  25 } } },
  'Corn'             : { yield: { potential: 5825.156111, common: 4009.812667, used: 5352.363961, typicalRange: [  3384,  4635.14719 ] }, nutrients: [ 0.020751399, 0.002857261, 0.003951351, 0.00000845 , 0.001184716, 0.000775458 ], fertilizerRecom: { n: { low: 125, high:   0 }, p: { low:  79, med:  39, high: 29 }, k: { low: 142, med:  85, high:  57 } } },
  'Cotton'           : { yield: { potential: 1893.844781, common: 1470.115968, used: 1561.106155, typicalRange: [  1251,  1689.56289 ] }, nutrients: [ 0.075      , 0.0145     , 0.0614     , 0          , 0          , 0           ], fertilizerRecom: { n: { low:  87, high:   0 }, p: { low:  73, med:  44, high: 29 }, k: { low: 129, med:  97, high:  64 } } },
  'Soybean'          : { yield: { potential: 3306.512043, common:           0, used:  2676.18198, typicalRange: [  2030,  2810.88314 ] }, nutrients: [ 0.054329907, 0.003662902, 0.023501989, 0.002382452, 0.002300322, 0.003015857 ], fertilizerRecom: { n: { low:  25, high:   0 }, p: { low:  50, med:  25, high: 19 }, k: { low: 102, med:  63, high:  42 } } },
  'Forages-30d'      : { yield: { potential: 22227.47547, common: 17890.08222, used:  17841.2132, typicalRange: [ 16629, 19150.75825 ] }, nutrients: [ 0.020958385, 0.002966667, 0.01660617 , 0.005      , 0.0016     , 0           ], fertilizerRecom: { n: { low: 300, high: 200 }, p: { low: 136, med: 102, high: 68 }, k: { low: 399, med: 299, high: 199 } } },
  'Forages-40 to 45d': { yield: { potential: 27667.26137, common: 23776.98483, used:  22301.5165, typicalRange: [ 22768,  24786.7975 ] }, nutrients: [ 0.016924064, 0.002685739, 0.01660617 , 0.005142698, 0.003265467, 0           ], fertilizerRecom: { n: { low: 300, high: 200 }, p: { low: 154, med: 115, high: 77 }, k: { low: 498, med: 374, high: 249 } } },
  'Forages-60 to 65d': { yield: { potential: 31989.29527, common: 26008.92061, used:  26761.8198, typicalRange: [ 24822, 27195.36128 ] }, nutrients: [ 0.012255772, 0.001771826, 0.012673725, 0.004920045, 0.002338945, 0           ], fertilizerRecom: { n: { low: 300, high: 200 }, p: { low: 122, med:  91, high: 61 }, k: { low: 456, med: 342, high: 228 } } },
  'Forages->85d'     : { yield: { potential: 45316.68153, common: 35021.40946, used:  31222.1231, typicalRange: [ 30702, 39339.87511 ] }, nutrients: [ 0.008956929, 0.001476307, 0.009246817, 0.004671444, 0.002535537, 0           ], fertilizerRecom: { n: { low: 300, high: 200 }, p: { low: 118, med:  89, high: 59 }, k: { low: 388, med: 291, high: 194 } } },
};

const tabInput = new Tab<{}>()
  // .select('Cropping History', COMPOST_OPTIONS)
  .select('Crop', CROP_OPTIONS)
  .horizontalNumbers('NPK (as rcvd.)', [ 'N', 'P', 'K' ], false)
  // .number('Manure Test and Nitrogen Value')
  .number('NCAT')
  ;

const tabs = new DynamicTabs<{}>(document.body)
  .addTab('Input', tabInput);
(window as any).tabs = tabs;
(window as any).tab = tabInput;

tabInput.addInputListener(() => {
  console.log('Input changed!');
});
window.tabs = tabs;
const npk = tabs.getValue('Input', 'NPK')


// const tabReport: Tab = {
//   name: 'Report',
//   inner: [
//     { label: 'test!', type: 'text' }
//   ]
// };

// const tabInfoOutput: Tab = {
//   name: 'Info Output',
//   inner: [
//     { label: 'test!', type: 'text' }
//   ]
// };
// const renderedTabs = renderTabs([ tabSiteAssesment, tabReport, tabInfoOutput ]);
// document.body.appendChild(renderedTabs);

//______________________________________________________________________________________________________

/*This formula is to convert Kilograms of Nutrient Per Metric Ton of Fresh Weight
  To Particle Per Million (PPM)
*/
function TO_PPM( kgt: number){
  return kgt*1000;
}

//The kg/t fw for the Phosphosru or Potasium of the chosen crop
function Mehlich3(CropName: string, kgt_of_Crop:number,PK:number){
  let Pm3: number = TO_PPM(kgt_of_Crop);
  return PK * Pm3;
}

function Olsen(CropName: string, kgt_of_Crop:number, P: number){
  let P_olsen: number = TO_PPM(kgt_of_Crop);
  return P_olsen * P;
}

function Bray1(CropName: string, kgt_of_Crop:number, P: number){
  let P_Bray: number = TO_PPM(kgt_of_Crop);
  return P_Bray * P;
}


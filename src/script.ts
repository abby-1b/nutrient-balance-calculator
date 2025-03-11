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

const CROP_OPTIONS = [
  'Avocado',
  'Banana',
  'Bean',
  'Cabbage',
  'Cantaloupe',
  'Cassava',
  'Citrus',
  'Coffee',
  'Corn',
  'Cotton',
  'Cucumber',
  'Eggplant',
  'Grassland',
  'Hayland',
  'Mango',
  'Onion',
  'Papaya',
  'Pepper',
  'Pineapple',
  'Plantain',
  'Pumpkin',
  'Rice',
  'Soybean',
  'Spanish Lime (Quenepa)',
  'Sugarcane',
  'Sweet Pepper',
  'Sweet Potato',
  'Tannier',
  'Tomato',
  'Watermelon',
  'Yam',
];

const tabInput = new Tab<{}>()
  .select('Cropping History', COMPOST_OPTIONS)
  .horizontalNumbers('NPK', [ 'N', 'P', 'K' ], true);
  

const tabs = new DynamicTabs<{}>(document.body)
  .addTab('Input', tabInput);

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


import { renderTabs, Tab } from "./dynamic-tabs";

const COMPOST_OPTIONS = [
  "05-10-10",
  "05-25-05",
  "06-06-12",
  "06-08-10",
  "07-16-16",
  "08-06-10",
  "08-08-10",
  "08-08-12",
  "08-10-20",
  "08-24-24",
  "10-02-30",
  "10-05-15",
  "10-05-20",
  "10-05-30",
  "10-10-05",
  "10-10-08",
  "10-10-10",
  "10-10-20",
  "10-15-15",
  "10-20-20",
  "10-25-25",
  "12-03-12",
  "12-04-06",
  "12-04-10",
  "12-05-15",
  "12-05-20",
  "12-06-06",
  "12-06-08",
  "12-06-06",
  "12-06-08",
  "12-06-10",
  "12-06-16",
  "12-08-16",
  "12-12-24",
  "15-02-08",
  "15-03-15",
  "15-05-10",
  "15-08-04",
  "15-05-20",
  "15-10-05",
  "15-10-10",
  "15-10-15",
  "15-15-10",
  "15-15-15",
  "15-15-18",
  "16-04-04",
  "16-04-08",
  "18-06-12",
  "20-00-10",
  "20-00-20",
  "20-04-08",
  "20-05-10",
  "20-05-15",
  "20-05-20",
  "20-10-10",
  "20-10-15",
  "21-07-07",
  "21-07-14",
  "Ammonium Nitrate",
  "Ammonium Nitrate Ammonia 37%",
  "Ammonium Nitrate Ammonia 41%",
  "Ammonium Polyphosphate 24%",
  "Ammonium Polyphosphate 30%",
  "Ammonium Polyphosphate 34%",
  "Ammonium Polyphosphate 37%",
  "Ammonium Sulfate",
  "Aqua Ammonia 20%",
  "Aqua Ammonia 24%",
  "Calcium Ammonium Nitrate 17% ",
  "Diammonium Phosphate",
  "N Solution",
  "Phosphoric Acid 52%",
  "Phosphoric Acid 68%",
  "Phosphoric Acid 75%",
  "Potassium Cloride",
  "Potassium Sulfate",
  "Triple Superphospate",
  "Urea",
  "Urea Ammonium Nitrate 28%",
  "Urea Ammonium Nitrate 32%",
  "Urea Solution 20%",
  "Urea Solution 23%",
];

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

const tabSiteAssesment: Tab = {
  name: 'Input',
  inner: [
    { label: 'Cropping History', type: 'select', options: COMPOST_OPTIONS },
    
    // TODO: make these align side-by-side
    { label: 'N', type: 'number' },
    { label: 'P', type: 'number' },
    { label: 'K', type: 'number' },

    { label: 'Preplant Soil Test', type: 'select', options: CROP_OPTIONS },
    { label: 'Manure Test and Nitrogen Value', type: 'number' },
    { label: 'Nutrients Inventory', type: 'number' },
    { label: 'NCAT', type: 'number' },
  ]
};

const tabReport: Tab = {
  name: 'Report',
  inner: [
    { label: 'test!', type: 'text' }
  ]
};

const tabInfoOutput: Tab = {
  name: 'Info Output',
  inner: [
    { label: 'test!', type: 'text' }
  ]
};

const renderedTabs = renderTabs([ tabSiteAssesment, tabReport, tabInfoOutput ]);
document.body.appendChild(renderedTabs);

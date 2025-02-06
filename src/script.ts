
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

const tabInput = {
  name: 'Input',
  inner: [
    { label: 'Compost Type', type: 'select', options: COMPOST_OPTIONS }
  ]
}

// const tabInput = document.querySelector('#tab-input') as HTMLElement;
// const tabYears = document.querySelector('#tab-years') as HTMLElement;
// const tabInfo  = document.querySelector('#tab-info' ) as HTMLElement;

// /** Go to a specific tab */
// function changeTab(id: number) {
//   tabInput.style.left = '-' + (id * 100) + 'vw';
//   tabYears.style.left = '-' + (id * 100) + 'vw';
//   tabInfo .style.left = '-' + (id * 100) + 'vw';
// }

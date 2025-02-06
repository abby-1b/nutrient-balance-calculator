
const tabInput = document.querySelector('#tab-input') as HTMLElement;
const tabYears = document.querySelector('#tab-years') as HTMLElement;
const tabInfo  = document.querySelector('#tab-info' ) as HTMLElement;

/** Go to a specific tab */
function changeTab(id: number) {
  tabInput.style.left = '-' + (id * 100) + 'vw';
  tabYears.style.left = '-' + (id * 100) + 'vw';
  tabInfo .style.left = '-' + (id * 100) + 'vw';
}



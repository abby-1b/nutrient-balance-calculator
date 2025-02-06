
type UserInput =
  | { label: string, onChange?: (this: HTMLElement) => void, type: 'text' }
  | { label: string, onChange?: (this: HTMLElement) => void, type: 'number' }
  | { label: string, onChange?: (this: HTMLElement) => void, type: 'select', options: string[] | Record<string, any> }

interface Tab {
  name: string,
  inner: UserInput[],
}

export function renderTabs(tabs: Tab[]): HTMLElement {
  const final = document.createElement('div');

  const renderedTabs = tabs.map(renderSingleTab);
  const tabScroller = renderTabScroller(renderedTabs);
  const tabHeader = renderTabHeader(tabs.map(t => t.name), tabScroller);
  final.appendChild(tabHeader);
  final.appendChild(tabScroller);

  return final;
}

function renderTabHeader(
  names: string[],
  tabScroller: HTMLElement
): HTMLElement {
  const tabElements = [...tabScroller.children] as HTMLElement[];
  function changeTab(index: number) {
    for (const tab of tabElements) {
      tab.style.left = '-' + (index * 100) + 'vw';
    }
  }
  const final = document.createElement('div');
  names.forEach((name, index) => {
    const tab = document.createElement('input');
    tab.value = name;
    tab.onclick = () => changeTab(index);
    final.appendChild(tab);
  });
  changeTab(0);
  return final;
}

function renderTabScroller(tabs: HTMLElement[]): HTMLElement {
  const final = document.createElement('div');
  final.className = 'tab-scroller';
  tabs.forEach(tab => final.appendChild(tab));
  return final;
}

function renderSingleTab(tab: Tab): HTMLElement {
  tab.name
}

function renderUserInput(input: UserInput): HTMLElement {
  const final = document.createElement('div');

  const label = document.createElement('h3')
  label.innerText = input.label;
  final.appendChild(label);

  let el: HTMLInputElement | HTMLSelectElement;
  switch (input.type) {
    case 'text': {
      el = document.createElement('input');
      input.type = 'text';
    } break;
    case 'number': {
      el = document.createElement('input');
      input.type = 'number';
    } break;
    case 'select': {
      el = document.createElement('select');
      const optionStrings = Array.isArray(input.options)
        ? input.options as string[]
        : Object.keys(input.options)
      for (const option of optionStrings) {
        const o = document.createElement('option');
        o.innerText = option;
        el.appendChild(o);
      }
    } break;
  }
  el.onchange = input.onChange;
}

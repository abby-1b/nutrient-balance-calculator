
type UserInput =
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'text' }
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'number' }
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'select', options: string[] | Record<string, any> }

export interface Tab {
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
    console.log('changing tab:', index);
    for (const tab of tabElements) {
      tab.style.left = '-' + (index * 100) + 'vw';
    }
  }
  const final = document.createElement('div');
  final.className = 'tab-select-holder';
  names.forEach((name, index) => {
    const tab = document.createElement('input');
    tab.type = 'button';
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
  const el = document.createElement('div');
  el.className = 'tab-content';

  tab.inner.forEach(input => el.appendChild(renderUserInput(input)));

  return el;
}

function renderUserInput(input: UserInput): HTMLElement {
  const final = document.createElement('div');

  const label = document.createElement('h3')
  label.innerText = input.label;
  label.className = 'text-label';
  final.appendChild(label);

  let el: HTMLInputElement | HTMLSelectElement;
  switch (input.type) {
    case 'text': {
      el = document.createElement('input');
      el.className = 'text-input';
      el.type = 'text';
    } break;
    case 'number': {
      el = document.createElement('input');
      el.className = 'number-input';
      el.type = 'number';
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
  el.onchange = input.onChange ?? null;

  final.appendChild(el);

  return final;
}

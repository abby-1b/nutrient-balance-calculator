
type UserInput =
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'text' }
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'number' }
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'select', options: string[] | Record<string, any> }
  | { label: string, onChange?: (this: GlobalEventHandlers) => void, type: 'horizontal', inputs: UserInput[] }

export class Tab<T extends Record<string, any>> {
  public element = document.createElement('div');
  private inputs = new Map<string, any>();
  private name: string = '';
  public constructor() {
    this.element.className = 'tab-content';
    // inputs.forEach(input => this.element.appendChild(renderUserInput(input)));
  }

  public setName(name: string) {
    this.name = name;
  }

  private renderLabel(labelString: string, hideLabel: boolean) {
    if (hideLabel) return;
    const label = document.createElement('h3');
    label.innerText = labelString;
    label.className = 'text-label';
    this.element.appendChild(label);
  }

  public text<N extends string>(label: N, hideLabel = false): Tab<T & Record<N, string>> {
    this.inputs.set(label, '');
    this.renderLabel(label, hideLabel);
    const textInput = document.createElement('input');
    textInput.className = 'text-input';
    textInput.type = 'text';
    textInput.onchange = () => this.inputs.set(label, textInput.value);
    this.element.appendChild(textInput);
    return this;
  }

  public number<N extends string>(label: N, hideLabel = false): Tab<T & Record<N, number>> {
    this.inputs.set(label, 0);
    this.renderLabel(label, hideLabel);
    const numberInput = document.createElement('input');
    numberInput.className = 'number-input';
    numberInput.type = 'number';
    numberInput.onchange = () => this.inputs.set(label, numberInput.value);
    this.element.appendChild(numberInput);
    return this;
  }

  public select<N extends string, O>(label: N, options: string[] | Record<string, O>, hideLabel = false): Tab<T & Record<N, O>> {
    const optionStrings = Array.isArray(options)
      ? options
      : Object.keys(options);
    // TODO:
    return this;
  }

  public horizontalNumbers<N extends string>(label: N, labels: string[], hideLabel = true): Tab<T & Record<N, number[]>> {
    this.inputs.set(label, new Array(labels.length).fill(0));
    this.renderLabel(label, hideLabel);
    const horizElement = document.createElement('div');
    horizElement.className = 'horizontal-container'
    for (let i = 0; i < labels.length; i++) {
      const label = document.createElement('h3');
      label.innerText = labels[i];
      label.className = 'text-label';
      horizElement.appendChild(label);
      const numberInput = document.createElement('input');
      numberInput.className = 'number-input';
      numberInput.type = 'number';
      numberInput.onchange = () => this.inputs.get(label)[i] = numberInput.value;
      horizElement.appendChild(numberInput);
    }
    this.element.appendChild(horizElement);
    return this;
  }

  public getValue<K extends keyof T & string>(valueKey: K): T[K] {
    if (!this.inputs.has(valueKey)) {
      throw new Error(`Tab \`${this.name}\` doesn't have input \`${valueKey}\`!`);
    }
    return this.inputs.get(valueKey) as T[K];
  }
}

export class DynamicTabs<T extends Record<string, Record<string, any>>> {
  private tabs = new Map<string, Tab<any>>();

  public constructor(
    public parentElement: HTMLElement
  ) {}

  public addTab<N extends string, K extends Record<string, any>>(tabName: N, tab: Tab<K>): DynamicTabs<T & Record<N, K>> {
    this.tabs.set(tabName, tab);
    tab.setName(tabName);
    this.parentElement.appendChild(tab.element);
    return this;
  }

  public getValue<TabName extends keyof T & string, InputName extends keyof T[TabName] & string>(
    tabName: TabName,
    inputName: InputName,
  ): T[TabName][InputName] {
    return this.tabs.get(tabName)!.getValue(inputName);
  }

  public goto(tabName: string) {

  }
}

// function renderTabs(tabs: Tab[]): HTMLElement {
//   const final = document.createElement('div');

//   const renderedTabs = tabs.map(renderSingleTab);
//   const tabScroller = renderTabScroller(renderedTabs);
//   const tabHeader = renderTabHeader(tabs.map(t => t.name), tabScroller);
//   final.appendChild(tabHeader);
//   final.appendChild(tabScroller);

//   return final;
// }

// function renderTabHeader(
//   names: string[],
//   tabScroller: HTMLElement
// ): HTMLElement {
//   const tabElements = [...tabScroller.children] as HTMLElement[];
//   function changeTab(index: number) {
//     console.log('changing tab:', index);
//     for (const tab of tabElements) {
//       tab.style.left = '-' + (index * 100) + 'vw';
//     }
//   }
//   const final = document.createElement('div');
//   final.className = 'tab-select-holder';
//   names.forEach((name, index) => {
//     const tab = document.createElement('input');
//     tab.type = 'button';
//     tab.value = name;
//     tab.onclick = () => changeTab(index);
//     final.appendChild(tab);
//   });
//   changeTab(0);
//   return final;
// }

// function renderTabScroller(tabs: HTMLElement[]): HTMLElement {
//   const final = document.createElement('div');
//   final.className = 'tab-scroller';
//   tabs.forEach(tab => final.appendChild(tab));
//   return final;
// }

function renderUserInput(input: UserInput): HTMLElement {
  const final = document.createElement('div');

  if (input.label.length > 0) {
    const label = document.createElement('h3')
    label.innerText = input.label;
    label.className = 'text-label';
    final.appendChild(label);
  }

  let el: HTMLInputElement | HTMLSelectElement | HTMLElement;
  switch (input.type) {
    case 'text': {
      const inputEl = document.createElement('input');
      inputEl.className = 'text-input';
      inputEl.type = 'text';
      el = inputEl;
    } break;
    case 'number': {
      const inputEl = document.createElement('input');
      inputEl.className = 'number-input';
      inputEl.type = 'number';
      el = inputEl;
    } break;
    case 'horizontal': {
      el = document.createElement('div');
      el.className = 'horizontal-container'
      for (const inp of input.inputs) {
        el.appendChild(renderUserInput(inp));
      }
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

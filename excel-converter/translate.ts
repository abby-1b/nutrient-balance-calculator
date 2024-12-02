import { formulaToTree } from "./parse.ts";
import { TreeNode } from "./tree-node.ts";

/** A map from excel operators to their equivalent JS operators */
const OPERATOR_MAPPINGS = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
  '^': '**',
  '=': '==',
  '<': '<',
  '>': '>',
  '<=': '<=',
  '>=': '>=',
  '<>': '!=',
};

/** A map of names to functions, their optimizers, and if they should be inlined */
// const EXCEL_FUNCTIONS: Record<string, [Function, (n: TreeNode) => TreeNode, boolean]> = {
//   'VLOOKUP': [
//     () => 0,
//   ]
// };

function addressToGetter(node: TreeNode, currentSheet: string): string {
  if (node.type != 'lit_adr' && node.type != 'lit_adr_otr') {
    throw new Error('Expected address, found ' + JSON.stringify(node));
  }
  const address = node.value;

  let i = 0;
  let column = 0;
  while (address.charCodeAt(i) > 64 && address.charCodeAt(i) < 91) {
    column = column * 26 + (address.charCodeAt(i) - 65);
    i++
  }

  let row = 0;
  while (address.charCodeAt(i) > 47 && address.charCodeAt(i) < 58) {
    row = row * 10 + (address.charCodeAt(i) - 48);
    i++
  }

  return 'getAddress(' + column + ',' + row + ')';
}

export function treeToJS(node: TreeNode, level: number): string {
  const indent = '  '.repeat(level);
  let out = '';
  switch (node.type) {
    case 'lit_num': { out = '' + node.value; } break;
    case 'lit_str': { out = node.value; } break;
    case 'lit_adr': { out = addressToGetter(node.value); } break;
    case 'lit_bool': { out = '' + node.value; } break;
    case 'unr': {
      out = node.opr == '%'
        ? '0.01 * ' + treeToJS(node.inner, 0)
        : node.opr + treeToJS(node.inner, 0)
    } break;
    case 'opr': {
      out = treeToJS(node.left, 0) + ' ' + OPERATOR_MAPPINGS[node.opr] + ' ' + treeToJS(node.right, 0);
    } break;
    case 'fn': {
      if (node.name == 'IF') {
        out =
          '(' + treeToJS(node.args[0], 0) +
          ' ? ' + treeToJS(node.args[1], 0) +
          ' : ' + treeToJS(node.args[2], 0) + ')';
      } else {
        out = node.name + '(' + node.args.map(a => treeToJS(a, 0)).join(', ') + ')';
      }
    } break;
    case 'paren': {
      out = '(' + treeToJS(node.inner, 0) + ')'
    } break;
  }
  return out;
}

const tree = formulaToTree(`=IF(D33="","", IF($I$32="lb/ton",(D33*20),IF($I$32="lb/1000 gal",(D33*83.4),"")))`);
console.log(tree);
const js = treeToJS(tree, 0);
console.log(js);

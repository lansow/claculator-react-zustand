export const keys = [
  [{ label: "7", action: "inputDigit" }],
  [{ label: "8", action: "inputDigit" }],
  [{ label: "9", action: "inputDigit" }],
  [{ label: "÷", action: "inputOperator", variant: "operator" }],

  [{ label: "4", action: "inputDigit" }],
  [{ label: "5", action: "inputDigit" }],
  [{ label: "6", action: "inputDigit" }],
  [{ label: "×", action: "inputOperator", variant: "operator" }],

  [{ label: "1", action: "inputDigit" }],
  [{ label: "2", action: "inputDigit" }],
  [{ label: "3", action: "inputDigit" }],
  [{ label: "-", action: "inputOperator", variant: "operator" }],

  [
    {
      label: "CE",
      action: "clearEntry",
      // variant: "danger"
    },
  ],
  [{ label: "0", action: "inputDigit" }],
  [{ label: ".", action: "inputDecimal" }],
  [{ label: "+", action: "inputOperator", variant: "operator" }],

  [{ label: "Undo", action: "undo" }],
  [{ label: "Redo", action: "redo" }],
  [{ label: "del", action: "del", variant: "danger" }],
  [{ label: "=", action: "equals", variant: "equals" }],
];

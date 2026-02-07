const isOperator = (token) => ["+", "-", "*", "/"].includes(token);

export const calculateAction = (set, get) => ({
  inputDigit: (digit) => {
    const { current, tokens, displayString } = get();
    const newCurrent = current === "0" ? digit : current + digit;
    let newTokens = [...tokens];

    if (newTokens.length === 0 || isOperator(newTokens[newTokens.length - 1])) {
      newTokens.push(parseFloat(newCurrent));
    } else {
      const lastIndex = newTokens.length - 1;
      const lastNum = newTokens[lastIndex];
      const updatedNum = parseFloat(lastNum.toString() + digit);
      newTokens[lastIndex] = updatedNum;
    }
    set({
      current: newCurrent,
      displayString: displayString + digit,
      tokens: newTokens,
    });
  },

  inputDecimal: () => {
    const { current, displayString } = get();
    if (!current.includes(".")) {
      set({
        current: current + ".",
        displayString: displayString + ".",
      });
    }
  },

  inputOperator: (op) => {
    get().pushHistory();
    const { current, tokens, displayString } = get();
    if (!current && tokens.length === 0) return;

    const newTokens = current ? [...tokens, op] : [...tokens.slice(0, -1), op];
    const newDisplay = current
      ? displayString + ` ${op} `
      : displayString.slice(0, -3) + ` ${op} `;
    set({
      tokens: newTokens,
      current: "",
      displayString: newDisplay,
      lastOperator: op,
    });
    get().pushHistory();
  },

  equals: () => {
    get().pushHistory();
    const { tokens, current } = get();
    if (!current && tokens.length === 0) return;

    const newTokens = current
      ? [...tokens, parseFloat(current)]
      : [...tokens.slice(0, -1)];
    if (newTokens.length === 0) return;

    let result = newTokens[0] || 0;
    for (let i = 1; i < newTokens.length; i += 2) {
      const op = newTokens[i];
      const val = newTokens[i + 1];
      if (op === "+") result += val;
      else if (op === "-") result -= val;
      else if (op === "*") result *= val;
      else if (op === "/") result /= val;
    }

    set({
      current: result.toString(),
      tokens: [result],
      result,
      displayString: result.toString(),
      lastOperator: "",
    });
  },

  del: () => {
    const { displayString, tokens } = get();
    let newDisplay;
    let newTokens = [...tokens];

    if (displayString.endsWith(" ")) {
      newDisplay = displayString.slice(0, -3);
      newTokens.pop();
    } else {
      newDisplay = displayString.slice(0, -1);

      if (newDisplay === "" || newDisplay.endsWith(" ")) {
        newTokens = [];
      } else if (
        newTokens.length > 0 &&
        typeof newTokens[newTokens.length - 1] === "number"
      ) {
        const lastNum = newTokens[newTokens.length - 1];
        const lastNumStr = lastNum.toString();

        if (lastNumStr.length > 1) {
          const newNumStr = lastNumStr.slice(0, -1);
          newTokens[newTokens.length - 1] = parseFloat(newNumStr);
        } else {
          newTokens.pop();
        }
      }
    }

    set({
      displayString: newDisplay,
      tokens: newTokens,
      current: newDisplay.split(" ").pop() || "0",
      result: newDisplay.split(" ").pop() || "0",
    });
  },
  clearEntry: () => {
    get().pushHistory();
    set({
      current: "0",
      displayString: "",
      tokens: [],
      lastOperator: "",
    });
  },

  pushHistory: () => {
    const { current, tokens, result, history, displayString, lastOperator } =
      get();
    const snapshot = {
      current,
      tokens: [...tokens],
      result,
      displayString,
      lastOperator,
    };
    set({
      history: [...history, snapshot],
      historyIndex: history.length + 1,
    });
  },

  undo: () => {
    const { historyIndex, history } = get();
    if (historyIndex == history.length - 1) {
      get().pushHistory();
    }
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    const snapshot = history[newIndex];
    set({
      ...snapshot,
      historyIndex: newIndex,
    });
  },

  redo: () => {
    const { historyIndex, history } = get();
    if (historyIndex >= history.length - 1) return;
    const newIndex = historyIndex + 1;
    const snapshot = history[newIndex];
    set({
      ...snapshot,
      historyIndex: newIndex,
    });
  },
});

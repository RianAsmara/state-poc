import { assign, createMachine } from "xstate";

const countingMachineDefinition = {
  initial: "counting",
  context: {
    count: 0
  },
  states: {
    counting: {
      on: {
        INCREMENT: {
          actions:  assign({
            count: (context) => context.count + 1,
          }),
        }
      }
    }
  }
}

export const countingMachine = createMachine(countingMachineDefinition)
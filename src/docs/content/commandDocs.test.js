import { describe, expect, it } from "vitest";
import { commandCount, commandGroups } from "./commandDocs.js";

const expectedActions = {
  admin: 24,
  banword: 3,
  cmd: 3,
  coaching: 10,
  config: 2,
  creator: 6,
  eco: 4,
  event: 4,
  help: 1,
  history: 1,
  lobby: 4,
  module: 2,
  nivel: 1,
  ping: 1,
  play: 1,
  queue: 1,
  rank: 5,
  selfrole: 10,
  setup: 2,
  shop: 2,
  skip: 1,
  stop: 1,
  ticket: 4,
  trigger: 1,
  volume: 1,
};

describe("command documentation", () => {
  const commands = commandGroups.flatMap((group) => group.commands);

  it("covers every registered command and action", () => {
    expect(commandCount).toBe(25);
    expect(Object.fromEntries(commands.map((command) => [command.name, command.usage.length]))).toEqual(expectedActions);
    expect(commands.reduce((total, command) => total + command.usage.length, 0)).toBe(95);
  });

  it("provides bilingual descriptions, access rules, syntax, and examples", () => {
    for (const command of commands) {
      expect(command.summary.es).toBeTruthy();
      expect(command.summary.en).toBeTruthy();
      expect(command.access.es).toBeTruthy();
      expect(command.access.en).toBeTruthy();
      for (const usage of command.usage) {
        expect(usage.syntax).toMatch(new RegExp(`^/${command.name}(?: |$)`));
        expect(usage.syntax).not.toContain("|");
        expect(usage.description.es).toBeTruthy();
        expect(usage.description.en).toBeTruthy();
        expect(usage.example).toMatch(new RegExp(`^/${command.name}(?: |$)`));
        expect(usage.example).not.toContain("[");
        expect(usage.example).not.toContain("]");
      }
    }
  });
});

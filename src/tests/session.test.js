import session from "../components/session";
import { cpuPlayerFactory, humanPlayerFactory } from "../components/player";

test.only("players change turn", () => {
  const hPlayer = humanPlayerFactory();
  const cPlayer = cpuPlayerFactory();

  const currentSession = session(hPlayer, cPlayer);

  expect(currentSession.humanPlayer.validTurn).toBe(true);
  expect(currentSession.cpuPlayer.validTurn).toBe(false);

  currentSession.humanAttack({ col: "B", row: 4 });

  expect(currentSession.humanPlayer.validTurn).toBe(false);
  expect(currentSession.cpuPlayer.validTurn).toBe(true);

  currentSession.cpuAttack();

  expect(currentSession.humanPlayer.validTurn).toBe(true);
  expect(currentSession.cpuPlayer.validTurn).toBe(false);
});

test("AI hits new point", () => {
  const hPlayer = humanPlayerFactory();
  const cPlayer = cpuPlayerFactory();

  const currentSession = session(hPlayer, cPlayer);

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );

  currentSession.humanAttack({ col: "G", row: 5 });
  currentSession.cpuAttack();

  expect(
    currentSession.humanPlayer.ownBoard.attackAttempts.slice(
      0,
      currentSession.humanPlayer.ownBoard.attackAttempts.length - 1
    )
  ).toEqual(
    expect.not.arrayContaining(
      currentSession.humanPlayer.ownBoard.attackAttempts.slice(-1)
    )
  );
});

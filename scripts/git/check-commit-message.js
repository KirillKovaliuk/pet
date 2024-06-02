const checkCommitMessage = (parsed) => {
  const { type, ticket, subject } = parsed;

  if (type === null && ticket === null && subject === null) {
    return [
      false,
      `message must be in format: '{type}: [CP-{ticket number}] {Subject}

        - type: init, feature, tech, fix, refactor, docs;
        - ticket number: task number from tracking system;
        - subject: what you did?;

      `.split("\n")
      .map(string => {
        const changedString = string.trim();

        if(changedString.startsWith('-')) {
          return `    ${changedString}`;
        }

        return changedString;
      })
      .join("\n")
    ];
  }

  return [true, ""];
};

module.exports = {
  checkCommitMessage
};

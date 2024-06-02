const { checkCommitMessage } = require('./scripts/git/check-commit-message');

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(init|feature|tech|fix|refactor|docs): \[(CP-\d{1,})\] ([A-Z][\S ]{10,})$/,
      headerCorrespondence: ['type', 'ticket', 'subject']
    },
  },
  plugins: [{
      rules: {
        "header-match-team-pattern": checkCommitMessage
      },
    },
  ],
  rules: {
    "header-match-team-pattern": [2, "always"],
  },
};

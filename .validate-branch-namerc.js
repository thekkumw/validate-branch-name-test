module.exports = {
    pattern: '^(master|development|main){1}$|^(release-\d+(\.\d{1,2}){1,3}-to-master-cr\d{4,6}){1}$|^(feature|hotfix|release|MIDCT|midct)\/.+$',
    errorMsg: 'The branch name is invalid as per the naming policy.',
};
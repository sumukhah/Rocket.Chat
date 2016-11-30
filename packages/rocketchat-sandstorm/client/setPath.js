// Set the path of the parent frame when the grain's path changes.
// See https://docs.sandstorm.io/en/latest/developing/path/

function updateSandstormMetaData(msg) {
  return window.parent.postMessage(msg, '*');
}

FlowRouter.triggers.enter([({ path }) => {
  updateSandstormMetaData({ setPath: path });
}]);

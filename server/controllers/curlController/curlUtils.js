/* eslint-disable no-console */
// getStream asynchronously executes the curl command through the exec method on node child processes, returning stdout and catching stderr from the node process and error from the async call
exports.getStream = async (curlCommand, nodeCommand) => {
  try {
    const { stdout, stderr } = await nodeCommand(curlCommand);
    const data = await JSON.parse(stdout);
    const errorText = stderr.toString().trim();
    errorText && console.log(errorText);
    return data;
  } catch (error) {
    console.log('catch error: ', error);
  }
};

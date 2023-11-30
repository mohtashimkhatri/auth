const SendResponse = (isSuccesfull, message, sendData) => {
  return {
    isSuccesfully: isSuccesfull,
    messages: isSuccesfull ? message : "",
    err: !isSuccesfull ? message : "",
    data: sendData,
  };
};
module.exports = SendResponse;

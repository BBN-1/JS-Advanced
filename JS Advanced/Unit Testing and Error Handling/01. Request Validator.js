function validator(input) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let uriPattern = /\w+/;
    let messagePattern = /[<>\\&'"]+/;
  
    if (!input.method || !validMethods.includes(input.method)) {
      throw new Error("Invalid request header: Invalid Method");
    }
    if (!input.uri || input.uri === "" || !uriPattern.test(input.uri)) {
      throw new Error("Invalid request header: Invalid URI");
    }
    if (
      input.verison ||
      input.version === "" ||
      validVersion.includes(input.verision)
    ) {
      throw new Error("Invalid request header: Invalid Version");
    }
    if (input.message == undefined || messagePattern.test(input.message)) {
      throw new Error("Invalid request header: Invalid Message");
    }
    return input;
  }
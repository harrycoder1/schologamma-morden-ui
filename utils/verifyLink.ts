export function isValidURL(url: string): boolean {
    const urlPattern: RegExp = new RegExp(
      "^((https?|ftp):\\/\\/)?"+ // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"+ // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))"+ // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+ // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?"+ // query string
      "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
  
    return !!url.match(urlPattern);
  }
  
//   // Example usage:
//   const url1 = "https://www.example.com";
//   const url2 = "invalid-url";
  
//   console.log(isValidURL(url1)); // Output: true
//   console.log(isValidURL(url2)); // Output: false
  
const byteSize = (str) => {
  let totalBytes = 0;

  for (let i = 0; i < str.length; i++) {
    // Get the character code of the current character
    const charCode = str.charCodeAt(i);

    // Count the number of bytes for this character
    if (charCode <= 0x7f) {
      // ASCII character (1 byte)
      totalBytes += 1;
    } else if (charCode <= 0x7ff) {
      // 2-byte character
      totalBytes += 2;
    } else if (charCode <= 0xffff) {
      // 3-byte character
      totalBytes += 3;
    } else {
      // 4-byte character
      totalBytes += 4;
    }
  }

  return totalBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

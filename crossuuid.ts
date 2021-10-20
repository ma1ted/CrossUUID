export class CrossUUID {
  generate(): string {
    function pad(n: string, width: number): string {
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join("0") + n;
    }

    // 1. Let bytes be a list with 16 elements of the type byte.
    const bytes = new Uint8Array(16);

    // 2. Fill bytes with cryptographically secure random bytes.
    window.crypto.getRandomValues(bytes);

    // 3. Set the 4 most significant bits of bytes[6], which represent the UUID version, to 0b0100.
    // (0100 -> 4 because it's a v4 uuid)

    let bytes6Binary = bytes[6].toString(2);
    bytes6Binary = pad(bytes6Binary, 8);

    const versioned: string = "0100" + bytes6Binary.substring(4, 8);
    bytes[6] = parseInt(versioned, 2);

    // 4. Set the 2 most significant bits of bytes[8], which represent the UUID variant, to 0b10.
    let bytes8Binary = bytes[8].toString(2);
    bytes8Binary = pad(bytes8Binary, 8);

    const variant: string = "10" + bytes8Binary.substring(2, 8);
    bytes[8] = parseInt(variant, 2);

    /* 5. Return the concatenation of «
            hexadecimal representation of bytes[0], hexadecimal representation of bytes[1], hexadecimal representation of bytes[2], hexadecimal representation of bytes[3],
            "-",
            hexadecimal representation of bytes[4], hexadecimal representation of bytes[5],
            "-",
            hexadecimal representation of bytes[6], hexadecimal representation of bytes[7],
            "-",
            hexadecimal representation of bytes[8], hexadecimal representation of bytes[9],
            "-",
            hexadecimal representation of bytes[10], hexadecimal representation of bytes[11], hexadecimal representation of bytes[12], hexadecimal representation of bytes[13], hexadecimal representation of bytes[14], hexadecimal representation of bytes[15]
        ».
        */
    const hex: string[] = [];
    for (const i of bytes) {
      const bin = pad(i.toString(2), 8);
      const binInt = parseInt(bin, 2);
      const binIntHex = pad(binInt.toString(16), 2);
      hex.push(binIntHex);
    }

    return [
      hex[0],
      hex[1],
      hex[2],
      hex[3],
      "-",
      hex[4],
      hex[5],
      "-",
      hex[6],
      hex[7],
      "-",
      hex[8],
      hex[9],
      "-",
      hex[10],
      hex[11],
      hex[12],
      hex[13],
      hex[14],
      hex[15],
    ].join("");
  }
}

const str1 = String(process.argv[2]).toLowerCase();
const str2 = String(process.argv[3]).toLowerCase();

// console.log(str1, str2);

if (str1 > str2) console.log("1");

if (str1 < str2) console.log("-1");

if (str1 === str2) console.log("0");

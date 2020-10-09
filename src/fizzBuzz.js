const input = process.argv[2];

let response = "";

if (input % 3 === 0) response = response + "Java";
if (input % 5 === 0) response = response + "Script";

if (response.length) {
  console.log(response);
} else {
  console.log(input);
}

const treeStatus = Number(process.argv[2]);
let msg = "other";

switch (treeStatus) {
  case 0:
    msg = "alive";
    break;
  case 1:
    msg = "flowering";
    break;
  case 2:
    msg = "shedding";
    break;
  default:
    break;
}

console.log(msg);

var msg = "we";

// while (true) {
//     console.log(msg);
//     msg += "e";
//     if (msg.length > 10) {
//      break;
//     }
// }

var terminou = false
while (!terminou) {
    console.log(msg);
    msg += "e";
    if (msg.length > 10) {
     terminou = true
    }
}
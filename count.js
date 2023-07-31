// let count = 0
// function up() {
//     if(count == 1000000) {
//         return;
//     } else {
//         console.log(count);
//         count += 1;
//         up();
//     }
// }

// up()


let count = 0;
while(true) {
    if(count == 1000000) {
        return;
    } else {
        count += 1
        console.log(count);
        continue
    }
}
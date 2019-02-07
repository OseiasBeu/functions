let vetor = [1, 4, 7,4,5]

//console.log(total)

function produto(algumArray){
    let i, total = 0;
    total = algumArray[0];
    for (i = 1; i < algumArray.length; i++) {
        total = total * algumArray[i];
    }
    console.log(`Total: ${total}`);

}

produto(vetor);
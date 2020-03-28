document.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        const inp = elements.value;
        //if iput isnt empty
        if (inp) {
            const array = inp.split(",");
 
            /*for (i = 0; i < array.length; i++) {
                alert(array[i]);
            }
            */
 
            //to get +ve elements out of array
            const pno = array.filter(a => (a > -1));
            //console.log(pno);
            //to get array of elemts square
            const prn = pno.map(a => a * a);
            //console.log(prn);
            //to add all squared elements
            const psum = prn.reduce((a, b) => {
                return a + b;
            });
            //console.log(psum);
            //get prms
            const prms = Math.sqrt(psum / 2);
            //console.log(prms);
            //set result
            prmsres.value = "         "+prms;
            ///////////////////////////////////////////////
 
            //to get -ve elements out of array
            const nno = array.filter(a => (a < 0));
            //console.log(nno);
            //to get array of elemts square
            const nrn = nno.map(a => a * a);
            //console.log(nrn);
            //to add all squared elements
            const nsum = nrn.reduce((a, b) => {
                return a + b;
            });
            //console.log(nsum);
            //get prms
            const nrms = Math.sqrt(nsum / 2);
            //console.log(nrms);
            //set result
            nrmsres.value = "         "+nrms;
            ////////////////////////////////////////////////
 
            //to get all elements
            //console.log(array);
            //to get array of elemts square
            const trn = array.map(a => a * a);
            //console.log(trn);
            //to add all squared elements
            const tsum = trn.reduce((a, b) => {
                return a + b;
            });
            //console.log(tsum);
            //get trms
            const trms = Math.sqrt(tsum / 2);
            //console.log(trms);
            //set result
            trmsres.value = "   "+trms;
        }
    }
}
);
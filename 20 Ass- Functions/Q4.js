function calculatetax(income) {

    function calculateamount(tax) {

        if (income <= 250000) {
            console.log(tax, "is 0%")
        }
        else if (250000 < income && income <= 500000) {
            console.log(tax, "is 5%")
        }
        else{
            console.log(tax, "is more than 5%")
        }
        return tax;
    }
    calculateamount("tax")

}

calculatetax(450000)
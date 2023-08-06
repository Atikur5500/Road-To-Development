const ticketPrice = ticketQuantity =>{
    let first100Rate = 100;
    let second100Rate = 90;
    let restRate = 70;
    if (ticketQuantity <= 100) {
        let price = ticketQuantity * first100Rate;
        return price;
    }else if(ticketQuantity <= 200){
        let first100Price = 100 * first100Rate;
        let restTicketQuantity = ticketQuantity - 100;
        let restTicketPrice = restTicketQuantity * second100Rate;
        let totalQuantity = first100Price + restTicketPrice;
        return totalQuantity;
    }else{
        let first100Price = 100 * first100Rate;
        let second100Price = 100 * second100Rate;
        let resRateQuantity = ticketQuantity - 200;
        let restTicketPrice = resRateQuantity * restRate;
        let totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }

}

const price = ticketPrice(250);
console.log(price);
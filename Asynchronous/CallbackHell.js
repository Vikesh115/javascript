/*
* Callback hell
* Pyramid of doom
* Inversion of control
*/

// bookhotel --> proceedPayment --> showBookingStatus --> updateBookingHistory

/* Callback hell or Pyramid of doom */

bookhotel( hotelId, function(){
    if(error){
        handleerror
    }else{
        proceedPayment(hotelId, function(){
            if(error){
                handleerror
            }else{
                showBookingStatus(function(){
                    if(error){
                        handleerror
                    }else{
                        updateBookingHistory(function(){
                            if(error){
                                handleerror
                            }else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
})

/* Inversion of control */

bookhotel(hotelId, function(){
    showBookingStatus(function(){

    })
})
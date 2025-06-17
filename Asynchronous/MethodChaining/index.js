
function bookHotel() {
    return new Promise((resolve) => {
        resolve("hotel123");
    });
}

function payment() {
    return new Promise((resolve) => {
        resolve("Payment successful");
    });
}

const hotelName = "Grand Plaza";

let hotel = bookHotel(hotelName);

hotel
.then((hotelId) => {
    console.log(hotelId);
    return hotelId;
})
.then((hotelId) => {
    return payment(hotelId);
})
.then((response) => {
    console.log(response);
})
.catch((err) => {
    console.log(err);
});
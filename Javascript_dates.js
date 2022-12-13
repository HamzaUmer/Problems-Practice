function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"][new Date(dateString).getDay()]
    return dayName;
}

    const date = "12/13/2022";
    console.log(getDayName(date));

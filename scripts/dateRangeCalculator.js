const priceButton = document.querySelector("#priceButton");
priceButton.addEventListener("click", calculateCost);

const today = new Date();

const startDate = document.querySelector("#start_date");
startDate.addEventListener("input", assignStartDateValue);
var startDateValue;

const endDate = document.querySelector("#end_date");
endDate.addEventListener("input", assignEndDateValue);
var endDateValue;

var season1Start = new Date(2021, 6-1, 1);
var season1End = new Date(2021, 8-1, 31);
var season1Rate = 200;

var season2Start = new Date(2021, 9-1, 1);
var season2End = new Date(2021, 12-1, 18);
var season2Rate = 220;

var season3Start = new Date(2021, 12-1, 19);
var season3End = new Date(2022, 1-1, 31);
var season3Rate = 250;

var season4Start = new Date(2022, 2-1, 1);
var season4End = new Date(2022, 5-1, 31);
var season4Rate = 220;

/**
 * Calculates the total cost of stay between two selected dates
 * @returns {dates} an array of dates with cost per date
 */
function calculateCost(){
    var dates=[];
    var indexDate=startDateValue;
    const warning = document.querySelector("#Price");
    //validate inputs
    if(startDateValue == null || endDateValue==null){
        warning.innerHTML="Please select dates"; 
    }
    else if(startDateValue<today && endDateValue> today){
        warning.innerHTML="You need to select a start date after today";
    }
    else if (startDateValue< today && endDateValue <= today){
        warning.innerHTML="You need to select a start date and end date after today";
    }
    else if(endDateValue<=startDateValue){
        warning.innerHTML="End date should be after start date";
    }
    else{
        while(indexDate<endDateValue){
            //create date object and add to array, increase date value
            var oneDay={date:indexDate,cost:calculateCostPerDate
            (indexDate)};
            dates.push(oneDay);
            var day = indexDate.getDate();
            var month = indexDate.getMonth();
            var year=indexDate.getFullYear();
            indexDate = new Date(year, month, ++day);
        }
        dates.pop();
        //sum of cost per day for every object in the array
        console.log(dates);
        var totalCost=0;
        for(var i=0; i<dates.length; i++){
            totalCost+=dates[i].cost;
        }

        warning.innerHTML="Your total cost is $" + totalCost;
    }
}

/**
 * This function compares a given date to a range of dates to calculate price
 * @param {date} date The date to be checked
 * @returns {int} The cost of the date
 */
function calculateCostPerDate(date){
    var checkDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());
    var cost =0;
    
    if(checkDate>=season1Start && checkDate<=season1End){
        cost=season1Rate;
    }
    else if (checkDate>=season2Start && checkDate<=season2End){
        cost=season2Rate;
    }
    else if(checkDate>=season3Start && checkDate<= season3End){
        cost=season3Rate;
    }
    else if (checkDate>= season4Start && checkDate<= season4End){
        cost=season4Rate;
    }
    return cost;
}

/**
 * Assigns the selected date from a calendar to a Date variable
 */
function assignStartDateValue(){
    startDateValue=new Date(startDate.value);
}
/**
 * Assigns the selected date from a calendar to a Date variable
 */
function assignEndDateValue(){
    endDateValue=new Date(endDate.value);
}


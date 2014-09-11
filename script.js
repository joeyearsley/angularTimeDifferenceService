// Code goes here

var myModule = angular.module('myModule', []);

function ControllerZero($scope, timeDifferenceService) {
  $scope.timeDifference = timeDifferenceService;
  $scope.show = false;
}

myModule.service('timeDifferenceService', function() {
    this.workOut = function(Created) {
      var created = new Date(Created)
    	var timeNow = new Date()
    	console.log(created);
    	var temp = Math.floor((timeNow.getTime() - created.getTime())/ 1000);
    	var days = Math.floor((temp %= 31536000) / 86400);
    	var hours = Math.floor((temp %= 86400) / 3600);
    	var minutes = Math.floor((temp %= 3600) / 60);
    	var seconds = temp % 60;
    	
        function dayEnding(int){
    		switch(int){
    		case 1: b = "st";
    			break;
    		case 2: b = "nd";
    			break;
    		case 3: b = "rd";
    			break;
    		case 21: b = "st";
    			break;
    		case 22: b = "nd";
    			break;
    		case 23: b = "rd";
    			break;
    		case 31: b = "st";
    			break;
    		default: b = "th";
    		}
    		return b;
    		
    	}
    	function monthString(a){
    		switch(a){
            case 1: b = "January";
                break;
            case 2: b = "February";
                break;
            case 3: b = "March";
                break;
            case 4: b = "April";
                break;
            case 5: b = "May";
                break;
            case 6: b = "June"; 
                break;
            case 7: b = "July";
                break;
            case 8: b = "August";
                break;
            case 9: b = "September";
                break;
            case 10: b = "October";
                break;
            case 11: b = "November";
                break;
            case 12: b = "December";
                break;
            }
    		return b;
    	}
    	console.log(temp);
    if((timeNow.getFullYear() - created.getFullYear()) >= 1) return created.getDate() + dayEnding(created.getDate()) + ' ' + monthString(created.getMonth()+1) + ' ' + created.getFullYear()
    	else if(days > 1)  return created.getDate() + dayEnding(created.getDate()) + ' ' + monthString(created.getMonth()+1)
    	else if(days == 1) return 'Yesterday' 
    	else if(hours) return hours + ' Hours Ago'
    	else if(minutes) return minutes + ' Minutes Ago'
    	else if(seconds) return seconds + ' Seconds Ago'
    };
});

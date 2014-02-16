app.controller("stockController", ['$scope','$http','EndPointUrls',function($scope, $http,EndPointUrls){
	
	$scope.companies=[ {name:'GOOGLE',symbol:'GOOG'},
						{name:'MICROSOFT',symbol:'MSFT'},
						{name:'JP MORGAN',symbol:'JPM'},
						{name:'CISCO',symbol:'CSCO'},
						{name:'ZYNGA',symbol:'ZNGA'},
						{name:'FACEBOOK',symbol:'FB'},
						{name:'AIG',symbol:'AIG'}];
    
	$scope.user={firstName:'',lastName:'',email:''};
	$scope.showMessage=false;
	$scope.responseArray=[];
	
    $scope.init = function() {

    };
    
    $scope.clear=function(){
    	$scope.user={firstName:'',lastName:'',email:''};
    	$scope.showMessage=false;
    	$scope.selectedCompanies=[];
    	$scope.responseArray=[];
    };
    
    $scope.search=function(selectedCompanies){
    	$scope.showMessage = true;
    	//computing the url
    	var urlParams='?q=';
        angular.forEach(selectedCompanies,function(value,key){
        		urlParams+=value.symbol+',';
        		}
        ,urlParams);
        
        //http request can be moved to service
        $http({method: 'GET', url:EndPointUrls.GOOGLEFINANCE+urlParams}).
        success(function(data, status, headers, config){
        	//format JSON response
        	$scope.responseArray= JSON.parse(data.substr(4));
        
        }).error(function(data, status, headers,config){
        	console.log("error");
        });
        
    	
    	
    };
    
    //validation provided by angular/bootstrap; just sample code 
    $scope.validateFeilds= function(){
    	console.log(JSON.stringify($scope.user));
    	console.log($scope.user.email+":"+$scope.user.email.substr($scope.user.email.indexOf('@')+1));
    	if(!$scope.user.firstName){
    		alert("First Name is required");
    		return false;
    	}
    	if(!$scope.user.lastName){
    		alert("Last Name is required");
    		return false;
    	}
    	if(!$scope.user.email){
    		alert("Email cant be empty");
    		return false;
    	}else{
    		console.log($scope.user.email+":"+$scope.user.email.substr($scope.user.email.indexof('@')+1));
    		if($scope.user.email.indexOf('@')==-1 || ($scope.user.email.substr($scope.user.email.indexof('@')+1)).indexof('.')==-1){
    			alert("Not a valid email");
    		      return false;
    		}  
    			
    	}
    	
    	return true;
    	
    }; 

}]);


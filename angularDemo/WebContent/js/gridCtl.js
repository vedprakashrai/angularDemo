'use strict';

/*angular.module('widget',[]).filter('mapGender', function() {
	  var genderHash = {
			    1: 'male',
			    2: 'female'
			  };
			 
			  return function(input) {
			    if (!input){
			      return '';
			    } else {
			      return genderHash[input];
			    }
			  };
			})*/

function gridCtl(scope,rootScope,$location,$window,$routeParams, $timeout){
	
	scope.init = function() {
		
		
		
	}
	
	scope.data=[
			    {
			        "name": "Ethel Price",
			        "gender": "female",
			        "company": "Enersol"
			    },
			    {
			        "name": "Claudine Neal",
			        "gender": "female",
			        "company": "Sealoud"
			    },
			    {
			        "name": "Beryl Rice",
			        "gender": "female",
			        "company": "Velity"
			    },
			    {
			        "name": "Wilder Gonzales",
			        "gender": "male",
			        "company": "Geekko"
			    },
			    {
			        "name": "Georgina Schultz",
			        "gender": "female",
			        "company": "Suretech"
			    },
			    {
			        "name": "Carroll Buchanan",
			        "gender": "male",
			        "company": "Ecosys"
			    },
			    {
			        "name": "Valarie Atkinson",
			        "gender": "female",
			        "company": "Hopeli"
			    },
			    {
			        "name": "Schroeder Mathews",
			        "gender": "male",
			        "company": "Polarium"
			    },
			    {
			        "name": "Lynda Mendoza",
			        "gender": "female",
			        "company": "Dogspa"
			    },
			    {
			        "name": "Sarah Massey",
			        "gender": "female",
			        "company": "Bisba"
			    },
			    {
			        "name": "Robles Boyle",
			        "gender": "male",
			        "company": "Comtract"
			    },
			    {
			        "name": "Evans Hickman",
			        "gender": "male",
			        "company": "Parleynet"
			    },
			    {
			        "name": "Dawson Barber",
			        "gender": "male",
			        "company": "Dymi"
			    },
			    {
			        "name": "Bruce Strong",
			        "gender": "male",
			        "company": "Xyqag"
			    },
			    {
			        "name": "Nellie Whitfield",
			        "gender": "female",
			        "company": "Exospace"
			    },
			    {
			        "name": "Jackson Macias",
			        "gender": "male",
			        "company": "Aquamate"
			    },
			    {
			        "name": "Pena Pena",
			        "gender": "male",
			        "company": "Quarx"
			    },
			    {
			        "name": "Lelia Gates",
			        "gender": "female",
			        "company": "Proxsoft"
			    },
			    {
			        "name": "Letitia Vasquez",
			        "gender": "female",
			        "company": "Slumberia"
			    },
			    {
			        "name": "Trevino Moreno",
			        "gender": "male",
			        "company": "Conjurica"
			    },
			    {
			        "name": "Barr Page",
			        "gender": "male",
			        "company": "Apex"
			    },
			    {
			        "name": "Kirkland Merrill",
			        "gender": "male",
			        "company": "Utara"
			    },
			    {
			        "name": "Blanche Conley",
			        "gender": "female",
			        "company": "Imkan"
			    },
			    {
			        "name": "Atkins Dunlap",
			        "gender": "male",
			        "company": "Comveyor"
			    },
			    {
			        "name": "Everett Foreman",
			        "gender": "male",
			        "company": "Maineland"
			    },
			    {
			        "name": "Gould Randolph",
			        "gender": "male",
			        "company": "Intergeek"
			    },
			    {
			        "name": "Kelli Leon",
			        "gender": "female",
			        "company": "Verbus"
			    },
			    {
			        "name": "Freda Mason",
			        "gender": "female",
			        "company": "Accidency"
			    },
			    {
			        "name": "Tucker Maxwell",
			        "gender": "male",
			        "company": "Lumbrex"
			    },
			    {
			        "name": "Yvonne Parsons",
			        "gender": "female",
			        "company": "Zolar"
			    },
			    {
			        "name": "Woods Key",
			        "gender": "male",
			        "company": "Bedder"
			    },
			    {
			        "name": "Stephens Reilly",
			        "gender": "male",
			        "company": "Acusage"
			    },
			    {
			        "name": "Mcfarland Sparks",
			        "gender": "male",
			        "company": "Comvey"
			    },
			    {
			        "name": "Jocelyn Sawyer",
			        "gender": "female",
			        "company": "Fortean"
			    },
			    {
			        "name": "Renee Barr",
			        "gender": "female",
			        "company": "Kiggle"
			    },
			    {
			        "name": "Gaines Beck",
			        "gender": "male",
			        "company": "Sequitur"
			    },
			    {
			        "name": "Luisa Farrell",
			        "gender": "female",
			        "company": "Cinesanct"
			    },
			    {
			        "name": "Robyn Strickland",
			        "gender": "female",
			        "company": "Obones"
			    },
			    {
			        "name": "Roseann Jarvis",
			        "gender": "female",
			        "company": "Aquazure"
			    },
			    {
			        "name": "Johnston Park",
			        "gender": "male",
			        "company": "Netur"
			    },
			    {
			        "name": "Wong Craft",
			        "gender": "male",
			        "company": "Opticall"
			    },
			    {
			        "name": "Merritt Cole",
			        "gender": "male",
			        "company": "Techtrix"
			    },
			    {
			        "name": "Dale Byrd",
			        "gender": "female",
			        "company": "Kneedles"
			    },
			    {
			        "name": "Sara Delgado",
			        "gender": "female",
			        "company": "Netagy"
			    },
			    {
			        "name": "Alisha Myers",
			        "gender": "female",
			        "company": "Intradisk"
			    },
			    {
			        "name": "Felecia Smith",
			        "gender": "female",
			        "company": "Futurity"
			    },
			    {
			        "name": "Neal Harvey",
			        "gender": "male",
			        "company": "Pyramax"
			    },
			    {
			        "name": "Nola Miles",
			        "gender": "female",
			        "company": "Sonique"
			    },
			    {
			        "name": "Herring Pierce",
			        "gender": "male",
			        "company": "Geeketron"
			    },
			    {
			        "name": "Shelley Rodriquez",
			        "gender": "female",
			        "company": "Bostonic"
			    },
			    {
			        "name": "Cora Chase",
			        "gender": "female",
			        "company": "Isonus"
			    },
			    {
			        "name": "Mckay Santos",
			        "gender": "male",
			        "company": "Amtas"
			    },
			    {
			        "name": "Hilda Crane",
			        "gender": "female",
			        "company": "Jumpstack"
			    },
			    {
			        "name": "Jeanne Lindsay",
			        "gender": "female",
			        "company": "Genesynk"
			    },
			    {
			        "name": "Frye Sharpe",
			        "gender": "male",
			        "company": "Eplode"
			    },
			    {
			        "name": "Velma Fry",
			        "gender": "female",
			        "company": "Ronelon"
			    },
			    {
			        "name": "Reyna Espinoza",
			        "gender": "female",
			        "company": "Prismatic"
			    },
			    {
			        "name": "Spencer Sloan",
			        "gender": "male",
			        "company": "Comverges"
			    },
			    {
			        "name": "Graham Marsh",
			        "gender": "male",
			        "company": "Medifax"
			    },
			    {
			        "name": "Hale Boone",
			        "gender": "male",
			        "company": "Digial"
			    },
			    {
			        "name": "Wiley Hubbard",
			        "gender": "male",
			        "company": "Zensus"
			    },
			    {
			        "name": "Blackburn Drake",
			        "gender": "male",
			        "company": "Frenex"
			    },
			    {
			        "name": "Franco Hunter",
			        "gender": "male",
			        "company": "Rockabye"
			    },
			    {
			        "name": "Barnett Case",
			        "gender": "male",
			        "company": "Norali"
			    },
			    {
			        "name": "Alexander Foley",
			        "gender": "male",
			        "company": "Geekosis"
			    },
			    {
			        "name": "Lynette Stein",
			        "gender": "female",
			        "company": "Macronaut"
			    },
			    {
			        "name": "Anthony Joyner",
			        "gender": "male",
			        "company": "Senmei"
			    },
			    {
			        "name": "Garrett Brennan",
			        "gender": "male",
			        "company": "Bluegrain"
			    },
			    {
			        "name": "Betsy Horton",
			        "gender": "female",
			        "company": "Zilla"
			    },
			    {
			        "name": "Patton Small",
			        "gender": "male",
			        "company": "Genmex"
			    },
			    {
			        "name": "Lakisha Huber",
			        "gender": "female",
			        "company": "Insource"
			    },
			    {
			        "name": "Lindsay Avery",
			        "gender": "female",
			        "company": "Unq"
			    },
			    {
			        "name": "Ayers Hood",
			        "gender": "male",
			        "company": "Accuprint"
			    },
			    {
			        "name": "Torres Durham",
			        "gender": "male",
			        "company": "Uplinx"
			    },
			    {
			        "name": "Vincent Hernandez",
			        "gender": "male",
			        "company": "Talendula"
			    },
			    {
			        "name": "Baird Ryan",
			        "gender": "male",
			        "company": "Aquasseur"
			    },
			    {
			        "name": "Georgia Mercer",
			        "gender": "female",
			        "company": "Skyplex"
			    },
			    {
			        "name": "Francesca Elliott",
			        "gender": "female",
			        "company": "Nspire"
			    },
			    {
			        "name": "Lyons Peters",
			        "gender": "male",
			        "company": "Quinex"
			    },
			    {
			        "name": "Kristi Brewer",
			        "gender": "female",
			        "company": "Oronoko"
			    },
			    {
			        "name": "Tonya Bray",
			        "gender": "female",
			        "company": "Insuron"
			    },
			    {
			        "name": "Valenzuela Huff",
			        "gender": "male",
			        "company": "Applideck"
			    },
			    {
			        "name": "Tiffany Anderson",
			        "gender": "female",
			        "company": "Zanymax"
			    },
			    {
			        "name": "Jerri King",
			        "gender": "female",
			        "company": "Eventex"
			    },
			    {
			        "name": "Rocha Meadows",
			        "gender": "male",
			        "company": "Goko"
			    },
			    {
			        "name": "Marcy Green",
			        "gender": "female",
			        "company": "Pharmex"
			    },
			    {
			        "name": "Kirk Cross",
			        "gender": "male",
			        "company": "Portico"
			    },
			    {
			        "name": "Hattie Mullen",
			        "gender": "female",
			        "company": "Zilencio"
			    },
			    {
			        "name": "Deann Bridges",
			        "gender": "female",
			        "company": "Equitox"
			    },
			    {
			        "name": "Chaney Roach",
			        "gender": "male",
			        "company": "Qualitern"
			    },
			    {
			        "name": "Consuelo Dickson",
			        "gender": "female",
			        "company": "Poshome"
			    },
			    {
			        "name": "Billie Rowe",
			        "gender": "female",
			        "company": "Cemention"
			    },
			    {
			        "name": "Bean Donovan",
			        "gender": "male",
			        "company": "Mantro"
			    },
			    {
			        "name": "Lancaster Patel",
			        "gender": "male",
			        "company": "Krog"
			    },
			    {
			        "name": "Rosa Dyer",
			        "gender": "female",
			        "company": "Netility"
			    },
			    {
			        "name": "Christine Compton",
			        "gender": "female",
			        "company": "Bleeko"
			    },
			    {
			        "name": "Milagros Finch",
			        "gender": "female",
			        "company": "Handshake"
			    },
			    {
			        "name": "Ericka Alvarado",
			        "gender": "female",
			        "company": "Lyrichord"
			    },
			    {
			        "name": "Sylvia Sosa",
			        "gender": "female",
			        "company": "Circum"
			    },
			    {
			        "name": "Humphrey Curtis",
			        "gender": "male",
			        "company": "Corepan"
			    }
			]
	
	 scope.gridOptions = {};
	 //scope.gridOptions.enableCellEditOnFocus = true;
	 var $scope=scope;
	 $scope.msg = {};
	 scope.editedRows=[];
	 
	 
	 
	  scope.gridOptions={
		paginationPageSizes: [25, 50, 75],
	    paginationPageSize: 25,
		columnDefs:[
	    { name: 'name', displayName: 'Name', width: '20%' },
	    { name: 'gender', displayName: 'Gender', editableCellTemplate: 'ui-grid/dropdownEditor', width: '20%',
	      cellFilter: 'mapGender', editDropdownValueLabel: 'gender', editDropdownOptionsArray: [
	        { id: 1, gender: 'male' },
	        { id: 2, gender: 'female' }
	      ] 
	    },
	    { name: 'company', displayName: 'Company', width: '30%' }
	  ]};
	  
	  $scope.gridOptions.onRegisterApi = function(gridApi){
          //set gridApi on scope
          $scope.gridApi = gridApi;
          gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
            scope.editedRows.push(rowEntity);
            $scope.$apply();
          });
        };
	  
	  
	  for(var i = 0; i < scope.data.length; i++){
	      if ( scope.data[i].gender === 'male' ) {
	    	  scope.data[i].gender = 1;
	      } else {
	    	  scope.data[i].gender = 2;
	      }
	    }
	  
	  
	  scope.gridOptions.data = scope.data;
	  
	  scope.submitRows= function(){
		  
		  console.log(scope.editedRows);
		  
	  }
	  
	  
};


gridCtl.$inject = [ '$scope', '$rootScope','$location','$window', '$routeParams', '$timeout',];


angular.module('widget', ['ngRoute', 'sa', 'sa.ui.*','widget.accountDetails','widget.init','ngGrid', 'angularjs-dropdown-multiselect','widget.contactDetails','ui.grid', 'ui.grid.edit','ui.grid.pagination']) 
.config(['$routeProvider','$httpProvider','$locationProvider','widget.init.urlParamsProvider', function ($routeProvider,$httpProvider,$locationProvider) {
	var views_path = 'app/views/';
     
	$routeProvider		
	.when('/account', {templateUrl:views_path + 'accountDetails.html'/*,
						resolve:{urlParams:'urlParamsProvider'}*/})
	.when('/contact', {templateUrl:views_path + 'contactDetails.html'/*,
						resolve:{urlParams:'urlParamsProvider'}*/})
    .when('/grid', {templateUrl:views_path + 'grid.html'/*,
						resolve:{urlParams:'urlParamsProvider'}*/})
	.otherwise({redirectTo: '/'});
}]).run(function($location,$rootScope,$log){
	$rootScope.views_path = 'app/views/';
	$rootScope.summaryChangesURL = 'app/views/partials/summaryOfChanges.html';
	$log.debug($location.search());
	
}).filter('mapGender', function() {
	  var genderHash = {
			    1: 'male',
			    2: 'female'
			  };
			 
			  return function(input) {
			    if (!input){
			      return '';
			    } else {
			      return genderHash[input];
			    }
			  };
			});


<div ng-controller="gridCtl" ng-init="init()" >


 <strong>Last Cell Edited:</strong> {{msg.lastCellEdited}}
      <br>
 <div ui-grid="gridOptions" ui-grid-edit   ui-grid-pagination class="grid"></div>
 <div><button class="btn btn-primary" ng-click="submitRows()">Continue</button></div>
 </div>

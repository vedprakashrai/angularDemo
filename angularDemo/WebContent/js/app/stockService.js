angular.module('StockApp')
.factory('stockService', ['$http','EndPointUrls', function($http, EndPointUrls)
				 {
					return {
						getJSONResponse : function(selectedCompanies) {
							var urlParams='?q=';
					        angular.forEach(selectedCompanies,function(value,key){
					        		urlParams+=value.symbol+',';
					        		}
					        ,urlParams);
					        data= $http({method: 'GET', url:EndPointUrls.GOOGLEFINANCE+urlParams});
					      
					        return JSON.parse(data.substr(4));

						}
					};

				} 
		]
	);
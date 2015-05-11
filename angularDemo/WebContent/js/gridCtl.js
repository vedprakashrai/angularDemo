function gridCtrl(scope,rootScope,$location,$window,$routeParams, $timeout,DBTableService,$q,ErrorMsgSvc){
	
	scope.init = function() {
       /* scope.tables=[];
        DBTableService.getLookupTables().then(
        		function(response){scope.tables = response.data.lookupTable;},
        		function(error){console.log(error);});*/
	}
	scope.tables= [
		    {
		      "description": "Currency Code",
		      "name": "CurrencyCode"
		    },
		    {
		      "description": "Role",
		      "name": "Role"
		    },
		    {
		      "description": "Route",
		      "name": "Route"
		    },
		    {
		      "description": "Session",
		      "name": "Session"
		    },
		    {
		      "description": "Security Identifier",
		      "name": "SecurityIdentifier"
		    },
		    {
		      "description": "Security Identifier Source",
		      "name": "SecurityIdentifierSource"
		    }
		  ];

 	 scope.selectedTable="";
	 //scope.gridOptions.enableCellEditOnFocus = true;
	 scope.msg = {};
	 scope.disabled={'save':true,'add':false,'delete':true}
	 scope.editedRows=[];
	 var columnDefs=[];
	 scope.gridOptions = {
			 paginationPageSizes: [20,40,60,80,100],
			 paginationPageSize: 20,
			 enableGridMenu: true,
	 };
	 scope.gridOptions.onRegisterApi = function(gridApi){
         //set gridApi on scope
         scope.gridApi = gridApi;
         gridApi.edit.on.afterCellEdit(scope,function(rowEntity, colDef, newValue, oldValue){
          if(newValue!=oldValue){
        	  oldValue=oldValue===undefined?'':oldValue;
        	  scope.msg.lastCellEdited = 'Edited Row id:' + rowEntity.ID + ' |  Column:' + colDef.name + ' |  New Value:' + newValue + ' |  Old Value:' + oldValue ;
        	  scope.editedRows.push(rowEntity);
          		}
    		  scope.disabled.save=scope.editedRows.length?false:true;
          scope.$apply();
         });
         
         gridApi.selection.on.rowSelectionChanged(scope,function(row){
        		 scope.disabled.delete=scope.gridApi.selection.getSelectedRows().length?false:true;
           });
         
      /*   gridApi.rowEdit.on.saveRow(scope, scope.saveRow);*/
       };
       var setTableData= function(tableData){
  		 if(!tableData.data.data)
  			 ErrorMsgSvc.showPopup("No results found", "warning", 1500);
  		 else
  			 scope.gridOptions.data = tableData.data.data;
  		 //scope.gridOptions.data = tableData.data[scope.selectedTable];
  	 }
       
	 var tableDataService = function(selectedTable){
		 DBTableService.getTableData(selectedTable).then(
					setTableData,
					function(error){console.log(error);})
	 }
	 
	 var setTable = function(tableMetadata){
		 	columnDefs=[];
		 	scope.msg.lastCellEdited='';
			tableMetadata.data.columns.forEach(function(column){
					var colVisible=!['CREATETIMESTAMP','MODIFYTIMESTAMP','VERSION'].contains(column.name);
					columnDefs.push({'name':column.name,'displayName':column.name,enableCellEdit:!column.isPrimaryKeyColumn,visible:colVisible})	
			});	
			//scope.gridOptions = {};
			scope.gridOptions.columnDefs=columnDefs;
			tableDataService(scope.selectedTable);
	 		}
	 
	 scope.getTableMetadata =function(selectedTable){
		 if(selectedTable && selectedTable!=undefined){
			 //TODO remove  this after service change 
			 scope.selectedTable=selectedTable;
			 DBTableService.getTableMetadata(selectedTable).then(setTable,function(error){console.log(error);});
		 }
	 }
	  
	  //scope.gridOptions.data = scope.data.Role;
	 scope.deleteRow =function(){
		 var promiseList=[];
		 scope.gridApi.selection.getSelectedRows().forEach(function(row){
			  var promise=DBTableService.deleteRow(scope.selectedTable,row);
			  promiseList.push(promise);				
			  					
		  });
		 $q.all(promiseList).then( function(response){tableDataService(scope.selectedTable)},
             					   function(error){console.log(error);ErrorMsgSvc.showAlert("Error")});
	 }
	  
	  scope.addNew = function() {
		    scope.gridOptions.data.unshift({'ID':'NEW'});  
		  };
	  
	  scope.submitRows= function(){
		  var uniqueList=[];
		  var updatePromiseList=[];
		  var insertPromiseList=[];
		  var uniqueList = _.uniq(scope.editedRows, function(item, key,$$hashKey) { 
			    return item.$$hashKey;
			});
		  scope.editedRows=[];
		  uniqueList.forEach(function(row){
			  if(row && row.ID==='NEW')
				  insertPromiseList.push(DBTableService.addRow(scope.selectedTable,row));
			  else
				  updatePromiseList.push(DBTableService.updateRow(scope.selectedTable,row));
		  });
		  
		  $q.all(insertPromiseList).then(
				  function(response){tableDataService(scope.selectedTable)},
		          function(error){console.log(error);ErrorMsgSvc.showAlert("Error")});
		                                                 
		  $q.all(updatePromiseList).then(
				  function(response){tableDataService(scope.selectedTable)},
		          function(error){console.log(error);
		          				 ErrorMsgSvc.showAlert("Error")
		          				 });
		  
	  }
	  
	  
};


gridCtrl.$inject = [ '$scope', '$rootScope','$location','$window', '$routeParams', '$timeout','DBTableService','$q','ErrorMsgSvc'];



app.factory('TableDefService', ['$http','$q', '$rootScope', function($http,$q,$rootScope) {
    function getTableDef(tableName,userId){
    	 		var deferred = $q.defer();
				var promise = $http({ method: 'GET', url:$rootScope.APIServer + "services/ui/tables/" + tableName})
				.success(function(data) {
			       // deferred.resolve(data);
					deferred.resolve(undefined);
			     })
			     .error(function(data) {
			         deferred.resolve(undefined);
			     });
				return deferred.promise;
			}
	   
	return {
			getTableDef:getTableDef
			};
	}]);
	
	     access : access.anon
        }).when('/transactions', {
            templateUrl : 'views/transactions.html',
            controller : TradeTablesCtrl,
            resolve:{
            	
            	blockTableConfig:function(TableDefService){
            	   return TableDefService.getTableDef('blockTable');
            	   
            	},
            	accTableConfig:function(TableDefService){
            	   return TableDefService.getTableDef('accTable');
            	   
            	}
            },

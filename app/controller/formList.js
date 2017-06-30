formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: {    
                data: 
                [
                    { formList: "Form 1", dateModified:"10/08/2014" },
                    { formList: "Form 2", dateModified:"25/01/2009" },
                    { formList: "Form 3", dateModified:"29/07/2012" },
                    { formList: "Form 4", dateModified:"08/03/2004" },
                    { formList: "Form 5", dateModified:"17/11/2016" },
                    { formList: "Form 6", dateModified:"22/09/2017" },
                    { formList: "Form 7", dateModified:"24/05/2010" },
                ],
            },

            sortable: true,
            pageable: true,
            resizable: true,
            selectable: true,
            pageable: {
                pageSize: 2,
                previousNext: true,
                input: true,
                pageSizes: true,
            },

            columns: 
            [
                {
                    field: "formList",
                    title: "Form List",
                },
                
                {   
                    field: "actions",
                    title: "Actions",
                    template: 
                    "<input type='button' name='btnEdit' class='k-button' value='Edit Form' ui-sref='formEdit'/><input type='button' name='btnDelete' class='k-button' value='Delete Form'>"
                }
            ],
    };
}
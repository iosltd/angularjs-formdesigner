formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: {    
                data: 
                [
                    { formList: "Form 1"},
                    { formList: "Form 2"},
                    { formList: "Form 3"},
                    { formList: "Form 4"},
                    { formList: "Form 5"},
                    { formList: "Form 6"},
                    { formList: "Form 7"},
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
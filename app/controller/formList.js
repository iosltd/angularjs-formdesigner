formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: {    
                data: 
                [
                    { formList: "Form 1"},
                    { formList: "Form 2"},
                    { formList: "Form 3"},
                ],
                pageSize: 5
            },

            sortable: true,
            pageable: true,
            resizable: true,
            selectable: true,
            toolbar: 
            [
                { template: "<input type='button' name='btnEdit' class='k-button' value='Create Form' ui-sref='formEdit'>" },
                "destroy","cancel"
            ],

            columns: 
            [
                {
                    field: "formList",
                    title: "Form List",
                },
                
                {   
                    field: "actions",
                    title: "Actions",
                    template: "<input type='button' name='btnEdit' class='k-button' value='Edit Form' ui-sref='formEdit'>"
                }
            ],
    };
}
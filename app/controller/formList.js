formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: {    
                data: 
                [
                    { name: "Donald", surname: "Draper", job: "Lawyer"},
                    { name: "Dexter", surname: "Morgan", job: "Officer"},
                    { name: "Anna", surname: "Boyd", job: "Nurse"},
                ],

                pageSize: 5,
                serverPaging: true,
                serverSorting: true
            },

            sortable: true,
            pageable: true,
            resizable: true,
            selectable: true,
            toolbar: ["create", "destroy","cancel"],

            columns: 
            [
                { selectable: true, width: "50px" },
                {
                    field: "name",
                    title: "Name",
                },
                {
                    field: "surname",
                    title: "Surname",
                },
                {
                    field: "job",
                    title: "Job",
                },
                { template: "<input type='button' name='btnEdit' class='k-button' value='Edit Form'>"}
            ],

            editable: {
                confirmation: true,
                confirmDelete: "Yes",
            }
    };
}
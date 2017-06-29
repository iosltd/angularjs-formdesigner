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
            toolbar: ["create", "edit", "delete", "cancel"],

            columns: 
            [
                { template: "<input type='checkbox' class='checkbox' />" },
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
            ]
    };
}
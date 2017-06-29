formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: {    
                data: 
                [
                    { name: "Donald", surname: "Draper", job: "Lawyer", checkBox:null},
                    { name: "Dexter", surname: "Morgan", job: "Officer", checkBox:null},
                    { name: "Anna", surname: "Boyd", job: "Nurse", checkBox:null},
                ],

                pageSize: 5,
                serverPaging: true,
                serverSorting: true
            },

            columns: 
            [
                {
                    field: "checkBox",
                    title: "checkBox"
                },
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
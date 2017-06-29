formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: {
                
                pageSize: 5,
                serverPaging: true,
                serverSorting: true
            },
            sortable: true,
            pageable: true,
            
            columns: 
            [
                {
                    field: "Col1",
                    title: "Column 1",
                },
                {
                    field: "Col2",
                    title: "Column 2",
                },
                {
                    field: "Col3",
                    title: "Column 3",
                },
                {
                    field: "Col4",
                    title: "Column 4",
                },
            ]
    };
}
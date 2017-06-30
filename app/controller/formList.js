formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: [
                {
                    formName: "Form 1",
                    dateModified: "10/08/2014",
                    dateCreated: "25/04/2008"
                },
                {
                    formName: "Form 2",
                    dateModified: "25/01/2009",
                    dateCreated: "21/09/2001"

                },
                 {
                    formName: "Form 3",
                    dateModified: "29/07/2012",
                    dateCreated: "25/04/2004"

                },
                 {
                    formName: "Form 4",
                    dateModified: "08/03/2004",
                    dateCreated: "19/12/2003"
                },
                 {
                    formName: "Form 5",
                    dateModified: "17/11/2016",
                    dateCreated: "09/10/2000"
                },
                {
                    formName: "Form 6",
                    dateModified: "22/09/2017",
                    dateCreated: "15/01/2008"
                },
                {
                    formName: "Form 7",
                    dateModified: "24/05/2010",
                    dateCreated: "29/05/2006"
                },
                
            ],

            sortable: true,
            pageable: true,
            resizable: true,
            selectable: true,
            pageable: {
                pageSize: 4,
                previousNext: true,
                input: true,
                pageSizes: true,
            },

            columns: 
            [
                {
                    field: "formName",
                    title: "Names",
                },
                {
                    field: "dateModified",
                    title: "Date Modified"
                },
                {
                    field: "dateCreated",
                    title: "Date Created"
                },
                {   
                    field: "actions",
                    title: "Actions",
                    template: 
                    "<input type='button' name='btnEdit' class='k-button' value='Edit Form' ui-sref='formEdit'/><input type='button' name='btnDelete' class='k-button' value='Delete Form'>"
                },
            ],
    };
}
formDesignerApp.controller('formList', formList);

function formList ($scope) {
    $scope.mainGridOptions = {
            dataSource: [
                {
                     forms: "Form 1",
                        date: [
                            { dateModified: "10/08/2014" }
                        ]
                },
                {
                    forms: "Form 2",
                        date: [
                            { dateModified: "25/01/2009" }
                        ]
                },
                 {
                    forms: "Form 3",
                        date: [
                            { dateModified: "29/07/2012" }
                        ]
                },
                 {
                    forms: "Form 4",
                        date: [
                            { dateModified: "08/03/2004" }
                        ]
                },
                 {
                    forms: "Form 5",
                        date: [
                            { dateModified: "17/11/2016" }
                        ]
                },
                {
                     forms: "Form 6",
                        date: [
                            { dateModified: "22/09/2017" }
                        ]
                },
                {
                     forms: "Form 7",
                        date: [
                            { dateModified: "24/05/2010" }
                        ]
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

            detailTemplate: 'Form Details: <div class="grid"></div>',
            detailInit: function(e) {
                e.detailRow.find(".grid").kendoGrid({
                dataSource: e.data.date
                });
            },

            columns: 
            [
                {
                    field: "forms",
                    title: "Forms",
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
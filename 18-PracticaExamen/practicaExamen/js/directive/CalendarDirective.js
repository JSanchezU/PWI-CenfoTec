app.directive("calendar", function($location, $localStorage, $filter) {
    /*directive("calendar",['$scope', '$routeParams', '$localStorage', function($scope, $routeParams, $localStorage){*/
    return {
        restrict: "E",
        templateUrl: "js/directive/CalendarDirective.html",
        scope: {
            selected: "="
        },
        link: function(scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.month = scope.selected.clone();

            var start = scope.selected.clone();
            start.date(1);
            _removeTime(start.day(0));

            _buildMonth(scope, start, scope.month);

            scope.select = function(day) {
                scope.selected = day.date.clone().format();
                $localStorage.selectedDay = scope.selected;
                var path = $location.path('/allAppointmentsByDay/' + scope.selected);
                return path;  
            };

            scope.next = function() {
                var next = scope.month.clone();
                _removeTime(next.month(next.month()+1)).date(1);
                scope.month.month(scope.month.month()+1);
                _buildMonth(scope, next, scope.month);
            };

            scope.previous = function() {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month()-1).date(1));
                scope.month.month(scope.month.month()-1);
                _buildMonth(scope, previous, scope.month);
            };
        }
    };
    
    function _removeTime(date) {
        return date.startOf('day')
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }




    function _buildWeek(date, month) {
        var days = [];

            var cantAppointmentsPerDays = [
        {
            id: "2000-01-07",
            day: "01",
            cantAppointments: 2,
            },
        {
            id: "2000-02-07",
            day: "02",
            cantAppointments: 0,
            },
        {
            id: "2000-03-07",
            day: "03",
            cantAppointments: 1,
            },
        {
            id: "2000-04-07",
            day: "04",
            cantAppointments: 2,
            },
        {
            id: "2000-05-07",
            day: "05",
            cantAppointments: 2,
            },
        {
            id: "2000-06-07",
            day: "06",
            cantAppointments: 3,
            },
        {
            id: "2000-07-07",
            day: "07",
            cantAppointments: 0,
            },
        {
            id: "2000-08-07",
            day: "08",
            cantAppointments: 4,
            },
        {
            id: "2000-09-07",
            day: "09",
            cantAppointments: 1,
            },
        {
            id: "2000-10-07",
            day: "10",
            cantAppointments: 3,
            },
        {
            id: "2000-11-07",
            day: "11",
            cantAppointments: 6,
            },
        {
            id: "2000-12-07",
            day: "12",
            cantAppointments: 7,
            },
        {
            id: "2000-13-07",
            day: "13",
            cantAppointments: 3,
            },
        {
            id: "2000-14-07",
            day: "14",
            cantAppointments: 4,
            },
        {
            id: "2000-15-07",
            day: "15",
            cantAppointments: 5,
            },
        {
            id: "2000-16-07",
            day: "16",
            cantAppointments: 1,
            },
        {
            id: "2000-17-07",
            day: "17",
            cantAppointments: 1,
            },
        {
            id: "2000-18-07",
            day: "18",
            cantAppointments: 0,
            },
        {
            id: "2000-19-07",
            day: "19",
            cantAppointments: 0,
            },
        {
            id: "2000-20-07",
            day: "20",
            cantAppointments: 3,
            },
        {
            id: "2000-02-07",
            day: "21",
            cantAppointments: 1,
            },
        {
            id: "2000-22-07",
            day: "22",
            cantAppointments: 4,
            },
        {
            id: "2000-23-07",
            day: "23",
            cantAppointments: 4,
            },
        {
            id: "2000-24-07",
            day: "24",
            cantAppointments: 2,
            },
        {
            id: "2000-25-07",
            day: "25",
            cantAppointments: 5,
            },
        {
            id: "2000-26-07",
            day: "26",
            cantAppointments: 0,
            },
        {
            id: "2000-27-07",
            day: "27",
            cantAppointments: 7,
            },
        {
            id: "2000-28-07",
            day: "28",
            cantAppointments: 3,
            },
        {
            id: "2000-29-07",
            day: "29",
            cantAppointments: 2,
            },
        {
            id: "2000-30-07",
            day: "30",
            cantAppointments: 2,

            },
        {
            id: "2000-31-07",
            day: "31",
            cantAppointments: 1,
            }
        ];

        function getAppoimrntaByDay(myday){
            var appointments = $filter('filter')(cantAppointmentsPerDays,{day:myday});
            return appointments[0].cantAppointments;
        }

        //console.log(getAppoimrntaByDay("31"));

      

        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                //cantAppointments: $filter('day')(cantAppointmentsPerDays, cantAppointments, date.date())--$filter('cantAppointments')(cantAppointmentsPerDays, cantAppointments),/*Math.floor((Math.random() * 10) + 1)*/
                date: date,
                cantAppointments: getAppoimrntaByDay(date.date())
            });

             console.log(date.date());
             console.log(getAppoimrntaByDay(date.date()));

            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }

});
$(document).ready(function () {
    var $select = $(".month");
        var arr=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        for (i=1;i<=12;i++){
            $select.append($('<option></option>').val(i).html(arr[i-1]))
        }
        for (var i = 2018; i <= 2019; i++) {
            $('<option>').attr('value', i).text(i).appendTo('.year');
        }
        function monthChanged() {
            var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var month = $('.month').val() - 1,
                year = +$('.year').val();

            // Check for leap year if Feb
            if (month == 1 && new Date(year, month, 29).getMonth() == 1) days[1]++;

            // Add/Remove options
            if ($('.day option').length > days[month]) {
                // Remove
                $('.day option').slice(days[month]).remove();
            } else if ($('.day option').length < days[month]) {
                // Add
                for (var i = $('.day option').length+1; i <= days[month]; i++) {
                    $('<option>').attr('value', i).text(i).appendTo('.day');
                }
            }
        }

    $(function () {
        monthChanged(); // On document ready
        $('.month').change(monthChanged); // On month change
        $('.year').change(monthChanged); // On year change (for leap years)
    });
});
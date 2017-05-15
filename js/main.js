angular.module('myApp',['ngMaterial', 'ngMessages'])
    .controller('myCtrl', function($scope) {
        $scope.data = {
            cb1: true,
            cb2: true,
            cb3: true,
            cb4: false
        };

        $scope.message = 'false';

        $scope.onChange = function(cbState) {
            $scope.message = cbState;
        };

        $scope.test = {
            time: '14:00',
            number: '1',
            text: 'כולם',
            percent: '50%',
            rate: 30,
            symbol: '50 ₪',
            x: 'X',
            text2: 'ביג עין המפרץ',
            text3: "60דק'",

            text4: 'אגד תעבורה',
            text5: 'המטייל יקנעם',
            text6: 'המסיע',
            text7: 'מסיעיי',
            text8: 'לא מוגדר',
            text9: 'אגדתעבורה'
        };
    });

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
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


(function () {
    document.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if ('SPAN' != target.tagName ||
            !(target.className == 'minus' || target.className == 'plus')) return false;
        var el = target.parentNode || target.parentElement,
            inp = el.children[0],
            val = +inp.value;
        inp.value = val + (target.className == 'minus' ? val > 1 ? -1: 0: 1);
    }
}());
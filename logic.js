function _0x58da() {
    var _0xda905c = ['5240IWfnMG', 'qty2', '111920cTqXvp', 'classList', 'result', '8KnwnGP', '6327rnlmZs', '12sFboOf', '577458kMDUIl', 'value', 'body', 'Please\x20enter\x20valid\x20quantities.', '992893LLgcTX', 'innerHTML', 'checked', '2525496nUEgYM', '5187917KyWXmP', 'qty1', '<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Total\x20Units:</strong>\x20', 'toggle', 'price2', 'price1', '<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Total\x20Investment:</strong>\x20₹', '88hhQumk', '1369rkvRST', '\x0a\x0a\x20\x20\x20\x20\x20\x20', 'toFixed', 'getElementById', '750pBoQil'];
    _0x58da = function() {
        return _0xda905c;
    };
    return _0x58da();
}(function(_0x34cce4, _0x18e11b) {
    var _0x172af5 = _0x32b5,
        _0xd20fc5 = _0x34cce4();
    while (!![]) {
        try {
            var _0x24f470 = -parseInt(_0x172af5(0x19d)) / 0x1 * (-parseInt(_0x172af5(0x1a1)) / 0x2) + -parseInt(_0x172af5(0x1aa)) / 0x3 + -parseInt(_0x172af5(0x19c)) / 0x4 * (parseInt(_0x172af5(0x1a4)) / 0x5) + -parseInt(_0x172af5(0x194)) / 0x6 + -parseInt(_0x172af5(0x195)) / 0x7 * (-parseInt(_0x172af5(0x1a7)) / 0x8) + parseInt(_0x172af5(0x1a8)) / 0x9 * (parseInt(_0x172af5(0x1a2)) / 0xa) + -parseInt(_0x172af5(0x1ae)) / 0xb * (parseInt(_0x172af5(0x1a9)) / 0xc);
            if (_0x24f470 === _0x18e11b) break;
            else _0xd20fc5['push'](_0xd20fc5['shift']());
        } catch (_0x16aacd) {
            _0xd20fc5['push'](_0xd20fc5['shift']());
        }
    }
}(_0x58da, 0x6830d));

function calculateAverage() {
    var _0xe885 = _0x32b5,
        _0x1f8279 = parseFloat(document['getElementById'](_0xe885(0x19a))['value']) || 0x0,
        _0x2ae83d = parseFloat(document[_0xe885(0x1a0)](_0xe885(0x196))['value']) || 0x0,
        _0x26cc2e = parseFloat(document[_0xe885(0x1a0)](_0xe885(0x199))[_0xe885(0x1ab)]) || 0x0,
        _0x3e8fa5 = parseFloat(document['getElementById'](_0xe885(0x1a3))[_0xe885(0x1ab)]) || 0x0,
        _0x3edad8 = _0x1f8279 * _0x2ae83d + _0x26cc2e * _0x3e8fa5,
        _0xf79098 = _0x2ae83d + _0x3e8fa5;
    if (_0xf79098 === 0x0) {
        document['getElementById'](_0xe885(0x1a6))['innerText'] = _0xe885(0x1ad);
        return;
    }
    var _0x3674e9 = _0x3edad8 / _0xf79098;
    document['getElementById'](_0xe885(0x1a6))[_0xe885(0x1af)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Average\x20Price:</strong>\x20₹' + _0x3674e9[_0xe885(0x19f)](0x2) + _0xe885(0x197) + _0xf79098 + _0xe885(0x19b) + _0x3edad8[_0xe885(0x19f)](0x2) + _0xe885(0x19e);
}

function _0x32b5(_0x12478d, _0x3ec39e) {
    var _0x58daf8 = _0x58da();
    return _0x32b5 = function(_0x32b5d8, _0x22f452) {
        _0x32b5d8 = _0x32b5d8 - 0x193;
        var _0x17f4c3 = _0x58daf8[_0x32b5d8];
        return _0x17f4c3;
    }, _0x32b5(_0x12478d, _0x3ec39e);
}
document['getElementById']('themeSwitcher')['addEventListener']('change', function() {
    var _0x29fb17 = _0x32b5;
    document[_0x29fb17(0x1ac)][_0x29fb17(0x1a5)][_0x29fb17(0x198)]('dark-mode', this[_0x29fb17(0x193)]);
});

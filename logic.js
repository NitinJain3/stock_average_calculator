const _0x5c76fd = _0x3951;
(function(_0x1db262, _0x26b2e8) {
    const _0x1e4972 = _0x3951,
        _0x5c546d = _0x1db262();
    while (!![]) {
        try {
            const _0x33deb3 = -parseInt(_0x1e4972(0x14f)) / 0x1 + parseInt(_0x1e4972(0x160)) / 0x2 + -parseInt(_0x1e4972(0x151)) / 0x3 + -parseInt(_0x1e4972(0x147)) / 0x4 * (parseInt(_0x1e4972(0x157)) / 0x5) + parseInt(_0x1e4972(0x152)) / 0x6 + parseInt(_0x1e4972(0x146)) / 0x7 * (parseInt(_0x1e4972(0x156)) / 0x8) + -parseInt(_0x1e4972(0x15f)) / 0x9 * (parseInt(_0x1e4972(0x14d)) / 0xa);
            if (_0x33deb3 === _0x26b2e8) break;
            else _0x5c546d['push'](_0x5c546d['shift']());
        } catch (_0x11ef5a) {
            _0x5c546d['push'](_0x5c546d['shift']());
        }
    }
}(_0x37f4, 0x30c35));

function _0x37f4() {
    const _0x4d30ea = ['393634godxSs', '7VzBlKG', '4TRjCiO', 'qty1', 'classList', 'change', 'addEventListener', '<br>\x0a\x20\x20\x20\x20\x20\x20<strong>Total\x20Investment:</strong>\x20₹', '70jdCtdx', 'dark-mode', '81502wRRwMY', 'toggle', '22131RfxdIE', '1746744cthuTU', 'qty2', '\x0a\x20\x20\x20\x20\x20\x20<strong>Average\x20Price:</strong>\x20₹', 'themeSwitcher', '2131928wLPBCj', '957905kChQRL', 'checked', 'getElementById', 'innerHTML', 'innerText', 'result', 'toFixed', 'value', '352593FQmWLb'];
    _0x37f4 = function() {
        return _0x4d30ea;
    };
    return _0x37f4();
}

function calculateAverage() {
    const _0x104035 = _0x3951,
        _0x2a3a47 = parseFloat(document[_0x104035(0x159)]('price1')[_0x104035(0x15e)]),
        _0xd4f172 = parseFloat(document['getElementById'](_0x104035(0x148))[_0x104035(0x15e)]),
        _0x1b7130 = parseFloat(document[_0x104035(0x159)]('price2')[_0x104035(0x15e)]),
        _0x2d2a24 = parseFloat(document[_0x104035(0x159)](_0x104035(0x153))['value']);
    if (isNaN(_0x2a3a47) || isNaN(_0xd4f172) || isNaN(_0x1b7130) || isNaN(_0x2d2a24)) {
        document['getElementById']('result')['innerText'] = 'Please\x20fill\x20all\x20fields\x20correctly.';
        return;
    }
    if (_0x2a3a47 <= 0x0 || _0xd4f172 <= 0x0 || _0x1b7130 <= 0x0 || _0x2d2a24 <= 0x0) {
        document[_0x104035(0x159)](_0x104035(0x15c))[_0x104035(0x15b)] = 'All\x20values\x20must\x20be\x20greater\x20than\x20zero.';
        return;
    }
    const _0x4c77a6 = _0x2a3a47 * _0xd4f172 + _0x1b7130 * _0x2d2a24,
        _0x249ece = _0xd4f172 + _0x2d2a24,
        _0x223569 = _0x4c77a6 / _0x249ece;
    document[_0x104035(0x159)](_0x104035(0x15c))[_0x104035(0x15a)] = _0x104035(0x154) + _0x223569[_0x104035(0x15d)](0x2) + '<br>\x0a\x20\x20\x20\x20\x20\x20<strong>Total\x20Units:</strong>\x20' + _0x249ece + _0x104035(0x14c) + _0x4c77a6[_0x104035(0x15d)](0x2) + '\x0a\x20\x20\x20\x20';
}

function _0x3951(_0x1d8489, _0x15f888) {
    const _0x37f45e = _0x37f4();
    return _0x3951 = function(_0x39514a, _0x285fca) {
        _0x39514a = _0x39514a - 0x146;
        let _0x5f4c9f = _0x37f45e[_0x39514a];
        return _0x5f4c9f;
    }, _0x3951(_0x1d8489, _0x15f888);
}
document[_0x5c76fd(0x159)](_0x5c76fd(0x155))[_0x5c76fd(0x14b)](_0x5c76fd(0x14a), function() {
    const _0x498e0a = _0x5c76fd;
    document['body'][_0x498e0a(0x149)][_0x498e0a(0x150)](_0x498e0a(0x14e), this[_0x498e0a(0x158)]);
});


QUnit.module('Calculator Test Suite', { before: function () { initialize();}});
QUnit.test("Initialize Test", function (assert) {
    assert.expect(2);
    var expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtInput.value);
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
    });

QUnit.test("Button Click Test", function (assert) {
    var buttonQuantity = 10;
    assert.expect(buttonQuantity * 2);

    for (var i=0;i<buttonQuantity;i++){
        var btn = document.getElementById('btn' + i);
        btn.click();
        var result = txtInput.value[txtInput.value.length-1];
        var expected = String(i);
        assert.equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        assert.equal(txtInput.value.length,expectedLength,
                    "Exptected String Length: " + expectedLength + 
                    " Actual value: " + txtInput.value.length);
    }
});

QUnit.test("Button [+] Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btn = document.getElementById("btnPlus");
    btn.click();
    var expected = '30';
    assert.equal(txtResult.value,expected, 'Expected value: ' + expected + 
            ' Actual value: ' + txtResult.value);
    expected = '0';
    assert.equal(txtInput.value,expected, 'Expected value: ' + expected + 
    ' Actual value: ' + txtInput.value)
});

QUnit.test("Button [-] Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btn = document.getElementById("btnMinus");
    btn.click();
    var expected = '10';
    assert.equal(txtResult.value,expected, 'Expected value: ' + expected + 
            ' Actual value: ' + txtResult.value);
    expected = '0';
    assert.equal(txtInput.value,expected, 'Expected value: ' + expected + 
    ' Actual value: ' + txtInput.value)
});

QUnit.test("Button [CE] Test", function (assert) {
    assert.expect(1);
    txtInput.value = '10';
    var btn = document.getElementById("btnClearEntry");
    btn.click();
    var expected = '0';
    assert.equal(txtInput.value,expected, 'Expected value: ' + expected + 
            ' Actual value: ' + txtInput.value);
});

QUnit.test("Button [C] Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btn = document.getElementById("btnClear");
    btn.click();
    var expected = '0';
    assert.equal(txtInput.value,expected, 'Expected value: ' + expected + 
            ' Actual value: ' + txtInput.value);
    assert.equal(txtResult.value,expected, 'Expected value: ' + expected + 
            ' Actual value: ' + txtResult.value);
});

//TEST DE PRUEBA DEL MODULO 2
/*
var greeting = "Hello World";
QUnit.test("A Hello World Test", function ( assert ) {
    assert.equal(greeting, "Hello World", "Expect greeting of Hello World");
    });*/
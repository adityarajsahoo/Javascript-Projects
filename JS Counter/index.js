function increment()
{
    var number = Number(document.getElementById('number').innerHTML)

    document.getElementById('number').innerHTML = number + 1
}
/* To take the value from h1 text, we have to write .innerhtml */

function decrement()
{
    var number = Number(document.getElementById('number').innerHTML)

    document.getElementById('number').innerHTML = number - 1
}
function neutral()
{

    document.getElementById('number').innerHTML = 0
}
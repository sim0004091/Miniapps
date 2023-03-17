'use strict';

function String.prototype.splice(start: int, delCount: int, s: string): String
{
    return s.substring(0, start) + s + s.substring(start + delCount);
}

const DIGITS: readonly string = '-0123456789.π';
const FUNS_3: readonly string[] = [ 'POW', 'log', 'sin', 'cos', 'tan' ];
const FUNS_6: readonly string[] = [ 'arcsin', 'arccos', 'arctan' ];
const FUNS: readonly string[] = [ '√' ].concat(FUNS_3).concat(FUNS_6);

let inp: HTMLInputElement, oup: HTMLParagraphElement;
let str: String;
let arr: String[];

window.onload = () => {
    inp = document.getElementById('inp') as HTMLInputElement;
    oup = document.getElementById('oup') as HTMLParagraphElement;
}

function all_clear() {
    inp.value = '0';
}

function compute() {
    str = String(inp.value);
    arr = str.split(/(-?[0-9]+.?[0-9])/);
    alert(arr);

//    cure();

}

function calculate(s: string): string {
    return '';
}
/*
function cure()
{
    if (str.length < 2)
    {
        return;
    }
    
    let i: int = 0;
    do
    {
        const pos: int = str.substring(1, str.length).indexOf(FUNS[i]);
	if (DIGITS.includes(str[pos]))
	{
	    str.splice(pos, 0, '*');
	    
	}
	
    } while (i < FUNS.length);
}

function pair_braces(s: string): string {
    const braces = [];
    for (let i = 0; i < s.length; i++) {
        switch (str[i]) {
            case '(':
                braces.push(i);
                break;
            case ')':
                if (braces.length == 0)
                    return 'error';
                else {
		    const ob: int = braces.slice(-1);
		    
                    let sub: string = str.substring(ob, i+1);
                    let tmp: string = '';
		    if (str[ob - 1] == '√')
		    {
		        str.replace(str.substring(ob - 1, i+1), calculate('√', sub));
		    }
		    else if (FUNS_3.includes(str.substring(ob - 3, ob)))
		    {
		        str.replace(str.substring(ob - 3, i+1), calculate(str.substring(ob - 3, ob), sub));
		    }
		    else if (FUNS_6.includes(str.substring(ob - 6, ob)))
		    {
	    	        str.replace(str.substring(ob - 6, i+1), calculate(str.substring(ob - 6, ob), sub));
		    }
		    else
		    {
		        str.replace(sub, calculate(sub));
	  	    }
                }
        }
    }
    return 'ok'
}
*/
function key_in(value: string) {
    if (parseInt(value) && inp.value == '0')
        inp.value = value;
    else
        inp.value += value;
}

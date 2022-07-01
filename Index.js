import React, { useState } from "react";

function Calc() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(1);
    const [num3, setNum3] = useState(2);
    const [num4, setNum4] = useState(3);
    const [num5, setNum5] = useState(4);
    const [num6, setNum6] = useState(5);
    const [num7, setNum7] = useState(6);
    const [num8, setNum8] = useState(7);
    const [num9, setNum9] = useState(8);
    const [add, setAddition] = useState('+');
    const [subtract, setSubtraction] = useState('-');
    const [divide, setDivision] = useState('/');
    const [multiply, setMultiplication] = useState('*');
    const [clear, setClear] = useState(0);
    const [multiply, setMultiplication] = useState('*');




    function num1() {
        setNum1(0);
    };
    function num2() {
        setNum2(1);
    };
    function num3() {
        setNum3(2);
    };
    function num4() {
        setNum4(3);
    };
    function num5() {
        setNum5(4);
    };
    function num6() {
        setNum6(5);
    };
    function num7() {
        setNum7(6);
    };
    function num8() {
        setNum(7);
    };
    function num9() {
        setNum(8);
    };
    function num10() {
        setNum(9);
    };
    function add() {
        setAddition('+');
    };
    function subtract() {
        setSubtraction('-');
    };
    function multiply() {
        setMultiplication ('*');
    };
    function divide() {
        setDivision('/');
      };









    return (
        <div>
            <button onClick={num1}>0</button>
            <button onClick={num2}>1</button>
            <button onClick={num3}>2</button>
            <button onClick={num4}>3</button>
            <button onClick={num5}>4</button>
            <button onClick={num6}>5</button>
            <button onClick={num7}>6</button>
            <button onClick={num8}>7</button>
            <button onClick={num9}>8</button>
            <button onClick={num10}>9</button>
            <button onClick={add}>'+'</button>
            <button onClick={subtract}>'-'</button>
            <button onClick={divide}>'/'</button>
            <button onClick={multiply}>'*'</button>




        </div>
    )
}

export default Calc();
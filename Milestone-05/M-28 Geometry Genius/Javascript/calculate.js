// Triangle Calculation
const calculateTriangleArea = () =>{
    const triangleBaseField = document.querySelector('#triangle-base-field');
    const triangleHeightField = document.querySelector('#triangle-height-field');
    const printTriangleArea = document.querySelector('#print-triangle-area');

    const triangleBaseFieldValue = parseFloat(triangleBaseField.value);
    triangleBaseField.value = '';
    const triangleHeightFieldValue = parseFloat(triangleHeightField.value);
    triangleHeightField.value = '';
    const totalTriangleArea = 0.5 * triangleBaseFieldValue * triangleHeightFieldValue;

    printTriangleArea.innerText = totalTriangleArea;
    DynamicCalculationArea('Triangle', totalTriangleArea)
    
}
// Rectangle Calculation
const calculateRectangleArea = () =>{
    const rectangleWidthField = document.querySelector('#rectangle-width-field');
    const rectangleLengthField = document.querySelector('#rectangle-length-field');
    const printRectangleArea = document.querySelector('#print-rectangle-area');

    const rectangleWidthFieldValue = parseFloat(rectangleWidthField.value);
    rectangleWidthField.value = '';
    const rectangleLengthFieldValue = parseFloat(rectangleLengthField.value);
    rectangleLengthField.value = '';
    const totalRectangleArea = rectangleWidthFieldValue * rectangleLengthFieldValue;
    
    printRectangleArea.innerText = totalRectangleArea;
    DynamicCalculationArea('Rectangle', totalRectangleArea)
}

// Parallelogram Calculation
const calculateParallelogramArea = () =>{
    const parallelogramBaseField = document.querySelector('#parallelogram-base-field');
    const parallelogramHeightField = document.querySelector('#parallelogram-height-field');
    const printParallelogramArea = document.querySelector('#print-parallelogram-area');

    const parallelogramBaseFieldValue = parseFloat(parallelogramBaseField.value);
    parallelogramBaseField.value = '';
    const parallelogramHeightFieldValue = parseFloat(parallelogramHeightField.value);
    parallelogramHeightField.value = '';
    const totalParallelogramArea = parallelogramBaseFieldValue * parallelogramHeightFieldValue;

    printParallelogramArea.innerText = totalParallelogramArea;
    DynamicCalculationArea('Parallelogram', totalParallelogramArea)
}

// Rhombus Calculation
const calculateRhombusArea = () =>{
    const rhombusBaseField = getInputValue('rhombus-base-field');
    const rhombusHeightField = getInputValue('rhombus-height-field')
    
    const totalRhombusArea = 0.5 * rhombusBaseField * rhombusHeightField;
    setTotalArea('print-rhombus-area', totalRhombusArea);

    DynamicCalculationArea('Rhombus', totalRhombusArea)
}


const getInputValue = (inputId) =>{
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

const setTotalArea = (elementId, area) =>{
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Pentagon Calculation
const calculatePentagonArea = () =>{
    const pentagonBaseField = getPentagonInputValue('pentagon-base-field');
    const pentagonHeightField = getPentagonInputValue('pentagon-height-field');

    const totalPentagonArea = 0.5 * pentagonBaseField * pentagonHeightField;
    setPentagonTotalArea('print-pentagon-area', totalPentagonArea)
    DynamicCalculationArea('Pentagon', totalPentagonArea)
}

const getPentagonInputValue = inputId =>{
    const getPentagonInput = document.getElementById(inputId);
    const getPentagonInputValue = parseFloat(getPentagonInput.value);
    getPentagonInput.value = '';
    return getPentagonInputValue;
}

const setPentagonTotalArea = (elementId, pentagonArea) =>{
    const element = document.getElementById(elementId);
    element.innerText = pentagonArea;
}

// Ellipse Calculation
const calculateEllipseArea = () =>{
    const ellipseBaseField = getEllipseInputValue('ellipse-base-field');
    const ellipseHeightField = getEllipseInputValue('ellipse-height-field');

    const totalEllipseArea = (Math.PI * ellipseBaseField * ellipseHeightField).toFixed(2);
    setEllipseTotalArea('print-ellipse-area', totalEllipseArea);

    DynamicCalculationArea('Ellipse', totalEllipseArea)
}

const getEllipseInputValue = inputId =>{
    const getEllipseInput = document.getElementById(inputId);
    const getEllipseInputValue = parseFloat(getEllipseInput.value);
    getEllipseInput.value = '';
    return getEllipseInputValue;
}

const setEllipseTotalArea = (elementId, ellipseArea) => {
    const element = document.getElementById(elementId);
    element.innerText = ellipseArea;
}

const DynamicCalculationArea = (areaType, area) =>{
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-3')
    p.innerHTML = `
        ${count + 1}. ${areaType} ${area} <button class='btn btn-sm py-2 rounded-sm bg-slate-500 text-white capitalize'>convert<span class='capitalize'>m<sup>2</sup></span></button>
    
    `
    calculationEntry.appendChild(p)
}
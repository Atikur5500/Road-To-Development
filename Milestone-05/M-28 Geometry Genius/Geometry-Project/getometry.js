const calculateTriangleArea = () =>{
   const triangleBaseField = getTriangleArea('triangle-base-field');
   const triangleHeightField = getTriangleArea('triangle-height-field');

   const totalTriangleArea = 0.5 * triangleBaseField * triangleHeightField;
    setTriangleArea('print-triangle-area', totalTriangleArea);
    dynamicCalculationArea('Triangle', totalTriangleArea)
}

const getTriangleArea = (inputId) =>{
    const triangleInputField = document.getElementById(inputId);
    const triangleInputFieldValue = parseFloat(triangleInputField.value);
    triangleInputField.value = '';
    return triangleInputFieldValue;
}

const setTriangleArea = (elementId, area) =>{
    const setTriangleArea = document.getElementById(elementId);
    setTriangleArea.innerText = area;
}

const calculateRectangleArea = () =>{
    const rectangleWidthField = getRectangleArea('rectangle-width-field');
    const rectangleLengthField = getRectangleArea('rectangle-length-field');

    const totalRectangleArea = rectangleWidthField * rectangleLengthField;
    setRectangleArea('print-rectangle-area', totalRectangleArea);
    dynamicCalculationArea('Rectangle', totalRectangleArea);

}
const getRectangleArea = (inputId) =>{
    const rectangleInputField = document.getElementById(inputId);
    const rectangleInputFieldValue = parseFloat(rectangleInputField.value);
    rectangleInputField.value = '';
    return rectangleInputFieldValue;

}
const setRectangleArea = (areaType, area) =>{
    const setRectangleArea = document.getElementById(areaType);
    setRectangleArea.innerText = area;
}

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
    dynamicCalculationArea('Parallelogram', totalParallelogramArea);
}


const dynamicCalculationArea = (areaType, area) =>{
    const calculationEntry = document.getElementById('calculation-entry');
    const count = document.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `
        ${count}.  ${areaType}  ${area} <button class='btn btn-sm bg-slate-600 text-white capitalize rounded'>Convert</button>
    `
    calculationEntry.appendChild(p)
}
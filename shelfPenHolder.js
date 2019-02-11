// Parameterized Pen holder to hang from onto 2cm high shelves sold by Container Store
// Created by Michael S. Scherotter
// https://github.com/mscherotter/shelfpenholder 
// MIT Licenese: https://github.com/mscherotter/shelfpenholder/blob/master/LICENSE 
// Runs with OpenJSCAD website: http://openjscad.azurewebsites.net/


function getParameterDefinitions() {
    return [
        { name: 'columns', type: 'int', initial: 6, caption: "Number of columns" },
        { name: 'rows', type: 'int', initial: 4, caption: "Number of rows" },
        { name: 'size', type: 'float', initial: 12, caption: "Size of each cell in mm."},
        { name: 'depth', type: 'float', initial: 80, caption: "Depth in mm."},
        { name: 'innerThickness', type: 'float', initial: 1.5, caption: "Divider thickness in mm."},
        { name: 'clipWidth', type: 'float', initial: 10, caption: "clip width in mm."},
        { name: 'clipLength', type: 'float', initial: 50, caption: "clip length in mm."},
        { name: 'clipHeight', type: 'float', initial: 50, caption: "clip height in mm."},
        { name: 'round', type: 'checkbox', checked: false, caption: "round holes"}
    ];
}

function main(params){
    var width = (params.columns * params.size)  + params.innerThickness * (params.columns + 1);
    var height = (params.rows * params.size)  + params.innerThickness * (params.rows + 1);
    
    var model = color("red", cube({size: [width, height, params.depth], center: false}))
        .union(createClip(params))
        .union(createClip(params).translate([width-params.clipWidth ,0,0]))
        .subtract(createCells(params));

    return preparePrint(model, width, height, params.depth);
}

function preparePrint(model, width, height, depth){
    return model.rotateX(180)
        .translate([-width/2,height/2,depth]);
}

// create a clip for 20mm high shelves
function createClip(params) {
    return color("green", cube({size:[params.clipWidth, params.clipLength, 10], center:false}).translate([0,-params.clipLength+50,0]))
    .union(cube({size:[params.clipWidth, 10, -params.clipHeight], center:false}).translate([0,30,5]))
    .union(cube({size:[params.clipWidth, 10, -params.clipHeight+10], center:false}).translate([0,-params.clipLength+50,0]))
    .translate([0,-42,params.depth - 16])
    .rotateX(-10)
    .union(color("blue", (cube({size:[params.clipWidth, 30, 10], center:false}).translate([0,-27.5,params.depth -10]))));
}

function createCell(params){
    if (params.round){
        return color("white", cylinder({r:params.size/2, h:params.depth - params.innerThickness})
        .translate([params.size/2, params.size/2,0]));
    }
    
    return color("white", cube({size:[params.size, params.size, params.depth], center: false}));
}

function createCells(params) {
    var cells = [];

    for (var row = 0; row < params.rows; row++)
    {
        for (var col = 0; col < params.columns; col++)
        {
            var cell = createCell(params) 
                .translate([params.innerThickness + (params.innerThickness + params.size) * col,
                            params.innerThickness + (params.innerThickness + params.size) * row,
                            params.innerThickness]);
            
            cells.push(cell);
        }
    }

    return cells;
}

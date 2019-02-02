function getParameterDefinitions() {
    return [
        { name: 'columns', type: 'int', initial: 15, caption: "Number of columns" },
        { name: 'rows', type: 'int', initial: 4, caption: "Number of rows" },
        { name: 'size', type: 'int', initial: 12, caption: "Size of each cell in mm."},
        { name: 'depth', type: 'int', initial: 80, caption: "Depth in mm."},
        { name: 'innerThickness', type: 'int', initial: 1.5, caption: "Divider thickness in mm."}
    ];
}

function main(params)
{
    var width = (params.columns * params.size)  + params.innerThickness * (params.columns + 1);
    var height = (params.rows * params.size)  + params.innerThickness * (params.rows + 1);

    return cube({size:[width, height, params.depth], center:false})
            .union(createClip(params))
            .union(createClip(params).translate([width-params.size + params.innerThickness,0,0]))
           .subtract(createCells(params));
}

function createClip(params) {
    return cube({size:[10, 30, 10], center:false})
    .union(cube({size:[10, 10, -50], center:false}).translate([0,30,5]))
    .union(cube({size:[10, 10, -40], center:false}))
    .translate([0,-41,params.depth - 16])
    .rotateX(-10)
    .union(color("blue", (cube({size:[10, 30, 10], center:false}).translate([0,-27.5,params.depth -10]))));
}

function createCell(params){
    return cube({size: [params.size, params.size, params.depth], center: false});
}

function createCells(params){
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

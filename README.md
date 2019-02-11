# Shelf Hanging Pen Holder
An parametric-defined adjustable pen holder that hangs from 2cm high shelves from [the Container Store](https://www.containerstore.com/s/driftwood-melamine-shelves/d?productId=10018499).

A version of this is also a [Customizable model on Thingiverse](https://www.thingiverse.com/thing:3402746).  The source file that it uses is [here](shelfpenholder.scad).

I created a video showing the process of building this model [here](https://www.youtube.com/watch?v=NxCsi96UtqE).

![In use](inuse.jpg)
## Parameters
- Number of columns: number of horizontal cels
- Number of rows: number of vertical cels
- Size of each cell in mm.: the size in mm of each cell square
- Depth in mm: the depth in mm of the cells 
- Divider thickness in mm.: the thickness of the spacing between each cell
- Clip width in mm.: the width of each clip
- Clip depth in mm.: the depth of the flanges of the clips
- Shelf thickness in mm: the shelf thickness in mm
- Round holes: check to make holes round instead of square

## Building the Model
This is the most productive workflow that I've found for developing OpenJSCAD-based models:
![Workflow Screenshot](screenshot.png) 
1. Open the site [OpenJSCAD](http://openjscad.azurewebsites.net) in a web browser
2. From the OS file explorer drag the file [shelfPenHolder.js](shelfPenHolder.js) to the box on the bottom of the page where it says "Drop your jscad...."
3. Check the Auto Reload checkbox
4. Open the [shelfPenHolder.js](shelfPenHolder.js) in Visual Studio Code
5. Modify the parameters to fit your needs
6. Press the Generate STL button to download the STL file that you can print from a 3D Printer

Here is a [model](shelfPenHolder.stl) generated from the default parameters.  The model can be printed by most printers without supports.

![Model printout](printout.jpg)


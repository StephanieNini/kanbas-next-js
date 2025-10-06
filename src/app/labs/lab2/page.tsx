import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIcons from "./ReactIcons";
import { Container } from "react-bootstrap";
import BooststrapGrids from "./BooststrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <Container>
      <h2><b>Lab 2 - Cascading Style Sheets</b></h2>
      <h3>Lab 2 Index</h3>

      <h3><b>Styling with the STYLE attribute</b></h3>
      <p id="wd-style-paragraph">
        Style attribute allows configuring look and feel
        right on the element. Although its very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <br></br>

      <div id="wd-css-id-selectors">
        <h3><b>ID selectors</b></h3>

        {/*red on white*/}
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the 
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <br></br>
        
        {/*yellow on black*/}
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel
        </p>
      </div>
<br></br>

{/*blue on yellow*/}
    <div id="wd-css-class-selectors">
      <h3><b>Class selectors</b></h3>
      <p className="wd-class-selector">
Instead of using IDs to refer to elements, you can use an element's CLASS attribute
      </p>

    <br></br>
      <h4 className="wd-class-selector"><b>This heading has same style as paragraph above</b></h4>
    </div>
    <br></br>  

    <div id="wd-css-document-structure">
      <div className="wd-selector-1">
        <h3><b>Document structure selectors</b></h3>
        <div className="wd-selector-2">
          Selectors can be combined to refer elements in particular places in the document
          <p className="wd-selector-3">
            This paragraph's red background is referenced as
            <br />.selector-2 .selector3<br />
            meaning the descendant of some ancestor.<br />
            <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
            </span><br />
              You can combine these relationships to create specific 
              styles depending on the document structure
          </p>
        </div>
      </div>
</div>

<br></br>
{/* foreground colors */}
<ForegroundColors />

<br></br>
{/* background colors */}
<BackgroundColors />

<br></br>
{/* borders */}
<Borders />

<br></br>
{/* padding */}
<Padding />

<br></br> 
{/* margins */}
<Margins />

<br></br>
{/* corners */}
<Corners />

<br></br>
{/* dimensions */}
<Dimensions />

<br></br>
{/* positions */}
<Positions />

<br></br><br></br><br></br><br></br><br></br>
{/* z-index */}
<Zindex />

<br></br><br></br><br></br><br></br><br></br>
{/* float */}
<Float />

<br></br><br></br><br></br><br></br><br></br>
{/* grid layout */}
<GridLayout />

<br></br><br></br><br></br><br></br><br></br>
{/* flex */}
<Flex />

<br></br><br></br><br></br><br></br><br></br>
{/* react icons */}
<ReactIcons />

<br></br><br></br><br></br><br></br><br></br>
{/* bootstrap grids */}
<BooststrapGrids />

<br></br><br></br><br></br><br></br><br></br>
{/* screen size label */}
<ScreenSizeLabel />

<br></br><br></br><br></br><br></br><br></br>
{/* bootstrap tables */}
<BootstrapTables />

<br></br><br></br><br></br><br></br><br></br>
{/* bootstrap lists */}
<BootstrapLists />

<br></br><br></br><br></br><br></br><br></br>
{/* bootstrap forms */}
<BootstrapForms />

<br></br><br></br><br></br><br></br><br></br>
{/* bootstrap navigation */}
<BootstrapNavigation />

</Container>
  );
}

import { document } from "global";
import { storiesOf } from "@storybook/html";

import overview from "./overview.html";
storiesOf("Styles/", module).add("Overview", () => overview);

storiesOf("Styles/Design Token", module).add(
  "Colors",
  () => "<h1>Color styles define how color is used in the design system.</h1>"
);

import typography from "./typography.html";
storiesOf("Styles/Typographie", module)
  .add("Overview", () => "<h1>Typography style description</h1>")
  .add("Font Sizes", () => typography)
  .add("Font Weights", () => typography)
  .add("Text Formats", () => typography);

storiesOf("Styles/Iconography", module).add(
  "Overview",
  () => "<h1>How to style or construct icons for the design system</h1>"
);

storiesOf("Styles/Imagery", module)
  .add("Photos", () => "<h1>Image style guidelines go here</h1>")
  .add("Graphics", () => "<h1>Styles for treating pictures and graphics</h1>");

storiesOf("Styles/Motion", module).add(
  "Animations",
  () =>
    "<h1>How the style guide uses motion to enhance the user experience.</h1>"
);

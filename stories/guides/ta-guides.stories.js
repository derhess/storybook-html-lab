import { document } from "global";
import { storiesOf } from "@storybook/html";

// Load external html content
import voice from "./voicetone.html";
import overview from "./overview.html";
storiesOf("Guidelines", module)
  .add("Overview", () => overview)
  .add("Design Principles", () => "<h1>The design system’s guiding values</h1>")
  .add("Voice and Tone", () => voice)
  .add(
    "Interaction Principles",
    () => "<h1>Guidelines around multiple types of input</h1>"
  )
  .add("Visual Principles", () => "Presenting quick, actionable data")
  .add("Data Validation", () => "<h1>Guidelines around validating data</h1>")
  .add(
    "Accessibility",
    () => "<h1>Describe the design system’s approach to accessibility</h1>"
  )
  .add(
    "Notifications",
    () =>
      "<h1>Guidelines around how and when to respectfully interrupt users</h1>"
  )
  .add("Privacy", () => "<h1>Hello World</h1>")
  .add(
    "Coding Conventions",
    () => "<h1>Guidelines for the design system’s code base.</h1>"
  )
  .add("Browser support", () => "<h1>Hello World</h1>");

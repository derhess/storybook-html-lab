import { document } from "global";
import { storiesOf } from "@storybook/html";
import { action } from "@storybook/addon-actions";
import { withLinks } from "@storybook/addon-links";
import { withNotes } from "@storybook/addon-notes";

import "./welcome.css";
import welcome from "./welcome.html";

storiesOf("Welcome", module)
  .addDecorator(withLinks)
  .add("Welcome", () => welcome);

storiesOf("Demo", module)
  .add("heading", () => "<h1>Hello World</h1>")
  .add(
    "headings",
    () =>
      "<h1>Hello World</h1><h2>Hello World</h2><h3>Hello World</h3><h4>Hello World</h4>"
  )
  .add("button", () => {
    const button = document.createElement("button");
    button.innerHTML = "Hello Button";
    button.addEventListener("click", action("Click"));
    return button;
  });

storiesOf("Getting Started", module)
  .add(
    "Overview",
    () =>
      "<h1>The getting started page should provide information for how to get up and running with the design system.</h1>"
  )
  .add("From a Designer PoV", () => "Most important facts for Designer")
  .add("From a Developer PoV", () => "Most important facts for Developers")
  .add(
    "From a Product Manager POV",
    () => "Most important facts for Product Managers"
  );

/****************************
 * UI Component or HTML Templates in Atomic Design Structure
 */
import Button from "./../src/components/01-atoms/button/button.html";
import ButtonDocs from "./../src/components/01-atoms/button/button.md";
storiesOf("Components|Atoms/Buttons", module)
  .addDecorator(withNotes)
  .add("Overview", () => "<h1>hello world</h1>", {
    notes: "My notes on some bold text"
  })
  .add("Button", () => Button, {
    notes: { markdown: ButtonDocs }
  })
  .add("Markdown Docs", () => ButtonDocs);

import NavigationBar from "./../src/components/02-molecules/navigation.handlebars";
import SocialIconLinkBar from "./../src/components/02-molecules/social-icon-link-bar.handlebars";
storiesOf("Components|Molecules/Navigations", module)
  .add("Overview", () => "<h1>hello world</h1>")
  .add("Navigation Bar", () => {
    return NavigationBar();
  })
  .add("Social Media Icon Link Bar", () => {
    return SocialIconLinkBar();
  });

import Header from "./../src/components/03-organisms/header.handlebars";
import Newsletter from "./../src/components/03-organisms/newsletter.handlebars";
import SocialMedia from "./../src/components/03-organisms/social.handlebars";
storiesOf("Components|Organisms", module)
  .add(
    "Overview",
    () =>
      `<h1>Navigation and Container Components (e.g. Higher Order Comps)</h1>
      <h2>Header Navigation</h2>
      ${Header()}
      <h2>Newsletter Registration</h2>
      ${Newsletter()}
      <h2>Social Media Links</h2>
      ${SocialMedia()}
      `
  )
  .add("Header", () => {
    return Header();
  })
  .add("Newsletter", () => {
    return Newsletter();
  })
  .add("Social Media", () => {
    return SocialMedia();
  });

storiesOf("Components|Templates/Layouts", module).add(
  "Overview",
  () => "<h1>Mostly Layout Specfic Container Components for Page Layouts</h1>"
);

import StartPage from "./../src/components/05-pages/index.handlebars";
storiesOf("Components|Pages", module)
  .add(
    "Overview",
    () =>
      "<h1>This section collects commonly-used page templates that are useful as a starting point for similar use cases.</h1>"
  )
  .add("Home Landing Page", () => {
    return StartPage({});
  });

/***
 * Styleguide Contribution und Help Section
 */

storiesOf("Other|Downloads", module).add(
  "Overview",
  () => "<h1>Links to repositories, design templates, tools, and so on.</h1>"
);

storiesOf("Other|Support", module).add(
  "Overview",
  () =>
    "<h1>The support page provides information about getting help with using the design system</h1>"
);

storiesOf("Other|Contribute", module).add(
  "Overview",
  () =>
    "<h1>This page explains the process (or processes) by which the design system gets updated</h1>"
);

/* Example Nested Stories Code Snippet */
storiesOf("GroupHeader|Level1/Level2/Level3", module)
  .add("State 1", () => "<h1>Hello world</h1>")
  .add(
    "State 2",
    () => "<h1>Hello world</h1><h2>Hello world</h2><h3>Hello world</h4>"
  );

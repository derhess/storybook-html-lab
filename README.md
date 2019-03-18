# Styleguide Driven Development with Storybook/HTML

Even small website projects come usually with a Styleguide provided by Web Designer. It is challenge to keep the Design, Code and documentation in sync. For some of the famous Web Frameworks exists already some Project Starter Boilerplats, like this great [VueJS PWA Starter Kit](https://github.com/devCrossNet/vue-starter). Unfortunately, the storybook documentation and workflow for content heavy websites or just server-rendered template engines was not obvious for me. Therefore, I create this Repo for tinkering around with Handlebars Template Engine and Storybook/HTML. My objective is an isolated (living styleguide) development workflow as it is described [Norbert de Langen at Frontend Love 2018](https://www.youtube.com/watch?v=L_W4xSetumc)

## Getting Started

The project uses Storybook/HTML Version 4.x and Webpack 4 with a HandlebarJS Loader for HTML Generation. In the end, we apply the [Landingpage Tutorial by Jonas Duri](https://medium.com/@jonas_duri/build-a-landing-page-with-webpack-4-6efe83deb7fe) and transform it to an Atomic Design based Styleguide with Storybook/HTML. 

The end result is available here: https://derhess.github.io/storybook-html-lab/

Please consider:
> A online tutorial for this repo is in the making
> Until now - please explore the branches and commits as a very abstract learning guide

### How to start and install

You must have installed Git and NPM before starting. Then create a project folder. Afterwards, please checkout the project and install the dependencies via the terminal commands:

```shell 
git clone https://github.com/derhess/storybook-html-lab.git
git checkout master

npm install
```

After installation, you can tinker around and start storybook via

```shell
npm run storybook
```

or run webpack-dev-server with hot-reload 

```shell
npm run start
```

### How to build and export

The project has to build process. The inherited build process of storybook itself and the webpack build process, which renders all handlebar templates into plain HTML, CSS and JS files. All the produced websites can be easily hosted on Netlify (or Github Pages). 

#### Create Storybook Living Styleguide

The result of the generation is placed into folder storybook-static

```shell
npm run build-storybook
```

#### Create Website Files

The result of the generation is placed into folder static-website

```shell
npm run build
```

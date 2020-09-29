import React from "react"
import "./my-work.css"
const projects = [
  {
    title: "ProTab - A highly customizable productivity extension for chrome",
    description: `A beautifully designed, fully customizable productivity extension for chrome.
    A user can add a widget, drag it around and position it to his/her linking. It is the best chrome extension for productivity.`,
    link: "https://getprotab.com"
  },
  {
    title: "React Async Popup ",
    description: `An accessible promise based popup library for React, which helps to reduce extra state management required for Popups
    It is inspired by the browser’s native ​window.confirm​ method.`,
    link: "https://aadil.dev/react-async-popup"
  },
  {
    title: "React Touch Keyboard​​",
    description: `It is a react virtual keyboard for touch devices (i.e windows touch screen laptops). It can be used with native input/text-area elements, without touching the existing code, it triggers native events.`,
    link: "https://github.com/aadilhasan/react-touch-keyboard"
  },
  {
    title: "React Date/Range Picker​",
    description: `It is a react js based date picker which also supports range selection, unlike
    other range pickers it uses a single calendar to select the range.`,
    link: "https://github.com/aadilhasan/react-range-picker"
  },
  {
    title: "Mini.JS Javascript framework",
    description: `It is a Javascript framework, I created it after reading source code of different-different JS frameworks, I created it just to learn advanced concepts of JS and to learn the working of JS frameworks. It is highly inspired by Vue.JS`,
    link: "https://github.com/aadilhasan/mini-js"
  }
]

export default () => (
  <div className="projects">
    <h3>
      <span>My Projects</span>
    </h3>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h4>
            {" "}
            <a target="_blank" rel="noopener noreferrer" href={project.link}>
              {" "}
              {project.title}{" "}
            </a>{" "}
          </h4>
          <p> {project.description} </p>
        </li>
      ))}
    </ul>
  </div>
)

/*!
 * reveal.js fragment-list plugin

  <!-- .element: class="fragmented-list" -->

  - List 1
  - List 2
 */

const Plugin = {
  id: "fragment-list",

  init: function (reveal) {
    reveal.addEventListener("ready", function addFragmentToLists() {
      for (const listItem of document.querySelectorAll(".fragmented-list li")) {
        listItem.classList.add("fragment");
      }
    });
  },
};

export default () => Plugin;

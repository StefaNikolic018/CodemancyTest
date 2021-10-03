var tds = document.querySelectorAll("td");

// Coloring of the active and inactive text
changingTheLooks(tds, "class");

// Changing pluses and minuses for svg icons
changingTheLooks(tds, "svg");

// Function for entering data into table based on the data from itself
function changingTheLooks(elementArray, flag) {
  elementArray.forEach((text) => {
    if (flag == "svg") {
      // Changing pluses and minuses for svg icons
      if (text.innerHTML == "+") {
        text.innerHTML = "";
        text.insertAdjacentHTML(
          "beforeend",
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="check_circle_outline-24px_1_" data-name="check_circle_outline-24px (1)" transform="translate(-2 -2)"><path id="Path_585" data-name="Path 585" d="M13.672,6.464,8.4,11.736,5.528,8.872,4.4,10l4,4,6.4-6.4ZM10,2a8,8,0,1,0,8,8A8,8,0,0,0,10,2Zm0,14.4A6.4,6.4,0,1,1,16.4,10,6.4,6.4,0,0,1,10,16.4Z" fill="#2ebe50"/></g></svg>'
        );
      } else if (text.innerHTML == "-") {
        text.innerHTML = "";
        text.insertAdjacentHTML(
          "beforeend",
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="highlight_off-24px" transform="translate(-2 -2)"><path id="Path_587" data-name="Path 587" d="M12.072,6.8,10,8.872,7.928,6.8,6.8,7.928,8.872,10,6.8,12.072,7.928,13.2,10,11.128,12.072,13.2,13.2,12.072,11.128,10,13.2,7.928ZM10,2a8,8,0,1,0,8,8A7.993,7.993,0,0,0,10,2Zm0,14.4A6.4,6.4,0,1,1,16.4,10,6.408,6.408,0,0,1,10,16.4Z" fill="#fc465f"/></g></svg>'
        );
      }
    } else {
      // Coloring of the active and inactive text
      if (text.innerHTML == "Active") {
        // Coloring of active text
        text.classList.add("active-text");
      } else if (text.innerHTML == "Inactive") {
        // Coloring text of columns that are inactive
        var otherTds = text.parentNode.children;
        for (i = 0; i < otherTds.length; i++) {
          if (otherTds[i].innerHTML != "Inactive") {
            otherTds[i].classList.add("inactive");
          }
        }
        // Coloring of inactive text
        text.classList.add("inactive-text");
      }
    }
  });
}

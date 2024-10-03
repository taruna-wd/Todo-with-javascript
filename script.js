
    const button = document.getElementById("add");
    let li = document.querySelector("li");

    button.addEventListener("click", (e) => {
      e.preventDefault();
      let input = document.querySelector("input");
      console.log(input.value);
      let ul = document.querySelector("ul");
      console.log(ul.innerHTML);

      let li = document.createElement("li");
      if (input.value === "") {
        alert("please enter some task");
      } else {
        li.innerHTML = `
      ${input.value}
      <button class="del btn btn-outline-danger">
        <i class="fa-solid fa-xmark" id="check"></i>
      </button>
    `;
        ul.appendChild(li);
        input.value = "";
      }

      li.addEventListener("click", () => {
        li.style.textDecoration =
          li.style.textDecoration === "line-through" ? "none": "line-through";
      });

      li.querySelector(".del").addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the li
        ul.removeChild(li);
      });

      
  });


 

  

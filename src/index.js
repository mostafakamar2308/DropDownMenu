const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
import brain from "/src/brain.png";
import Heart from "/src/love.png";
import lungs from "/src/lungs.png";
const content = [
  {
    iconName: "Heart",
    iconPng: Heart,
  },
  {
    iconName: "Brain",
    iconPng: brain,
  },
  {
    iconName: "Lung",
    iconPng: lungs,
  },
];

logo.addEventListener("click", function () {
  console.log("click");
  if (container.style.height == "100px" || !container.style.height) {
    container.style.height = "100vh";
    container.style.justifyContent = "space-between";
    let iconContainer = document.createElement("div");
    iconContainer.className = "iconContainer";
    content.forEach((ele) => {
      console.log(ele.iconName);
      let div = document.createElement("div");
      let iconImg = document.createElement("img");
      iconImg.src = ele.iconPng;
      div.append(iconImg);
      iconContainer.append(div);
    });
    container.appendChild(iconContainer);
    container.addEventListener("mouseover", mouseOver);
    container.addEventListener("mouseleave", mouseLeave);
  } else {
    container.style.height = "100px";
    container.style.width = "50px";
    container.style.justifyContent = "center";
    container.removeEventListener("mouseover", mouseOver);
    mouseLeave();
    container.removeChild(document.querySelector(".iconContainer"));
  }
});
function mouseOver() {
  console.log("you pressed on it");
  if (!document.querySelector(".expand")) {
    let expand = document.createElement("div");
    expand.innerText = "e";
    expand.classList.add("expand");
    expand.addEventListener("click", function () {
      if (container.style.width == "300px") {
        container.style.width = "50px";
        for (let s = 0; s < content.length; s++) {
          if (s < content.length) {
            document
              .querySelector(".iconContainer")
              .children[s].removeChild(
                document.querySelector(".iconContainer").children[s].lastChild
              );
          } else {
            s = 0;
          }
        }
      } else {
        container.style.width = "300px";
        let i = 0;
        content.forEach((ele) => {
          let currentText = ele.iconName;
          let textDiv = document.createElement("div");
          textDiv.innerText = currentText;
          console.log(currentText);
          document.querySelector(".iconContainer").children[i].append(textDiv);
          i++;
        });
      }
    });
    container.append(expand);
    container.addEventListener("mousemove", function (e) {
      if (expand) {
        expand.style.top = `${e.clientY - 17}px`;
      }
    });
  }
}

function mouseLeave() {
  if (document.querySelector(".expand")) {
    container.removeChild(document.querySelector(".expand"));
  }
  console.log("you left on it");
}

function createNames(ele) {}

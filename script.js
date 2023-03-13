// Get data from a user
const inputBackgroundColor = prompt(
  "Please, provide the desired site background You can choose one of the following colors: [#FFFFFF, #000000, #023020], or enter your preferred one in hex code or rgb value."
);
const inputFontType = prompt(
  "Please, provide the desired font type on the page. You can choose one of the following types [Georgia, Serif, Cursive] or enter your preferred one"
);
const inputHeadingAlignment = prompt(
  "Please, provide the desired alignment for the main heading [left, right, center] or enter your preferred one"
);
const inputParagraphBackgroundColor = prompt(
  "Please, provide the desired reference background color in paragraph. You can choose one of the following colors: [#FFFFFF, #000000, #023020], or enter your preferred one in hex code or rgb value."
);
const inputReferenceAndTextColor = prompt(
  "Please, provide the desired text color for the link in paragraph. You can choose one of the following colors: [#FFFFFF, #000000, #023020], or enter your preferred one in hex code or rgb value."
);
const inputDivProperties = prompt(
  "Please, provide the desired font color, size, and font width separated by comma for the div elements. You can choose the following values [#666667, 15px, 5px] or enter your preferred one"
);
const inputMarkerType = prompt(
  "Please, provide the desired bullet type for the bulleted list on the page. You can choose one of the following types: [disc, circle, square], or enter your preferred one"
);
const favoritePageApprove = confirm(
  "Would you like to add your custom favorite pages?"
);

//Paragraph
const linkWrapper = document.querySelector(".link-wrapper");
const paragraph = document.createElement("p");
paragraph.innerText = "Your custom favorite pages:";
paragraph.style.backgroundColor = inputParagraphBackgroundColor;
paragraph.style.color = inputReferenceAndTextColor;
linkWrapper.appendChild(paragraph);

//Background Color
document.body.style.backgroundColor = inputBackgroundColor;

// FontType
document.body.style.fontFamily = inputFontType;

// HeadingAlignment
document.querySelector("h1").style.textAlign = inputHeadingAlignment;

// Div Properties
const div = document.querySelectorAll("div");
div.forEach((element) => {
  const divProperties = inputDivProperties.split(",");
  element.style.color = divProperties[0];
  element.style.fontSize = divProperties[1];
  element.style.fontWeight = divProperties[2];
});

//Bullet type
const bulletedList = document.querySelectorAll("ul");
bulletedList.forEach((element) => {
  element.style.listStyleType = inputMarkerType;
});

//Optional part
if (favoritePageApprove) {
  const favoritePagesAmount = +prompt(
    "How many custom reference do you want to add?",
    "3"
  );
  for (let i = 0; i < favoritePagesAmount; i++) {
    const page = prompt(
      "Please, provide your favorite page. For example: [facebook.com, google.com, twitter.com] "
    );

    const element = document.createElement("li");
    element.style.margin = "15px";
    element.style.display = "inline";

    const link = document.createElement("a");
    link.innerText = page.split(".")[0];
    link.href = page;
    link.style.color = inputReferenceAndTextColor;
    element.appendChild(link);
    paragraph.appendChild(element);
    linkWrapper.appendChild(paragraph);
  }
}

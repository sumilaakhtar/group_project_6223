stacksData = {
  stacks: [
    {
      id: 1,
      name: "CSS",
      shortDescription:
        "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
      faIcon: "fa-brands fa-css3-alt",
      developerWebsite: "https://www.w3.org/Style/CSS/",
      coursesAndTutorials: [
        {
          id: 1,
          name: "The World Wide Web Consortium (W3C) CSS Basics",
          linkUrl: "https://www.edx.org/course/css-basics",
        },
      ],
      downloadadbleLinks: {},
    },
    {
      id: 2,
      name: "HTML",
      shortDescription:
        "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
      faIcon: "fa-brands fa-html5",
      developerWebsite: "https://html.spec.whatwg.org/",
      coursesAndTutorials: [
        {
          id: 1,
          name: "W3 Schools tutorial",
          linkUrl: "https://www.w3schools.com/html/default.asp",
        },
      ],
      downloadadbleLinks: {},
    },
    {
      id: 3,
      name: "JavaScript",
      shortDescription:
        "JavaScript is the world's most popular programming language.    JavaScript is the programming language of the Web.",
      faIcon: "fa-brands fa-js",
      developerWebsite:
        "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
      coursesAndTutorials: [
        {
          id: 1,
          name: "W3 Schools tutorial",
          linkUrl: "https://www.w3schools.com/js/default.asp",
        },
      ],
      downloadadbleLinks: {},
    },
    {
      id: 4,
      name: "React",
      shortDescription:
        "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components",
      faIcon: "fa-brands fa-react",
      developerWebsite: "https://reactjs.org/",
      coursesAndTutorials: [
        {
          id: 1,
          name: "Meta Platforms, Inc. tutorial",
          linkUrl: "https://reactjs.org/tutorial/tutorial.html",
        },
        {
          id: 1,
          name: "W3 Schools tutorial",
          linkUrl: "https://www.w3schools.com/react/default.asp",
        },
      ],
      downloadadbleLinks: {},
    },
    {
      id: 5,
      name: "Python",
      shortDescription:
        "Python is a popular programming language. Python can be used on  a server to create web applications.",
      faIcon: "fa-brands fa-python",
      developerWebsite: "https://python.org/",
      coursesAndTutorials: [
        {
          id: 1,
          name: "W3 Schools tutorial",
          linkUrl: "https://www.w3schools.com/python/default.asp",
        },
      ],
      downloadadbleLinks: {},
    },
    {
      id: 6,
      name: "php",
      shortDescription:
        "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.",
      faIcon: "fa-brands fa-php",
      developerWebsite: "https://php.net/",
      coursesAndTutorials: [
        {
          id: 1,
          name: "W3 Schools tutorial",
          linkUrl: "https://www.w3schools.com/php/default.asp",
        },
      ],
      downloadadbleLinks: {},
    },
  ],
};

renderStack = (stack) => {
  document.getElementById("stack-list").innerHTML +=
    `
    <div class="col-md-4 stack-modal-button p-3" data-bs-toggle="modal" data-bs-target="#stackModal` +
    stack.id +
    `" >
    <span class="fa-stack fa-4x">
      <i class="` +
    stack.faIcon +
    ` fa-2x text-primary"></i>
    </span>
    <h4 class="my-3">` +
    stack.name +
    `</h4>

  </div>


<div
class="stack-modal modal fade"
id="stackModal` +
    stack.id +
    `"
aria-labelledby="stackModal` +
    stack.id +
    `Label"
tabindex="-1"
role="dialog"
aria-hidden="true"
>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="close-modal" data-bs-dismiss="modal">
      <img src="assets/img/close-icon.svg" alt="Close modal" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="modal-body">
            <!-- Project details-->
            <h2 class="text-uppercase">` +
    stack.name +
    `</h2>
            
            <span class="fa-stack fa-4x">
            <i class="` +
    stack.faIcon +
    ` fa-2x text-primary"></i>
          </span>
            <p>
            ` +
    stack.shortDescription +
    `
            </p>
            <p class="item-intro text-muted text-center">
                   <a href=` +
    stack.developerWebsite +
    ` target="_blank">Developer's Website</a>
                  </p>
            <p class="item-intro text-muted text-center">
                    Tutorials, courses:
                  </p>
            <ul class="list-inline">
            ` +
    stack.coursesAndTutorials.map((tutorial) => {
      return (
        `<li><a href="` +
        tutorial.linkUrl +
        `" target="_blank">
                ` +
        tutorial.name +
        `</a></li>`
      );
    }) +
    `
             
            </ul>
            <button
              class="btn btn-primary btn-xl text-uppercase"
              data-bs-dismiss="modal"
              type="button"
            >
              <i class="fas fa-xmark me-1"></i>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>




    `;
};

renderStacks = (stacks) => {
  stacks.map((stack) => {
    renderStack(stack);
  });
};

renderStacks(stacksData.stacks);

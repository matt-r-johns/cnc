import {
  bio,
  skills,
  education,
  experience,
  quals,
} from "./user-data/data.js";

document.title = "Matt Johns – CNC Programmer";

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const h3 = getElement("li", null);
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);

  for (let i = 0; i < items.length; i++) {
    let spanTimelineSublabel = document.createElement("span");
    spanTimelineSublabel.className = "timeline-sublabel";
    spanTimelineSublabel.innerHTML = items[i].subtitle;

    let spanh2 = document.createElement("span");
    spanh2.innerHTML = items[i].duration;

    let h2TimelineLabel = document.createElement("h2");
    h2TimelineLabel.innerHTML = items[i].title;
    h2TimelineLabel.append(spanh2);

    let divTimelineLabel = document.createElement("div");
    divTimelineLabel.className = "timeline-label";
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanTimelineSublabel);

    for (let j = 0; j < items[i].details.length; j++) {
      let detail = items[i].details[j];
      if (Array.isArray(detail)) {
        let ul = document.createElement("ul");
        detail.forEach(point => {
          let li = document.createElement("li");
          li.innerHTML = point;
          ul.appendChild(li);
        });
        divTimelineLabel.appendChild(ul);
      } else {
        let pTimelineText = document.createElement("p");
        pTimelineText.className = "timeline-text";
        pTimelineText.innerHTML = detail;
        divTimelineLabel.appendChild(pTimelineText);
      }
      
    }

    let iFa = document.createElement("i");
    iFa.className = "fa fa-" + items[i].icon;

    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }

  let divTimelineIcon = document.createElement("div");
  divTimelineIcon.className = "timeline-icon color-2";

  let divTimelineEntryInner = document.createElement("div");
  divTimelineEntryInner.className = "timeline-entry-inner";
  divTimelineEntryInner.append(divTimelineIcon);

  let article = document.createElement("article");
  article.className = "timeline-entry begin animate-box";
  article.append(divTimelineEntryInner);

  mainContainer.append(article);
}

function populateLinks(items, id) {
  let footer = document.getElementById(id);

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      let span = document.createElement("span");
      span.className = "col";

      let p = document.createElement("p");
      p.className = "col-title";
      p.innerHTML = item.label;
      span.append(p);

      let nav = document.createElement("nav");
      nav.className = "col-list";

      let ul = document.createElement("ul");
      item.data.forEach(function (data) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        if (data.link) {
          a.href = data.link;
          a.target = "_blank";
        }
        if (data.func) {
          a.setAttribute("onclick", data.func);
        }
        a.innerHTML = data.text;

        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      span.append(nav);
      footer.append(span);
    }
  });
}

function populateQuals(items, id) {
  const container = document.getElementById(id);
  
  // Create the qualifications card if it doesn't exist
  let qualCard = container.querySelector('.qual-card');
  if (!qualCard) {
    qualCard = document.createElement('div');
    qualCard.className = 'qual-card';
    container.appendChild(qualCard);
  }
  
  // Create the list inside the card
  const ul = document.createElement("ul");
  ul.id = "quals-list";
  
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  
  // Add list to the card
  qualCard.appendChild(ul);
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

// Add CSS styles for the qual-card
function addQualStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .qual-card {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 5px;
      width: 100%;
    }
    
    #quals-list {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
    }
    
    #quals-list li {
      padding: 5px 0;
    }
  `;
  document.head.appendChild(style);
}

// Add styles when document loads
document.addEventListener('DOMContentLoaded', addQualStyles);

populateBio(bio, "bio");
populateSkills(skills, "skills");
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

// Call populateQuals after DOMContentLoaded to ensure the container exists
document.addEventListener('DOMContentLoaded', () => {
  populateQuals(quals, "quals");
});
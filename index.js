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
      let pTimelineText = document.createElement("p");
      pTimelineText.className = "timeline-text";
      pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
      divTimelineLabel.append(pTimelineText);
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

    // if (item.label === "copyright-text") {
    //   let div = document.createElement("div");
    //   div.className = "copyright-text no-print";
    //   item.data.forEach(function (copyright) {
    //     let p = document.createElement("p");
    //     p.innerHTML = copyright;
    //     div.append(p);
    //   });
    //   footer.append(div);
    // }
  });
}

function populateQuals(items, id) {
  const container = document.getElementById(id);
  const ul = document.createElement("ul");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}


function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

// function getBlogDate(publishDate) {
//   const elapsed = Date.now() - Date.parse(publishDate);

//   // Time conversions in milliseconds
//   const msPerSecond = 1000;
//   const msPerMinute = msPerSecond * 60;
//   const msPerHour = msPerMinute * 60;
//   const msPerDay = msPerHour * 24;
//   const msPerMonth = msPerDay * 30;
//   const msPerYear = msPerDay * 365;

//   if (elapsed < msPerMinute) {
//     const seconds = Math.floor(elapsed / msPerSecond);
//     return `${seconds} seconds ago`;
//   } else if (elapsed < msPerHour) {
//     const minutes = Math.floor(elapsed / msPerMinute);
//     return `${minutes} minutes ago`;
//   } else if (elapsed < msPerDay) {
//     const hours = Math.floor(elapsed / msPerHour);
//     return `${hours} hours ago`;
//   } else if (elapsed < msPerMonth) {
//     const days = Math.floor(elapsed / msPerDay);
//     return days == 1 ? `${days} day ago` : `${days} days ago`;
//   } else if (elapsed < msPerYear) {
//     const months = Math.floor(elapsed / msPerMonth);
//     return months == 1 ? `${months} month ago` : `${months} months ago`;
//   } else {
//     const years = Math.floor(elapsed / msPerYear);
//     return years == 1 ? `${years} year ago` : `${years} years ago`;
//   }
// }

populateBio(bio, "bio");
populateSkills(skills, "skills");
populateQuals(quals, "quals");
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

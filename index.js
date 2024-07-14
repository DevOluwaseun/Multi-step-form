const regName = document.querySelector(".input_name");
const regEmail = document.querySelector(".input_email");
const regBtn = document.querySelector(".btn_1");
const topicsBtn = document.querySelector(".btn_2");
const summaryBtn = document.querySelector(".btn_3");
const reg = document.querySelector(".register");
const topics = document.querySelector(".topics");
const summary = document.querySelector(".summary");
const checkmark1 = document.querySelector(".checkmark_1");
const checkmark2 = document.querySelector(".checkmark_2");
const checkmark3 = document.querySelector(".checkmark_3");
const topicOptions = document.querySelectorAll(".topic_options");
const topic1 = document.querySelector(".topic_1");
const topic2 = document.querySelector(".topic_2");
const topic3 = document.querySelector(".topic_3");
const summaryDetails = document.querySelector(".details_summary");
const summaryTopics = document.querySelector(".topic_summary");
const selectedTopics = [];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

regBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (regName.value !== "" && isValidEmail(regEmail.value)) {
    reg.classList.toggle("hidden");
    topics.classList.toggle("hidden");
    checkmark1.classList.remove("active_page");
    checkmark1.classList.add("confirm_page");
    checkmark2.classList.add("active_page");
    summaryDetails.insertAdjacentHTML(
      "beforebegin",
      ` <h4><span>Name:</span> ${regName.value} </h4>
                <h4><span>Email:</span>  ${regEmail.value}</h4>`
    );
  }
});

let topicSelect = false;
topicOptions.forEach((topic) => {
  topic.addEventListener("click", function (e) {
    e.preventDefault();
    topic.classList.toggle("selected_bk");
    topic.querySelector("h4").classList.toggle("selected");
    topicSelect = true;
  });
});

topicsBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (topicSelect) {
    topics.classList.toggle("hidden");
    summary.classList.toggle("hidden");
    checkmark2.classList.remove("active_page");
    checkmark2.classList.add("confirm_page");
    checkmark3.classList.add("active_page");
  }

  topicOptions.forEach((topic) => {
    if (topic.querySelector("h4").classList.contains("selected")) {
      selectedTopics.push(topic.querySelector("h4").textContent);

      summaryTopics
        .querySelector("ul")
        .insertAdjacentHTML(
          "beforeend",
          `<li>${topic.querySelector("h4").textContent}</li>`
        );
    }
  });
});

summaryBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("✅ Success");
});

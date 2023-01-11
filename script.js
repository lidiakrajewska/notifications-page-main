const notifications = document.querySelectorAll(".notification");
const notificationsTitles = document.querySelectorAll(".notification__title");
const readAllBtn = document.querySelector(".read-btn");
const notificationsNum = document.querySelector("#notifications-num");

readAllBtn.addEventListener("click", readAll);

function readAll() {
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
  notificationsTitles.forEach((title) => {
    title.classList.remove("sign");
  });
  notificationsNum.innerHTML = "0";
}

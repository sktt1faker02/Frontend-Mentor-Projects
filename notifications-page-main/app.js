const markAsRead = document.querySelector(".mark");
const newNotif = document.querySelectorAll(".new_notif");
const newNotifIcon = document.querySelectorAll(".notification_icon");
const btnNotif = document.querySelector(".btn_notification");

markAsRead.addEventListener("click", () => {
  newNotif.forEach((element) => {
    element.classList.remove("new_notif");
    element.querySelector(".notification_icon").remove();
    btnNotif.textContent = 0;
  });

  //   newNotifIcon.forEach((elements) => {
  //     elements.classList.remove("notification_icon");
  //   });
});

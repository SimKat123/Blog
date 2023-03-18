const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/dashboard/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.error(response.statusText)
    }
  }
};

let deleteBtn = document.querySelectorAll(".delete-button");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", delButtonHandler);
}

const updatePost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#updated-post-title").value.trim();
  const content = document.querySelector("#updated-post-content").value.trim();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/dashboard/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.error(response.statusText);
    }
  }
};
document
  .querySelector("#update-post-submit-button")
  .addEventListener("click", updatePost);

const form = document.querySelector("form");
if (form!==null){
  form.addEventListener("submit", (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();
    const { name, job, company, email, category, message } = event.target;

  	// Use your API endpoint URL you copied from the previous step
    const endpoint = "https://58ho8blr2h.execute-api.us-east-2.amazonaws.com/default/sendContactEmail"

    // We use JSON.stringify here so the data can be sent as a string via HTTP

  	const body = JSON.stringify({
      name: name.value,
      job: job.value,
      company: company.value,
      email: email.value,
      category: category.value,
      message: message.value
    });

    const requestOptions = {
      method: "POST",
      body
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        console.log("response.statusText =", response.statusText);
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        document.getElementById("result-text").innerText =
          "Email sent successfully!";
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("result-text").innerText =
          "An unkown error occured.";
      });
  });

}

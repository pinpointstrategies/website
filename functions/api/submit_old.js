/**
 * POST /api/submit
*/
export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();

    var output = {};
    for (let [key, value] of input) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    }
  } catch (err) {
    return new Response('Error parsing JSON content', { status: 400 });
  }
  try {
    const url = "/";

    const body = JSON.stringify(output, null, 2);

    const endpoint =
    "<https://58ho8blr2h.execute-api.us-east-2.amazonaws.com/addMethods/sendContactEmail>";

    const requestOptions = {
      method: "POST",
      body
    };

    fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      console.log('posting to lambda');
      return response.json();
    })
    .catch((error) => {
      console.log(error)
    });

    /*return new Response.redirect(url);*/

  } catch (err) {
      return new Response('Error Posting', { status: 400 });
  }

}

/**
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, email, message } = event.target;

	// Use your API endpoint URL you copied from the previous step
  const endpoint =
    "<https://58ho8blr2h.execute-api.us-east-2.amazonaws.com/default/sendContactEmail>";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});
*/
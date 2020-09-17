const content = document.getElementById('content');

const contact = `
<div class="container p-2 mt-3">
    <h1 class="border-bottom">Contact Us</h1>
    <h4>Reach out to us today and have us amaze you</h4>
  <p class="lead">
  <address>
  <strong>Phone/WhatsApp:</strong> +234 706 369 8007<br>
  <strong>Instagram:</strong> @exquisitekitchen 
  </address>
  </p>
</div>
`;

const renderContact = () => {
  content.insertAdjacentHTML('beforeend', contact);
};

export default renderContact;
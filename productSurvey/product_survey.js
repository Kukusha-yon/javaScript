function submitFeedback() {
    // Collect input data
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    // Additional validation if needed
    if (!username || !age || !email || !job || !designation || !productType || !feedback) {
      alert('All fields are required!');
      return;
    }
    
    // Display alert
    alert('Thank you for your valuable feedback!');
    
    // Update the user information section
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    
    // Show the user information section
    document.getElementById('userInfo').style.display = 'block';
  }
  
  // Event listener for button click
  const submitButton = document.getElementById('submitBtn');
  submitButton.onclick = submitFeedback;
  
  // Event listener for Enter key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
  

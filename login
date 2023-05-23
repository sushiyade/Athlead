<!DOCTYPE html>
<html>
<head>
  <title>Sports Matching and Booking</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      margin: 0 auto;
      max-width: 600px;
      padding: 20px;
    }
    h1 {
      color: #333;
    }
    input[type="text"], input[type="password"], select {
      padding: 10px;
      margin: 10px 0;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    input[type="submit"] {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Sports Matching and Booking System</h1>
    
    <h2>Login</h2>
    <form id="loginForm" action="login.php" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <input type="submit" value="Login">
    </form>
    
    <h2>Match and Booking System</h2>
    <p>Welcome, <span id="loggedInUser"></span>!</p>
    
    <!-- Add your matching and booking system components here -->
    
  </div>
  
  <script>
    // Display logged-in user's name
    var loggedInUserElement = document.getElementById('loggedInUser');
    var loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var username = loginForm.username.value;
      loggedInUserElement.textContent = username;
      loginForm.reset();
    });
  </script>
</body>
</html>
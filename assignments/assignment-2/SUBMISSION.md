Name: John Tatlonghari
Student ID: 924450940
GitHub Username: JohnTatlonghari
Assignment Number: 2


OVERVIEW:

We were tasked to create a portfolio website using HTML for web development class. The main focus is to show knowledge of fundamental HTML tags and conventions such as proper semantics and layout. 

APPROACH:

I followed the recommended schedule and completed each part after the relevant class discussion. Along the way, I went back to old code and polished them as I progressed. I structured elements based on relevance. Everything related to me and my career I surrounded with the main tag. Then, my contact info and inquiry form went to the footer. Other information about me and some assignment related requirements that I wasn't sure where to categorize inside the aside tag. 

CODE EXPLANATION:

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="description" content="Personal portfolio of John Tatlonghari">
   <meta name="keywords" content="portfolio, web development, student">
   <meta name="author" content="John Tatlonghari">

   <link rel="icon" type="image/x-icon" href="images/w-icon.png">
   <title>John Tatlonghari - Portfolio</title>

   <style>
      td,
      tr,
      th {
         border-right: solid 3px rgb(0, 0, 0);
         border-left: solid 3px rgb(0, 0, 0);
      }
   </style>
</head>

The head provides accessibility for those who need it. There is also a small style section to make the table look better. 
====================================================================================
      <section id="about">
         <h1>John Tatlonghari</h1>
         <article class="bio">
            <h3>About Me</h3>
            <p>
               Hi, I'm John Tatlonghari (TAT-LONG-HARI), a junior Computer Science major at San Francisco State
               University. I mainly do programming in Java and just recently started to learn C++.
               <br>Right now, my career goal is to get an internship to gain relevant experience. I do not have an idea
               of what area to specialize in yet but I have considered AI, Data, and UI/UX Design.
               <br>I hope to create a web-based image viewer once I finish this class.
            </p>
         </article>

         <article class="hometown">
            <h3>From San Carlos, CA</h3>
            <p><img src="images/Laurel_Street.png" alt="Hometown Image"></p>
         </article>

      </section>

Some code was omitted for clarity. 

This is how each block of code in my website is formatted. In general I tend to enclose a particular topic (e.g about) using <section id="">. Then, if it has subtopics (bio, hometown, etc) I use <article class="">. This makes things look organized and easier to identify. The projects article doesn't have any meaningful content to it but I put placeholders to complete assignment requirements. I wasn't really sure what to put there. 

====================================================================================
          <div class="form-container">
               <h2>For Inquiries</h2>
               <form id="userForm" onsubmit="return validateForm()">
                  <!-- Email Input -->
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email"
                     pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
                  <span class="error-message" id="emailError">Please enter a valid email (e.g
                     example@gmail.com)<br><br></span>

                  <!-- Number Input -->
                  <label for="age">Age (10-63):</label>
                  <input type="number" id="age" name="age" min="10" max="63" required placeholder="Enter your age">
                  <span class="error-message" id="ageError">Age must be between 10 and 63.<br><br></span>

                  <!-- Date Input -->
                  <label for="dob">Date of Birth:</label>
                  <input type="date" id="dob" name="dob">

                  <!-- Password Input -->
                  <label for="password">Password:</label>
                  <input type="password" id="password" name="password" required pattern=".{6,}"
                     placeholder="At least 6 characters">
                  <span class="error-message" id="passwordError">Password must be at least 6 characters
                     long.<br><br></span>

                  <button type="submit">Register</button>

               </form>
            </div>

One important thing to note is that this is buggy in firefox 135.0.1. It doesn't show what you're required to input and the submit button only brings you back to the email input. Use CHROME instead. 




<!DOCTYPE html>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <link rel="stylesheet" href="<c:url value="/views/task2/form/form.css" />">
</head>
<body>
    <div class="form-container">
      <form action="" class="form-submit">
        <div class="row title">
          <span class="contact">
              Contact Us
          </span>
        </div>
          <div class="row item">
              <label for="fullname" >FULL NAME</label>
              <input type="text" id="fullname" placeholder="Enter Your Name">
          </div>
          <div class="row col-6">
              <div class="col-left item">
                  <label for="email" >EMAIL</label>
                  <input type="text" id="email" placeholder="Enter Your EMAIL">
              </div>
              <div class="col-right item">
                  <label for="phone" >PHONE</label>
                  <input type="text" id="phone" placeholder="Enter Number Phone">
              </div>
          </div>
          <div class="row item">
              <label for="choose" >NEEDED SERVICES</label>
<!--              <input type="text" id="choose" placeholder="Please Chooses">-->
              <select  id="choose">
                  <option value="" disabled selected>Please Chooses</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Us">USA</option>
                  <option value="En">England</option>
              </select>
          </div>
          <div class="row content-message item">
              <label for="message" >MESSAGE</label>
              <textarea id="message" rows="5" placeholder="Your message here..." ></textarea>
          </div>
          <div class="row btn-submit">
              <button class="btn">Submit</button>
          </div>

      </form>
    </div>
</body>
</html>
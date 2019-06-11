import React, { Component } from 'react';
import './shippingform.css'

class Form extends Component {
  render() {
    (function() {

      function validateHuman(honeypot) {
        if (honeypot) {  //if hidden form filled up
          console.log("Robot Detected!");
          return true;
        } else {
          console.log("Welcome Human!");
        }
      }
    
      // get all data in form and return object
      function getFormData(form) {
        var elements = form.elements;
        var honeypot;
    
        var fields = Object.keys(elements).filter(function(k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        }).map(function(k) {
          if(elements[k].name !== undefined) {
            return elements[k].name;
          // special case for Edge's html collection
          }else if(elements[k].length > 0){
            return elements[k].item(0).name;
          }
        }).filter(function(item, pos, self) {
          return self.indexOf(item) == pos && item;
        });
    
        var formData = {};
        fields.forEach(function(name){
          var element = elements[name];
          
          // singular form elements just have one value
          formData[name] = element.value;
    
          // when our element has multiple items, get their values
          if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
              var item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });
    
        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSend
          = form.dataset.email || ""; // no email by default
    
        console.log(formData);
        return {data: formData, honeypot};
      }
    
      function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;
    
        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
          return false;
        }
    
        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            form.reset();
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
      
      function loaded() {
        console.log("Contact form submission handler loaded successfully.");
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
          forms[i].addEventListener("submit", handleFormSubmit, false);
        }
      };
      document.addEventListener("DOMContentLoaded", loaded, false);
    
      function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
      }
    })();
    return (

 <form className="gform pure-form pure-form-stacked" method="POST"
 action='https://script.google.com/macros/s/AKfycbz18Hn5jNJsGX2j5Dy5TwC01WaAT18ZEMz6H6QlLp3bxancerw/exec'>
   

   <div className="form-elements">
     <fieldset className="pure-group">
       <label>First Name: </label>
       <input id="name" name="firstname" placeholder="first name" />
     </fieldset>

     <fieldset className="pure-group">
       <label>Last Name: </label>
       <input id="name" name="lastname" placeholder="last name" />
     </fieldset>

     <fieldset className="pure-group">
       <label>Email Address:</label>
       <input id="email" name="email" type="email" 
       required placeholder="name@email.com"/>
     </fieldset>

     <fieldset className="pure-group">
       <label>Street Address: </label>
       <input id="color" name="streetaddress" placeholder="1234 south street" />
     </fieldset>

     <fieldset className="pure-group">
       <label>City: </label>
       <input id="color" name="city" placeholder="new york city" />
     </fieldset>

     <fieldset className="pure-group">
       <label>State: </label>
       <input id="color" name="state" placeholder="WI" />
     </fieldset>

     <fieldset className="pure-group">
       <label>Zip Code: </label>
       <input id="color" name="zipcode" placeholder="90210" />
     </fieldset>

     <fieldset className="pure-group">
       <label>Message: </label>
       <textarea id="message" name="message" rows="10"
       placeholder="Tell us how many you want of what kind."></textarea>
     </fieldset>

     {/* <fieldset className="pure-group honeypot-field">
       <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
       <input id="honeypot" type="text" name="honeypot" value="" />
     </fieldset> */}

     <button className="button-success pure-button button-xlarge">
       <i className="fa fa-paper-plane"></i>&nbsp;Send Shipping Info</button>
   </div>

   
   <div className="thankyou_message" style={{display:'none'}}>
     <h2><em>Thanks</em> for contacting us!
       We will get back to you within 24 hrs!</h2>
   </div>

 </form>


    );
  }
}

export default Form;
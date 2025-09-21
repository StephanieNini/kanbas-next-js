import Link from "next/link";

export default function Lab1() {
    return (
        <div>
            <h2><b>Lab 1</b></h2>
            <p><b>Full Name:</b>Zhiye Li</p>
            <p><b>Section:</b> CS5610</p>
            <h3>Links</h3>
<ul>
  <li><Link href="/labs/lab1">Lab 1</Link></li>
  <li><Link href="/labs/lab2">Lab 2</Link></li>
  <li><Link href="/labs/lab3">Lab 3</Link></li>
  <li><Link href="/">Kambaz Application</Link></li>
  <li>
    <a href="https://github.com/StephanieNini/kambaz-next-js" target="_blank">
      Source Code Repo
    </a>
  </li>
</ul>

<br /><br />
<div id ="wd-lists">
<span>My favorite recipe:</span>
<ol id="wd-your-favorite-recipe">
  <li>Prep ingredients</li>
  <li>Mix batter</li>
  <li>Cook and serve</li>
</ol>

<span>My favorite books (in no particular order)</span>
<ul id="wd-your-books">
  <li>Harry Potter</li>
  <li>The Hobbit</li>
  <li>1984</li>
</ul>
</div>


<br /><br />
<section id="wd-text-fields">
  <label htmlFor="wd-text-fields-username"> <b>Username:</b> </label>
  <input id="wd-text-fields-username" placeholder="jdoe" /><br/>
  <label htmlFor="wd-text-fields-password"> <b>Password:</b> </label>
  <input id="wd-text-fields-password" type="password" placeholder="••••••" /><br/>
</section>

<section id="wd-textarea">
  <label htmlFor="wd-textarea-about"> <b>About you:</b> </label><br/>
  <textarea id="wd-textarea-about" rows={3} cols={40} placeholder="Say something..." />
</section>

<section id="wd-buttons">
  <p><button id="wd-button-primary" type="button">Primary</button></p>
  <p><button id="wd-button-submit" type="submit">Submit</button></p>
  <p><button id="wd-button-reset" type="reset">Reset</button></p>
</section>

<br/><br/>
<section id="wd-radio-buttons">
  <b>Gender:</b>
  <label><input type="radio" name="wd-gender" value="m" /> Male</label>
  <label><input type="radio" name="wd-gender" value="f" /> Female</label>
</section>

<section id="wd-checkboxes">
  <b>Hobbies:</b><br />

  <input type="checkbox" name="hobby-reading" id="wd-chkbox-reading" />
  <label htmlFor="wd-chkbox-reading">Reading</label><br />

  <input type="checkbox" name="hobby-coding" id="wd-chkbox-coding" />
  <label htmlFor="wd-chkbox-coding">Coding</label><br />

  <input type="checkbox" name="hobby-hiking" id="wd-chkbox-hiking" />
  <label htmlFor="wd-chkbox-hiking">Hiking</label>
</section>


<br/><br/>
<section id="wd-select-dropdowns">
  <label htmlFor="wd-state-select"> <b>State:</b> </label>
  <select id="wd-state-select" defaultValue="MA">
    <option value="MA">
      MA
      </option>
    <option value="CA">
      CA
      </option>
    <option value="NY">
      NY
      </option>
  </select>
</section>

<h5>Select many</h5>
<label htmlFor="wd-select-many-genre">
Favorite all movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
   <option selected value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<br/><br/>

<section id="wd-other-html-fields">
  <b><h4>Other HTML field types</h4></b>

  <label htmlFor="wd-text-fields-email"> <b>Email:</b> </label>
  <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email"/><br/>

  <label htmlFor="wd-text-fields-salary-start"> <b>Starting salary:</b></label>
  <input type="number" value="100000" placeholder="1000" id="wd-text-fields-salary-start"/><br/>

  <label htmlFor="wd-text-fields-rating"> <b>Rating:</b> </label>
  <input type="range" value="4" max="5" id="wd-text-fields-rating"/><br/>

  <label htmlFor="wd-text-fields-dob"> <b>Date of birth:</b> </label>
  <input type="date" value="2000-01-21" id="wd-text-fields-dob"/><br/>
</section>

<br/><br/>
<section id="wd-anchors">
  Please <a href="https://www.lipsum.com" id="wd-lipsum"><b>click here</b></a> to get dummy text<br/>
  <a href="https://github.com/StephanieNini/kambaz-next-js" id="wd-github" target="_blank">Source Code Repo</a>
</section>


        </div>
    );
}
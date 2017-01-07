# PasswordGeneratorjQuery
jQuery use To Create a Password Powerful and Easy Passage in Use

 
<hr>

<a href='http://akwade.com/generatePassword/'>Demo &amp; Examples </a>

<h3> How It Works </h2>

<h3> HTML </h3>
<pre>
  &lt;div class="password-gene"> 
    &lt;input type="text">
    &lt;button> Change Password &lt;/button>
  &lt;/div>
</pre>

<h3> Js </h3>
- <p>Required jQuery </p>
<pre>
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../bower_components/js/jquery.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
</pre>
- <p> Required Plugin PasswordGeneratorjQuery </p>
<pre>
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../bower_components/js/generate-password.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
</pre>
- <p> Use the plugin as follows: </p>
<pre>
  $('.password-gene').generatePassword();
</pre>

<h2> Options </h2>


<table>
  <thead>
  <tr>
  <th>Attribute</th>
  <th>Type</th>
  <th>Default</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
      <tr>
        <td><code>passCharachterSet</code></td>
        <td><em>String</em></td>
        <td><code>a-z,#</code></td>
        <td>attribute is used to set the character type used in the password. You can use numbers 0-9, letters a-z (and or) A-Z, and spical characters #. All of these sets can be used individually work together.</td>
      </tr>
      <tr>
        <td><code>passSize</code></td>
        <td><em>Integer</em></td>
        <td><code>15</code></td>
        <td>attribute is used to set the number of characters that is used in the field, if you need a password with 12 characters, then set this attribute to 12.</td>
      </tr>
      <tr>
        <td><code>passSeparate</code></td>
        <td><em>String</em></td>
        <td><code>,</code></td>
        <td>Mark that separates each character and another character in the property passCharachterSet </td>
      </tr>
  </tbody>
</table>

<h3>Features</h3>
<ul>
  <li> Easy To Use</li>
  <li> Directed By a Strong Password</li>
  <li> Change The Password When You Press The Button</li>
  <li> Select The Password When Clicked On Input</li>
</ul>

# Hidenger

Show and hide input with one click  
Easy code Vanilla & Pure Javascript     

## How To Install

<code>npm i hidenger</code> <br>
OR <br>
<code>npm install hidenger</code>

### Things to pay attention

* Input only works with ID attribute
* The button must have a <b>"data-relevant-input"</b> attribute and this value must match the input's ID

### Example HTML Structure And JavaScript Trigger

```HTML
    <div>
        <input type="password" id="user-password">
        <button type="button" id="user-password-manipulation" data-relevant-input="user-password">Show Password</button>
    </div>
```
```HTML
    <div>
        <input type="password" id="user-password2">
        <button type="button" class="user-password-manipulation2" data-relevant-input="user-password2">Show Password</button>
    </div>

```

```JS
    Hidenger.trigger('#user-password-manipulation');
    Hidenger.trigger('.user-password-manipulation2');
```
# Thanks For Help
@selimdoyranli


0.2.5

The form us modular with those parameters which are the exact names of what it is suposed to change:

disabled: boolean;
label: string;
name: string;
placeholder: string;
required: boolean;
type: string;
value: string;

And All the styles with variables can be change:

.container {
display: grid;
grid-template-rows: auto auto;
background: var(--body-bg, #f5f5dc);
color: var(--body-color, #1F1F6F);
border: var(--body-border,1px solid #1F1F6F);
border-radius: var(--body-border-radius,0.2rem);
padding: var(--body-padding, 2rem);
padding: var(--body-padding, 2rem);
font-family: var(--font-family, Helvetica);
font-size: var(--form-font-size, 20px);
font-weight: var(--form-font-weight, 400);
}

from {
grid-column: 1/-1;
}

label {
min-width: 8rem;
margin-right: 1rem;
text-align: left;
}

input {
width: 100%;
box-sizing: border-box;
padding: 6px 10px;
margin: 1% 0;
border: 1px solid #ccc;
border-radius: 4px;
}

.infoInputs {
display: flex;
align-items: center;
margin-bottom: 1rem;
}

.button-submit {
grid-column: -1;
justify-self: flex-end;
background-color: var(--button-bg, #f5f5dc);
color: var(--button-color, #1F1F6F);
border: var(--button-border,1px solid #1F1F6F);
border-radius: var(--button-border-radius,0.2rem);
margin-top: 2rem;
padding: 0.5rem 1.5rem;
cursor: pointer;
transition: background-color 0.3s;
font-family: var(--font-family, Helvetica);
font-size: var(--button-font-size, 16px);
font-weight: var(--button-font-weight, 400);
}

.button-submit:hover {
background-color: var(--button-hover-color, white);
}



Here is an exemple on how to call it with the styles in the <style> inside the <head>:


form-user-jffp {
        --body-padding: 3rem 5rem 3rem 5rem;
        --body-bg: #ffffff;
        --body-color: #000000;
        --body-border: 1px solid #000000;
        --body-border-radius: 0.1rem;


        --button-bg: #ffffff;
        --button-color: #000000;
        --button-border: 1px solid #000000;
        --button-border-radius: 0.1rem;

        --button-hover-color: #00a2ed;
}


<form-user-jffp 
      inputLabels='[
        {
          "label":"Name",
          "name": "name", 
          "type": "text",
          "value": "name",
          "placeholder": "name",
          "required": true
        },
        {
          "label":"Email",
          "name": "email", 
          "type": "text",
          "placeholder": "Not needed for the time being",
          "disabled": true
        },
        {
          "label":"Password",
          "name": "password",
          "placeholder": "Needed for the time being",
          "type": "password"
        }]' 
      get-api-url="http://your-own-api">
    </form-user-jffp>


0.2.6
and onward is a test for sharepoint list
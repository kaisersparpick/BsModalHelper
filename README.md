# BsModalHelper

A **Bootstrap Modal Helper** written in TypeScript.

The _constructor_ accepts 4 arguments
  - `id: string`
    - This will be the unique identifier for the generated outermost `<div>` element. 
  - `$target: JQuery`
    - The target JQuery element, into which the modal markup will be injected. The wrapper around the modal.
  - `settings: IBsModalHelperSettings`
    - The settings object.
  - `config?: IBsModalHelperConfig`
    - (Optional) The config object.

The helper can be initialized like so:
```ts
var myModalSettings: Kaiser.IBsModalHelperSettings = {
    title: "Title",
    body: "Body"
};
var myModal = new Kaiser.BsModalHelper("myModal", $("#myModalWrapper"), myModalSettings);
```

To show the modal, simply use the `show()` and `hide()` methods:
```ts
myModal.show();
myModal.hide();
```

A sample config object:
```ts
var myModalConfig: Kaiser.IBsModalHelperConfig = {
    showFooter: false,
    modalOptions: { backdrop: "static", keyboard: false, show: false }
};
```
    

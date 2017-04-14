/// <reference path="../TypeScriptDefs/bootstrap.d.ts" />
/// <reference path="../TypeScriptDefs/jquery.d.ts" />
/// <reference path="../BsModalHelper.ts" />

$(document).ready(function() {

    var $launch1 = $("#launch1");
    var myModalSettings: Kaiser.IBsModalHelperSettings = {
        title: "Lorem ipsum dolor sit amet",
        body: "Consectetur adipiscing elit. Morbi aliquam placerat ornare. Cras vel ante non " +
        "libero fringilla feugiat. Praesent mi purus, facilisis id ullamcorper vitae, rutrum nec massa. " +
        "Maecenas fringilla tempor blandit."
    };
    var myModal1 = new Kaiser.BsModalHelper("myModal1", $("#myModal1Wrapper"), myModalSettings);
    $launch1.on("click", () => { myModal1.show(); });

    // --------------

    var $launch2 = $("#launch2");
    var myModalSettings2: Kaiser.IBsModalHelperSettings = {
        title: "Mauris venenatis",
        body: "Nullam sit amet convallis sem, a mattis libero. Quisque a ex eleifend, aliquam libero quis, " +
        "pharetra ipsum. Morbi vitae magna faucibus, sollicitudin risus vel, porta purus. Mauris sagittis " +
        "lorem eros, vel finibus felis ultrices nec. Maecenas iaculis enim id nulla egestas commodo. " +
        "Curabitur in feugiat massa. Donec sit amet dapibus ex. Aliquam placerat accumsan fermentum."
    };
    var myModalConfig2: Kaiser.IBsModalHelperConfig = {
        showFooter: false,
        modalOptions: { backdrop: "static", keyboard: false, show: false }
    };
    var myModal2 = new Kaiser.BsModalHelper("myModal2", $("#myModal2Wrapper"), myModalSettings2, myModalConfig2);
    $launch2.on("click", () => { myModal2.show(); });

});
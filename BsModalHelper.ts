/// <reference path="TypeScriptDefs/bootstrap.d.ts" />
/// <reference path="TypeScriptDefs/jquery.d.ts" />

namespace Kaiser {

    export interface IBsModalHelperConfig {
        showHeaderButton?: boolean;
        showFooter?: boolean;
        modalOptions?: ModalOptions
    }

    export interface IBsModalHelperSettings {
        title: string;
        body: string;
    }

    const _configDefaults: IBsModalHelperConfig = {
        showHeaderButton: true,
        showFooter: true
    };

    const _modalTpl: string = `
        <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    export class BsModalHelper {
        config: IBsModalHelperConfig;
        settings: IBsModalHelperSettings;

        $modal: JQuery;

        constructor(id: string, $target: JQuery, settings: IBsModalHelperSettings, config?: IBsModalHelperConfig) {
            this.config = config || _configDefaults;
            this.settings = settings;

            $target.html(_modalTpl);
            this.$modal = $target.find("> div").prop("id", id);

            this.init();
        }

        init() {
            this.$modal.find(".modal-title").text(this.settings.title);
            this.$modal.find(".modal-body").html(this.settings.body);

            if (this.config.showFooter === false)
                this.$modal.find(".modal-footer").remove();
            if (this.config.showHeaderButton === false)
                this.$modal.find(".modal-header > button").remove();
            if (this.config.modalOptions !== undefined)
                this.$modal.modal(this.config.modalOptions);
        }

        show() {
            this.$modal.modal("show");
        }

        hide() {
            this.$modal.modal("hide");
        }
    }

}
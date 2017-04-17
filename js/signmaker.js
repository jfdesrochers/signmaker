function numeric_only(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    var field = e.target;
    if (unicode == 8 || unicode == 9 || (unicode >= 48 && unicode <= 57) || unicode == 46 || unicode == 44) {
        //Replace any commas with periods
        field.value = field.value.replace(/,/g, ".");
        return true;
    }
    else {
        return false;
    }
}

/**
 * Returns a new object with all the provided keys initialized with defaultValue.
 * @param {array} keys Array of keys to initialize the object with.
 * @param {*} defaultValue Default value for all the keys.
 */
function initObject(keys, defaultValue) {
    var obj = {}
    for (var i=0; i<keys.length; i++) {
        obj[keys[i]] = defaultValue
    }
    return obj
}

const ModalWindow = function(component, attrs) {
    return {
        view: function () {
            return m(component, attrs)
        }
    }
}

var smGlobals = {}

smGlobals.oninit = function (vnode) {
    var self = this

    var savedGlobals = localStorage.getItem('globalValues')
    if (savedGlobals) {
        self.globalValues = JSON.parse(savedGlobals)
    } else {
        self.globalValues = initObject(['p250', 'p350', 'p500', 'p1000', 'pMore', 'pUltra', 'pRestore', 'pTaxes', 'pEco', 'pAcd'], '')
    }
    
    self.doCancel = function() {
        if (typeof vnode.attrs.done === 'function') {
            vnode.attrs.done(null)
        }
    }
    self.gValue = function(name) {
        return function (value) {
            if (value) {
                self.globalValues[name] = value
            } else {
                value = self.globalValues[name]
            }
            return value
        }
    }
}

smGlobals.view = function () {
    var self = this
    return m(".modal.fade.in#globaloptions", {
            oncreate: (vdom) => {
                $(vdom.dom).modal('show')
                $(vdom.dom).on('hidden.bs.modal', self.doCancel)
            }
        }, m(".modal-dialog", m(".modal-content", [
        m("form.form-signmaker.form-globals#globalsform", [
            m(".modal-header", [
                m("a.btn.btn-default", {'data-dismiss': 'modal'}, m("span.glyphicon.glyphicon-remove")),
                m("h4.modal-title#globaltitle", "Valeurs générales")
            ]),
            m(".modal-body", [
                m("h4", "Entrez les valeurs générales"),
                m("p", "Veuillez entrer dans les champs ci-dessous les différentes valeurs qui serviront dans les calculs."),
                m("hr"),
                m(".alert.alert-danger#globalserror", {style: {"display": "none"}}),
                m(".row", [
                    m(".col-sm-6", [
                        m("h4", "Prix du Plan de Service Plus pour ordinateur portatif"),
                        m(".form-group", [
                            m("label[for='p250']", "0,00 $ - 249,99 $"),
                            m("input.form-control#p250[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('p250')), value: self.gValue('p250')()})
                        ]),
                        m(".form-group", [
                            m("label[for='p350']", "250,00 $ - 349,99 $"),
                            m("input.form-control#p350[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('p350')), value: self.gValue('p350')()})
                        ]),
                        m(".form-group", [
                            m("label[for='p500']", "350,00 $ - 499,99 $"),
                            m("input.form-control#p500[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('p500')), value: self.gValue('p500')()})
                        ]),
                        m(".form-group", [
                            m("label[for='p1000']", "500,00 $ - 999,99 $"),
                            m("input.form-control#p1000[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('p1000')), value: self.gValue('p1000')()})
                        ]),
                        m(".form-group", [
                            m("label[for='pMore']", "1000,00 $ +"),
                            m("input.form-control#pMore[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pMore')), value: self.gValue('pMore')()})
                        ])
                    ]),
                    m(".col-sm-6", [
                        m("h4", "Prix de la configuration et autres"),
                        m(".form-group", [
                            m("label[for='pUltra']", "Configuration Ultra"),
                            m("input.form-control#pUltra[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pUltra')), value: self.gValue('pUltra')()})
                        ]),
                        m(".form-group", [
                            m("label[for='pRestore']", "Clé USB 32gb et Service restauration"),
                            m("input.form-control#pRestore[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pRestore')), value: self.gValue('pRestore')()})
                        ]),
                        m(".form-group", [
                            m("label[for='pTaxes']", "TPS et TVQ combinées (%)"),
                            m("input.form-control#pTaxes[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pTaxes')), value: self.gValue('pTaxes')()})
                        ]),
                        m(".form-group", [
                            m("label[for='pEco']", "Écofrais"),
                            m("input.form-control#pEco[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pEco')), value: self.gValue('pEco')()})
                        ]),
                        m(".form-group", [
                            m("label[for='pAcd']", "Facteur pour calcul d'Accord D (0.0xxxx)"),
                            m("input.form-control#pAcd[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pAcd')), value: self.gValue('pAcd')()})
                        ])
                    ])
                ])
            ])
        ]),
        m(".modal-footer", m(".btn-group", [
            m("button.btn.btn-danger[data-dismiss='modal']", "Annuler"),
            m("button.btn.btn-primary#saveglobals", "Sauvegarder")
        ]))
    ])))
}

m.mount(document.getElementById('smmodal'), smGlobals)
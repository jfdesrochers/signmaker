function numeric_only(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    var field = e.target;
    e.redraw = false;
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

    self.error = ''
    self.valid = false

    var savedGlobals = localStorage.getItem('globalValues')
    if (savedGlobals) {
        self.globalValues = JSON.parse(savedGlobals)
    } else {
        self.globalValues = initObject(['p250', 'p350', 'p500', 'p1000', 'pMore', 'pUltra', 'pRestore', 'pTaxes', 'pEco', 'pAcd'], '')
    }
    
    self.doClose= function() {
        if (typeof vnode.attrs.done === 'function') {
            vnode.attrs.done(self.valid ? self.globalValues : null)
        }
    }

    self.gValue = function(name) {
        return function (value) {
            if (value !== undefined) {
                self.globalValues[name] = value
            } else {
                value = self.globalValues[name]
            }
            return value
        }
    }

    self.saveAndClose = function () {
        self.error = ''
        self.valid = false
        if (!Object.keys(self.globalValues).every(function (o) {
            return self.globalValues[o].length > 0
        })) {
            self.error = 'Vous devez remplir TOUS les champs!'
            return
        }
        self.valid = true
        $(".modal").modal('hide')
    }
}

smGlobals.view = function () {
    var self = this
    return m(".modal.fade.in#globaloptions", {
            oncreate: (vdom) => {
                $(vdom.dom).modal('show')
                $(vdom.dom).on('hidden.bs.modal', self.doClose)
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
                self.error.length > 0 ? m(".alert.alert-danger#globalserror", self.error) : '',
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
                            m("label[for='pUltra']", "Configuration du PC"),
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
                            m("label[for='pAcd']", "Accord D: mois sans intérêts (6 ou 12)"),
                            m("input.form-control#pAcd[type='text']", {onkeypress: numeric_only, onchange: m.withAttr('value', self.gValue('pAcd')), value: self.gValue('pAcd')()})
                        ])
                    ])
                ])
            ])
        ]),
        m(".modal-footer", m(".btn-group", [
            m("button.btn.btn-danger[data-dismiss='modal']", "Annuler"),
            m("button.btn.btn-primary#saveglobals", {onclick: self.saveAndClose}, "Sauvegarder")
        ]))
    ])))
}

smMain = {}

smMain.oninit = function () {
    var self = this

    self.error = ''

    self.localValues = initObject(['sk1', 'ds1', 'prc1', 'sk2', 'ds2', 'prc2'], '')

    self.lValue = function(name) {
        return function (value) {
            if (value !== undefined) {
                self.localValues[name] = value
            } else {
                value = self.localValues[name]
            }
            return value
        }
    }

    self.openModal = function () {
        m.mount(document.getElementById('smmodal'), ModalWindow(smGlobals, {
            done: function (gValues) {
                m.mount(document.getElementById('smmodal'), null)
                if (gValues) {
                    localStorage.setItem('globalValues', JSON.stringify(gValues))
                    self.globalValues = gValues
                }
            }
        }))
    }

    var savedGlobals = localStorage.getItem('globalValues')
    if (savedGlobals) {
        self.globalValues = JSON.parse(savedGlobals)
    } else {
        self.globalValues = null
        self.openModal()
    }

    self.whichEcp = function (p) {
        if (p >= 1000) {
            return parseFloat(self.globalValues['pMore'])
        } else if (p >= 500) {
            return parseFloat(self.globalValues['p1000'])
        } else if (p >= 350) {
            return parseFloat(self.globalValues['p500'])
        } else if (p >= 250) {
            return parseFloat(self.globalValues['p350'])
        } else {
            return parseFloat(self.globalValues['p250'])
        }
    }

    self.toMoney = function (c) {
        return c.toFixed(2).replace('.', ',') + ' $'
    }

    self.generateSign = function (e) {
        e.preventDefault();
        self.error = ''
        if (!self.globalValues) {
            self.error = 'Vous DEVEZ remplir toutes les valeurs générales AVANT de générer une affiche!'
        }
        if (!Object.keys(self.localValues).every(function (o) {
            return self.localValues[o].length > 0
        })) {
            self.error = 'Vous devez remplir TOUS les champs!'
            return
        }
        try {
            var pr1 = parseFloat(self.localValues['prc1'])
            var p1 = pr1 + parseFloat(self.globalValues['pEco'])
            var pf1 = self.whichEcp(pr1, self.globalValues)
            var c1 = p1 + pf1 + parseFloat(self.globalValues['pUltra']) + parseFloat(self.globalValues['pRestore'])
            var tx1 = c1 + c1 * (parseFloat(self.globalValues['pTaxes']) / 100)
            var ad1 = tx1 / parseFloat(self.globalValues['pAcd'])
            var pr2 = parseFloat(self.localValues['prc2'])
            var p2 = pr2 + parseFloat(self.globalValues['pEco'])
            var pf2 = self.whichEcp(pr2, self.globalValues)
            var c2 = p2 + pf2 + parseFloat(self.globalValues['pUltra']) + parseFloat(self.globalValues['pRestore'])
            var tx2 = c2 + c2 * (parseFloat(self.globalValues['pTaxes']) / 100)
            var ad2 = tx2 / parseFloat(self.globalValues['pAcd'])
            var signData = {
                'c1': self.toMoney(c1),
                'p1': self.toMoney(p1),
                'sk1': self.localValues['sk1'],
                'ds1': self.localValues['ds1'],
                'tx1': self.toMoney(tx1),
                'ad1': self.toMoney(ad1),
                'pf1': self.toMoney(pf1),
                'c2': self.toMoney(c2),
                'p2': self.toMoney(p2),
                'sk2': self.localValues['sk2'],
                'ds2': self.localValues['ds2'],
                'tx2': self.toMoney(tx2),
                'ad2': self.toMoney(ad2),
                'pf2': self.toMoney(pf2),
                'amo': self.globalValues['pAcd']
            }
            window.open('signtemplate.html#?d=' + encodeURIComponent(JSON.stringify(signData)), '_blank')
        } catch (e) {
            console.error(e)
            self.error = 'Une erreur de calcul est survenue. Vérifiez que vous avez entré les bonnes données!'
        }
    }
}

smMain.view = function () {
    var self = this
    return m(".row", m(".col-sm-6.col-sm-offset-3", m(".account-wall#contents", [
        m(".btn-group.btn-top", m("button.btn.btn-sm.btn-beg#openglobals", {onclick: self.openModal},
        [
            m("i.glyphicon.glyphicon-pencil"),
            m.trust("&nbsp;"),
            m.trust("&nbsp;"),
            "Modifier les valeurs générales"
        ])),
        m("img.profile-img[src='img/signmakerlogo.png']"),
        self.error.length > 0 ? m(".alert.alert-danger#formerror", self.error) : '',
        m("form.form-signmaker#signmakerform", [
            m("label[for='sk1']", "UGS du premier ordinateur :"),
            m(".input-group.sign-group", [
                m("span.input-group-addon", m("span.glyphicon.glyphicon-barcode")),
                m("input.form-control#sk1", {onkeypress: numeric_only, onchange: m.withAttr('value', self.lValue('sk1')), value: self.lValue('sk1')(), placeholder: 'UGS premier ordinateur'}),
            ]),
            m("label[for='ds1']", "Description du premier ordinateur :"),
            m(".input-group.sign-group", [
                m("span.input-group-addon", m("span.glyphicon.glyphicon-tag")),
                m("input.form-control#ds1", {onchange: m.withAttr('value', self.lValue('ds1')), value: self.lValue('ds1')(), placeholder: 'Description premier ordinateur'})
            ]),
            m("label[for='prc1']", "Prix du premier ordinateur (avant écofrais) :"),
            m(".input-group.sign-group", [
                m("span.input-group-addon", m("span.glyphicon.glyphicon-usd")),
                m("input.form-control#prc1", {onkeypress: numeric_only, onchange: m.withAttr('value', self.lValue('prc1')), value: self.lValue('prc1')(), placeholder: 'Prix premier ordinateur (avant écofrais)'})
            ]),
            m("hr"),
            m("label[for='sk2']", "UGS du deuxième ordinateur :"),
            m(".input-group.sign-group", [
                m("span.input-group-addon", m("span.glyphicon.glyphicon-barcode")),
                m("input.form-control#sk2", {onkeypress: numeric_only, onchange: m.withAttr('value', self.lValue('sk2')), value: self.lValue('sk2')(), placeholder: 'UGS deuxième ordinateur'}),
            ]),
            m("label[for='ds2']", "Description du deuxième ordinateur :"),
            m(".input-group.sign-group", [
                m("span.input-group-addon", m("span.glyphicon.glyphicon-tag")),
                m("input.form-control#ds2", {onchange: m.withAttr('value', self.lValue('ds2')), value: self.lValue('ds2')(), placeholder: 'Description deuxième ordinateur'})
            ]),
            m("label[for='prc2']", "Prix du deuxième ordinateur (avant écofrais) :"),
            m(".input-group.sign-group", [
                m("span.input-group-addon", m("span.glyphicon.glyphicon-usd")),
                m("input.form-control#prc2", {onkeypress: numeric_only, onchange: m.withAttr('value', self.lValue('prc2')), value: self.lValue('prc2')(), placeholder: 'Prix deuxième ordinateur (avant écofrais)'})
            ]),
            m("button.btn.btn-lg.btn-beg.btn-block#generatebtn", {onclick: self.generateSign}, [m("span.glyphicon.glyphicon-ok"), "  Générer"])
        ])
    ])))
}

m.mount(document.getElementById('smcontents'), smMain)
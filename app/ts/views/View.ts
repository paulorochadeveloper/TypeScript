abstract class View<T> {

    // mudou para protected!
    protected _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }

    update(model: T) {

        this._elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string ;

}
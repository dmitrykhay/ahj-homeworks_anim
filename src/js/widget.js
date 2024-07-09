class Widget {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    const widgetWrap = document.createElement("div");
    widgetWrap.classList.add("widget-wrap");

    const btnWidgetOpen = document.createElement("button");
    btnWidgetOpen.classList.add("btn-widget-open");
    btnWidgetOpen.setAttribute("type", "button");

    widgetWrap.appendChild(btnWidgetOpen);

    this.container.appendChild(widgetWrap);

    this.createWidget();
    this.addEventListeners();
  }

  createWidget() {
    const widgetWrap = this.container.querySelector(".widget-wrap");

    const widget = document.createElement("div");
    widget.classList.add("widget");

    const widgetTitle = document.createElement("div");
    widgetTitle.classList.add("widget-title");

    const h2 = document.createElement("h2");
    h2.textContent = "Напишите нам";
    widgetTitle.appendChild(h2);

    const widgetContent = document.createElement("textarea");
    widgetContent.classList.add("widget-content");

    const widgetButton = document.createElement("div");
    widgetButton.classList.add("widget-button");

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("type", "submit");
    btn.textContent = "Отправить";
    widgetButton.appendChild(btn);

    const btnWidgetClose = document.createElement("span");
    btnWidgetClose.classList.add("span-close");

    widget.appendChild(btnWidgetClose);
    widget.appendChild(widgetTitle);
    widget.appendChild(widgetContent);
    widget.appendChild(widgetButton);

    widgetWrap.insertBefore(widget, widgetWrap.firstChild);
  }

  addEventListeners() {
    const btnWidgetOpen = this.container.querySelector(".btn-widget-open");
    const widget = this.container.querySelector(".widget");

    btnWidgetOpen.addEventListener("click", () => {
      widget.classList.add("open-widget");
      btnWidgetOpen.classList.add("btn-widget-open-hidden");
    });

    const btnWidgetClose = this.container.querySelector(".span-close");

    btnWidgetClose.addEventListener("click", () => {
      widget.classList.remove("open-widget");
      widget.classList.add("close-widget");

      widget.addEventListener("animationend", () => {
        widget.classList.remove("close-widget");
      });

      btnWidgetOpen.classList.remove("btn-widget-open-hidden");
    });
  }
}

new Widget(document.querySelector("body"));

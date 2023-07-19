const tableElement = document.getElementById("table-element");
const headElement = document.getElementById("header");

async function getCheck() {
    const response = await fetch("https://sdkinc.github.io/fake-api/res/checks_export.json");
    const check = await response.json();
    const { Чеки } = check;
    Чеки.forEach(element => {
        const p = document.createElement("p");
        const { Номер, Дата, СуммаВКассу, Товары } = element;
        p.textContent = "Чек №" + Номер + " от " + Дата + " на сумму " + СуммаВКассу;
        headElement.append(p);
        Товары.forEach(element => {
            const { Наименование, Количество, ЦенаСНДС, СуммаСНДС } = element;
            const tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = Наименование;
            tr.append(td);
            td = document.createElement("td");
            td.textContent = Количество;
            tr.append(td);
            td = document.createElement("td");
            td.textContent = ЦенаСНДС;
            tr.append(td);
            td = document.createElement("td");
            td.textContent = СуммаСНДС;
            tr.append(td);
            tableElement.append(tr);
        });
    });
}

getCheck();
